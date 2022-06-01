import { View, FlatList, StyleSheet } from "react-native";

import Icon from "../components/Icon";
import Screen from "../components/Screen";
import colors from "../config/colors";

import { ListItem, ListItemSeparator } from "../components/list";

const menuItems = [
    {
        title: "My Listing",
        icon: {
            name: "format-list-bulleted",
            backgroundColor: colors.primary,
            targetScreen: "Messages",
        },
    },
    {
        title: "My Messages",
        icon: {
            name: "email",
            backgroundColor: colors.secondary,
        },
        targetScreen: "Messages",
    },
];

const AccountScreen = ({ navigation }) => {
    return (
        <Screen style={styles.screen}>
            {/* User Details */}
            <View style={styles.container}>
                <ListItem
                    title="Mosh Hamedani"
                    subTitle="programmingwithmosh@gmail.com"
                    image={require("../assets/mosh.jpg")}
                />
            </View>

            <View style={styles.container}>
                <FlatList
                    data={menuItems}
                    keyExtractor={(menuItems) => menuItems.title}
                    ItemSeparatorComponent={ListItemSeparator}
                    renderItem={({ item: menuItem }) => (
                        <ListItem
                            title={menuItem.title}
                            IconComponent={
                                <Icon
                                    name={menuItem.icon.name}
                                    backgroundColor={
                                        menuItem.icon.backgroundColor
                                    }
                                />
                            }
                            onPress={() =>
                                navigation.navigate(menuItem.targetScreen)
                            }
                        />
                    )}
                />
            </View>
            <ListItem
                title="Logout"
                IconComponent={<Icon name="logout" backgroundColor="#ffe66d" />}
            />
        </Screen>
    );
};

const styles = StyleSheet.create({
    screen: {
        backgroundColor: colors.light,
        paddingTop: 0,
    },
    container: {
        marginVertical: 20,
    },
});

export default AccountScreen;
