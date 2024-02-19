import { useState } from "react";
import MashupDisplay from "./MashupDisplay";
import PoemSelectionForm from "./PoemSelectionForm";
import MashupApi from "./api";
import { ISeed } from "./interfaces";

interface ISeedState {
    data: ISeed[],
    isLoading: boolean
}

function MashupPage() {

    const [seeds, setSeeds] = useState<ISeedState>({
        data:[],
        isLoading: true
    });

    async function getSeedIds(){
        const seedsData = await MashupApi.getSeeds();
        //TODO: Add callback function here....
        setSeeds({
            data: seedsData,
            isLoading: false
        });
    }

    if (seeds.isLoading === true) {
        getSeedIds()
        return "LOADING"
    }

    return(
        <div className="MashupPage">
        <h2> Mashup Page</h2>

        <PoemSelectionForm seeds={seeds.data}/>
        <MashupDisplay />
        </div>
    )
}

export default MashupPage