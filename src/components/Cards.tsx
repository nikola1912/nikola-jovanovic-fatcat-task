import { FC, MouseEventHandler } from 'react';

import clsx, { ClassValue } from 'clsx';

import { Button } from '@homework-task/components/Button';

interface Card {
    title: string;
    image: string;
    description: string;
    background: ClassValue;
    onClick: MouseEventHandler<HTMLButtonElement>;
    buttonText: string;
}

interface CardsProps {
    cards: Card[];
}

export const Cards: FC<CardsProps> = ({ cards }) => {
    return (
        <div className={clsx('flex', 'justify-center', 'items-center')}>
            <div className={clsx('grid', 'grid-cols-2', 'gap-8', 'w-8/12')}>
                {cards.map(
                    ({
                        title,
                        image,
                        description,
                        background,
                        onClick,
                        buttonText,
                    }) => (
                        <div
                            key={title}
                            className={clsx('rounded-md', 'p-8', background)}
                        >
                            <img src={image} alt="Icon" width="120" />
                            <div className="my-8">
                                <div
                                    className={clsx(
                                        'text-2xl',
                                        'font-bold',
                                        'mb-2'
                                    )}
                                >
                                    {title}
                                </div>
                                <div className={clsx('text-xl')}>
                                    {description}
                                </div>
                            </div>
                            <Button onClick={onClick}>{buttonText}</Button>
                        </div>
                    )
                )}
            </div>
        </div>
    );
};
