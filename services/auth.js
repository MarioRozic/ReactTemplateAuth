import { AsyncStorage } from "react-native";

export const USER_KEY = "auth-demo-key";

export const onSignIn = (obj) => {
    return new Promise((resolve, reject) => {
        resolve(obj);
    });
}

export const onSignOut = () => AsyncStorage.removeItem(USER_KEY);

export function isSignedIn() {
    return new Promise((resolve, reject) => {
        AsyncStorage.getItem(USER_KEY)
            .then(res => {
                if (res !== null) {
                    resolve(true);
                } else {
                    resolve(false);
                }
            })
            .catch(err => reject(err));
    });
};
