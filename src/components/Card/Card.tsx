import './Card.scss';
import React from "react";
import {ButtonBaseProps} from "../Button/Button.tsx";

type CardProps = Pick<ButtonBaseProps, 'icon'> &{
    children?: React.ReactNode;
    className?: string;
    title?: string;
    focused?: boolean;


}
export function Card({children, className, title, focused=false}: CardProps) {
    return (
        <>Card</>
    );
}