import {githubApi} from "../../api/github.api.ts";
import {GithubIssue} from "../../interfaces";

export const getIssueComments = async ( issueNumber: number ): Promise<GithubIssue[]> => {

    const { data } = await githubApi.get<GithubIssue[]>(`/issues/${ issueNumber }/comments`);

    return data;
}