import { MenuItem, Select } from "@mui/material";
import { SelectDataType } from "../admin_types";

function AdminSelect(props: SelectDataType) {
    return (
        <div>
            <Select
                labelId="demo-controlled-open-select-label"
                id="demo-controlled-open-select"
                open={props.open}
                name={props.name}
                onClose={props.handleClose}
                onOpen={props.handleOpen}
                value={props.select}
                onChange={props.handleChange}
                defaultValue={10}
                sx={{ position: 'absolute', bottom: '4.5%', left: '5%', height: '5%' }}
            >
                <MenuItem value={10}>10</MenuItem>
                <MenuItem value={20}>20</MenuItem>
                <MenuItem value={30}>30</MenuItem>
            </Select>
        </div>
    )
}

export default AdminSelect;