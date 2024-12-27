import { Pagination, Stack } from "@mui/material";
import { PaginationDataType } from "../admin_types";

function AdminPagination(props: PaginationDataType){
    return(
        <div>
            <Stack style={{ width: "100%", position: 'absolute', bottom: '5%' }} spacing={1}>
                <Pagination
                    sx={{ display: "flex", justifyContent: "center" }}
                    onChange={props.handlePageChange}
                    count={12}
                    page={props.currentPage}
                    variant="outlined"
                    boundaryCount={1}
                    size="medium"
                />
            </Stack>
        </div>
    )
}

export default AdminPagination;