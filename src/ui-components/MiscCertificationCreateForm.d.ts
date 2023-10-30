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
export declare type MiscCertificationCreateFormInputValues = {
    name?: string;
    link?: string;
    image?: string;
    bioID?: string;
};
export declare type MiscCertificationCreateFormValidationValues = {
    name?: ValidationFunction<string>;
    link?: ValidationFunction<string>;
    image?: ValidationFunction<string>;
    bioID?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type MiscCertificationCreateFormOverridesProps = {
    MiscCertificationCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    link?: PrimitiveOverrideProps<TextFieldProps>;
    image?: PrimitiveOverrideProps<TextFieldProps>;
    bioID?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type MiscCertificationCreateFormProps = React.PropsWithChildren<{
    overrides?: MiscCertificationCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: MiscCertificationCreateFormInputValues) => MiscCertificationCreateFormInputValues;
    onSuccess?: (fields: MiscCertificationCreateFormInputValues) => void;
    onError?: (fields: MiscCertificationCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: MiscCertificationCreateFormInputValues) => MiscCertificationCreateFormInputValues;
    onValidate?: MiscCertificationCreateFormValidationValues;
} & React.CSSProperties>;
export default function MiscCertificationCreateForm(props: MiscCertificationCreateFormProps): React.ReactElement;
