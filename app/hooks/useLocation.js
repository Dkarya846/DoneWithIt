import { useEffect, useState } from "react";
import * as Location from "expo-location";

export default useLocation = () => {
    const [location, setLocation] = useState({ latitude: -1, longitude: -1 });

    const getLocation = async () => {
        try {
            const { granted } =
                await Location.requestForegroundPermissionsAsync();

            if (!granted) return;

            const {
                coords: { latitude, longitude },
            } = await Location.getLastKnownPositionAsync();

            setLocation({ longitude, latitude });
        } catch (ex) {
            console.log("Error: ", ex.message);
        }
    };

    useEffect(() => {
        getLocation();
    }, []);

    return location;
};
