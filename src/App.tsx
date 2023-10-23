import { Route, Routes } from "react-router-dom";
import "./App.css";
import { FormikBasic } from "./pages/FormikBasic";
import { FormikDynamic } from "./pages/FormikDynamic";

const routes = [
  {
    path: "/",
    component: <FormikDynamic />,
  },
  {
    path: "/formik-basic",
    component: <FormikBasic />,
  },
];

function App() {
  return (
    <>
      <Routes>
        {routes.map((route) => {
          return (
            <Route
              key={route.path}
              path={route.path}
              element={route.component}
            ></Route>
          );
        })}
      </Routes>
    </>
  );
}

export default App;
