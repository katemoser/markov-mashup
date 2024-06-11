import { ChangeEvent, FormEvent, useState } from "react";
import PoemInput from "./PoemInput";
import { ISeed } from "./interfaces";

type PoemSelectionFormProps = {
    seeds: ISeed[];
    handleSubmit: (seedIds:string[]) => void;
};

const INITIAL_FORM_DATA = {
    input1: "1",
    input2: "1"
};

function PoemSelectionForm({ seeds, handleSubmit }: PoemSelectionFormProps) {
    console.log("POEM SELECTION FORM, seeds=", seeds);

    const [formData, setFormData] = useState(INITIAL_FORM_DATA);

    console.log("FORM DATA:", formData);

    function handleChange(evt: React.FormEvent<HTMLSelectElement>){
        console.log("in form, evt:", evt)
        const {name, value} = evt.currentTarget;
        setFormData(curr =>({
            ...curr,
            [name]:value,
        }))
    }
    return (
        <div className="PoemSelectionForm" >
            {/* <h3> {seeds.map(s => s.id)}</h3> */}
            <form onSubmit={(evt) => {
                evt.preventDefault();
                handleSubmit([formData["input1"], formData["input2"]])}}>
                <PoemInput
                    options={seeds}
                    inputId="input1"
                    handleChange={handleChange}
                    selectedValue={formData["input1"]}/>
                +
                <PoemInput
                    options={seeds}
                    inputId="input2"
                    handleChange={handleChange}
                    selectedValue={formData["input2"]}/>

                <input type="submit" value="MASH IT UP" />
            </form>
        </div>
    );
}

export default PoemSelectionForm;