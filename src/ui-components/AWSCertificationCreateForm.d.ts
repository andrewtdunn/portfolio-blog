/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
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
export declare type AWSCertificationCreateFormInputValues = {
    name?: string;
    link?: string;
    image?: string;
    bioID?: string;
};
export declare type AWSCertificationCreateFormValidationValues = {
    name?: ValidationFunction<string>;
    link?: ValidationFunction<string>;
    image?: ValidationFunction<string>;
    bioID?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type AWSCertificationCreateFormOverridesProps = {
    AWSCertificationCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    link?: PrimitiveOverrideProps<TextFieldProps>;
    image?: PrimitiveOverrideProps<TextFieldProps>;
    bioID?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type AWSCertificationCreateFormProps = React.PropsWithChildren<{
    overrides?: AWSCertificationCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: AWSCertificationCreateFormInputValues) => AWSCertificationCreateFormInputValues;
    onSuccess?: (fields: AWSCertificationCreateFormInputValues) => void;
    onError?: (fields: AWSCertificationCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: AWSCertificationCreateFormInputValues) => AWSCertificationCreateFormInputValues;
    onValidate?: AWSCertificationCreateFormValidationValues;
} & React.CSSProperties>;
export default function AWSCertificationCreateForm(props: AWSCertificationCreateFormProps): React.ReactElement;
