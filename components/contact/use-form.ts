import { useEffect, useState } from "react";
import { ErrorsType, ValueType } from "./contact-form-validation-rules";

const useForm = (
  callback: () => void,
  validate: (values: ValueType) => ErrorsType
) => {
  const [values, setValues] = useState<ValueType>({});
  const [errors, setErrors] = useState<ErrorsType>({});

  useEffect(() => {
    // take action when isVisible is changed
    setErrors(validate(values));
  }, [values, validate]);

  const handleSubmit = (event: any) => {
    if (Object.keys(errors).length === 0) {
      callback();
    }
  };

  const handleChange = (event: any) => {
    event.persist();
    const target = event.target as HTMLInputElement;
    setValues((values) => ({
      ...values,
      [target.name]: target.value,
    }));
  };

  return {
    handleChange,
    handleSubmit,
    values,
    errors,
  };
};

export default useForm;
