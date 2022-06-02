import { StyleSheet, View } from "react-native";
import AnimatedLottieView from "lottie-react-native";
import colors from "../config/colors";

const ActivityIndicator = ({ visible = false }) => {
    if (!visible) return null;
    return (
        <View style={styles.container}>
            <AnimatedLottieView
                autoPlay
                loop
                source={require("../assets/animations/loader.json")}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.white,
        elevation: 1,
        height: "100%",
        opacity: 0.8,
        position: "absolute",
        width: "100%",
        zIndex: 1,
    },
});

export default ActivityIndicator;
