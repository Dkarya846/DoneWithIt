import {
    Button,
    FlatList,
    StyleSheet,
    View,
    TouchableWithoutFeedback,
    Modal,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useState } from "react";

import colors from "../config/colors";
import AppText from "./AppText";
import PickerItem from "./PickerItem";

const AppPicker = ({
    icon,
    items,
    numberOfColumns = 1,
    onSelectItem,
    placeholder,
    PickerItemComponent = PickerItem,
    selectedItem,
    width,
}) => {
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <>
            <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
                <View style={[styles.container, { width }]}>
                    {icon && (
                        <MaterialCommunityIcons
                            style={styles.icon}
                            name={icon}
                            size={20}
                            color={colors.medium}
                        />
                    )}
                    {selectedItem ? (
                        <AppText style={styles.text}>
                            {selectedItem.label}
                        </AppText>
                    ) : (
                        <AppText style={styles.placeholder}>
                            {placeholder}
                        </AppText>
                    )}
                    <MaterialCommunityIcons
                        name="chevron-down"
                        size={20}
                        color={colors.medium}
                    />
                </View>
            </TouchableWithoutFeedback>
            <Modal visible={modalVisible} animationType="slide">
                <MaterialCommunityIcons
                    name="close"
                    size={30}
                    color={colors.medium}
                    style={styles.closeBtn}
                    onPress={() => setModalVisible(false)}
                />
                <FlatList
                    data={items}
                    numColumns={numberOfColumns}
                    keyExtractor={(item) => item.value.toString()}
                    renderItem={({ item }) => (
                        <PickerItemComponent
                            item={item}
                            label={item.label}
                            onPress={() => {
                                setModalVisible(false);
                                onSelectItem(item);
                            }}
                        />
                    )}
                />
            </Modal>
        </>
    );
};

const styles = StyleSheet.create({
    closeBtn: {
        alignSelf: "flex-end",
        marginRight: 20,
    },

    container: {
        flexDirection: "row",
        backgroundColor: colors.light,
        borderRadius: 25,
        width: "100%",
        alignItems: "center",
        padding: 15,
        marginVertical: 10,
    },

    icon: {
        marginRight: 10,
    },

    placeholder: {
        color: colors.medium,
        flex: 1,
    },

    text: {
        flex: 1,
    },
});

export default AppPicker;
