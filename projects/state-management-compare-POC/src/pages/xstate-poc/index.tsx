import { Outlet, type RouteObject } from "react-router";
import { FlowMachineProvider } from "./context";
import { Fail, StepOne, StepThree, StepTwo } from "./steps";

export const xstateRoutes: RouteObject = {
  path: "",
  element: (
    <FlowMachineProvider>
      <Outlet />
    </FlowMachineProvider>
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
