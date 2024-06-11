import { useState } from "react";
import { ISeed } from "./interfaces";


function PoemInput({options, inputId, handleChange, selectedValue}:{
    options:ISeed[],
    inputId: string,
    handleChange: (evt: React.FormEvent<HTMLSelectElement>) => void,
    selectedValue: string
}) {

    // const [selectedValue, setSelectedValue] = useState<number | undefined>()

    // function handleChange(event: React.ChangeEvent<HTMLSelectElement>){
    //     setSelectedValue(Number(event.target.value))
    // }
    return (
        <div className="PoemInput">
            <select
                id={inputId}
                name={inputId}
                value={selectedValue}
                onChange={handleChange}>
                {
                    options.map( o =>(
                        <option key={o.id} value={o.id}>{o.title} by {o.author}</option>
                    ))
                }
            </select>
        </div>
    )
}

export default PoemInput;