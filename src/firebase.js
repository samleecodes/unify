import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyCXAweowKUFXrZfUHndSedYPVrjiJbHNmA',
  authDomain: 'unify-website-13.firebaseapp.com',
  databaseURL: 'https://unify-website-13.firebaseio.com',
  projectId: 'unify-website-13',
  storageBucket: 'unify-website-13.appspot.com',
  messagingSenderId: '527529378053',
  appId: '1:527529378053:web:8510e0583fab1ee608376c',
  measurementId: 'G-VNHW9FQ3YS',
};

const init = () => {
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
};

export default init;
