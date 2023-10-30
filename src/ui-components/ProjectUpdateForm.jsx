/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Badge,
  Button,
  Divider,
  Flex,
  Grid,
  Icon,
  ScrollView,
  SwitchField,
  Text,
  TextField,
  useTheme,
} from "@aws-amplify/ui-react";
import { Project } from "../models";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { DataStore } from "aws-amplify";
function ArrayField({
  items = [],
  onChange,
  label,
  inputFieldRef,
  children,
  hasError,
  setFieldValue,
  currentFieldValue,
  defaultFieldValue,
  lengthLimit,
  getBadgeText,
  runValidationTasks,
  errorMessage,
}) {
  const labelElement = <Text>{label}</Text>;
  const {
    tokens: {
      components: {
        fieldmessages: { error: errorStyles },
      },
    },
  } = useTheme();
  const [selectedBadgeIndex, setSelectedBadgeIndex] = React.useState();
  const [isEditing, setIsEditing] = React.useState();
  React.useEffect(() => {
    if (isEditing) {
      inputFieldRef?.current?.focus();
    }
  }, [isEditing]);
  const removeItem = async (removeIndex) => {
    const newItems = items.filter((value, index) => index !== removeIndex);
    await onChange(newItems);
    setSelectedBadgeIndex(undefined);
  };
  const addItem = async () => {
    const { hasError } = runValidationTasks();
    if (
      currentFieldValue !== undefined &&
      currentFieldValue !== null &&
      currentFieldValue !== "" &&
      !hasError
    ) {
      const newItems = [...items];
      if (selectedBadgeIndex !== undefined) {
        newItems[selectedBadgeIndex] = currentFieldValue;
        setSelectedBadgeIndex(undefined);
      } else {
        newItems.push(currentFieldValue);
      }
      await onChange(newItems);
      setIsEditing(false);
    }
  };
  const arraySection = (
    <React.Fragment>
      {!!items?.length && (
        <ScrollView height="inherit" width="inherit" maxHeight={"7rem"}>
          {items.map((value, index) => {
            return (
              <Badge
                key={index}
                style={{
                  cursor: "pointer",
                  alignItems: "center",
                  marginRight: 3,
                  marginTop: 3,
                  backgroundColor:
                    index === selectedBadgeIndex ? "#B8CEF9" : "",
                }}
                onClick={() => {
                  setSelectedBadgeIndex(index);
                  setFieldValue(items[index]);
                  setIsEditing(true);
                }}
              >
                {getBadgeText ? getBadgeText(value) : value.toString()}
                <Icon
                  style={{
                    cursor: "pointer",
                    paddingLeft: 3,
                    width: 20,
                    height: 20,
                  }}
                  viewBox={{ width: 20, height: 20 }}
                  paths={[
                    {
                      d: "M10 10l5.09-5.09L10 10l5.09 5.09L10 10zm0 0L4.91 4.91 10 10l-5.09 5.09L10 10z",
                      stroke: "black",
                    },
                  ]}
                  ariaLabel="button"
                  onClick={(event) => {
                    event.stopPropagation();
                    removeItem(index);
                  }}
                />
              </Badge>
            );
          })}
        </ScrollView>
      )}
      <Divider orientation="horizontal" marginTop={5} />
    </React.Fragment>
  );
  if (lengthLimit !== undefined && items.length >= lengthLimit && !isEditing) {
    return (
      <React.Fragment>
        {labelElement}
        {arraySection}
      </React.Fragment>
    );
  }
  return (
    <React.Fragment>
      {labelElement}
      {isEditing && children}
      {!isEditing ? (
        <>
          <Button
            onClick={() => {
              setIsEditing(true);
            }}
          >
            Add item
          </Button>
          {errorMessage && hasError && (
            <Text color={errorStyles.color} fontSize={errorStyles.fontSize}>
              {errorMessage}
            </Text>
          )}
        </>
      ) : (
        <Flex justifyContent="flex-end">
          {(currentFieldValue || isEditing) && (
            <Button
              children="Cancel"
              type="button"
              size="small"
              onClick={() => {
                setFieldValue(defaultFieldValue);
                setIsEditing(false);
                setSelectedBadgeIndex(undefined);
              }}
            ></Button>
          )}
          <Button size="small" variation="link" onClick={addItem}>
            {selectedBadgeIndex !== undefined ? "Save" : "Add"}
          </Button>
        </Flex>
      )}
      {arraySection}
    </React.Fragment>
  );
}
export default function ProjectUpdateForm(props) {
  const {
    id: idProp,
    project: projectModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    title: "",
    image: "",
    description: "",
    tagline: "",
    projectLogo: "",
    details: [],
    slides: [],
    showcaseType: "",
    vimeoId: "",
    completionData: "",
    isActive: false,
  };
  const [title, setTitle] = React.useState(initialValues.title);
  const [image, setImage] = React.useState(initialValues.image);
  const [description, setDescription] = React.useState(
    initialValues.description
  );
  const [tagline, setTagline] = React.useState(initialValues.tagline);
  const [projectLogo, setProjectLogo] = React.useState(
    initialValues.projectLogo
  );
  const [details, setDetails] = React.useState(initialValues.details);
  const [slides, setSlides] = React.useState(initialValues.slides);
  const [showcaseType, setShowcaseType] = React.useState(
    initialValues.showcaseType
  );
  const [vimeoId, setVimeoId] = React.useState(initialValues.vimeoId);
  const [completionData, setCompletionData] = React.useState(
    initialValues.completionData
  );
  const [isActive, setIsActive] = React.useState(initialValues.isActive);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = projectRecord
      ? { ...initialValues, ...projectRecord }
      : initialValues;
    setTitle(cleanValues.title);
    setImage(cleanValues.image);
    setDescription(cleanValues.description);
    setTagline(cleanValues.tagline);
    setProjectLogo(cleanValues.projectLogo);
    setDetails(cleanValues.details ?? []);
    setCurrentDetailsValue("");
    setSlides(cleanValues.slides ?? []);
    setCurrentSlidesValue("");
    setShowcaseType(cleanValues.showcaseType);
    setVimeoId(cleanValues.vimeoId);
    setCompletionData(cleanValues.completionData);
    setIsActive(cleanValues.isActive);
    setErrors({});
  };
  const [projectRecord, setProjectRecord] = React.useState(projectModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(Project, idProp)
        : projectModelProp;
      setProjectRecord(record);
    };
    queryData();
  }, [idProp, projectModelProp]);
  React.useEffect(resetStateValues, [projectRecord]);
  const [currentDetailsValue, setCurrentDetailsValue] = React.useState("");
  const detailsRef = React.createRef();
  const [currentSlidesValue, setCurrentSlidesValue] = React.useState("");
  const slidesRef = React.createRef();
  const validations = {
    title: [{ type: "Required" }],
    image: [{ type: "Required" }],
    description: [{ type: "Required" }],
    tagline: [],
    projectLogo: [{ type: "Required" }],
    details: [{ type: "Required" }],
    slides: [],
    showcaseType: [{ type: "Required" }],
    vimeoId: [],
    completionData: [],
    isActive: [],
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
          title,
          image,
          description,
          tagline,
          projectLogo,
          details,
          slides,
          showcaseType,
          vimeoId,
          completionData,
          isActive,
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
            Project.copyOf(projectRecord, (updated) => {
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
      {...getOverrideProps(overrides, "ProjectUpdateForm")}
      {...rest}
    >
      <TextField
        label="Title"
        isRequired={true}
        isReadOnly={false}
        value={title}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              title: value,
              image,
              description,
              tagline,
              projectLogo,
              details,
              slides,
              showcaseType,
              vimeoId,
              completionData,
              isActive,
            };
            const result = onChange(modelFields);
            value = result?.title ?? value;
          }
          if (errors.title?.hasError) {
            runValidationTasks("title", value);
          }
          setTitle(value);
        }}
        onBlur={() => runValidationTasks("title", title)}
        errorMessage={errors.title?.errorMessage}
        hasError={errors.title?.hasError}
        {...getOverrideProps(overrides, "title")}
      ></TextField>
      <TextField
        label="Image"
        isRequired={true}
        isReadOnly={false}
        value={image}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              title,
              image: value,
              description,
              tagline,
              projectLogo,
              details,
              slides,
              showcaseType,
              vimeoId,
              completionData,
              isActive,
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
        label="Description"
        isRequired={true}
        isReadOnly={false}
        value={description}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              title,
              image,
              description: value,
              tagline,
              projectLogo,
              details,
              slides,
              showcaseType,
              vimeoId,
              completionData,
              isActive,
            };
            const result = onChange(modelFields);
            value = result?.description ?? value;
          }
          if (errors.description?.hasError) {
            runValidationTasks("description", value);
          }
          setDescription(value);
        }}
        onBlur={() => runValidationTasks("description", description)}
        errorMessage={errors.description?.errorMessage}
        hasError={errors.description?.hasError}
        {...getOverrideProps(overrides, "description")}
      ></TextField>
      <TextField
        label="Tagline"
        isRequired={false}
        isReadOnly={false}
        value={tagline}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              title,
              image,
              description,
              tagline: value,
              projectLogo,
              details,
              slides,
              showcaseType,
              vimeoId,
              completionData,
              isActive,
            };
            const result = onChange(modelFields);
            value = result?.tagline ?? value;
          }
          if (errors.tagline?.hasError) {
            runValidationTasks("tagline", value);
          }
          setTagline(value);
        }}
        onBlur={() => runValidationTasks("tagline", tagline)}
        errorMessage={errors.tagline?.errorMessage}
        hasError={errors.tagline?.hasError}
        {...getOverrideProps(overrides, "tagline")}
      ></TextField>
      <TextField
        label="Project logo"
        isRequired={true}
        isReadOnly={false}
        value={projectLogo}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              title,
              image,
              description,
              tagline,
              projectLogo: value,
              details,
              slides,
              showcaseType,
              vimeoId,
              completionData,
              isActive,
            };
            const result = onChange(modelFields);
            value = result?.projectLogo ?? value;
          }
          if (errors.projectLogo?.hasError) {
            runValidationTasks("projectLogo", value);
          }
          setProjectLogo(value);
        }}
        onBlur={() => runValidationTasks("projectLogo", projectLogo)}
        errorMessage={errors.projectLogo?.errorMessage}
        hasError={errors.projectLogo?.hasError}
        {...getOverrideProps(overrides, "projectLogo")}
      ></TextField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              title,
              image,
              description,
              tagline,
              projectLogo,
              details: values,
              slides,
              showcaseType,
              vimeoId,
              completionData,
              isActive,
            };
            const result = onChange(modelFields);
            values = result?.details ?? values;
          }
          setDetails(values);
          setCurrentDetailsValue("");
        }}
        currentFieldValue={currentDetailsValue}
        label={"Details"}
        items={details}
        hasError={errors?.details?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks("details", currentDetailsValue)
        }
        errorMessage={errors?.details?.errorMessage}
        setFieldValue={setCurrentDetailsValue}
        inputFieldRef={detailsRef}
        defaultFieldValue={""}
      >
        <TextField
          label="Details"
          isRequired={true}
          isReadOnly={false}
          value={currentDetailsValue}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.details?.hasError) {
              runValidationTasks("details", value);
            }
            setCurrentDetailsValue(value);
          }}
          onBlur={() => runValidationTasks("details", currentDetailsValue)}
          errorMessage={errors.details?.errorMessage}
          hasError={errors.details?.hasError}
          ref={detailsRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "details")}
        ></TextField>
      </ArrayField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              title,
              image,
              description,
              tagline,
              projectLogo,
              details,
              slides: values,
              showcaseType,
              vimeoId,
              completionData,
              isActive,
            };
            const result = onChange(modelFields);
            values = result?.slides ?? values;
          }
          setSlides(values);
          setCurrentSlidesValue("");
        }}
        currentFieldValue={currentSlidesValue}
        label={"Slides"}
        items={slides}
        hasError={errors?.slides?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks("slides", currentSlidesValue)
        }
        errorMessage={errors?.slides?.errorMessage}
        setFieldValue={setCurrentSlidesValue}
        inputFieldRef={slidesRef}
        defaultFieldValue={""}
      >
        <TextField
          label="Slides"
          isRequired={false}
          isReadOnly={false}
          value={currentSlidesValue}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.slides?.hasError) {
              runValidationTasks("slides", value);
            }
            setCurrentSlidesValue(value);
          }}
          onBlur={() => runValidationTasks("slides", currentSlidesValue)}
          errorMessage={errors.slides?.errorMessage}
          hasError={errors.slides?.hasError}
          ref={slidesRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "slides")}
        ></TextField>
      </ArrayField>
      <TextField
        label="Showcase type"
        isRequired={true}
        isReadOnly={false}
        value={showcaseType}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              title,
              image,
              description,
              tagline,
              projectLogo,
              details,
              slides,
              showcaseType: value,
              vimeoId,
              completionData,
              isActive,
            };
            const result = onChange(modelFields);
            value = result?.showcaseType ?? value;
          }
          if (errors.showcaseType?.hasError) {
            runValidationTasks("showcaseType", value);
          }
          setShowcaseType(value);
        }}
        onBlur={() => runValidationTasks("showcaseType", showcaseType)}
        errorMessage={errors.showcaseType?.errorMessage}
        hasError={errors.showcaseType?.hasError}
        {...getOverrideProps(overrides, "showcaseType")}
      ></TextField>
      <TextField
        label="Vimeo id"
        isRequired={false}
        isReadOnly={false}
        value={vimeoId}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              title,
              image,
              description,
              tagline,
              projectLogo,
              details,
              slides,
              showcaseType,
              vimeoId: value,
              completionData,
              isActive,
            };
            const result = onChange(modelFields);
            value = result?.vimeoId ?? value;
          }
          if (errors.vimeoId?.hasError) {
            runValidationTasks("vimeoId", value);
          }
          setVimeoId(value);
        }}
        onBlur={() => runValidationTasks("vimeoId", vimeoId)}
        errorMessage={errors.vimeoId?.errorMessage}
        hasError={errors.vimeoId?.hasError}
        {...getOverrideProps(overrides, "vimeoId")}
      ></TextField>
      <TextField
        label="Completion data"
        isRequired={false}
        isReadOnly={false}
        type="date"
        value={completionData}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              title,
              image,
              description,
              tagline,
              projectLogo,
              details,
              slides,
              showcaseType,
              vimeoId,
              completionData: value,
              isActive,
            };
            const result = onChange(modelFields);
            value = result?.completionData ?? value;
          }
          if (errors.completionData?.hasError) {
            runValidationTasks("completionData", value);
          }
          setCompletionData(value);
        }}
        onBlur={() => runValidationTasks("completionData", completionData)}
        errorMessage={errors.completionData?.errorMessage}
        hasError={errors.completionData?.hasError}
        {...getOverrideProps(overrides, "completionData")}
      ></TextField>
      <SwitchField
        label="Is active"
        defaultChecked={false}
        isDisabled={false}
        isChecked={isActive}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              title,
              image,
              description,
              tagline,
              projectLogo,
              details,
              slides,
              showcaseType,
              vimeoId,
              completionData,
              isActive: value,
            };
            const result = onChange(modelFields);
            value = result?.isActive ?? value;
          }
          if (errors.isActive?.hasError) {
            runValidationTasks("isActive", value);
          }
          setIsActive(value);
        }}
        onBlur={() => runValidationTasks("isActive", isActive)}
        errorMessage={errors.isActive?.errorMessage}
        hasError={errors.isActive?.hasError}
        {...getOverrideProps(overrides, "isActive")}
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
          isDisabled={!(idProp || projectModelProp)}
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
              !(idProp || projectModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
