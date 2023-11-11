/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SelectFieldProps, SwitchFieldProps, TextAreaFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { StorageManagerProps } from "@aws-amplify/ui-react-storage";
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
export declare type BlogCreateFormInputValues = {
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
    featured?: string;
};
export declare type BlogCreateFormValidationValues = {
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
    featured?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type BlogCreateFormOverridesProps = {
    BlogCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
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
    featured?: PrimitiveOverrideProps<SelectFieldProps>;
} & EscapeHatchProps;
export declare type BlogCreateFormProps = React.PropsWithChildren<{
    overrides?: BlogCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: BlogCreateFormInputValues) => BlogCreateFormInputValues;
    onSuccess?: (fields: BlogCreateFormInputValues) => void;
    onError?: (fields: BlogCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: BlogCreateFormInputValues) => BlogCreateFormInputValues;
    onValidate?: BlogCreateFormValidationValues;
} & React.CSSProperties>;
export default function BlogCreateForm(props: BlogCreateFormProps): React.ReactElement;
