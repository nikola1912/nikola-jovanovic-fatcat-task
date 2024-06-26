import { z } from 'zod';

export const PostSchema = z.object({
    title: z
        .string()
        .min(1, 'Title is required')
        .max(20, { message: 'Title is too long' }),
    body: z
        .string()
        .min(1, 'Body is required')
        .max(150, { message: 'Body is too long' }),
});

export type PostFormInputs = z.infer<typeof PostSchema>;
