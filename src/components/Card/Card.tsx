import './Card.scss';
import {Button, ButtonBaseProps} from "../Button/Button.tsx";
import {IoPlay} from "react-icons/io5";

type CardProps = Pick<ButtonBaseProps, 'icon'> &{
    className?: string;
    title?: string;
    focused?: boolean;
    image?: string;
    type?: string;


}
export function Card({type, title, focused=false, image}: CardProps) {
    return (
        <div className='Card'>
            <img src={image} alt="image" className='Card__Image'/>
            <p className='Card__Content'>
                {title}
                <span>{type}</span>
            </p>
            <Button className="Card__Button">{<IoPlay/>}</Button>
        </div>
    );
}