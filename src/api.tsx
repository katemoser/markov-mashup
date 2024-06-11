const MARKOV_API_BASE_URL = "http://127.0.0.1:5001";
import { ISeed } from "./interfaces";

class MashupApi {

    /** Get list of seeds from API */
    static async getSeeds(): Promise<ISeed[]> {
        const response = await fetch(`${MARKOV_API_BASE_URL}/seeds`);
        const seedData: { seeds: ISeed[]; } = await response.json();
        return seedData.seeds;
    }

    /** Mash up two poems */
    static async mashUp(ids: string[]): Promise<string> {
        const response = await fetch(
            `${MARKOV_API_BASE_URL}/mashups`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ seed_ids: ids })
            });
        const data = await response.json()
        return data.mashup;
    }
}

export default MashupApi;