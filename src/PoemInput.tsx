import { ISeed } from "./interfaces";
import { MenuItem, Select, SelectChangeEvent } from "@mui/material";

type PoemInputProps = {
    options: ISeed[],
    inputId: string,
    handleChange: (evt: SelectChangeEvent) => void,
    selectedValue: string;
};

/** Select input for poem creation form
 *
 * Not Currently in use!
 *
 * TODO: could rename to be more generic -- nothing about this is poem related
 */
function PoemInput({ options, inputId, handleChange, selectedValue }: PoemInputProps) {

    return (
            <Select
                id={inputId}
                name={inputId}
                value={selectedValue}
                onChange={handleChange}>
                {
                    options.map(o => (
                        <MenuItem key={o.id} value={o.id}>{o.title} by {o.author}</MenuItem>
                    ))
                }
            </Select>
    );
}

export default PoemInput;