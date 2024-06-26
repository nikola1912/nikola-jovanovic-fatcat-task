import { ReactNode } from 'react';

import clsx from 'clsx';
import { ZodSchema } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { UseMutationResult } from '@tanstack/react-query';
import {
    FieldErrors,
    FieldValues,
    SubmitHandler,
    UseFormRegister,
    useForm,
} from 'react-hook-form';

import { SubmitButton } from '@homework-task/components/form/SubmitButton';

interface CreateFormProps<T extends FieldValues> {
    useMutation: () => UseMutationResult<any, Error, T, unknown>;
    validationSchema: ZodSchema;
    successMessage: string;
    // TODO: defaultValues
    renderForm: ({
        register,
        errors,
    }: {
        register: UseFormRegister<T>;
        errors: FieldErrors<T>;
    }) => ReactNode;
}

export const CreateForm = <T extends FieldValues>({
    renderForm,
    validationSchema,
    useMutation,
    successMessage,
}: CreateFormProps<T>) => {
    const submitMutation = useMutation();

    const form = useForm<T>({
        resolver: zodResolver(validationSchema),
    });

    const onSubmit: SubmitHandler<T> = (data) => {
        submitMutation.mutate(data, {
            onSuccess: () => {
                form.reset();
            },
            onError: (error) => {
                console.error(error);
            },
        });
    };

    return (
        <form
            onSubmit={form.handleSubmit(onSubmit)}
            className={clsx(
                'container',
                'mx-auto',
                'p-4',
                'w-[768px]',
                'bg-cream',
                'rounded-lg'
            )}
        >
            {renderForm({
                register: form.register,
                errors: form.formState.errors,
            })}
            <div className="flex items-center justify-between">
                <span>
                    {submitMutation.isSuccess && (
                        <p className="text-mainGreen">{successMessage}</p>
                    )}
                    {submitMutation.isError && (
                        <p className="text-red">
                            {submitMutation.error.message}
                        </p>
                    )}
                </span>
                <SubmitButton isLoading={submitMutation.isPending}>
                    Submit
                </SubmitButton>
            </div>
        </form>
    );
};