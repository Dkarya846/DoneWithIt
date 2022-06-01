import { Image, StyleSheet, TouchableHighlight, View } from "react-native";
import {
    Swipeable,
    GestureHandlerRootView,
} from "react-native-gesture-handler";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import AppText from "../AppText";
import colors from "../../config/colors";

const ListItem = ({
    title,
    subTitle,
    image,
    IconComponent,
    onPress,
    renderRightActions,
}) => {
    return (
        <GestureHandlerRootView>
            <Swipeable renderRightActions={renderRightActions}>
                <TouchableHighlight
                    underlayColor={colors.light}
                    onPress={onPress}
                >
                    <View style={styles.container}>
                        {image && <Image style={styles.image} source={image} />}
                        {IconComponent}
                        <View style={styles.detailsContainer}>
                            <AppText style={styles.title} numberOfLines={1}>
                                {title}
                            </AppText>
                            {subTitle && (
                                <AppText
                                    style={styles.subTitle}
                                    numberOfLines={2}
                                >
                                    {subTitle}
                                </AppText>
                            )}
                        </View>
                        <MaterialCommunityIcons
                            color={colors.medium}
                            name="chevron-right"
                            size={25}
                        />
                    </View>
                </TouchableHighlight>
            </Swipeable>
        </GestureHandlerRootView>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.white,
        flexDirection: "row",
        alignItems: "center",
        padding: 15,
    },

    detailsContainer: {
        marginLeft: 10,
        flex: 1,
    },

    image: {
        width: 70,
        height: 70,
        borderRadius: 35,
    },

    title: {
        fontWeight: "700",
    },

    subTitle: {
        color: colors.medium,
    },
});

export default ListItem;
