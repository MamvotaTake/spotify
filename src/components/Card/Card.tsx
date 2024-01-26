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
    fullWidth?: boolean;
    imageSize?: 'small' | 'medium' | 'big'
    playButtonPosition?: 'top' | 'bottom' | 'left' | 'right';



}
export function Card({type, title, className, image, display, fullWidth, imageSize="medium", playButtonPosition='right'}: CardProps) {
    return (
        <div className={clsx(
            'Card',
            `Card--${display}`,
            `Card--${type}`,
            fullWidth && 'Card--full-width',
            className,

        )}>
            <img src={image} alt="image" className={`Card__Image Card__Image--${imageSize}`}/>
            <p className='Card__Content'>
                {title}
                <span>{type}</span>
            </p>
            <Button className={`Card__Button Card__Button-${playButtonPosition}`} >{<IoPlay/>}</Button>
        </div>
    );
}