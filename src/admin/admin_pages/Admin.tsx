import "@src/admin/admin_style/Admin.scss";
function Admin(){
    return(
        <div className="admin">
            <div className="admin_dash">
                <div className="admin_dash_select">User Data</div>
                <div className="admin_dash_select">Payment Data</div>
            </div>
        </div>
    )
}

export default Admin;