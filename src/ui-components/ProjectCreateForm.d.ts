/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SelectFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
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
export declare type ProjectCreateFormInputValues = {
    title?: string;
    image?: string;
    description?: string;
    tagline?: string;
    projectLogo?: string;
    details?: string[];
    cities?: string[];
    slides?: string[];
    showcaseType?: string;
    vimeoId?: string;
    startDate?: string;
    completionData?: string;
    status?: string;
};
export declare type ProjectCreateFormValidationValues = {
    title?: ValidationFunction<string>;
    image?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
    tagline?: ValidationFunction<string>;
    projectLogo?: ValidationFunction<string>;
    details?: ValidationFunction<string>;
    cities?: ValidationFunction<string>;
    slides?: ValidationFunction<string>;
    showcaseType?: ValidationFunction<string>;
    vimeoId?: ValidationFunction<string>;
    startDate?: ValidationFunction<string>;
    completionData?: ValidationFunction<string>;
    status?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ProjectCreateFormOverridesProps = {
    ProjectCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    title?: PrimitiveOverrideProps<TextFieldProps>;
    image?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
    tagline?: PrimitiveOverrideProps<TextFieldProps>;
    projectLogo?: PrimitiveOverrideProps<TextFieldProps>;
    details?: PrimitiveOverrideProps<TextFieldProps>;
    cities?: PrimitiveOverrideProps<SelectFieldProps>;
    slides?: PrimitiveOverrideProps<TextFieldProps>;
    showcaseType?: PrimitiveOverrideProps<TextFieldProps>;
    vimeoId?: PrimitiveOverrideProps<TextFieldProps>;
    startDate?: PrimitiveOverrideProps<TextFieldProps>;
    completionData?: PrimitiveOverrideProps<TextFieldProps>;
    status?: PrimitiveOverrideProps<SelectFieldProps>;
} & EscapeHatchProps;
export declare type ProjectCreateFormProps = React.PropsWithChildren<{
    overrides?: ProjectCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: ProjectCreateFormInputValues) => ProjectCreateFormInputValues;
    onSuccess?: (fields: ProjectCreateFormInputValues) => void;
    onError?: (fields: ProjectCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ProjectCreateFormInputValues) => ProjectCreateFormInputValues;
    onValidate?: ProjectCreateFormValidationValues;
} & React.CSSProperties>;
export default function ProjectCreateForm(props: ProjectCreateFormProps): React.ReactElement;
