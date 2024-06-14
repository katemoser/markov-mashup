import { FormEvent, useState } from "react";
import { ISeed } from "./interfaces";
import { Button, SelectChangeEvent, Slider, Select, MenuItem, Stack, useMediaQuery, useTheme } from "@mui/material";

type PoemSelectionFormProps = {
    seeds: ISeed[];
    handleSubmit: (seedIds: string[], secondPoemAmount: number) => void;
};

const INITIAL_FORM_DATA = {
    input1: "1",
    input2: "1",
    secondPoemAmount: 5
};

/** Form to select two poems to be mashed up*/
function PoemSelectionForm({ seeds, handleSubmit }: PoemSelectionFormProps) {

    const [formData, setFormData] = useState(INITIAL_FORM_DATA);

    function handleChange(evt: SelectChangeEvent | Event) {
        const { name, value } = evt.target; // TODO: fix typing situation here
        setFormData(curr => ({
            ...curr,
            [name]: value,
        }));
    }

    function onSubmit(evt: FormEvent) {
        evt.preventDefault();
        const seedIds = [formData["input1"], formData["input2"]];
        handleSubmit(seedIds, formData.secondPoemAmount);
    }

    return (
        <div className="PoemSelectionForm" >
            <form onSubmit={onSubmit}>
                <Stack
                    direction={{ xs: 'column', sm: 'row' }}
                    padding={{ xs: 1 }}
                    spacing={{ xs: 1 }}>

                    <Select
                        sx={{
                            minWidth: { xs: 1, sm: 1 / 3 },
                            color: 'primary.main',
                            '.MuiOutlinedInput-notchedOutline': {
                                borderColor: 'primary.main',
                            },
                            '&:hover .MuiOutlinedInput-notchedOutline': {
                                borderColor: 'primary.dark',
                            },
                            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                borderColor: 'primary.dark',
                            },
                            '&.Mui-focused': {
                                color: 'primary.dark',
                            },

                        }}
                        id="input1"
                        name="input1"
                        value={formData["input1"]}
                        onChange={handleChange}>
                        {
                            seeds.map(o => (
                                <MenuItem key={o.id} value={o.id}>{o.title} by {o.author}</MenuItem>
                            ))
                        }
                    </Select>

                    <Slider
                        sx={{
                            width: { xs: 1 },
                        }}
                        name="secondPoemAmount"
                        color="success"
                        onChange={handleChange}
                        value={formData.secondPoemAmount}
                        valueLabelDisplay="off"
                        shiftStep={1}
                        step={1}
                        min={1}
                        max={9}
                    />

                    <Select
                        sx={{
                            minWidth: { xs: 1, sm: 1 / 3 },
                            color: 'secondary.main',
                            '.MuiOutlinedInput-notchedOutline': {
                                borderColor: 'secondary.main',
                            },
                            '&:hover .MuiOutlinedInput-notchedOutline': {
                                borderColor: 'secondary.dark',
                            },
                            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                borderColor: 'secondary.dark',
                            },
                            '&.Mui-focused': {
                                color: 'secondary.dark',
                            },

                        }}
                    id="input2"
                    color="secondary"
                    name="input2"
                    value={formData["input2"]}
                    onChange={handleChange}>

                    {
                        seeds.map(o => (
                            <MenuItem key={o.id} value={o.id}>{o.title} by {o.author}</MenuItem>
                        ))
                    }
                </Select>
            </Stack>
            <Button type="submit" variant="contained" color="success">MASH IT UP</Button>
        </form>
        </div >
    );
}

export default PoemSelectionForm;