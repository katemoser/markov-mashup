import { useState } from "react";
import PoemInput from "./PoemInput";
import { ISeed } from "./interfaces";
import { Slider } from "@mui/material";

type PoemSelectionFormProps = {
    seeds: ISeed[];
    handleSubmit: (seedIds: string[], secondPoemAmount: number) => void;
};

const INITIAL_FORM_DATA = {
    input1: "1",
    input2: "1",
    secondPoemAmount: 5
};

/** Form to select two poems to be mashed up*/
function PoemSelectionForm({ seeds, handleSubmit }: PoemSelectionFormProps) {

    const [formData, setFormData] = useState(INITIAL_FORM_DATA);
    console.log("form data:", formData)

    function handleChange(evt: React.BaseSyntheticEvent | Event) {
        console.log("in form, evt:", evt);
        const { name, value } = evt.target;
        setFormData(curr => ({
            ...curr,
            [name]: value,
        }));
    }

    return (
        <div className="PoemSelectionForm" >
            {/* <h3> {seeds.map(s => s.id)}</h3> */}
            <form onSubmit={(evt) => {
                evt.preventDefault();
                const seedIds = [formData["input1"], formData["input2"]]
                handleSubmit(seedIds, formData.secondPoemAmount);
            }}>
                <PoemInput
                    options={seeds}
                    inputId="input1"
                    handleChange={handleChange}
                    selectedValue={formData["input1"]} />

                <Slider
                    name="secondPoemAmount"
                    onChange={handleChange}
                    value={formData.secondPoemAmount}
                    valueLabelDisplay="off"
                    shiftStep={1}
                    step={1}
                    min={1}
                    max={9}
                />

                <PoemInput
                    options={seeds}
                    inputId="input2"
                    handleChange={handleChange}
                    selectedValue={formData["input2"]} />

                <input type="submit" value="MASH IT UP" />
            </form>
        </div>
    );
}

export default PoemSelectionForm;