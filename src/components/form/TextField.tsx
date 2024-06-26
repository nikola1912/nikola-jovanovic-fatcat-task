import { InputHTMLAttributes, forwardRef } from 'react';
import clsx from 'clsx';

interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
    required?: boolean;
    fullWidth?: boolean;
    id: string;
    label: string;
    error?: boolean;
    helperText?: string;
}

export const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
    (
        {
            required = false,
            fullWidth = false,
            id,
            label,
            error = false,
            helperText,
            ...props
        },
        ref
    ) => {
        return (
            <div className="mb-4">
                <label
                    htmlFor={id}
                    className={clsx('text-sm font-medium block', {
                        'text-red': error,
                    })}
                >
                    {label} {required && <span className="text-red">*</span>}
                </label>
                <input
                    id={id}
                    ref={ref}
                    className={clsx('mt-1 p-1 rounded-md shadow-sm text-sm', {
                        'border-red border': error,
                        'border-gray60': !error,
                        'w-full': fullWidth,
                    })}
                    {...props}
                />
                {helperText && (
                    <p
                        className={clsx('mt-2 text-sm', {
                            'text-red': error,
                            'text-gray60': !error,
                        })}
                    >
                        {helperText}
                    </p>
                )}
            </div>
        );
    }
);
