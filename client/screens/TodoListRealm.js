// import { View, Text } from 'react-native'
// import React from 'react'
// import Realm from 'realm';
// import {createRealmContext,useApp,UserProvider, AppProvider} from '@realm/react';

// // Define your object model  -->  object models define the data types that you can store within a realm.
// class Profile extends Realm.Object {
//     static schema = {
//       name: 'Profile',
//       properties: {
//         _id: 'objectId',
//         name: 'string',
//       },
//       primaryKey: '_id',
//     };
//   }

// // To configure and access a local realm:

// // Create a configuration object
// const realmConfig = {
//     schema: [Profile],
//   };

//   // Create a realm context
// const {RealmProvider, useRealm, useObject, useQuery} =
// createRealmContext(realmConfig);


// // create, read, update, or delete Realm objects --> Note: Nest any components that perform these operations inside of a <RealmProvider>. The useRealm(), useQuery(), and useObject() hooks enable you to perform read and write operations in your realm

// // Find, Sort, and Filter Objects -- > hooks to help you find a collection of Realm objects or a single Realm object. 1.useQuery() ->Returns Realm.Results with all objects in the realm for the type that you pass to it. 2.useObject() ->Returns the Realm object for the primary key that you pass to it.  After finding a collection, you can filter or sort the results using Realm Query Language (RQL).

// const YOUR_PRIMARY_KEY = '_id'
// const APP_ID = 'chap-chap-eovej'

// // Expose a realm
// function AppWrapper() {
//     return (
//       <RealmProvider>
//         <FindSortFilterComponent objectPrimaryKey={YOUR_PRIMARY_KEY} />
//       </RealmProvider>
//     );
//   }
  

//   const FindSortFilterComponent = ({objectPrimaryKey}) => {
//     const [activeProfile, setActiveProfile] = useState();
//     const [allProfiles, setAllProfiles] = useState();
//     const currentlyActiveProfile = useObject(Profile, objectPrimaryKey);
//     const profiles = useQuery(Profile);
//     const sortProfiles = (reversed) => {
//       const sorted = profiles.sorted('name', reversed);
//       setAllProfiles(sorted);
//     };
//     const filterProfiles = (filter, letter) => {
//       // Use [c] for case-insensitivity.
//       const filtered = profiles.filtered(`name ${filter}[c] "${letter}"`);
//       setAllProfiles(filtered);
//     };
//     // ... rest of component
//   };
  


//   // Create, Modify, and Delete Realm Objects After accessing the realm with useRealm(), you can create, modify, and delete objects inside of the realm in a Realm.write() transaction block.To learn more, refer to Write Transactions.


//   // Expose a realm
// function RealmCrud() {
//     return (
//       <RealmProvider>
//         <RestOfApp objectPrimaryKey={YOUR_PRIMARY_KEY} />
//       </RealmProvider>
//     );
//   }


//   function RestOfApp({objectPrimaryKey}) {
//     const [selectedProfileId, setSelectedProfileId] = useState(objectPrimaryKey);
//     const realm = useRealm();

//     const changeProfileName = (profileToChange, newName) => {
//       realm.write(() => {
//         profileToChange.name = newName;
//       });
//     };

//     const addProfile = (name) => {
//         realm.write(() => {
//           realm.create('Profile', {
//             name: name,
//             _id: new Realm.BSON.ObjectId(),
//           });
//         });
//       };
      

//       const changeProfileNames = (profile, newName) => {
//         realm.write(() => {
//           profile.name = newName;
//         });
//       };

//       const deleteProfile = (profile) => {
//         realm.write(() => {
//           realm.delete(profile);
//         });
//       };
      
        
//     // ... rest of component

//   // Add Atlas Device Sync (Optional) --> local-only realm running? you can add Atlas Device Sync so that your realm's data can sync with a MongoDB Atlas cluster and other client devices. To use Device Sync, you need to set up a couple more things: 1. Create a backend in Atlas App Services (see the prerequisites below) , 2.  Configure a Flexible Sync realm instead of a local-only realm

//   // To configure and access a synced realm:Initialize the App using <AppProvider>,Authenticate a User with <UserProvider>,Configure a Synced Realm with <RealmProvider>

// //   Configure a Synced Realm with <RealmProvider> -->The syntax to create, read, update, and delete objects in a synced realm is identical to the syntax for non-synced realms. While you work with local data, a background thread efficiently integrates, uploads, and downloads changesets.


//   }

//   function LogIn() {
//     const app = useApp();
//     async function logInUser() {
//       // When anonymous authentication is enabled, users can immediately log
//       // into your app without providing any identifying information.
//       await app.logIn(Realm.Credentials.anonymous());
//     }
//     return (
//       <Button
//         title='Log In'
//         onPress={logInUser}
//       />
//     );
//   }


// const TodoListRealm = () => {
//   return (
//     <AppProvider id={APP_ID}>
//       <UserProvider fallback={LogIn}>
//       <RealmProvider
//           sync={{
//             flexible: true,
//             onError: console.error,
//             initialSubscriptions: {
//               update(subs, realm) {
//                 subs.add(realm.objects('Profile'));
//               },
//             },
//           }}>
//            <View>
//              <Text>TodoListRealm</Text>
//            </View>
//        </RealmProvider>
//     </UserProvider>
//   </AppProvider>
//   )
// }

// export default TodoListRealm

import { View, Text } from 'react-native'
import React from 'react'

const TodoListRealm = () => {
  return (
    <View>
      <Text>TodoListRealm</Text>
    </View>
  )
}

export default TodoListRealm