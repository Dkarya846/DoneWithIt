import { StyleSheet, View } from "react-native";
import colors from "../../config/colors";

const ListItemSeparator = () => {
    return <View style={styles.separator} />;
};

const styles = StyleSheet.create({
    separator: {
        backgroundColor: colors.light,
        height: 1,
        width: "100%",
    },
});

export default ListItemSeparator;
