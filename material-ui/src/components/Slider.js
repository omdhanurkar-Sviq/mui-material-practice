import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import VolumeDown from '@mui/icons-material/VolumeDown';
import VolumeUp from '@mui/icons-material/VolumeUp';

export default function ContinuousSlider() {
    const [value, setValue] = React.useState(30);

    const handleChange = (event, newValue) => {
        console.log(event.target.value)
        setValue(newValue);
    };

    return (
        <div>
            <h1>Slider</h1>
            <Box sx={{ paddingLeft: '500px', width: 500 }}>
                
                <VolumeDown />
                <Slider aria-label="Volume" value={value} onChange={handleChange} />
                <VolumeUp />

                {/* <Slider disabled defaultValue={30} aria-label="Disabled slider" /> */}
            </Box>
        </div>
    );
}