import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import ListingEditScreen from "../screen/ListingEditScreen";
import FeedNavigator from "./FeedNavigator";
import AccountNavigator from "./AccountNavigator";
import NewListingsButton from "./NewListingsButton";
import routes from "./routes";

const Tab = createBottomTabNavigator();
const AppNavigator = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen
                name={routes.FEED}
                component={FeedNavigator}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons
                            color={color}
                            name="home"
                            size={size}
                        />
                    ),
                }}
            />
            <Tab.Screen
                name={routes.LISTING_EDIT}
                component={ListingEditScreen}
                options={({ navigation }) => ({
                    tabBarButton: () => (
                        <NewListingsButton
                            onPress={() =>
                                navigation.navigate(routes.LISTING_EDIT)
                            }
                        />
                    ),
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons
                            color={color}
                            name="plus-circle"
                            size={size}
                        />
                    ),
                })}
            />
            <Tab.Screen
                name={routes.ACCOUNT}
                component={AccountNavigator}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons
                            color={color}
                            name="account"
                            size={size}
                        />
                    ),
                }}
            />
        </Tab.Navigator>
    );
};

export default AppNavigator;
