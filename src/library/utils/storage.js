import AsyncStorage from '@react-native-community/async-storage';

export const storeData = async (key, value) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem(key, jsonValue);
    } catch (e) {
      // saving error
      console.log(e);
    }

    console.log("Stored Data!");
}

export const getData = async (key) => {
    try {
        const jsonValue = await AsyncStorage.getItem(key);
        console.log("Found Data!");
        return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch(e) {
        // read error
    }
}

export const deleteData = async (key) => {
    try {
      await AsyncStorage.removeItem(key)
    } catch(e) {
      // remove error
    }

    console.log("Deleted Data!");
}