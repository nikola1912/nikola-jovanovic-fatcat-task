import clsx from 'clsx';

import { useFetchUsers } from './api';

export const List = () => {
    const users = useFetchUsers();

    if (users.isLoading) {
        return <p>Loading...</p>;
    }

    if (users.error) {
        console.error(users.error.message);
        return <p>Something went wrong</p>;
    }

    return (
        <div className={clsx('grid', 'grid-cols-3', 'gap-4')}>
            {users.data?.map((user) => (
                <div
                    key={user.id}
                    className={clsx(
                        'bg-cream',
                        'shadow-sm',
                        'rounded-lg',
                        'p-4'
                    )}
                >
                    <h2 className={clsx('text-xl', 'font-semibold', 'mb-2')}>
                        {user.name}
                    </h2>
                    <p className={clsx('mb-1')}>Username: {user.username}</p>
                    <p className={clsx('mb-1')}>Email: {user.email}</p>
                    <p>Phone: {user.phone}</p>
                </div>
            ))}
        </div>
    );
};
