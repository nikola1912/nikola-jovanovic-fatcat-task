import { useQuery } from '@tanstack/react-query';

import { UsersSchema } from './schema';

const fetchUsers = () =>
    fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) => response.json())
        .then((data) => UsersSchema.parse(data));

export const useFetchUsers = () => {
    return useQuery({ queryKey: ['users'], queryFn: fetchUsers });
};
