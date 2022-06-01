import { StyleSheet, View } from "react-native";
import AnimatedLottieView from "lottie-react-native";

const ActivityIndicator = ({ visible = false }) => {
    if (!visible) return null;
    return (
        <AnimatedLottieView
            autoPlay
            loop
            source={require("../assets/animations/loader.json")}
        />
    );
};

const styles = StyleSheet.create({
    container: {},
});

export default ActivityIndicator;
