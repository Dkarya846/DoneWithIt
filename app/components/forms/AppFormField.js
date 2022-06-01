import React from "react";
import { useFormikContext } from "formik";

import AppTextInput from "../AppTextInput";
import ErrorMessage from "./ErrorMessage";

const AppFormField = ({ name, width, ...otherProps }) => {
    const { errors, setFieldValue, touched, setFieldTouched, values } =
        useFormikContext();
    return (
        <>
            <AppTextInput
                onBlur={() => setFieldTouched(name)}
                onChangeText={(text) => setFieldValue(name, text)}
                width={width}
                value={values[name]}
                {...otherProps}
            />

            <ErrorMessage error={errors[name]} visible={touched[name]} />
        </>
    );
};

export default AppFormField;
