import { ISeed } from "./interfaces";

type PoemInputProps = {
    options: ISeed[],
    inputId: string,
    handleChange: (evt: React.FormEvent<HTMLSelectElement>) => void,
    selectedValue: string;
};

/** Select input for poem creation form
 *
 * TODO: could rename to be more generic -- nothing about this is poem related
 */
function PoemInput({ options, inputId, handleChange, selectedValue }: PoemInputProps) {

    return (
        <div className="PoemInput">
            <select
                id={inputId}
                name={inputId}
                value={selectedValue}
                onChange={handleChange}>
                {
                    options.map(o => (
                        <option key={o.id} value={o.id}>{o.title} by {o.author}</option>
                    ))
                }
            </select>
        </div>
    );
}

export default PoemInput;