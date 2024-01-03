import React from "react";
import clsx from "clsx";
import './Button.scss';

export interface ButtonBaseProps extends Pick<React.ButtonHTMLAttributes<HTMLElement>,
    | 'title'
    | 'onClick'
    | 'id'
    | 'tabIndex'
    | 'form'
    | 'onMouseDown'
    | 'onMouseEnter'
    | 'onMouseLeave'
    | 'onKeyDown'
    | 'role'
    | 'aria-haspopup'
> {
    children?: React.ReactNode
    className?: string
    disabled?: boolean
    type?: 'primary' | 'secondary' | 'tertiary'
    status?: 'default' | 'success' | 'error'
    size?: 'xsmall' | 'small' | 'medium' | 'large'
    icon?: React.ReactElement | null
    to?: string
    fullWidth?: boolean
    /** If set clicking this button will open the page in a new tab. */
    targetBlank?: boolean
    sideIcon?: React.ReactElement | null
    loading?: boolean
    'data-attr'?: string
    'aria-label'?: string
    /** Whether to truncate the button's text if necessary */
    truncate?: boolean
}

export type SideAction = Pick<
    ButtonBaseProps,
    | 'onClick'
    | 'to'
    | 'disabled'
    | 'icon'
    | 'type'
    | 'data-attr'
    | 'aria-label'
    | 'status'
    | 'targetBlank'
> & {
    divider?: boolean
}

export interface ButtonWithoutSideActionProps extends ButtonBaseProps {
    sideIcon?: React.ReactElement | null
    sideAction?: null
}

export interface ButtonWithSideActionProps extends ButtonBaseProps {
    sideIcon?: null
    sideAction?: SideAction
}

export type ButtonProps = ButtonWithoutSideActionProps | ButtonWithSideActionProps
export const Button: React.FunctionComponent<ButtonBaseProps & React.RefAttributes<HTMLButtonElement>> =
    React.forwardRef(
        ({
             children,
             className,
             fullWidth,
             disabled,
             loading,
             type = 'tertiary',
             status = 'default',
             icon,
             sideIcon,
             size,
             to,
             targetBlank,
             onClick,
             truncate = false,
             ...buttonProps
         },
         ref): JSX.Element => {
        return (
            <button
                ref={ref as any}
                className={clsx(
                    'Button',
                    `Button--${type}`,
                    `Button--${size}`,
                    `Button--${status}`,
                    fullWidth && 'Button--full-width',
                    !children && 'Button--no-content',
                    !!icon && `Button--has-icon`,
                    !!sideIcon && `Button--has-side-icon`,
                    truncate && 'Button--truncate',
                    className
                )}
            >
                <span className='Button'>
                    {icon ? <span className="Button__icon">{icon}</span> : null}
                    {children ? <span className="Button__text">{children}</span> : null}
                    {sideIcon ? <span className="Button__sideIcon">{sideIcon}</span> : null}
                </span>
            </button>
        )
    })