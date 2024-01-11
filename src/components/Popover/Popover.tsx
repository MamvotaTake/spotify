import './Popover.scss'

import {
    arrow,
    autoUpdate,
    flip,
    FloatingPortal,
    Middleware,
    Placement,
    shift,
    size,
    useFloating,
    UseFloatingReturn,
    useMergeRefs,
} from '@floating-ui/react'
import clsx from 'clsx'

import React, {
    forwardRef,
    MouseEventHandler,
    ReactElement,
    useContext,
    useEffect,
    useLayoutEffect,
    useRef,
    useState
} from 'react'
import { CSSTransition } from 'react-transition-group'
import {useFloatingContainerContext} from "../../hooks";

export interface PopoverProps {
    ref?: React.MutableRefObject<HTMLDivElement | null> | React.Ref<HTMLDivElement> | null
    visible: boolean
    onClickOutside?: (event: Event) => void
    onClickInside?: MouseEventHandler<HTMLDivElement>
    onMouseEnterInside?: MouseEventHandler<HTMLDivElement>
    onMouseLeaveInside?: MouseEventHandler<HTMLDivElement>
    /** Popover trigger element. If you pass one <Component/> child, it will get the `ref` prop automatically. */
    children?: React.ReactNode
    /** External reference element not passed as a direct child */
    referenceElement?: HTMLElement | null
    /** Content of the overlay. */
    overlay: React.ReactNode | React.ReactNode[]
    /** Where the popover should start relative to children. */
    placement?: Placement
    /** Where the popover should start relative to children if there's insufficient space for original placement. */
    fallbackPlacements?: Placement[]
    /** Whether the popover is actionable rather than just informative - actionable means a colored border. */
    actionable?: boolean
    /** Whether the popover's width should be synced with the children's width. */
    sameWidth?: boolean
    maxContentWidth?: boolean
    className?: string
    middleware?: Middleware[]
    /** Any other refs that needs to be taken into account for handling outside clicks e.g. other nested popovers.
     * Works also with strings, matching classnames or ids, for antd legacy components that don't support refs
     * **/
    additionalRefs?: (React.MutableRefObject<HTMLDivElement | null> | string)[]
    referenceRef?: UseFloatingReturn['refs']['reference']
    floatingRef?: UseFloatingReturn['refs']['floating']
    style?: React.CSSProperties
    /**
     * Whether the parent popover should be closed as well on click. Useful for menus.
     *  @default false
     */
    closeParentPopoverOnClickInside?: boolean
    /** Whether to show an arrow pointing to a reference element */
    showArrow?: boolean
}

/** Context for the popover overlay: parent popover visibility and parent popover level. */
export const PopoverOverlayContext = React.createContext<[boolean, number]>([true, -1])
/** Context for the popover reference element (if it's rendered as a Popover child and not externally). */
export const PopoverReferenceContext = React.createContext<[boolean, Placement] | null>(null)

let nestedPopoverReceivedClick = false

/** This is a custom popover control that uses `floating-ui` to position DOM nodes.
 *
 * Often used with buttons for various menu. If this is your intention, use `LemonButtonWithDropdown`.
 */
