/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { BadReception } from "../models";
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
export declare type BadReceptionUpdateFormInputValues = {
    url?: string;
};
export declare type BadReceptionUpdateFormValidationValues = {
    url?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type BadReceptionUpdateFormOverridesProps = {
    BadReceptionUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    url?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type BadReceptionUpdateFormProps = React.PropsWithChildren<{
    overrides?: BadReceptionUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    badReception?: BadReception;
    onSubmit?: (fields: BadReceptionUpdateFormInputValues) => BadReceptionUpdateFormInputValues;
    onSuccess?: (fields: BadReceptionUpdateFormInputValues) => void;
    onError?: (fields: BadReceptionUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: BadReceptionUpdateFormInputValues) => BadReceptionUpdateFormInputValues;
    onValidate?: BadReceptionUpdateFormValidationValues;
} & React.CSSProperties>;
export default function BadReceptionUpdateForm(props: BadReceptionUpdateFormProps): React.ReactElement;
