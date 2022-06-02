import { TouchableWithoutFeedback, StyleSheet, View } from "react-native";
import colors from "../config/colors";
import AppText from "./AppText";

import { Image } from "react-native-expo-image-cache";

const Card = ({ title, subTitle, imageUrl, onPress, thumbnailUrl }) => {
    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={styles.card}>
                <Image
                    style={styles.cardImage}
                    // preview={{ uri: thumbnailUrl }}
                    uri={imageUrl}
                    tint="light"
                    defaultSource={{ uri: imageUrl }}
                />
                <View style={styles.detailsContainer}>
                    <AppText style={styles.title}>{title}</AppText>
                    <AppText style={styles.subTitle}>{subTitle}</AppText>
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
};

const styles = StyleSheet.create({
    card: {
        borderRadius: 15,
        backgroundColor: colors.white,
        marginBottom: 20,
        overflow: "hidden",
    },

    cardImage: {
        width: "100%",
        height: 200,
    },

    detailsContainer: {
        padding: 20,
    },

    title: {
        marginBottom: 7,
    },

    subTitle: {
        color: colors.secondary,
        fontWeight: "bold",
    },
});

export default Card;
