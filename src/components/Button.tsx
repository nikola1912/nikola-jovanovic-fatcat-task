import { FC, MouseEventHandler, ReactNode } from 'react';

import { ClassValue, clsx } from 'clsx';

interface ButtonProps {
    children?: ReactNode;
    onClick?: MouseEventHandler<HTMLButtonElement>;
    className?: ClassValue;
}

export const Button: FC<ButtonProps> = ({ children, onClick, className }) => {
    return (
        <button
            className={clsx(
                'rounded-lg',
                'px-4',
                'py-2',
                'bg-black',
                'text-white',
                className
            )}
            onClick={onClick}
        >
            {children}
        </button>
    );
};
