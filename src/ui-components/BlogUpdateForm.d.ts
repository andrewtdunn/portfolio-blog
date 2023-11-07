/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SelectFieldProps, SwitchFieldProps, TextAreaFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { StorageManagerProps } from "@aws-amplify/ui-react-storage";
import { Blog } from "../models";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type BlogUpdateFormInputValues = {
    title?: string;
    text?: string;
    image?: string;
    heroAlignment?: string;
    heroSize?: string;
    isTwoColumn?: boolean;
    dropCap?: boolean;
    publishDate?: string;
    slides?: string[];
    videoId?: string;
    status?: string;
    imported_mysql_id?: string;
};
export declare type BlogUpdateFormValidationValues = {
    title?: ValidationFunction<string>;
    text?: ValidationFunction<string>;
    image?: ValidationFunction<string>;
    heroAlignment?: ValidationFunction<string>;
    heroSize?: ValidationFunction<string>;
    isTwoColumn?: ValidationFunction<boolean>;
    dropCap?: ValidationFunction<boolean>;
    publishDate?: ValidationFunction<string>;
    slides?: ValidationFunction<string>;
    videoId?: ValidationFunction<string>;
    status?: ValidationFunction<string>;
    imported_mysql_id?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type BlogUpdateFormOverridesProps = {
    BlogUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    title?: PrimitiveOverrideProps<TextFieldProps>;
    text?: PrimitiveOverrideProps<TextAreaFieldProps>;
    image?: PrimitiveOverrideProps<StorageManagerProps>;
    heroAlignment?: PrimitiveOverrideProps<SelectFieldProps>;
    heroSize?: PrimitiveOverrideProps<SelectFieldProps>;
    isTwoColumn?: PrimitiveOverrideProps<SwitchFieldProps>;
    dropCap?: PrimitiveOverrideProps<SwitchFieldProps>;
    publishDate?: PrimitiveOverrideProps<TextFieldProps>;
    slides?: PrimitiveOverrideProps<StorageManagerProps>;
    videoId?: PrimitiveOverrideProps<TextFieldProps>;
    status?: PrimitiveOverrideProps<SelectFieldProps>;
    imported_mysql_id?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type BlogUpdateFormProps = React.PropsWithChildren<{
    overrides?: BlogUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    blog?: Blog;
    onSubmit?: (fields: BlogUpdateFormInputValues) => BlogUpdateFormInputValues;
    onSuccess?: (fields: BlogUpdateFormInputValues) => void;
    onError?: (fields: BlogUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: BlogUpdateFormInputValues) => BlogUpdateFormInputValues;
    onValidate?: BlogUpdateFormValidationValues;
} & React.CSSProperties>;
export default function BlogUpdateForm(props: BlogUpdateFormProps): React.ReactElement;
