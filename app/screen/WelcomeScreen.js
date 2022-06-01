import { StyleSheet, Text, Image, View, ImageBackground } from "react-native";
import AppButton from "../components/AppButton";

import colors from "../config/colors";
import routes from "../navigations/routes";

const WelcomeScreen = ({ navigation }) => {
    return (
        <ImageBackground
            blurRadius={10}
            style={styles.background}
            source={require("../assets/background.jpg")}
        >
            <View style={styles.logoContainer}>
                <Image
                    style={styles.logo}
                    source={require("../assets/logo-red.png")}
                />
                <Text style={styles.tagLine}>Sell What You Don't Need</Text>
            </View>

            <View style={styles.buttonContainer}>
                <AppButton
                    title="Login"
                    onPress={() => navigation.navigate(routes.LOGIN)}
                />
                <AppButton
                    title="Register"
                    color="secondary"
                    onPress={() => navigation.navigate(routes.REGISTER)}
                />
            </View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    background: {
        flex: 1,
        alignItems: "center",
        justifyContent: "flex-end",
    },

    logoContainer: {
        position: "absolute",
        top: 70,
        justifyContent: "center",
        alignItems: "center",
    },

    logo: {
        width: 100,
        height: 100,
    },

    tagLine: {
        fontSize: 25,
        fontWeight: "bold",
        paddingVertical: 20,
    },

    buttonContainer: {
        width: "100%",
        paddingHorizontal: 20,
    },
});

export default WelcomeScreen;
