

export const logoutUser = (navigate: any,) => {
    localStorage.removeItem("token");
    navigate("/login");
}
