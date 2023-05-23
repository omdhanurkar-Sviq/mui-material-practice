import React ,{useState} from 'react'
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';



const Buttons = () => {
    const [color, setColor] = useState("primary")

    function onchange() {
        // alert("Function called")
        setColor("secondary")
    }
    return (
        <div>
            <h1>React-mui</h1>
            <button onClick={onchange} >Click me</button>
            <Button color={color} variant="text" onClick={onchange} startIcon={<DeleteIcon/>}>delete</Button>
            <Button color={color} variant="contained" onClick={onchange} endIcon={<DeleteIcon/>}>delete</Button>
            <Button  color={color} variant="outlined" onClick={onchange}>Click me</Button>

        </div>
    )
}

export default Buttons