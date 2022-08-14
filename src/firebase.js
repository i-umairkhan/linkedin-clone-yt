import { initializeApp } from "firebase/app";
import { addDoc, collection, getDocs, getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyAM3WNHU1hdEFulqFvqD6Nz_8KaNDuMvZM",
  authDomain: "linkedin-clone-yt-2206f.firebaseapp.com",
  projectId: "linkedin-clone-yt-2206f",
  storageBucket: "linkedin-clone-yt-2206f.appspot.com",
  messagingSenderId: "498571754676",
  appId: "1:498571754676:web:278e75a85be5e4d61e2be1",
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export const addPost = async (post) => {
  try {
    await addDoc(collection(db, "posts"), post);
    console.log("Posted secessufully");
  } catch (e) {
    console.log(e);
  }
};

export const getPost = async () => {
  let posts = [];
  try {
    const data = await getDocs(collection(db, "posts"));
    data.forEach((doc) => posts.push({ id: doc.id, data: doc.data() }));
  } catch (e) {
    console.log(e);
  }
  return posts;
};
