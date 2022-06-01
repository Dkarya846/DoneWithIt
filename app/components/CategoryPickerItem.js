import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

import AppText from "./AppText";
import Icon from "./Icon";

const CategoryPickerItem = ({ item, onPress }) => {
    return (
        <TouchableOpacity style={styles.item} onPress={onPress}>
            <Icon
                backgroundColor={item.backgroundColor}
                name={item.icon}
                size={80}
            />
            <AppText style={styles.label}>{item.label}</AppText>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    item: {
        paddingVertical: 15,
        paddingHorizontal: 30,
        alignItems: "center",
        width: "33%",
    },

    label: {
        marginTop: 5,
        textAlign: "center",
    },
});
export default CategoryPickerItem;
