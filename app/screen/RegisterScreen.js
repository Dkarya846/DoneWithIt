import React, { useState } from "react";
import { Image, StyleSheet } from "react-native";
import * as Yup from "yup";

import { AppForm, AppFormField, ErrorMessage } from "../components/forms";
import Screen from "../components/Screen";
import AppSubmitButton from "../components/forms/AppSubmitButton";
import authApi from "../api/auth";
import useAuth from "../auth/useAuth";
import usersApi from "../api/users";
import useApi from "../hooks/useApi";
import ActivityIndicator from "../components/ActivityIndicator";

const validationSchema = Yup.object().shape({
    name: Yup.string().required().label("Name"),
    email: Yup.string().email().required().label("Email"),
    password: Yup.string().min(8).required().label("Password"),
});

const RegisterScreen = () => {
    const [error, setError] = useState(null);
    const registerApi = useApi(usersApi.register);
    const loginApi = useApi(authApi.login);

    const { logIn } = useAuth();

    const handleSubmit = async (userInfo) => {
        const result = await registerApi.request(userInfo);
        console.log(result);
        if (!result.ok) {
            if (result.data) setError(result.data.error);
            else setError("Unexpected error occured.");
            return;
        }

        setError(null);

        const { data: authToken } = await loginApi.request(
            userInfo.email,
            userInfo.password
        );

        logIn(authToken);
    };

    return (
        <>
            <ActivityIndicator
                visible={registerApi.loading || loginApi.loading}
            />
            <Screen style={styles.screen}>
                <Image
                    style={styles.logo}
                    source={require("../assets/logo-red.png")}
                />
                <AppForm
                    initialValues={{ name: "", email: "", password: "" }}
                    onSubmit={(values) => handleSubmit(values)}
                    validationSchema={validationSchema}
                >
                    <ErrorMessage error={error} visible={error} />
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
                        secureTextEntry
                    />

                    <AppSubmitButton title="Register" />
                </AppForm>
            </Screen>
        </>
    );
};

const styles = StyleSheet.create({
    activity: {
        alignItems: "center",
        flex: 1,
        justifyContent: "center",
    },
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
