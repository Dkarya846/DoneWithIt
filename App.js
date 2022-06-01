import { Button, Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import Screen from "./app/components/Screen";
import colors from "./app/config/colors";
import ListingsScreen from "./app/screen/ListingsScreen";
import AccountScreen from "./app/screen/AccountScreen";
import AuthNavigator from "./app/navigations/AuthNavigator";
import navigationTheme from "./app/navigations/navigationTheme";
import AppNavigator from "./app/navigations/AppNavigator";

const Tweets = ({ navigation }) => {
    return (
        <Screen>
            <Text>Tweets</Text>
            <Button
                title="Tweet Details"
                onPress={() => navigation.navigate("TweetsDetail", { id: 1 })}
            />
        </Screen>
    );
};

const TweetDetails = ({ route }) => {
    return (
        <Screen>
            <Text>Tweets Details</Text>
        </Screen>
    );
};

const Stack = createStackNavigator();
const FeedNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Home"
                options={{ headerShown: false }}
                component={ListingsScreen}
            />
            <Stack.Screen
                name="TweetsDetail"
                options={({ route }) => ({
                    title: route.params.id,
                })}
                component={TweetDetails}
            />
        </Stack.Navigator>
    );
};

const Tab = createBottomTabNavigator();
const TabNavigator = () => {
    return (
        <Tab.Navigator
            tabBarOptions={{
                activeTintColor: colors.primary,
                inactiveTintColor: colors.medium,
            }}
        >
            <Tab.Screen
                name="Feed"
                options={{
                    tabBarIcon: ({ size, color }) => (
                        <MaterialCommunityIcons
                            name="home"
                            color={color}
                            size={size}
                        />
                    ),
                }}
                component={FeedNavigator}
            />
            <Tab.Screen
                name="Accounts"
                component={AccountScreen}
                options={{
                    tabBarIcon: ({ size, color }) => (
                        <MaterialCommunityIcons
                            name="account"
                            color={color}
                            size={size}
                        />
                    ),
                }}
            />
        </Tab.Navigator>
    );
};

export default function App() {
    return (
        <NavigationContainer  theme={navigationTheme}>
            <AppNavigator />
        </NavigationContainer>
    );
}
