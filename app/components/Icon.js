import { View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
const Icon = ({
    name,
    size = 40,
    backgroundColor = "#000",
    iconColor = "#fff",
}) => {
    return (
        <View
            style={{
                width: size,
                height: size,
                backgroundColor: backgroundColor,
                borderRadius: size * 0.5,
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <MaterialCommunityIcons
                name={name}
                size={size * 0.5}
                color={iconColor}
            />
        </View>
    );
};

export default Icon;
