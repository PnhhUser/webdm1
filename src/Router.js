import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "./pages/home";
import Layout from "./Layouts/layout";

function Router() {
  const routerApp = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
      </Route>
    )
  );

  return <RouterProvider router={routerApp} />;
}

export default Router;
