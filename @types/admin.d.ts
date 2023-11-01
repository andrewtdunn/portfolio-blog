import { Project } from "@/models";
import { AdminForm, AdminModel } from "../type-definitions/enums";

type AdminContextType = {
  formType: AdminForm;
  modelType: AdminModel;
  editing: boolean;
  setFormType: (formType: AdminFormM) => void;
  setModelType: (modelType: AdminModel) => void;
  setEditing: (ediing: boolean) => void;
};

export default AdminContextType;
