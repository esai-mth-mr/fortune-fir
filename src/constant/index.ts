// const BACKEND_URL = "https://howlucky2025.com";
// const BACKEND_URL = "http://localhost:8000";
const BACKEND_URL = "http://54.167.191.81:8000";
const TOKEN_SECRET_KEY = "aceron20030612";
const ERRORS = {
    getDataError: "You have already processed all months",
    accountNotFound: "Account not found.",
    activateAccountRequired:
        "Please activeate your account. Check your inbox or resend code to your email!",
}
// const STRIPE_PUB_KEY = "pk_test_51QXkg1A9YfpPkxIlDXG9iEGhAWo0bEaxfukGsLYfyzBkcMV4jipebVVh3XnfKjj9YZjL3uv8uiexgIkwgoWTcTqu00tZhUIpUx"
const STRIPE_PUB_KEY = "pk_live_51QXkg1A9YfpPkxIlsLfvi5mV2iQiCf02XalFhJPCMaQ1lma1ZqTri9B8O4jjo8UESH3PGIS5Xgttgu8BooVpZjgi00nInxQPOY"

export { BACKEND_URL, TOKEN_SECRET_KEY, ERRORS, STRIPE_PUB_KEY };
