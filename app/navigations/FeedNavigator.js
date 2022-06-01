import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ListingsScreen from "../screen/ListingsScreen";
import ListingDetailsScreen from "../screen/ListingDetailsScreen";
import routes from "./routes";

const Stack = createStackNavigator();

const FeedNavigator = () => {
    return (
        <Stack.Navigator mode="modal" screenOptions={{ headerShown: false }}>
            <Stack.Screen name={routes.LISTINGS} component={ListingsScreen} />
            <Stack.Screen
                name={routes.LISTING_DETAILS}
                component={ListingDetailsScreen}
            />
        </Stack.Navigator>
    );
};

export default FeedNavigator;
