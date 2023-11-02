import { StorageManager } from "@aws-amplify/ui-react-storage";

import styles from "./admin-storage-form.module.scss";

const StorageForm = () => {
  return (
    <StorageManager
      accessLevel="public"
      acceptedFileTypes={["image/*"]}
      onUploadError={(e: any) => console.log("error", e)}
      onUploadSuccess={() => {
        console.log("success");
      }}
      maxFileCount={100}
    />
  );
};

export default StorageForm;
