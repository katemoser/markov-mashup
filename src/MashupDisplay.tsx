import { TypeAnimation } from "react-type-animation";

/** Display the mashed-up poem
 *
 * props: poem (string)
 *
 * TODO: Add in typewriting styling
 */
function MashupDisplay({ poem }: { poem: string }) {

    return (
        <div className="MashupDisplay">
            <TypeAnimation
            sequence={[poem]}
            style={{whiteSpace: "pre-line", display: "inline-block"}}/>
        </div>
    );
}
export default MashupDisplay;