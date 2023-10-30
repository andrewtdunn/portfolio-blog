/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { School } from "../models";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function SchoolUpdateForm(props) {
  const {
    id: idProp,
    school: schoolModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    name: "",
    degree: "",
    image: "",
    bioID: "",
  };
  const [name, setName] = React.useState(initialValues.name);
  const [degree, setDegree] = React.useState(initialValues.degree);
  const [image, setImage] = React.useState(initialValues.image);
  const [bioID, setBioID] = React.useState(initialValues.bioID);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = schoolRecord
      ? { ...initialValues, ...schoolRecord }
      : initialValues;
    setName(cleanValues.name);
    setDegree(cleanValues.degree);
    setImage(cleanValues.image);
    setBioID(cleanValues.bioID);
    setErrors({});
  };
  const [schoolRecord, setSchoolRecord] = React.useState(schoolModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(School, idProp)
        : schoolModelProp;
      setSchoolRecord(record);
    };
    queryData();
  }, [idProp, schoolModelProp]);
  React.useEffect(resetStateValues, [schoolRecord]);
  const validations = {
    name: [],
    degree: [],
    image: [],
    bioID: [{ type: "Required" }],
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
          name,
          degree,
          image,
          bioID,
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
            School.copyOf(schoolRecord, (updated) => {
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
      {...getOverrideProps(overrides, "SchoolUpdateForm")}
      {...rest}
    >
      <TextField
        label="Name"
        isRequired={false}
        isReadOnly={false}
        value={name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name: value,
              degree,
              image,
              bioID,
            };
            const result = onChange(modelFields);
            value = result?.name ?? value;
          }
          if (errors.name?.hasError) {
            runValidationTasks("name", value);
          }
          setName(value);
        }}
        onBlur={() => runValidationTasks("name", name)}
        errorMessage={errors.name?.errorMessage}
        hasError={errors.name?.hasError}
        {...getOverrideProps(overrides, "name")}
      ></TextField>
      <TextField
        label="Degree"
        isRequired={false}
        isReadOnly={false}
        value={degree}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              degree: value,
              image,
              bioID,
            };
            const result = onChange(modelFields);
            value = result?.degree ?? value;
          }
          if (errors.degree?.hasError) {
            runValidationTasks("degree", value);
          }
          setDegree(value);
        }}
        onBlur={() => runValidationTasks("degree", degree)}
        errorMessage={errors.degree?.errorMessage}
        hasError={errors.degree?.hasError}
        {...getOverrideProps(overrides, "degree")}
      ></TextField>
      <TextField
        label="Image"
        isRequired={false}
        isReadOnly={false}
        value={image}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              degree,
              image: value,
              bioID,
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
        label="Bio id"
        isRequired={true}
        isReadOnly={false}
        value={bioID}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              degree,
              image,
              bioID: value,
            };
            const result = onChange(modelFields);
            value = result?.bioID ?? value;
          }
          if (errors.bioID?.hasError) {
            runValidationTasks("bioID", value);
          }
          setBioID(value);
        }}
        onBlur={() => runValidationTasks("bioID", bioID)}
        errorMessage={errors.bioID?.errorMessage}
        hasError={errors.bioID?.hasError}
        {...getOverrideProps(overrides, "bioID")}
      ></TextField>
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
          isDisabled={!(idProp || schoolModelProp)}
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
              !(idProp || schoolModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
