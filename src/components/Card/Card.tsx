import './Card.scss';
import {Button, ButtonBaseProps} from "../Button/Button.tsx";
import {IoPlay} from "react-icons/io5";
import clsx from "clsx";

type CardProps = Pick<ButtonBaseProps, 'icon'> &{
    className?: string;
    title?: string;
    focused?: boolean;
    image?: string;
    type?: string;
    display?: 'row' | 'column';



}
export function Card({type, title, className, image, display}: CardProps) {
    return (
        <div className={clsx(
            'Card',
            `Card--${display}`,
            className,
            `Card--${type}`
        )}>
            <img src={image} alt="image" className='Card__Image'/>
            <p className='Card__Content'>
                {title}
                <span>{type}</span>
            </p>
            <Button className="Card__Button">{<IoPlay/>}</Button>
        </div>
    );
}