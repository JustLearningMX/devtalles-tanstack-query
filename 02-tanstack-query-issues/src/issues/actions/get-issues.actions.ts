import {sleep} from "../../helpers";
import {githubApi} from "../../api/github.api.ts";
import {GithubIssue, State} from "../../interfaces";

export const getIssues = async ( state: State, selectedLables: string[] ): Promise<GithubIssue[]> => {
    await sleep(1500);

    const params = new URLSearchParams(); //1. Crear objeto para manejar query params

    if( state !== State.All ) { // 2. Si el estado no es All, agregar el estado a los query params
        params.append('state', state);
    }

    if( selectedLables.length > 0 ) {
        params.append('labels', selectedLables.join(',')); //Si hay labels seleccionados, agregarlos a los query params
    }

    const { data } = await githubApi.get<GithubIssue[]>(
        '/issues',
        { params } // 3. Pasar los query params a la petición
    );

    return data;
}