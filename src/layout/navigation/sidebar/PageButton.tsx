import {Button, ButtonBaseProps} from "../../../components/Button/Button.tsx";
import './Sidebar.scss'

export interface PageButtonProps extends Pick<ButtonBaseProps, 'icon' | 'onClick' | 'to' | 'sideIcon'>{
    title?: string;
    highlight?: 'alpha' | 'beta' | 'new';
}
export function PageButton({title, ...buttonProps}: PageButtonProps): JSX.Element {
    return (
        <li className='Sidebar__Link'>
            <Button
                fullWidth
                sideIcon={buttonProps.sideIcon}
                {...buttonProps}
            >
                <span className="Sidebar__Link-title">{title}</span>
            </Button>
        </li>
    );
}