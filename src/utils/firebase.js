// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore, doc, getDoc, updateDoc, arrayUnion, arrayRemove } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID,
    measurementId: process.env.REACT_APP_MEASUREMENT_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
export const firestore = getFirestore(app);

export const getComment = async (collection, document) => {
    const docRef = doc(firestore, collection, document);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        console.log(docSnap.data());
    } else {
        console.log('No such document !');
    }
};

export const createComment = async (collection, document, value) => {
    const docRef = doc(firestore, collection, document);

    try {
        const pushComment = await updateDoc(docRef, { comment: arrayUnion(value) });
        console.log('댓글 작성 성공');
    } catch (error) {
        console.log('댓글 작성 실패');
        throw error;
    }
};

export const deleteComment = async (collection, document, value) => {
    const docRef = doc(firestore, collection, document);

    try {
        const deleteComment = await updateDoc(docRef, { comment: arrayRemove(value) });
        console.log('댓글 삭제에 성공했습니다');
    } catch (error) {
        console.error('댓글 삭제에 실패했습니다.', error);
    }
};
