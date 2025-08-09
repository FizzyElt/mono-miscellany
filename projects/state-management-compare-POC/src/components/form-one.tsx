import { Button, Field, Input, VStack } from "@chakra-ui/react";
import { useState } from "react";

export type FormOneData = {
  name: string;
  email: string;
};

interface FormOneProps {
  defaultFormValues?: FormOneData;
  onSubmit: (data: FormOneData) => void;
}

const FormOne = ({
  defaultFormValues = { name: "", email: "" },
  onSubmit,
}: FormOneProps) => {
  const [formData, setFormData] = useState(defaultFormValues);

  return (
    <VStack w="500px">
      <Field.Root>
        <Field.Label>Name</Field.Label>
        <Input
          type="text"
          value={formData.name}
          placeholder="level2, level3, level4"
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, name: e.target.value }))
          }
        />
      </Field.Root>
      <Field.Root>
        <Field.Label>Email</Field.Label>
        <Input
          type="email"
          value={formData.email}
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, email: e.target.value }))
          }
        />
      </Field.Root>

      <Button onClick={() => onSubmit(formData)}>Submit</Button>
    </VStack>
  );
};

export default FormOne;
