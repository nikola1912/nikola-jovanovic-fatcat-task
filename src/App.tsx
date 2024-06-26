import { z } from 'zod';
import {
    QueryClient,
    QueryClientProvider,
    useMutation,
} from '@tanstack/react-query';

import { Landing } from '@homework-task/components/landing/Landing';
import {
    PageGenerator,
    PageSection,
} from '@homework-task/components/task/PageGenerator';
import { List } from '@homework-task/components/task/List';
import { CreateForm } from '@homework-task/components/task/CreateForm';
import { TextField } from '@homework-task/components/form/TextField';
import { TextArea } from '@homework-task/components/form/TextArea';

import './styles.css';

const data: PageSection[] = [
    {
        type: 'layoutSection',
        props: { background: 'bg-white' },
        components: [
            {
                type: 'componentHero',
                props: {
                    title: 'Page Generator Preview',
                    image: '/media/hero.png',
                },
            },
        ],
    },
    {
        type: 'layoutSection',
        props: { background: 'bg-cream' },
        components: [
            {
                type: 'componentPanelShowcase',
                props: {
                    items: [
                        {
                            title: 'Item 1',
                            description: 'Description 1',
                            image: 'media/panel/shape1.svg',
                        },
                        {
                            title: 'Item 2',
                            description: 'Description 2',
                            image: 'media/panel/shape2.svg',
                        },
                        {
                            title: 'Item 3',
                            description: 'Description 3',
                            image: 'media/panel/shape3.svg',
                        },
                    ],
                },
            },
        ],
    },
    {
        type: 'layoutSection',
        props: { background: 'bg-white' },
        components: [
            {
                type: 'componentTrustBar',
                props: {
                    images: [
                        'media/cats/cat_1.png',
                        'media/cats/cat_2.png',
                        'media/cats/cat_3.png',
                        'media/cats/cat_4.png',
                        'media/cats/cat_5.png',
                        'media/cats/cat_6.png',
                        'media/cats/cat_7.png',
                        'media/cats/cat_8.png',
                        'media/cats/cat_9.png',
                        'media/cats/cat_10.png',
                    ],
                },
            },
        ],
    },
    {
        type: 'layoutSection',
        props: { background: 'bg-cream' },
        components: [
            {
                type: 'componentCards',
                props: {
                    cards: [
                        {
                            title: 'Card 1',
                            description: 'Card Description 1',
                            buttonText: 'Click Me',
                            image: 'media/cards/shape1.svg',
                            background: 'bg-white',
                            onClick: () => {
                                alert('Clicked');
                            },
                        },
                        {
                            title: 'Card 2',
                            description: 'Card Description 2',
                            buttonText: 'Click Me',
                            image: 'media/cards/shape2.svg',
                            background: 'bg-white',
                            onClick: () => {
                                alert('Clicked');
                            },
                        },
                    ],
                },
            },
        ],
    },
    {
        type: 'layoutSection',
        props: { background: 'bg-white' },
        components: [
            {
                type: 'componentItemsShowcase',
                props: {
                    items: [
                        { title: 'Item 1', description: 'Description 1' },
                        { title: 'Item 2', description: 'Description 2' },
                    ],
                },
            },
        ],
    },
];

const queryClient = new QueryClient();

const PostSchema = z.object({
    title: z
        .string()
        .min(1, 'Title is required')
        .max(20, { message: 'Title is too long' }),
    body: z
        .string()
        .min(1, 'Body is required')
        .max(150, { message: 'Body is too long' }),
});

type PostFormInputs = z.infer<typeof PostSchema>;

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

const useCreatePost = () => {
    return useMutation<CreatePostResponse, Error, PostFormInputs>({
        mutationFn: createPost,
        onSuccess: (data) => {
            console.log(data);
        },
    });
};

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <main>
                <Landing />
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
                {/* <List /> */}
                {/*<PageGenerator data={data} /> */}
            </main>
        </QueryClientProvider>
    );
}

export default App;
