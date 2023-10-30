import "./form-errors.scss";
import { FormRule } from "./form-rules";

const FormErrors = ({ formRules }: { formRules: FormRule[] }) => {
  return (
    <div className="FormErrors">
      <ul className="validationList">
        {formRules.map((rule) => {
          return (
            <li className={rule.valid ? "success" : "valid"} key={rule.id}>
              {rule.name}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default FormErrors;
