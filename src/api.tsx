const MARKOV_API_BASE_URL = import.meta.env.VITE_MARKOV_API_BASE_URL;
import { ISeed } from "./interfaces";

class MashupApi {

    /** Get list of seeds from API */
    static async getSeeds(): Promise<ISeed[]> {
        const response = await fetch(`${MARKOV_API_BASE_URL}/seeds`);
        const seedData: { seeds: ISeed[]; } = await response.json();
        return seedData.seeds;
    }

    /** Mash up two poems */
    static async mashUp(
        ids: string[],
        ratio: number[]=[1,1]): Promise<{mashup:string, seeds:ISeed[]}> {
        const response = await fetch(
            `${MARKOV_API_BASE_URL}/mashups`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    seed_ids: ids,
                    ratio: ratio
                })
            });
        const data = await response.json();
        console.log("data from api:", data)
        return data;
    }
}

export default MashupApi;