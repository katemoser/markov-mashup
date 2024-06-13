import { Grid } from "@mui/material";
import TypewriterComponent from "typewriter-effect";

import "./MashupDisplay.css";
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
                <div style={{
                    whiteSpace: "pre-line",
                    display: "block",
                    textAlign: "left"
                }}>

                    <TypewriterComponent
                        options={{
                            delay: 50
                        }
                        }
                        onInit={(typewriter) => {
                            typewriter.typeString(poem)
                                .start();
                        }} />

                </div>
            </Grid>
            <Grid xs={3}></Grid>
        </Grid >
    );
}
export default MashupDisplay;