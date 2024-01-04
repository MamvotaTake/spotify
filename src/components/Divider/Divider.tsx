import clsx from 'clsx'
import './Divider.scss'


type DividerProps = {
    thick?: boolean;
    className?: string;
    vertical?: boolean;
    dashed?: boolean;
}
export function Divider({thick=false, className, vertical=false, dashed=false}: DividerProps):JSX.Element {
    return (
        <div
            className={clsx(
                'Divider',
                vertical && 'Divider--vertical',
                thick && 'Divider--thick',
                dashed && 'Divider--dashed',
                // If no className is provided we set some sensible default margins
                !className && (vertical ? 'm-2' : 'my-2'),
                className
            )}
            role='separator'
        >

        </div>
    );
}