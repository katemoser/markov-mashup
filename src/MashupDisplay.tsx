import { Grid, Button, Box, Typography } from "@mui/material";
import TypewriterComponent from "typewriter-effect";

import "./MashupDisplay.css";
import { IMashup } from "./interfaces";
/** Display the mashed-up poem
 *
 * props: poem (string)
 *
 * TODO: Add in typewriting styling
 */
function MashupDisplay({ poem, restart }: { poem: IMashup; restart: () => void; }) {
    console.log("poem in display", poem);
    return (
        <Grid className="MashupDisplay" container>
            <Grid xs={0} sm={2} item></Grid>
            <Grid xs={12} sm={8} item>
                <Typography
                    variant="h4"
                    sx={{
                        paddingBottom: "1em"
                    }}>
                    <span className="set1">{poem.seeds[0].title}</span> <span className="both"> vs </span><span className="set2" >{poem.seeds[1].title}</span>
                </Typography>
            </Grid>
            <Grid xs={0} sm={2} item></Grid>

            <Grid xs={0} sm={2} md={3} item />
            <Grid xs={12} sm={8} md={6} item>
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
                            typewriter.typeString(poem.mashup)
                                .start();
                        }} />

                </Box>
            </Grid>
            <Grid xs={0} sm={2} md={3} item />

            <Grid xs={12} item>
                <Box style={{ margin: "3em" }}>
                    <Button variant="contained" onClick={restart}> Try again! </Button>
                </Box>
            </Grid>
        </Grid >

    );
}
export default MashupDisplay;