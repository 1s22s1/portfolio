import { Button, Stack } from "@mui/material";
import { useState } from "react";
import chroma from 'chroma-js';

const LuckyColor = () => {
    const [red, setRed] = useState(0);
    const [green, setGreen] = useState(0);
    const [blue, setBlue] = useState(0);
    const [clicked, setClicked] = useState(false);

    const fortuneTelling = () => {
        const [red, green, blue] = chroma.random().rgb();
        setRed(red);
        setGreen(green);
        setBlue(blue);
        setClicked(true);
    }

    const text = `今日のラッキーカラーは、(${red}, ${green}, ${blue})です。`

    return (
        <>
            <Stack spacing={2}>
                {clicked &&
                    <div className="flex items-center mt-3">
                        <span className="inline-block h-6 w-6 m-1"
                            style={{ backgroundColor: `rgb(${red}, ${green}, ${blue})` }} />
                        <span>{text}</span>
                    </div>
                }
                <Button variant="outlined" onClick={fortuneTelling} className="w-fit">占う</Button>
            </Stack>
        </>
    )
}

export default LuckyColor;
