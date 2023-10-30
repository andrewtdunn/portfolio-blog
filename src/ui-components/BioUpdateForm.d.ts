/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { Bio } from "../models";
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
export declare type BioUpdateFormInputValues = {
    image?: string;
    intro?: string;
    introClosing?: string;
    signatureImage?: string;
    mainUser?: boolean;
};
export declare type BioUpdateFormValidationValues = {
    image?: ValidationFunction<string>;
    intro?: ValidationFunction<string>;
    introClosing?: ValidationFunction<string>;
    signatureImage?: ValidationFunction<string>;
    mainUser?: ValidationFunction<boolean>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type BioUpdateFormOverridesProps = {
    BioUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    image?: PrimitiveOverrideProps<TextFieldProps>;
    intro?: PrimitiveOverrideProps<TextFieldProps>;
    introClosing?: PrimitiveOverrideProps<TextFieldProps>;
    signatureImage?: PrimitiveOverrideProps<TextFieldProps>;
    mainUser?: PrimitiveOverrideProps<SwitchFieldProps>;
} & EscapeHatchProps;
export declare type BioUpdateFormProps = React.PropsWithChildren<{
    overrides?: BioUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    bio?: Bio;
    onSubmit?: (fields: BioUpdateFormInputValues) => BioUpdateFormInputValues;
    onSuccess?: (fields: BioUpdateFormInputValues) => void;
    onError?: (fields: BioUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: BioUpdateFormInputValues) => BioUpdateFormInputValues;
    onValidate?: BioUpdateFormValidationValues;
} & React.CSSProperties>;
export default function BioUpdateForm(props: BioUpdateFormProps): React.ReactElement;
