import { Btn } from './styles'
import React from "react";

interface ButtonProps {
    className?: string
    color: "purple" | "pink"
}

const Button: React.FC<ButtonProps> = ({ className, color, children }) => {
    return (
        <Btn className={color === "purple" ? "purple" : "pink"} >
            {children}
        </Btn>
    )
}

export default Button