var emailRegex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

export type ValueType = {
  visitor?: string;
  email?: string;
  message?: string;
};

export type ErrorsType = {
  empty?: boolean;
  visitor?: string;
  email?: string;
  message?: string;
};

export default function validate(values: ValueType) {
  let errors: ErrorsType = {};
  let messageLength = 500;
  if (!(values.visitor || values.email || values.message)) {
    errors.empty = true;
  }

  if (!values.visitor) {
    errors.visitor = "name required";
  } else if (/<\/?[a-z][\s\S]*>/i.test(values.visitor)) {
    errors.visitor = "html not allowed in name";
  }
  if (!values.email) {
    errors.email = "email required";
  } else if (!emailRegex.test(values.email)) {
    errors.email = "valid email required";
  }
  if (!values.message) {
    errors.message = "message required";
  } else if (/<\/?[a-z][\s\S]*>/i.test(values.message)) {
    errors.message = "html not allowed in message";
  } else if (values.message.length >= messageLength) {
    errors.message = `message must be less than ${messageLength} chars`;
  }
  return errors;
}
