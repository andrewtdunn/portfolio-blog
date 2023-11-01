/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SelectFieldProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
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
    display?: boolean;
    slides?: string[];
    videoId?: string;
    status?: string;
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
    display?: ValidationFunction<boolean>;
    slides?: ValidationFunction<string>;
    videoId?: ValidationFunction<string>;
    status?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type BlogCreateFormOverridesProps = {
    BlogCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    title?: PrimitiveOverrideProps<TextFieldProps>;
    text?: PrimitiveOverrideProps<TextFieldProps>;
    image?: PrimitiveOverrideProps<TextFieldProps>;
    heroAlignment?: PrimitiveOverrideProps<TextFieldProps>;
    heroSize?: PrimitiveOverrideProps<TextFieldProps>;
    isTwoColumn?: PrimitiveOverrideProps<SwitchFieldProps>;
    dropCap?: PrimitiveOverrideProps<SwitchFieldProps>;
    publishDate?: PrimitiveOverrideProps<TextFieldProps>;
    display?: PrimitiveOverrideProps<SwitchFieldProps>;
    slides?: PrimitiveOverrideProps<TextFieldProps>;
    videoId?: PrimitiveOverrideProps<TextFieldProps>;
    status?: PrimitiveOverrideProps<SelectFieldProps>;
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
