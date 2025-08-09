import { Button, Field, Input, VStack } from "@chakra-ui/react";
import { useState } from "react";

export type FormTwoData = {
  note: string;
};

interface FormTwoProps {
  defaultFormValues?: FormTwoData;
  onSubmit: (data: FormTwoData) => void;
}

const FormTwo = ({
  defaultFormValues = { note: "" },
  onSubmit,
}: FormTwoProps) => {
  const [formData, setFormData] = useState(defaultFormValues);

  return (
    <VStack w="500px">
      <Field.Root>
        <Field.Label>note</Field.Label>
        <Input
          type="text"
          value={formData.note}
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, note: e.target.value }))
          }
        />
      </Field.Root>

      <Button onClick={() => onSubmit(formData)}>Submit</Button>
    </VStack>
  );
};

export default FormTwo;
