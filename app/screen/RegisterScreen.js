import React from "react";
import { Image, StyleSheet } from "react-native";
import * as Yup from "yup";

import { AppForm, AppFormField } from "../components/forms";
import Screen from "../components/Screen";
import AppSubmitButton from "../components/forms/AppSubmitButton";

const validationSchema = Yup.object().shape({
    name: Yup.string().required().label("Name"),
    email: Yup.string().email().required().label("Email"),
    password: Yup.string().min(8).required().label("Password"),
});

const RegisterScreen = () => {
    return (
        <Screen style={styles.screen}>
            <Image
                style={styles.logo}
                source={require("../assets/logo-red.png")}
            />
            <AppForm
                initialValues={{ name: "", email: "", password: "" }}
                onSubmit={(values) => console.log(values)}
                validationSchema={validationSchema}
            >
                <AppFormField
                    autoCorrect={false}
                    icon="account"
                    name="name"
                    placeholder="Name"
                />

                <AppFormField
                    autoCapitalize="none"
                    autoCorrect={false}
                    icon="email"
                    keyboardType="email-address"
                    name="email"
                    placeholder="Email"
                    textContentType="emailAddress"
                />
                <AppFormField
                    autoCapitalize="none"
                    autoCorrect={false}
                    icon="lock"
                    name="password"
                    placeholder="Password"
                />

                <AppSubmitButton title="Register" />
            </AppForm>
        </Screen>
    );
};

const styles = StyleSheet.create({
    logo: {
        width: 80,
        height: 80,
        alignSelf: "center",
        marginTop: 50,
        marginBottom: 20,
    },

    screen: {
        padding: 10,
    },
});

export default RegisterScreen;
