import { useMutation } from '@tanstack/react-query';
import { PostFormInputs } from './schema';

interface CreatePostResponse {
    id: number;
}

const createPost = (data: PostFormInputs) =>
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            userId: 1,
            title: data.title,
            body: data.body,
        }),
    }).then((response) => response.json());

export const useCreatePost = () => {
    return useMutation<CreatePostResponse, Error, PostFormInputs>({
        mutationFn: createPost,
        onSuccess: (data) => {
            console.log(data);
        },
    });
};
