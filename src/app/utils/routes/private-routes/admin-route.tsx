import CreateProtectedRoute from "../../../hoc/create-protected-route";

export default CreateProtectedRoute((state) => state.userSlice.userIsAdmin, "/");
