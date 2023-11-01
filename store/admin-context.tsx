import { ReactNode, createContext, useState } from "react";
import AdminContextType from "../@types/admin";
import { AdminForm, AdminModel } from "../type-definitions/enums";

export const AdminContext = createContext<AdminContextType | null>(null);

export const AdminProvider = ({ children }: { children: ReactNode }) => {
  const [formType, setFormType] = useState<AdminForm>(AdminForm.CREATE);
  const [modelType, setModelType] = useState<AdminModel>(AdminModel.PROJECT);
  const [editing, setEditing] = useState<boolean>(false);

  const setForm = (formType: AdminForm) => {
    setFormType(formType);
  };

  const setModel = (modelType: AdminModel) => {
    setModelType(modelType);
  };

  const setEditingState = (value: boolean) => {
    setEditing(value);
  };

  const context = {
    editing,
    formType,
    modelType,
    setModelType: setModel,
    setFormType: setForm,
    setEditing: setEditingState,
  };

  return (
    <AdminContext.Provider value={context}>{children}</AdminContext.Provider>
  );
};

export default AdminContext;
