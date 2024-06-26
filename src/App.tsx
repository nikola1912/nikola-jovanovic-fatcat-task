import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { TaskShowcase } from '@homework-task/components/task/TaskShowcase';

import './styles.css';

const queryClient = new QueryClient();

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <main>
                <TaskShowcase />
            </main>
        </QueryClientProvider>
    );
}

export default App;
