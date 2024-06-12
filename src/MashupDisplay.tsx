import { Grid } from "@mui/material";
import { TypeAnimation } from "react-type-animation";

/** Display the mashed-up poem
 *
 * props: poem (string)
 *
 * TODO: Add in typewriting styling
 */
function MashupDisplay({ poem }: { poem: string; }) {

    return (
        <Grid className="MashupDisplay" container>
            <Grid xs={3}></Grid>
            <Grid xs={6}>
                <TypeAnimation
                    sequence={[poem]}
                    style={{
                        whiteSpace: "pre",
                        display: "block",
                        textAlign: "left",
                        width: "500px"
                    }} />

            </Grid>
            <Grid xs={3}></Grid>
        </Grid>
    );
}
export default MashupDisplay;