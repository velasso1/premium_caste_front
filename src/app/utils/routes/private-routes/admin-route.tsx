import createProtectedRoute from "../../../hoc/create-protected-route";

export default createProtectedRoute((state) => state.userSlice.userIsAdmin, "/");
