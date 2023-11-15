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
  SelectField,
  SwitchField,
  Text,
  TextAreaField,
  TextField,
  useTheme,
} from "@aws-amplify/ui-react";
import { StorageManager } from "@aws-amplify/ui-react-storage";
import { Blog } from "../models";
import {
  fetchByPath,
  getOverrideProps,
  processFile,
  validateField,
} from "./utils";
import { Field } from "@aws-amplify/ui-react/internal";
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
export default function BlogUpdateForm(props) {
  const {
    id: idProp,
    blog: blogModelProp,
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
    text: "",
    image: undefined,
    heroAlignment: "",
    heroSize: "",
    isTwoColumn: false,
    dropCap: false,
    publishDate: "",
    slides: [],
    videoId: "",
    status: "",
    tags: [],
    imported_mysql_id: "",
    featured: "",
  };
  const [title, setTitle] = React.useState(initialValues.title);
  const [text, setText] = React.useState(initialValues.text);
  const [image, setImage] = React.useState(initialValues.image);
  const [heroAlignment, setHeroAlignment] = React.useState(
    initialValues.heroAlignment
  );
  const [heroSize, setHeroSize] = React.useState(initialValues.heroSize);
  const [isTwoColumn, setIsTwoColumn] = React.useState(
    initialValues.isTwoColumn
  );
  const [dropCap, setDropCap] = React.useState(initialValues.dropCap);
  const [publishDate, setPublishDate] = React.useState(
    initialValues.publishDate
  );
  const [slides, setSlides] = React.useState(initialValues.slides);
  const [videoId, setVideoId] = React.useState(initialValues.videoId);
  const [status, setStatus] = React.useState(initialValues.status);
  const [tags, setTags] = React.useState(initialValues.tags);
  const [imported_mysql_id, setImported_mysql_id] = React.useState(
    initialValues.imported_mysql_id
  );
  const [featured, setFeatured] = React.useState(initialValues.featured);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = blogRecord
      ? { ...initialValues, ...blogRecord }
      : initialValues;
    setTitle(cleanValues.title);
    setText(cleanValues.text);
    setImage(cleanValues.image);
    setHeroAlignment(cleanValues.heroAlignment);
    setHeroSize(cleanValues.heroSize);
    setIsTwoColumn(cleanValues.isTwoColumn);
    setDropCap(cleanValues.dropCap);
    setPublishDate(cleanValues.publishDate);
    setSlides(cleanValues.slides ?? []);
    setVideoId(cleanValues.videoId);
    setStatus(cleanValues.status);
    setTags(cleanValues.tags ?? []);
    setCurrentTagsValue("");
    setImported_mysql_id(cleanValues.imported_mysql_id);
    setFeatured(cleanValues.featured);
    setErrors({});
  };
  const [blogRecord, setBlogRecord] = React.useState(blogModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(Blog, idProp)
        : blogModelProp;
      setBlogRecord(record);
    };
    queryData();
  }, [idProp, blogModelProp]);
  React.useEffect(resetStateValues, [blogRecord]);
  const [currentTagsValue, setCurrentTagsValue] = React.useState("");
  const tagsRef = React.createRef();
  const validations = {
    title: [],
    text: [],
    image: [],
    heroAlignment: [],
    heroSize: [],
    isTwoColumn: [],
    dropCap: [],
    publishDate: [],
    slides: [],
    videoId: [],
    status: [{ type: "Required" }],
    tags: [],
    imported_mysql_id: [],
    featured: [],
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
          text,
          image,
          heroAlignment,
          heroSize,
          isTwoColumn,
          dropCap,
          publishDate,
          slides,
          videoId,
          status,
          tags,
          imported_mysql_id,
          featured,
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
            Blog.copyOf(blogRecord, (updated) => {
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
      {...getOverrideProps(overrides, "BlogUpdateForm")}
      {...rest}
    >
      <TextField
        label="Title"
        isRequired={false}
        isReadOnly={false}
        value={title}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              title: value,
              text,
              image,
              heroAlignment,
              heroSize,
              isTwoColumn,
              dropCap,
              publishDate,
              slides,
              videoId,
              status,
              tags,
              imported_mysql_id,
              featured,
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
      <TextAreaField
        label="Text"
        isRequired={false}
        isReadOnly={false}
        value={text}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              title,
              text: value,
              image,
              heroAlignment,
              heroSize,
              isTwoColumn,
              dropCap,
              publishDate,
              slides,
              videoId,
              status,
              tags,
              imported_mysql_id,
              featured,
            };
            const result = onChange(modelFields);
            value = result?.text ?? value;
          }
          if (errors.text?.hasError) {
            runValidationTasks("text", value);
          }
          setText(value);
        }}
        onBlur={() => runValidationTasks("text", text)}
        errorMessage={errors.text?.errorMessage}
        hasError={errors.text?.hasError}
        {...getOverrideProps(overrides, "text")}
      ></TextAreaField>
      <Field
        errorMessage={errors.image?.errorMessage}
        hasError={errors.image?.hasError}
        label={"Image"}
        isRequired={false}
        isReadOnly={false}
      >
        {blogRecord && (
          <StorageManager
            defaultFiles={[{ key: blogRecord.image }]}
            onUploadSuccess={({ key }) => {
              setImage((prev) => {
                let value = key;
                if (onChange) {
                  const modelFields = {
                    title,
                    text,
                    image: value,
                    heroAlignment,
                    heroSize,
                    isTwoColumn,
                    dropCap,
                    publishDate,
                    slides,
                    videoId,
                    status,
                    tags,
                    imported_mysql_id,
                    featured,
                  };
                  const result = onChange(modelFields);
                  value = result?.image ?? value;
                }
                return value;
              });
            }}
            onFileRemove={({ key }) => {
              setImage((prev) => {
                let value = initialValues?.image;
                if (onChange) {
                  const modelFields = {
                    title,
                    text,
                    image: value,
                    heroAlignment,
                    heroSize,
                    isTwoColumn,
                    dropCap,
                    publishDate,
                    slides,
                    videoId,
                    status,
                    tags,
                    imported_mysql_id,
                    featured,
                  };
                  const result = onChange(modelFields);
                  value = result?.image ?? value;
                }
                return value;
              });
            }}
            processFile={processFile}
            accessLevel={"public"}
            acceptedFileTypes={[]}
            isResumable={false}
            showThumbnails={true}
            maxFileCount={1}
            {...getOverrideProps(overrides, "image")}
          ></StorageManager>
        )}
      </Field>
      <SelectField
        label="Hero alignment"
        placeholder="Please select an option"
        isDisabled={false}
        value={heroAlignment}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              title,
              text,
              image,
              heroAlignment: value,
              heroSize,
              isTwoColumn,
              dropCap,
              publishDate,
              slides,
              videoId,
              status,
              tags,
              imported_mysql_id,
              featured,
            };
            const result = onChange(modelFields);
            value = result?.heroAlignment ?? value;
          }
          if (errors.heroAlignment?.hasError) {
            runValidationTasks("heroAlignment", value);
          }
          setHeroAlignment(value);
        }}
        onBlur={() => runValidationTasks("heroAlignment", heroAlignment)}
        errorMessage={errors.heroAlignment?.errorMessage}
        hasError={errors.heroAlignment?.hasError}
        {...getOverrideProps(overrides, "heroAlignment")}
      >
        <option
          children="Top"
          value="TOP"
          {...getOverrideProps(overrides, "heroAlignmentoption0")}
        ></option>
        <option
          children="Bottom"
          value="BOTTOM"
          {...getOverrideProps(overrides, "heroAlignmentoption1")}
        ></option>
        <option
          children="Left"
          value="LEFT"
          {...getOverrideProps(overrides, "heroAlignmentoption2")}
        ></option>
        <option
          children="Right"
          value="RIGHT"
          {...getOverrideProps(overrides, "heroAlignmentoption3")}
        ></option>
      </SelectField>
      <SelectField
        label="Hero size"
        placeholder="Please select an option"
        isDisabled={false}
        value={heroSize}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              title,
              text,
              image,
              heroAlignment,
              heroSize: value,
              isTwoColumn,
              dropCap,
              publishDate,
              slides,
              videoId,
              status,
              tags,
              imported_mysql_id,
              featured,
            };
            const result = onChange(modelFields);
            value = result?.heroSize ?? value;
          }
          if (errors.heroSize?.hasError) {
            runValidationTasks("heroSize", value);
          }
          setHeroSize(value);
        }}
        onBlur={() => runValidationTasks("heroSize", heroSize)}
        errorMessage={errors.heroSize?.errorMessage}
        hasError={errors.heroSize?.hasError}
        {...getOverrideProps(overrides, "heroSize")}
      >
        <option
          children="Thumb"
          value="THUMB"
          {...getOverrideProps(overrides, "heroSizeoption0")}
        ></option>
        <option
          children="Full"
          value="FULL"
          {...getOverrideProps(overrides, "heroSizeoption1")}
        ></option>
        <option
          children="Actua"
          value="ACTUA"
          {...getOverrideProps(overrides, "heroSizeoption2")}
        ></option>
        <option
          children="Half"
          value="HALF"
          {...getOverrideProps(overrides, "heroSizeoption3")}
        ></option>
      </SelectField>
      <SwitchField
        label="Is two column"
        defaultChecked={false}
        isDisabled={false}
        isChecked={isTwoColumn}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              title,
              text,
              image,
              heroAlignment,
              heroSize,
              isTwoColumn: value,
              dropCap,
              publishDate,
              slides,
              videoId,
              status,
              tags,
              imported_mysql_id,
              featured,
            };
            const result = onChange(modelFields);
            value = result?.isTwoColumn ?? value;
          }
          if (errors.isTwoColumn?.hasError) {
            runValidationTasks("isTwoColumn", value);
          }
          setIsTwoColumn(value);
        }}
        onBlur={() => runValidationTasks("isTwoColumn", isTwoColumn)}
        errorMessage={errors.isTwoColumn?.errorMessage}
        hasError={errors.isTwoColumn?.hasError}
        {...getOverrideProps(overrides, "isTwoColumn")}
      ></SwitchField>
      <SwitchField
        label="Drop cap"
        defaultChecked={false}
        isDisabled={false}
        isChecked={dropCap}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              title,
              text,
              image,
              heroAlignment,
              heroSize,
              isTwoColumn,
              dropCap: value,
              publishDate,
              slides,
              videoId,
              status,
              tags,
              imported_mysql_id,
              featured,
            };
            const result = onChange(modelFields);
            value = result?.dropCap ?? value;
          }
          if (errors.dropCap?.hasError) {
            runValidationTasks("dropCap", value);
          }
          setDropCap(value);
        }}
        onBlur={() => runValidationTasks("dropCap", dropCap)}
        errorMessage={errors.dropCap?.errorMessage}
        hasError={errors.dropCap?.hasError}
        {...getOverrideProps(overrides, "dropCap")}
      ></SwitchField>
      <TextField
        label="Publish date"
        isRequired={false}
        isReadOnly={false}
        type="date"
        value={publishDate}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              title,
              text,
              image,
              heroAlignment,
              heroSize,
              isTwoColumn,
              dropCap,
              publishDate: value,
              slides,
              videoId,
              status,
              tags,
              imported_mysql_id,
              featured,
            };
            const result = onChange(modelFields);
            value = result?.publishDate ?? value;
          }
          if (errors.publishDate?.hasError) {
            runValidationTasks("publishDate", value);
          }
          setPublishDate(value);
        }}
        onBlur={() => runValidationTasks("publishDate", publishDate)}
        errorMessage={errors.publishDate?.errorMessage}
        hasError={errors.publishDate?.hasError}
        {...getOverrideProps(overrides, "publishDate")}
      ></TextField>
      <Field
        errorMessage={errors.slides?.errorMessage}
        hasError={errors.slides?.hasError}
        label={"Slides"}
        isRequired={false}
        isReadOnly={false}
      >
        {blogRecord && (
          <StorageManager
            defaultFiles={blogRecord.slides.map((key) => ({ key }))}
            onUploadSuccess={({ key }) => {
              setSlides((prev) => {
                let value = [...prev, key];
                if (onChange) {
                  const modelFields = {
                    title,
                    text,
                    image,
                    heroAlignment,
                    heroSize,
                    isTwoColumn,
                    dropCap,
                    publishDate,
                    slides: value,
                    videoId,
                    status,
                    tags,
                    imported_mysql_id,
                    featured,
                  };
                  const result = onChange(modelFields);
                  value = result?.slides ?? value;
                }
                return value;
              });
            }}
            onFileRemove={({ key }) => {
              setSlides((prev) => {
                let value = prev.filter((f) => f !== key);
                if (onChange) {
                  const modelFields = {
                    title,
                    text,
                    image,
                    heroAlignment,
                    heroSize,
                    isTwoColumn,
                    dropCap,
                    publishDate,
                    slides: value,
                    videoId,
                    status,
                    tags,
                    imported_mysql_id,
                    featured,
                  };
                  const result = onChange(modelFields);
                  value = result?.slides ?? value;
                }
                return value;
              });
            }}
            processFile={processFile}
            accessLevel={"public"}
            acceptedFileTypes={["image/*"]}
            isResumable={false}
            showThumbnails={true}
            {...getOverrideProps(overrides, "slides")}
          ></StorageManager>
        )}
      </Field>
      <TextField
        label="Video id"
        isRequired={false}
        isReadOnly={false}
        value={videoId}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              title,
              text,
              image,
              heroAlignment,
              heroSize,
              isTwoColumn,
              dropCap,
              publishDate,
              slides,
              videoId: value,
              status,
              tags,
              imported_mysql_id,
              featured,
            };
            const result = onChange(modelFields);
            value = result?.videoId ?? value;
          }
          if (errors.videoId?.hasError) {
            runValidationTasks("videoId", value);
          }
          setVideoId(value);
        }}
        onBlur={() => runValidationTasks("videoId", videoId)}
        errorMessage={errors.videoId?.errorMessage}
        hasError={errors.videoId?.hasError}
        {...getOverrideProps(overrides, "videoId")}
      ></TextField>
      <SelectField
        label="Status"
        placeholder="Please select an option"
        isDisabled={false}
        value={status}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              title,
              text,
              image,
              heroAlignment,
              heroSize,
              isTwoColumn,
              dropCap,
              publishDate,
              slides,
              videoId,
              status: value,
              tags,
              imported_mysql_id,
              featured,
            };
            const result = onChange(modelFields);
            value = result?.status ?? value;
          }
          if (errors.status?.hasError) {
            runValidationTasks("status", value);
          }
          setStatus(value);
        }}
        onBlur={() => runValidationTasks("status", status)}
        errorMessage={errors.status?.errorMessage}
        hasError={errors.status?.hasError}
        {...getOverrideProps(overrides, "status")}
      >
        <option
          children="Active"
          value="ACTIVE"
          {...getOverrideProps(overrides, "statusoption0")}
        ></option>
        <option
          children="Inactive"
          value="INACTIVE"
          {...getOverrideProps(overrides, "statusoption1")}
        ></option>
      </SelectField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              title,
              text,
              image,
              heroAlignment,
              heroSize,
              isTwoColumn,
              dropCap,
              publishDate,
              slides,
              videoId,
              status,
              tags: values,
              imported_mysql_id,
              featured,
            };
            const result = onChange(modelFields);
            values = result?.tags ?? values;
          }
          setTags(values);
          setCurrentTagsValue("");
        }}
        currentFieldValue={currentTagsValue}
        label={"Tags"}
        items={tags}
        hasError={errors?.tags?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks("tags", currentTagsValue)
        }
        errorMessage={errors?.tags?.errorMessage}
        setFieldValue={setCurrentTagsValue}
        inputFieldRef={tagsRef}
        defaultFieldValue={""}
      >
        <TextField
          label="Tags"
          isRequired={false}
          isReadOnly={false}
          value={currentTagsValue}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.tags?.hasError) {
              runValidationTasks("tags", value);
            }
            setCurrentTagsValue(value);
          }}
          onBlur={() => runValidationTasks("tags", currentTagsValue)}
          errorMessage={errors.tags?.errorMessage}
          hasError={errors.tags?.hasError}
          ref={tagsRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "tags")}
        ></TextField>
      </ArrayField>
      <TextField
        label="Imported mysql id"
        isRequired={false}
        isReadOnly={false}
        value={imported_mysql_id}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              title,
              text,
              image,
              heroAlignment,
              heroSize,
              isTwoColumn,
              dropCap,
              publishDate,
              slides,
              videoId,
              status,
              tags,
              imported_mysql_id: value,
              featured,
            };
            const result = onChange(modelFields);
            value = result?.imported_mysql_id ?? value;
          }
          if (errors.imported_mysql_id?.hasError) {
            runValidationTasks("imported_mysql_id", value);
          }
          setImported_mysql_id(value);
        }}
        onBlur={() =>
          runValidationTasks("imported_mysql_id", imported_mysql_id)
        }
        errorMessage={errors.imported_mysql_id?.errorMessage}
        hasError={errors.imported_mysql_id?.hasError}
        {...getOverrideProps(overrides, "imported_mysql_id")}
      ></TextField>
      <SelectField
        label="Featured"
        placeholder="Please select an option"
        isDisabled={false}
        value={featured}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              title,
              text,
              image,
              heroAlignment,
              heroSize,
              isTwoColumn,
              dropCap,
              publishDate,
              slides,
              videoId,
              status,
              tags,
              imported_mysql_id,
              featured: value,
            };
            const result = onChange(modelFields);
            value = result?.featured ?? value;
          }
          if (errors.featured?.hasError) {
            runValidationTasks("featured", value);
          }
          setFeatured(value);
        }}
        onBlur={() => runValidationTasks("featured", featured)}
        errorMessage={errors.featured?.errorMessage}
        hasError={errors.featured?.hasError}
        {...getOverrideProps(overrides, "featured")}
      >
        <option
          children="Featured"
          value="FEATURED"
          {...getOverrideProps(overrides, "featuredoption0")}
        ></option>
        <option
          children="Normal"
          value="NORMAL"
          {...getOverrideProps(overrides, "featuredoption1")}
        ></option>
      </SelectField>
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
          isDisabled={!(idProp || blogModelProp)}
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
              !(idProp || blogModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
