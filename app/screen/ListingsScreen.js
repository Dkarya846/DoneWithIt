import { useEffect, useState } from "react";
import { FlatList, StyleSheet } from "react-native";

import ActivityIndicator from "../components/ActivityIndicator";
import Card from "../components/Card";
import Screen from "../components/Screen";
import colors from "../config/colors";
import routes from "../navigations/routes";
import listingsAPI from "../api/listings";
import AppText from "../components/AppText";
import AppButton from "../components/AppButton";
import useApi from "../hooks/useApi";

// const listings = [
//     {
//         id: 1,
//         title: "Red jacket for sale",
//         price: 100,
//         image: require("../assets/jacket.jpg"),
//     },

//     {
//         id: 2,
//         title: "Comfortable Sofa",
//         price: 200,
//         image: require("../assets/couch.jpg"),
//     },
//     {
//         id: 3,
//         title: "Chair",
//         price: 100,
//         image: require("../assets/chair.jpg"),
//     },
// ];

const ListingsScreen = ({ navigation }) => {
    const getListingApi = useApi(listingsAPI.getListings);

    useEffect(() => {
        getListingApi.request();
    }, []);

    return (
        <Screen style={styles.screen}>
            {getListingApi.error && (
                <>
                    <AppText>Could not retrieve the listings.</AppText>
                    <AppButton title="Retry" onPress={getListingApi.request} />
                </>
            )}
            <ActivityIndicator visible={getListingApi.loading} />
            <FlatList
                data={getListingApi.data}
                keyExtractor={(listing) => listing.id.toString()}
                renderItem={({ item }) => (
                    <Card
                        title={item.title}
                        subTitle={"$ " + item.price}
                        imageUrl={item.images[0].url}
                        onPress={() =>
                            navigation.navigate(routes.LISTING_DETAILS, item)
                        }
                    />
                )}
            />
        </Screen>
    );
};

const styles = StyleSheet.create({
    screen: {
        backgroundColor: colors.light,
        paddingLeft: 20,
        paddingRight: 20,
    },
});

export default ListingsScreen;
