import { useState } from "react";
import { Image, StyleSheet, View } from "react-native";
import AppText from "../components/AppText";
import ListItem from "../components/list/ListItem";
import colors from "../config/colors";

const ListingDetailsScreen = ({ route }) => {
    const listing = route.params;
    return (
        <View>
            <Image
                style={styles.image}
                source={{ uri: listing.images[0].url }}
            />

            <View style={styles.detailsContainer}>
                <AppText style={styles.title}>{listing.title}</AppText>
                <AppText style={styles.price}>$ {listing.price}</AppText>
                <View style={styles.userContainer}>
                    <ListItem
                        title={"Mosh Hamedani"}
                        subTitle={"5 Listings"}
                        image={require("../assets/mosh.jpg")}
                    />
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    detailsContainer: {
        padding: 20,
    },

    image: {
        width: "100%",
        height: 300,
    },

    price: {
        fontSize: 20,
        fontWeight: "bold",
        color: colors.secondary,
    },

    title: {
        fontSize: 24,
        fontWeight: "700",
        marginVertical: 10,
    },

    userContainer: {
        marginVertical: 40,
    },
});

export default ListingDetailsScreen;
