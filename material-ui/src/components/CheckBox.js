import React, {useState} from 'react';
import Checkbox from '@mui/material/Checkbox';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export default function Checkboxes() {
    const [name, setName] = useState([])
    function getValue(e) {
        let data = name;
        data.push(e.target.value)
        console.log(data) 
    }
    return (
        <div>
            <h1>Check box</h1>
            <Checkbox {...label} color='primary' value="om" onChange={(e)=>{getValue(e)}} />
            <Checkbox {...label} color='primary' value="yogesh" onChange={(e)=>{getValue(e)}} />
            <Checkbox {...label} color='primary' value="tom" onChange={(e)=>{getValue(e)}} />


        </div>
    );
}