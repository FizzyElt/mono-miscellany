import { Provider } from "jotai/react";
import { Outlet, type RouteObject } from "react-router";
import { FormDataProvider } from "./context";
import { Fail, StepOne, StepThree, StepTwo } from "./steps";
import { myStore } from "./store";

export const jotaiRoutes: RouteObject = {
  path: "",
  element: (
    <Provider store={myStore}>
      <FormDataProvider>
        <Outlet />
      </FormDataProvider>
    </Provider>
  ),
  children: [
    {
      path: "step1",
      element: <StepOne />,
    },
    {
      path: "step2",
      element: <StepTwo />,
    },
    {
      path: "step3",
      element: <StepThree />,
    },
    {
      path: "fail",
      element: <Fail />,
    },
  ],
};
