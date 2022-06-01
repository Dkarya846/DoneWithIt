import {
    Alert,
    Image,
    StyleSheet,
    TouchableWithoutFeedback,
    View,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useEffect } from "react";
import * as ImagePicker from "expo-image-picker";

import colors from "../config/colors";

const ImageInput = ({ imageUri, onImageChange }) => {
    const requestPermission = async () => {
        const { granted } =
            await ImagePicker.requestMediaLibraryPermissionsAsync();

        if (!granted) alert("You need it enable permission to access the app");
    };

    useEffect(() => {
        requestPermission();
    });

    const handlePress = () => {
        if (!imageUri) selectImage();
        else
            Alert.alert(
                "Delete Image",
                "You need it enable permission to access the app?",
                [
                    { text: "Yes", onPress: () => onImageChange(null) },
                    { text: "No" },
                ]
            );
    };

    const selectImage = async () => {
        try {
            const result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                quality: 0.5,
            });

            if (!result.cancelled) {
                onImageChange(result.uri);
            }
        } catch (ex) {
            console.log("Error reading an Image", ex);
        }
    };
    return (
        <TouchableWithoutFeedback onPress={handlePress}>
            <View style={styles.container}>
                {!imageUri && (
                    <MaterialCommunityIcons
                        color={colors.medium}
                        name="camera"
                        size={40}
                    />
                )}

                {imageUri && (
                    <Image source={{ uri: imageUri }} style={styles.image} />
                )}
            </View>
        </TouchableWithoutFeedback>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        backgroundColor: colors.light,
        borderRadius: 15,
        height: 100,
        justifyContent: "center",
        overflow: "hidden",
        width: 100,
    },

    image: {
        width: "100%",
        height: "100%",
    },
});

export default ImageInput;
