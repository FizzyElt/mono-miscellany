import { assign, createMachine, fromCallback } from "xstate";
import { getUserLevel } from "../../api";
import type { FormOneData } from "../../components/form-one";
import type { FormTwoData } from "../../components/form-two";

type FlowMachineContext = {
  formOneData: FormOneData | null;
  formTwoData: FormTwoData | null;
};

type FlowMachineEvents =
  | { type: "SUBMIT_FORM_ONE"; data: FormOneData }
  | { type: "VALIDATED_FORM"; data: FormOneData }
  | { type: "SUBMIT_FORM_TWO"; data: FormTwoData }
  | { type: "VALIDATE_FAIL" };

export const flowMachine = createMachine({
  types: {} as {
    context: FlowMachineContext;
    events: FlowMachineEvents;
  },

  context: {
    formOneData: null,
    formTwoData: null,
  },
  initial: "step1",
  states: {
    step1: {
      initial: "editing",
      states: {
        editing: {
          on: {
            SUBMIT_FORM_ONE: {
              target: "validating",
            },
          },
        },
        validating: {
          invoke: {
            input: ({ event }) => event,
            src: fromCallback<
              FlowMachineEvents,
              { type: "SUBMIT_FORM_ONE"; data: FormOneData }
            >(({ sendBack, input }) => {
              getUserLevel(input.data.name).then((level) => {
                if (level < 3) {
                  sendBack({
                    type: "VALIDATED_FORM",
                    data: input.data,
                  });
                } else {
                  sendBack({ type: "VALIDATE_FAIL" });
                }
              });
            }),
          },
        },
      },
      on: {
        VALIDATED_FORM: {
          target: "step2",
          actions: [
            assign({
              formOneData: ({ event }) => event.data,
            }),
            "navigateToStep2",
          ],
        },
        VALIDATE_FAIL: { target: "fail", actions: "navigateToFail" },
      },
    },
    step2: {
      initial: "editing",
      states: {
        editing: {},
      },
      on: {
        SUBMIT_FORM_TWO: {
          target: "step3",
          actions: [
            assign({
              formTwoData: ({ event }) => event.data,
            }),
            "navigateToStep3",
          ],
        },
      },
    },
    step3: {
      type: "final",
    },
    fail: {
      type: "final",
    },
  },
});
