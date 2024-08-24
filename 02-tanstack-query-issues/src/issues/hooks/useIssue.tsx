import {useQuery} from "@tanstack/react-query";
import {getIssue, getIssueComments} from "../actions";

export const useIssue = ( issueNumber: number ) => {

    const issueQuery = useQuery({
        queryKey: ['issues', issueNumber], // url: /issues/${ issueNumber }
        queryFn: () => getIssue(issueNumber),
        staleTime: 1000 * 60, // 1 minuto
    });

    const issueCommentsQuery = useQuery({
        queryKey: ['comments', issueNumber, 'comments'], // url: /issues/${ issueNumber }/comments
        queryFn: () => getIssueComments(issueNumber),
        staleTime: 1000 * 60,
    });

    return { issueQuery, issueCommentsQuery };

}