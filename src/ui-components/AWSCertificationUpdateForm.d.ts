/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { AWSCertification } from "../models";
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
export declare type AWSCertificationUpdateFormInputValues = {
    name?: string;
    link?: string;
    image?: string;
    bioID?: string;
};
export declare type AWSCertificationUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    link?: ValidationFunction<string>;
    image?: ValidationFunction<string>;
    bioID?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type AWSCertificationUpdateFormOverridesProps = {
    AWSCertificationUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    link?: PrimitiveOverrideProps<TextFieldProps>;
    image?: PrimitiveOverrideProps<TextFieldProps>;
    bioID?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type AWSCertificationUpdateFormProps = React.PropsWithChildren<{
    overrides?: AWSCertificationUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    aWSCertification?: AWSCertification;
    onSubmit?: (fields: AWSCertificationUpdateFormInputValues) => AWSCertificationUpdateFormInputValues;
    onSuccess?: (fields: AWSCertificationUpdateFormInputValues) => void;
    onError?: (fields: AWSCertificationUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: AWSCertificationUpdateFormInputValues) => AWSCertificationUpdateFormInputValues;
    onValidate?: AWSCertificationUpdateFormValidationValues;
} & React.CSSProperties>;
export default function AWSCertificationUpdateForm(props: AWSCertificationUpdateFormProps): React.ReactElement;
