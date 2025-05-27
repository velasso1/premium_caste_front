import CreateProtectedRoute from "../../../hoc/create-protected-route";

import { routes } from "../main-routes/main-routes";

export default CreateProtectedRoute((state) => state.userSlice.userIsAuth, routes.LOGIN_PAGE);
