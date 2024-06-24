import { Landing } from '@homework-task/components/landing/Landing';
import {
    PageGenerator,
    PageSection,
} from '@homework-task/components/task/PageGenerator';

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

function App() {
    return (
        <main>
            <Landing />
            <PageGenerator data={data} />
        </main>
    );
}

export default App;
