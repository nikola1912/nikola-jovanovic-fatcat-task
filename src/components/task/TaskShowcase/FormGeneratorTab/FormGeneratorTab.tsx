import { TextArea } from '@homework-task/components/form/TextArea';
import { TextField } from '@homework-task/components/form/TextField';

import { useCreatePost } from './api';
import { PostFormInputs, PostSchema } from './schema';
import { CreateForm } from '../../CreateForm';

export const FormGeneratorTab = () => {
    return (
        <CreateForm<PostFormInputs>
            successMessage="Successfully created a post!"
            validationSchema={PostSchema}
            useMutation={useCreatePost}
            renderForm={({ register, errors }) => (
                <>
                    <TextField
                        required
                        fullWidth
                        id="title"
                        label="Title"
                        error={!!errors.title}
                        helperText={errors.title?.message}
                        {...register('title')}
                    />
                    <TextArea
                        required
                        fullWidth
                        rows={6}
                        id="body"
                        label="Body"
                        error={!!errors.body}
                        helperText={errors.body?.message}
                        {...register('body')}
                    />
                </>
            )}
        />
    );
};
