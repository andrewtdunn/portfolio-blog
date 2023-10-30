/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Button,
  Flex,
  Grid,
  SwitchField,
  TextField,
} from "@aws-amplify/ui-react";
import { Bio } from "../models";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function BioUpdateForm(props) {
  const {
    id: idProp,
    bio: bioModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    image: "",
    intro: "",
    introClosing: "",
    signatureImage: "",
    mainUser: false,
  };
  const [image, setImage] = React.useState(initialValues.image);
  const [intro, setIntro] = React.useState(initialValues.intro);
  const [introClosing, setIntroClosing] = React.useState(
    initialValues.introClosing
  );
  const [signatureImage, setSignatureImage] = React.useState(
    initialValues.signatureImage
  );
  const [mainUser, setMainUser] = React.useState(initialValues.mainUser);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = bioRecord
      ? { ...initialValues, ...bioRecord }
      : initialValues;
    setImage(cleanValues.image);
    setIntro(cleanValues.intro);
    setIntroClosing(cleanValues.introClosing);
    setSignatureImage(cleanValues.signatureImage);
    setMainUser(cleanValues.mainUser);
    setErrors({});
  };
  const [bioRecord, setBioRecord] = React.useState(bioModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp ? await DataStore.query(Bio, idProp) : bioModelProp;
      setBioRecord(record);
    };
    queryData();
  }, [idProp, bioModelProp]);
  React.useEffect(resetStateValues, [bioRecord]);
  const validations = {
    image: [],
    intro: [{ type: "Required" }],
    introClosing: [{ type: "Required" }],
    signatureImage: [],
    mainUser: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          image,
          intro,
          introClosing,
          signatureImage,
          mainUser,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          await DataStore.save(
            Bio.copyOf(bioRecord, (updated) => {
              Object.assign(updated, modelFields);
            })
          );
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "BioUpdateForm")}
      {...rest}
    >
      <TextField
        label="Image"
        isRequired={false}
        isReadOnly={false}
        value={image}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              image: value,
              intro,
              introClosing,
              signatureImage,
              mainUser,
            };
            const result = onChange(modelFields);
            value = result?.image ?? value;
          }
          if (errors.image?.hasError) {
            runValidationTasks("image", value);
          }
          setImage(value);
        }}
        onBlur={() => runValidationTasks("image", image)}
        errorMessage={errors.image?.errorMessage}
        hasError={errors.image?.hasError}
        {...getOverrideProps(overrides, "image")}
      ></TextField>
      <TextField
        label="Intro"
        isRequired={true}
        isReadOnly={false}
        value={intro}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              image,
              intro: value,
              introClosing,
              signatureImage,
              mainUser,
            };
            const result = onChange(modelFields);
            value = result?.intro ?? value;
          }
          if (errors.intro?.hasError) {
            runValidationTasks("intro", value);
          }
          setIntro(value);
        }}
        onBlur={() => runValidationTasks("intro", intro)}
        errorMessage={errors.intro?.errorMessage}
        hasError={errors.intro?.hasError}
        {...getOverrideProps(overrides, "intro")}
      ></TextField>
      <TextField
        label="Intro closing"
        isRequired={true}
        isReadOnly={false}
        value={introClosing}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              image,
              intro,
              introClosing: value,
              signatureImage,
              mainUser,
            };
            const result = onChange(modelFields);
            value = result?.introClosing ?? value;
          }
          if (errors.introClosing?.hasError) {
            runValidationTasks("introClosing", value);
          }
          setIntroClosing(value);
        }}
        onBlur={() => runValidationTasks("introClosing", introClosing)}
        errorMessage={errors.introClosing?.errorMessage}
        hasError={errors.introClosing?.hasError}
        {...getOverrideProps(overrides, "introClosing")}
      ></TextField>
      <TextField
        label="Signature image"
        isRequired={false}
        isReadOnly={false}
        value={signatureImage}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              image,
              intro,
              introClosing,
              signatureImage: value,
              mainUser,
            };
            const result = onChange(modelFields);
            value = result?.signatureImage ?? value;
          }
          if (errors.signatureImage?.hasError) {
            runValidationTasks("signatureImage", value);
          }
          setSignatureImage(value);
        }}
        onBlur={() => runValidationTasks("signatureImage", signatureImage)}
        errorMessage={errors.signatureImage?.errorMessage}
        hasError={errors.signatureImage?.hasError}
        {...getOverrideProps(overrides, "signatureImage")}
      ></TextField>
      <SwitchField
        label="Main user"
        defaultChecked={false}
        isDisabled={false}
        isChecked={mainUser}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              image,
              intro,
              introClosing,
              signatureImage,
              mainUser: value,
            };
            const result = onChange(modelFields);
            value = result?.mainUser ?? value;
          }
          if (errors.mainUser?.hasError) {
            runValidationTasks("mainUser", value);
          }
          setMainUser(value);
        }}
        onBlur={() => runValidationTasks("mainUser", mainUser)}
        errorMessage={errors.mainUser?.errorMessage}
        hasError={errors.mainUser?.hasError}
        {...getOverrideProps(overrides, "mainUser")}
      ></SwitchField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || bioModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || bioModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
