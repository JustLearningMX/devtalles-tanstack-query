import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {ReactQueryDevtools} from "@tanstack/react-query-devtools";

const queryClient = new QueryClient();

const TanstackQueryClientProvider = ({children}) => {
    return (
        <QueryClientProvider client={ queryClient }>
            { children }
            <ReactQueryDevtools/>
        </QueryClientProvider>
    )
}

export default TanstackQueryClientProvider