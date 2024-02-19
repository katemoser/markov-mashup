const MARKOV_API_BASE_URL = "http://127.0.0.1:5001"
import {ISeed} from "./interfaces"

// moved to interfaces
// interface ISeed {
//     author: string,
//     id: number,
//     text: string,
//     title: string
//     // TODO: add other fields once needed -- poem etc
// }



class MashupApi {

    static async getSeeds() : Promise<ISeed[]>{
        const response = await fetch(`${MARKOV_API_BASE_URL}/seeds`);
        const seedData :{seeds: ISeed[]} = await response.json();
        return seedData.seeds;
    }
}

export default MashupApi;