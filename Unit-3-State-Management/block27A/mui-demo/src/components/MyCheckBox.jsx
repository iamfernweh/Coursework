import Checkbox from "@mui/material/Checkbox";
import { pink } from "@mui/material/colors";

const label = {inputPros: {'aria-label': 'Checkbox demo'}};

export default function MyCheckbox () {
    return (
        <div>
            <Checkbox {...label} defaultChecked />
            <Checkbox {...label} color='secondary' />
            <Checkbox {...label} color='success'/>
            <Checkbox {...label} checked color='default'/>
            <Checkbox
                    {...label}
                    defaultChecked
                    sx={{
                        color: pink[800],
                        '&.Mui-checked': {
                        color: pink[600],
                        },
                    }}
                    />
        </div>
    )
}