export const Popover = forwardRef<HTMLDivElement, PopoverProps>(function PopoverInternal(
    {
        children,
        referenceElement,
        overlay,
        visible,
        onClickOutside,
        onClickInside,
        onMouseEnterInside,
        onMouseLeaveInside,
        placement = 'bottom-start',
        fallbackPlacements = ['bottom-start', 'bottom-end', 'top-start', 'top-end'],
        className,
        actionable = false,
        middleware,
        sameWidth = false,
        maxContentWidth = false,
        additionalRefs = [],
        closeParentPopoverOnClickInside = false,
        referenceRef: extraReferenceRef,
        floatingRef: extraFloatingRef,
        style,
        showArrow = false,
    },
    contentRef
): JSX.Element  {
    const [parentPopoverVisible, parentPopoverLevel] = useContext(PopoverOverlayContext)
    const currentPopoverLevel = parentPopoverLevel + 1

    if (!parentPopoverVisible) {

        visible = false
    }

    const arrowRef = useRef<HTMLDivElement>(null)

    const {
        x,
        y,
        // @ts-ignore
        reference,
        refs: { reference: referenceRef, floating: floatingRef },
        strategy,
        placement: effectivePlacement,
        update,
        middlewareData,
    } = useFloating<HTMLElement>({
        open: visible,
        placement,
        strategy: 'fixed',
        middleware: [
            ...(fallbackPlacements ? [flip({ fallbackPlacements, fallbackStrategy: 'initialPlacement' })] : []),
            shift(),
            size({
                padding: 4,
                apply({ availableWidth, availableHeight, rects, elements: { floating } }) {
                    floating.style.maxHeight = `${availableHeight}px`
                    floating.style.maxWidth = `${availableWidth}px`
                    floating.style.width = sameWidth ? `${rects.reference.width}px` : 'initial'
                },
            }),
            ...(showArrow ? [arrow({ element: arrowRef, padding: 8 })] : []),
            ...(middleware ?? []),
        ],
    })

    const [floatingElement, setFloatingElement] = useState<HTMLElement | null>(null)
    const mergedReferenceRef = useMergeRefs([
        referenceRef,
        extraReferenceRef || null,
        (children as any)?.ref,
    ]) as React.RefCallback<HTMLElement>

    const arrowStyle = middlewareData.arrow
        ? {
            left: `${middlewareData.arrow.x}px`,
            top: `${middlewareData.arrow.y}px`,
        }
        : {}

    useLayoutEffect(() => {
        if (referenceElement) {
            reference(referenceElement)
        }
    }, [referenceElement])





    useEffect(() => {
        if (visible && referenceRef?.current && floatingElement) {
            return autoUpdate(referenceRef.current, floatingElement, update)
        }
    }, [visible, referenceRef?.current, floatingElement, ...additionalRefs])

    const floatingContainer = useFloatingContainerContext()?.current



    const clonedChildren = children ? React.cloneElement(children as ReactElement, { ref: mergedReferenceRef }) : null

    const isAttached = clonedChildren || referenceElement
    const top = isAttached ? y ?? 0 : undefined
    const left = isAttached ? x ?? 0 : undefined

    return (
        <>
            {clonedChildren && (
                <PopoverReferenceContext.Provider value={[visible, effectivePlacement]}>
                    {clonedChildren}
                </PopoverReferenceContext.Provider>
            )}
            <FloatingPortal root={floatingContainer}>
                <CSSTransition in={visible} timeout={50} classNames="Popover-" appear mountOnEnter unmountOnExit>
                    <PopoverOverlayContext.Provider value={[visible, currentPopoverLevel]}>
                        <div
                            className={clsx(
                                'Popover',
                                actionable && 'Popover--actionable',
                                maxContentWidth && 'Popover--max-content-width',
                                !isAttached && 'Popover--top-centered',
                                showArrow && 'Popover--with-arrow',
                                className
                            )}
                            data-placement={effectivePlacement}
                            ref={(el) => {
                                setFloatingElement(el)
                                floatingRef.current = el
                                if (extraFloatingRef) {
                                    extraFloatingRef.current = el
                                }
                            }}
                            // eslint-disable-next-line react/forbid-dom-props
                            style={{
                                display: middlewareData.hide?.referenceHidden ? 'none' : undefined,
                                position: strategy,
                                top,
                                left,
                                ...style,
                            }}

                            onMouseEnter={onMouseEnterInside}
                            onMouseLeave={onMouseLeaveInside}
                            aria-level={currentPopoverLevel}
                        >
                            <div className="Popover__box">
                                {showArrow && isAttached && (
                                    // Arrow is outside of .Popover__content to avoid affecting :nth-child for content
                                    <div
                                        ref={arrowRef}
                                        className="Popover__arrow"
                                        // eslint-disable-next-line react/forbid-dom-props
                                        style={arrowStyle}
                                    />
                                )}
                                <div className="Popover__content" ref={contentRef}>
                                    {overlay}
                                </div>
                            </div>
                        </div>
                    </PopoverOverlayContext.Provider>
                </CSSTransition>
            </FloatingPortal>
        </>
    )
})