import {useQuery} from "@tanstack/react-query";
import {getIssues} from "../actions";
import {State} from "../../interfaces";

interface UseIssuesProps {
    state: State;
    selectedLabels: string[];
}

export const useIssues = ({ state, selectedLabels }: UseIssuesProps) => {

    const issuesQuery = useQuery({
        queryKey: ['issues', { state, selectedLabels }], // Como objeto para evitar el orden de los argumentos
        queryFn: () => getIssues( state, selectedLabels ),
        staleTime: 1000 * 60, // 1 minuto
    });

    return { issuesQuery };

}