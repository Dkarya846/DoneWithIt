import { FlatList, StyleSheet, View } from "react-native";
import { useState } from "react";

import Screen from "../components/Screen";

import {
    ListItem,
    ListItemDeleteAction,
    ListItemSeparator,
} from "../components/list";

const initialMessages = [
    {
        id: 1,
        title: "T1",
        description: "D1",
        image: require("../assets/mosh.jpg"),
    },

    {
        id: 2,
        title: "T2",
        description: "D2",
        image: require("../assets/mosh.jpg"),
    },
];

const MessagesScreen = () => {
    const [messages, setMessages] = useState(initialMessages);
    const [refresing, setRefreshing] = useState(false);

    const handleDelete = (message) => {
        //delete message from the array
        setMessages((messages) =>
            messages.filter((msg) => msg.id !== message.id)
        );
        //delete message from the server
    };
    return (
        <Screen style={styles.container}>
            <FlatList
                data={messages}
                keyExtractor={(message) => message.id}
                renderItem={({ item }) => (
                    <ListItem
                        title={item.title}
                        subTitle={item.description}
                        image={item.image}
                        onPress={() => console.log()}
                        renderRightActions={() => (
                            <ListItemDeleteAction
                                onPress={() => handleDelete(item)}
                            />
                        )}
                    />
                )}
                ItemSeparatorComponent={ListItemSeparator}
                refreshing={refresing}
                onRefresh={() => {
                    setMessages([
                        ...messages,
                        {
                            id: 3,
                            title: "T3",
                            description: "D3",
                            image: require("../assets/mosh.jpg"),
                        },
                    ]);
                }}
            />
        </Screen>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingTop: 0,
    },
});

export default MessagesScreen;
