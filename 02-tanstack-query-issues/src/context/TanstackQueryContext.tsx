import {QueryClient, QueryClientProvider} from "@tanstack/react-query";

const queryClient = new QueryClient(
    {
        defaultOptions: {
            queries: {
                retry: false,
            }
        }
    }
);

export const TanstackQueryProvider = ({ children }) => {
    return (
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
    );
}