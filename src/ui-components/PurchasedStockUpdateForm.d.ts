/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { PurchasedStock } from "../API.ts";
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
export declare type PurchasedStockUpdateFormInputValues = {
    symbol?: string;
    quantity?: number;
    price?: number;
};
export declare type PurchasedStockUpdateFormValidationValues = {
    symbol?: ValidationFunction<string>;
    quantity?: ValidationFunction<number>;
    price?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PurchasedStockUpdateFormOverridesProps = {
    PurchasedStockUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    symbol?: PrimitiveOverrideProps<TextFieldProps>;
    quantity?: PrimitiveOverrideProps<TextFieldProps>;
    price?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type PurchasedStockUpdateFormProps = React.PropsWithChildren<{
    overrides?: PurchasedStockUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    purchasedStock?: PurchasedStock;
    onSubmit?: (fields: PurchasedStockUpdateFormInputValues) => PurchasedStockUpdateFormInputValues;
    onSuccess?: (fields: PurchasedStockUpdateFormInputValues) => void;
    onError?: (fields: PurchasedStockUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: PurchasedStockUpdateFormInputValues) => PurchasedStockUpdateFormInputValues;
    onValidate?: PurchasedStockUpdateFormValidationValues;
} & React.CSSProperties>;
export default function PurchasedStockUpdateForm(props: PurchasedStockUpdateFormProps): React.ReactElement;
