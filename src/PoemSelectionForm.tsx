import PoemInput from "./PoemInput";
import { ISeed } from "./interfaces";


function PoemSelectionForm({ seeds }: { seeds: ISeed[]; }) {
    console.log("POEM SELECTION FORM, seeds=", seeds);
    return (
        <div className="PoemSelectionForm" >
            {/* <h3> {seeds.map(s => s.id)}</h3> */}
            <form>
                <PoemInput options={seeds} />
                +
                <PoemInput options={seeds} />

                <input type="submit" value="MASH IT UP" />
            </form>
        </div>
    );
}

export default PoemSelectionForm;