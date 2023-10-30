export type FormRule = {
  id: number;
  field: string;
  name: string;
  valid: boolean;
};

const formRules: FormRule[] = [
  {
    id: 1,
    field: "visitor",
    name: "Name required",
    valid: false,
  },
  {
    id: 2,
    field: "visitor",
    name: "html not allowed",
    valid: false,
  },
  {
    id: 3,
    field: "email",
    name: "Email required",
    valid: false,
  },
  {
    id: 4,
    field: "email",
    name: "Email valid",
    valid: false,
  },
  {
    id: 5,
    field: "message",
    name: "Message required",
    valid: false,
  },
  {
    id: 6,
    field: "message",
    name: "html not allowed",
    valid: false,
  },
  {
    id: 1,
    field: "message",
    name: "Message must be less than 10 characters",
    valid: false,
  },
];

export default formRules;
