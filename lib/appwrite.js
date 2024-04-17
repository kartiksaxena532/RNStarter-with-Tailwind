import { Account,Client,ID } from 'react-native-appwrite';

export const appwriteConfig={

    endpoint : "https://cloud.appwrite.io/v1",
    platform:"com.deepak.opticals",
    projectId : "661fb53f3ff8ee9c436a",
    databaseId :"661fb7bca9c79dd1160f",
    userCollectionId:"661fb805d88fe1d78803",
    videoCollectionId:"661fb843e79d2c8ab33a",
    storageId:"661fba5ff081fc496f76"

}

// Init your react-native SDK
const client = new Client();

client
    .setEndpoint(appwriteConfig.endpoint) // Your Appwrite Endpoint
    .setProject(appwriteConfig.projectId) // Your project ID
    .setPlatform(appwriteConfig.platform) // Your application ID or bundle ID.
;

const account = new Account(client);

export const createUser = ()=> { 
// Register User
account.create(ID.unique(), 'me@example.com', 'password', 'Jane Doe')
    .then(function (response) {
        console.log(response);
    }, function (error) {
        console.log(error);
    })
}