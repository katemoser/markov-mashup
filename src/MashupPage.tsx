import { FormEvent, useState } from "react";
import MashupDisplay from "./MashupDisplay";
import PoemSelectionForm from "./PoemSelectionForm";
import MashupApi from "./api";
import { ISeed } from "./interfaces";

interface ISeedState {
    data: ISeed[],
    isLoading: boolean;
}

interface IPoemState {
    data: string,
    isLoading: boolean;
}

function MashupPage({ restart }: { restart: () => void; }) {

    const [seeds, setSeeds] = useState<ISeedState>({
        data: [],
        isLoading: true
    });

    const [poem, setPoem] = useState<IPoemState>({
        data: "",
        isLoading: false
    });

    async function getSeedIds() {
        const seedsData = await MashupApi.getSeeds();
        //TODO: Add callback function here....
        setSeeds({
            data: seedsData,
            isLoading: false
        });
    }

    async function mashupPoem(
        seedIds: string[],
        secondPoemAmount: number) {
        // setPoem({
        //     data: "",
        //     isLoading: true
        // })

        const ratio = [10-secondPoemAmount, secondPoemAmount]
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
            <h2> Mashup Page</h2>

            {
                poem.data
                    ?
                    <>
                        <MashupDisplay poem={poem.data} />
                        <button onClick={restart}> Try again! </button>
                    </>
                    :
                    <PoemSelectionForm seeds={seeds.data} handleSubmit={mashupPoem} />
            }
        </div>
    );
}

export default MashupPage;