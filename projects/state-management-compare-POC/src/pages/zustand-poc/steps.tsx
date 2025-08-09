import { AbsoluteCenter, Box, Heading, Spinner } from "@chakra-ui/react";
import { pipe } from "effect";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router";
import { getUserLevel } from "../../api";
import FormOne, { type FormOneData } from "../../components/form-one";
import FormTwo from "../../components/form-two";
import { useFlowContext } from "./context";

export const StepOne = () => {
  const submitFormOne = useFlowContext((state) => state.submitFormOne);
  const [isValidating, setValidating] = useState(false);
  const navigate = useNavigate();

  const handleClick = (data: FormOneData) => {
    setValidating(true);
    getUserLevel(data.name)
      .then((level) => {
        if (level < 3) {
          submitFormOne(data);
          navigate("../step2");
          return;
        }
        navigate("../fail");
      })
      .then(() => setValidating(false));
  };

  return (
    <Box h="500px">
      <AbsoluteCenter>
        {isValidating ? <Spinner /> : <FormOne onSubmit={handleClick} />}
      </AbsoluteCenter>
    </Box>
  );
};

export const StepTwo = () => {
  const { formOneData, submitFormTwo } = useFlowContext((state) => ({
    formOneData: state.formDataOne,
    submitFormTwo: state.submitFormTwo,
  }));
  const navigate = useNavigate();

  if (!formOneData) {
    return <Navigate to="../step1" replace />;
  }

  return (
    <Box h="500px">
      <AbsoluteCenter>
        <FormTwo
          onSubmit={(data) =>
            pipe(data, submitFormTwo, () => navigate("../step3"))
          }
        />
      </AbsoluteCenter>
    </Box>
  );
};

export const StepThree = () => {
  const { formOneData, formTwoData } = useFlowContext((state) => ({
    formOneData: state.formDataOne,
    formTwoData: state.formDataTwo,
  }));

  if (!formOneData || !formTwoData) {
    return <Navigate to="../step1" replace />;
  }

  return (
    <Box h="500px">
      <AbsoluteCenter>
        <Heading>finished</Heading>
      </AbsoluteCenter>
    </Box>
  );
};

export const Fail = () => {
  return (
    <Box h="500px">
      <AbsoluteCenter>
        <Heading>fail</Heading>
      </AbsoluteCenter>
    </Box>
  );
};
