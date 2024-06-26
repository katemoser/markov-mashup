import { useState } from "react";
import MashupDisplay from "./MashupDisplay";
import PoemSelectionForm from "./PoemSelectionForm";
import MashupApi from "./api";
import { ISeed, IMashup } from "./interfaces";

interface ISeedState {
    data: ISeed[],
    isLoading: boolean;
}

interface IPoemState {
    data: IMashup,
    isLoading: boolean;
}

function MashupPage({ restart }: { restart: () => void; }) {

    const [seeds, setSeeds] = useState<ISeedState>({
        data: [],
        isLoading: true
    });

    const [poem, setPoem] = useState<IPoemState>({
        data: { mashup: "", seeds: [] },
        isLoading: false
    });

    async function getSeedIds() {
        const seedsData = await MashupApi.getSeeds();
        //TODO: Add callback function here....
        console.log("SEed data from API:", seedsData);
        setSeeds({
            data: seedsData,
            isLoading: false
        });
    }

    async function mashupPoem(
        seedIds: string[],
        secondPoemAmount: number) {

        const ratio = [10 - secondPoemAmount, secondPoemAmount];
        const mashup = await MashupApi.mashUp(seedIds, ratio);

        setPoem({
            data: mashup,
            isLoading: false
        });
    }

    if (seeds.isLoading === true) {
        getSeedIds();
        return "LOADING";
    }

    return (
        <div className="MashupPage">
            {
                poem.data.mashup
                    ?
                    <MashupDisplay poem={poem.data} restart={restart} />
                    :
                    <PoemSelectionForm seeds={seeds.data} handleSubmit={mashupPoem} />
            }
        </div>
    );
}

export default MashupPage;