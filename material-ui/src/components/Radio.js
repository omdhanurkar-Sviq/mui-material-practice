import * as React from 'react';
import Radio from '@mui/material/Radio';

export default function RadioButtons() {
    const [selectedValue, setSelectedValue] = React.useState('a');

    const handleChange = (event) => {
        console.log(event.target.value )
        setSelectedValue(event.target.value);
    };

    return (
        <div>
            <h1>Radio button</h1>

            <div>
                <span>Male</span>
                <Radio
                    checked={selectedValue === 'male'}
                    onChange={handleChange}
                    value="male"
                    name="radio-buttons"
                    inputProps={{ 'aria-label': 'A' }}
                />
            </div>

            <div>
                <span>Female</span>
                <Radio
                    checked={selectedValue === 'female'}
                    onChange={handleChange}
                    value="female"
                    name="radio-buttons"
                    inputProps={{ 'aria-label': 'B' }}
                />
            </div>
        </div>
    );
}