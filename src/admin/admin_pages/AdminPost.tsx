import "@src/admin/admin_style/AdminPost.scss";
import Input from '@mui/material/Input';
import TextField from '@mui/material/TextField';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import { useState } from "react";
import { useNavigate } from "react-router-dom";


function AdminPost(){
    const [postTitle, setPostTitle] = useState<string | number>();
    const [postContent, setPostContent] = useState<string | number>();

    const handleTitle = (event: React.ChangeEvent<{ value: unknown }>) => {
        setPostTitle(event.target.value as number);
    };

    const handleContent = (event: React.ChangeEvent<{ value: unknown }>) => {
        setPostContent(event.target.value as number);
    };

    const navigate = useNavigate();

    const handleAdmin = () => {
        navigate(`/account/admin/Admin`);
        console.log("admin")
    };

    return(
        <div className="admin">
            <div className="admin-post-dash">
                    <ArrowCircleLeftIcon onClick={handleAdmin} sx={{ position: "absolute", cursor: "pointer", left: "12%", top: "12%", width: "45px !important", height: "45px !important" }}
                />
                <div className="admin-post-cap">Admin Post</div>
                <div className="admin-post-title">
                    <Input
                        name="title"
                        placeholder="Enter Title"
                        value={postTitle}
                        onChange={handleTitle}
                    />
                </div>
                <div className="admin-post-content">
                    <TextField
                        name="content"
                        value={postContent}
                        multiline
                        onChange={handleContent}
                        minRows={10}
                        placeholder="Enter Content"
                        maxRows={10}
                    />
                </div>
                <div className="admin-post-btn"
                >Post</div>
            </div>
        </div>
    )
}

export default AdminPost;