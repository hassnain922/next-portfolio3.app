import { MouseEventHandler } from "react";

export interface CustomButtonProps {
    title: string;
    containerStyles?: string;
    handleClick:
    MouseEventHandler<HTMLButtonElement>;
}

export interface rowsProps{
    name: string;
    email: string;
    message: string;
}