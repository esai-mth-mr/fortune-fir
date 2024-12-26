import "@src/admin/admin_style/Admin.scss";
import { useNavigate } from "react-router-dom";
function Admin(){
    const navigate = useNavigate();

    const handleUserData = () =>{
        navigate("/account/admin/AdminUser");
    }

    const handlePostData = () =>{
        navigate("/account/admin/AdminPost");
    }

    return(
        <div className="admin">
            <div className="admin_dash">
                <div className="admin_title">Admin Dashboard</div>
                <div className="admin_dash_select" onClick={handleUserData}>User Data</div>
                <div className="admin_dash_select" onClick={handlePostData} >Admin Post</div>
            </div>
        </div>
    )
}

export default Admin;