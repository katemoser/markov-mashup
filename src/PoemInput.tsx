import { useState } from "react";
import { ISeed } from "./interfaces";


function PoemInput({options}:{options:ISeed[]}) {

    const [selectedValue, setSelectedValue] = useState<number | undefined>()

    function handleChange(event: React.ChangeEvent<HTMLSelectElement>){
        setSelectedValue(Number(event.target.value))
    }
    return (
        <div className="PoemInput">
            <select value={selectedValue} onChange={handleChange}>
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