import { FC, ReactNode } from 'react';

import { clsx } from 'clsx';

interface SubmitButtonProps {
    isLoading: boolean;
    children?: ReactNode;
}

export const SubmitButton: FC<SubmitButtonProps> = ({
    isLoading,
    children,
}) => {
    return (
        <button
            type="submit"
            disabled={isLoading}
            className={clsx(
                'px-4',
                'py-2',
                'rounded-lg',
                'bg-black',
                'text-white',
                'inline-flex',
                'items-center',
                'justify-center',
                'min-w-[92px]',
                'min-h-[40px]',
                'cursor-pointer'
            )}
        >
            {isLoading ? (
                <svg
                    className="animate-spin h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                >
                    <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                    />
                    <path
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                </svg>
            ) : (
                children
            )}
        </button>
    );
};
