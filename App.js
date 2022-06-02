import AppLoading from "expo-app-loading";
import { NavigationContainer } from "@react-navigation/native";
import { useEffect, useState } from "react";
import jwtDecode from "jwt-decode";

import navigationTheme from "./app/navigations/navigationTheme";
import AppNavigator from "./app/navigations/AppNavigator";
import OfflineNotice from "./app/components/OfflineNotice";
import AuthNavigator from "./app/navigations/AuthNavigator";
import AuthContext from "./app/auth/context";
import authStorage from "./app/auth/storage";

export default function App() {
    const [user, setUser] = useState();
    const [isReady, setIsReady] = useState(false);

    const restoreUser = async () => {
        const user = await authStorage.getUser();

        return setUser(user);
    };

    if (!isReady)
        return (
            <AppLoading
                startAsync={restoreUser}
                onFinish={() => setIsReady(true)}
                onError={(err) => console.log(err)}
            />
        );

    return (
        <AuthContext.Provider value={{ user, setUser }}>
            <OfflineNotice />
            <NavigationContainer theme={navigationTheme}>
                {user ? <AppNavigator /> : <AuthNavigator />}
            </NavigationContainer>
        </AuthContext.Provider>
    );
}
