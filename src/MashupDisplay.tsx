import { Grid, Button, Box } from "@mui/material";
import TypewriterComponent from "typewriter-effect";

import "./MashupDisplay.css";
/** Display the mashed-up poem
 *
 * props: poem (string)
 *
 * TODO: Add in typewriting styling
 */
function MashupDisplay({ poem, restart }: { poem: string; restart: () => void; }) {

    return (

        <Grid className="MashupDisplay" container>
            <Grid xs={0} sm={2} md={3}item={true} />
            <Grid xs={12} sm={8} md={6}item={true}>
                <Box style={{
                    whiteSpace: "pre-line",
                    display: "block",
                    textAlign: "left",
                    minHeight: `10em`
                }}>

                    <TypewriterComponent
                        options={{
                            delay: 10
                        }}
                        onInit={(typewriter) => {
                            typewriter.typeString(poem)
                                .start();
                        }} />

                </Box>
            </Grid>
            <Grid xs={0} sm={2}  md={3}item />
            <Grid xs={12} item>
                <Box style={{ margin: "3em" }}>
                    <Button variant="contained" onClick={restart}> Try again! </Button>
                </Box>
            </Grid>
        </Grid >

    );
}
export default MashupDisplay;