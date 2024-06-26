import { FC, useState } from 'react';

import { clsx } from 'clsx';

import { FormGeneratorTab } from './FormGeneratorTab';
import { PageGeneratorTab } from './PageGeneratorTab';
import { List } from '../List';

const tasks = [
    { id: 1, title: '1. User List', content: <List /> },
    { id: 2, title: '2. Form Generator', content: <FormGeneratorTab /> },
    { id: 3, title: '3. Page Generator', content: <PageGeneratorTab /> },
];

export const TaskShowcase: FC = () => {
    const [activeTab, setActiveTab] = useState(1);

    return (
        <div className="container mx-auto mt-6">
            <h1 className="text-2xl font-bold mb-4 text-center">
                Task Showcase
            </h1>
            <div className="flex justify-center mb-4">
                {tasks.map((task) => (
                    <button
                        key={task.id}
                        className={clsx(
                            'px-4 py-2 mx-1 rounded-lg text-gray80',
                            { 'bg-cream': activeTab === task.id },
                            { 'bg-gray10': activeTab !== task.id }
                        )}
                        onClick={() => setActiveTab(task.id)}
                    >
                        {task.title}
                    </button>
                ))}
            </div>
            <div className="py-4">
                {tasks.map((task) => (
                    <div
                        key={task.id}
                        className={clsx({ hidden: activeTab !== task.id })}
                    >
                        {task.content}
                    </div>
                ))}
            </div>
        </div>
    );
};
