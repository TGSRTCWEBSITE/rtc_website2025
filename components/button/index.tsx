import React from 'react';
import Button from '@mui/material/Button';

interface ButtonProps {
    text: string;
    className?: string;
    href?:string;
    textClassName?: string;
}

const CommonButton: React.FC<ButtonProps> = ({ text, className,href,textClassName,...props }) => {
    return (
        <Button className={className} {...props}>
            <a href={href} className={textClassName} target='_blank'>{text}</a>
        </Button>
    );
};

export default CommonButton;
