import { StyleSheet, TextInput, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import defaultStyles from "../config/styles";

const AppTextInput = ({ icon, width = "100%", ...otherProps }) => {
    return (
        <View style={[styles.container, { width }]}>
            {icon && (
                <MaterialCommunityIcons
                    style={styles.icon}
                    name={icon}
                    size={20}
                    color={defaultStyles.colors.medium}
                />
            )}
            <TextInput
                placeholderTextColor={defaultStyles.colors.medium}
                style={[defaultStyles.text, styles.text]}
                {...otherProps}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        backgroundColor: defaultStyles.colors.light,
        borderRadius: 25,
        alignItems: "center",
        padding: 15,
        marginVertical: 10,
    },
    icon: {
        marginRight: 10,
    },

    text: {
        width: "100%",
    },
});

export default AppTextInput;
