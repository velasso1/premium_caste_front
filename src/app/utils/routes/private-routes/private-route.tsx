import createProtectedRoute from "../../../hoc/create-protected-route";

import { routes } from "../main-routes/main-routes";

export default createProtectedRoute((state) => state.userSlice.userIsAuth, `/auth/${routes.LOGIN_PAGE}`);
