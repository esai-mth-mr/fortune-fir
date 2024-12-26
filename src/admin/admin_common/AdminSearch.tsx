import Input from '@mui/material/Input';
import SearchIcon from '@mui/icons-material/Search';
import { SearchDataType } from '../admin_types';

function AdminSearch(props: SearchDataType) {
    return (
        <div>
            <Input sx={{ position: 'absolute', left: '10%', top: '1.5%' }}
                placeholder="Enter Search Text"
                name={props.name}
                value={props.search}
                onChange={props.handleSearchChange}
            />
            <SearchIcon sx={{ position: 'absolute', left: '34%', top: '2%' }}
            />
        </div>
    )
}

export default AdminSearch;