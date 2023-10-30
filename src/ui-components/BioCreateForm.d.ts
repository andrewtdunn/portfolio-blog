/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
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
export declare type BioCreateFormInputValues = {
    image?: string;
    intro?: string;
    introClosing?: string;
    signatureImage?: string;
    mainUser?: boolean;
};
export declare type BioCreateFormValidationValues = {
    image?: ValidationFunction<string>;
    intro?: ValidationFunction<string>;
    introClosing?: ValidationFunction<string>;
    signatureImage?: ValidationFunction<string>;
    mainUser?: ValidationFunction<boolean>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type BioCreateFormOverridesProps = {
    BioCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    image?: PrimitiveOverrideProps<TextFieldProps>;
    intro?: PrimitiveOverrideProps<TextFieldProps>;
    introClosing?: PrimitiveOverrideProps<TextFieldProps>;
    signatureImage?: PrimitiveOverrideProps<TextFieldProps>;
    mainUser?: PrimitiveOverrideProps<SwitchFieldProps>;
} & EscapeHatchProps;
export declare type BioCreateFormProps = React.PropsWithChildren<{
    overrides?: BioCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: BioCreateFormInputValues) => BioCreateFormInputValues;
    onSuccess?: (fields: BioCreateFormInputValues) => void;
    onError?: (fields: BioCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: BioCreateFormInputValues) => BioCreateFormInputValues;
    onValidate?: BioCreateFormValidationValues;
} & React.CSSProperties>;
export default function BioCreateForm(props: BioCreateFormProps): React.ReactElement;
