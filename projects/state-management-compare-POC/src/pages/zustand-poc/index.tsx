import { Outlet, type RouteObject } from "react-router";
import { FlowProvider } from "./context";
import { Fail, StepOne, StepThree, StepTwo } from "./steps";

export const zustandRoutes: RouteObject = {
  path: "",
  element: (
    <FlowProvider>
      <Outlet />
    </FlowProvider>
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
