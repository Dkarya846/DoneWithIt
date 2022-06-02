import AsyncStorage from "@react-native-async-storage/async-storage";
import moment from "moment";

const prefix = "cache";
const expiryTimeInMinutes = 5;

const store = async (key, value) => {
    const item = {
        value,
        timestamp: Date.now(),
    };
    try {
        await AsyncStorage.setItem(prefix + key, JSON.stringify(item));
    } catch (ex) {
        console.log(ex);
    }
};

const isExpired = (item) => {
    const now = moment(Date.now());
    const storedTime = moment(item.timestamp);
    return now.diff(storedTime, "minutes") > expiryTimeInMinutes;
};

const get = async (key) => {
    try {
        const item = await AsyncStorage.getItem(prefix + key);

        if (!item) return null;

        if (isExpired(item)) {
            await AsyncStorage.removeItem(prefix + key);
            return null;
        }

        return JSON.parse(item);
    } catch (error) {
        console.log(error);
    }
};

export default {
    store,
    get,
};
