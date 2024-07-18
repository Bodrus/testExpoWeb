import AsyncStorage from "@react-native-async-storage/async-storage";

export const loadItem = async (key) => {
  try {
    const value = await AsyncStorage.getItem(key);
    return value ? JSON.parse(value) : null;
  } catch (error) {
    console.error(`Failed to load item with key ${key}:`, error);
    return null;
  }
};

export const saveItem = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error(`Failed to save item with key ${key}:`, error);
  }
};
