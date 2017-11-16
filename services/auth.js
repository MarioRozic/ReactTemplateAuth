import { AsyncStorage } from "react-native";

export const USER_KEY = "auth-demo-key";

export const onSignIn = (obj) => {
    return new Promise((resolve, reject) => {
        // Send request to server for user credentials
        // after you get response, you should save
        // user data to mobile storage
        //
        // ************************************************************************************
        // * fetch('YourAPIaddredd', {                                                        *
        // *     method: 'POST',                                                              *
        // *     headers: {                                                                   *
        // *         'Accept': 'application/json',                                            *
        // *         'Content-Type': 'application/json',                                      *
        // *     },                                                                           *
        // *     body: JSON.stringify(obj)                                                    *
        // * }).then((response) => response.json())                                           *
        // *     .then(response => {                                                          *
        // *         // modify response and/or save it as u get it in mobile memory           *
        // *                                                                                  *
        // *         AsyncStorage.setItem(USER_KEY, JSON.stringify(response))                 *
        // *             .then(() => {                                                        *
        // *                 resolve()                                                        *
        // *             }).catch(error => {                                                  *
        // *                 console.error(error.message)                                     *
        // *                 reject(error);                                                   *
        // *             })                                                                   *              
        // *                                                                                  *
        // *   }).catch(error => {                                                            *
        // *       reject(error);                                                             *
        // *                                                                                  *
        // *   })                                                                             *
        // ************************************************************************************

        // You may delete this and write your code ..
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
