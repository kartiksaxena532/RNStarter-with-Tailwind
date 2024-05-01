import { Account,Client,ID,Avatars ,Databases,Query} from 'react-native-appwrite';

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
const avatars = new Avatars(client);
const databases = new Databases(client);


export const createUser = async (email,password,username)=> { 

try {
    const newAccount = await account.create(

        ID.unique(),
        email,
        password,
        username
    )
    if(!newAccount) throw Error;

    const avatarUrl= avatars.getInitials(username);

    await signIn (email,password,);

    const newUser= await databases.createDocument (
        appwriteConfig.databaseId,
        appwriteConfig.userCollectionId,
        ID.unique(),
        {
        accountId : newAccount.$id,
        email,
        username,
        avatar: avatarUrl,

        }

    ) 
    return newUser;

}
catch (error) {
    console.error(error);
    console.log(error);
    throw new Error(error);
}

}

export const  signIn = async(email,password)=>{

    try {
       const session = await account.createEmailSession(email,password);

       return session;
    }
    catch (error) {
        console.error(error);
        console.log(error);
        throw new Error(error);
    }
}


export const getCurrentUser = async () =>{

    try{
        const currentAccount= await account.get();

        if(!currentAccount){
            throw  Error;
        }

        const currentUser = await databases.listDocuments(
        config.databaseId ,
        config.userCollectionId,
        [Query.equal('accountId' ,currentAccount.$id)]
    )
if(!currentUser)throw Error;

return currentUser.documents[0];
    }
    catch(err){
        console.log(err);
    }
}