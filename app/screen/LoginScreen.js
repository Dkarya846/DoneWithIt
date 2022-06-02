import { Image, StyleSheet } from "react-native";
import * as Yup from "yup";
import { useState } from "react";

import {
    AppForm,
    AppFormField,
    AppSubmitButton,
    ErrorMessage,
} from "../components/forms";
import Screen from "../components/Screen";
import authApi from "../api/auth";
import useAuth from "../auth/useAuth";

const validationSchema = Yup.object().shape({
    email: Yup.string().email().required().label("Email"),
    password: Yup.string().min(5).required().label("Password"),
});

const LoginScreen = () => {
    const [isLoginFailed, setIsLoginFailed] = useState(false);
    const { logIn } = useAuth();

    const handleSubmit = async ({ email, password }) => {
        const result = await authApi.login(email, password);

        if (!result.ok) return setIsLoginFailed(true);

        setIsLoginFailed(false);
        logIn(result.data);
    };

    return (
        <Screen style={styles.container}>
            <Image
                style={styles.logo}
                source={require("../assets/logo-red.png")}
            />

            <AppForm
                initialValues={{ email: "", password: "" }}
                onSubmit={(values) => handleSubmit(values)}
                validationSchema={validationSchema}
            >
                <ErrorMessage
                    error={"Invalid email and/or password"}
                    visible={isLoginFailed}
                />
                <AppFormField
                    autoCapitalize="none"
                    autoCorrect={false}
                    icon="email"
                    name="email"
                    keyboardType="email-address"
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
                    textContentType="password"
                />
                <AppSubmitButton title="Login" />
            </AppForm>
        </Screen>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
    logo: {
        width: 80,
        height: 80,
        alignSelf: "center",
        marginTop: 50,
        marginBottom: 20,
    },
});

export default LoginScreen;
