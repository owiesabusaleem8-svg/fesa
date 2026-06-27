// =========================================================
// firebase-config.js
// ملف الاتصال الموحّد بمشروع Firebase - يُستورد من أي صفحة تحتاج بيانات
// =========================================================

import { initializeApp } from "https://www.gstatic.com/firebasejs/12.15.0/firebase-app.js";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  doc,
  getDoc,
  updateDoc,
  deleteDoc,
  orderBy,
  query,
  where
} from "https://www.gstatic.com/firebasejs/12.15.0/firebase-firestore.js";

// إعدادات مشروع Fesageo على Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCM8G90ijGh-05WBJOgLKgM0oscieDRiNs",
  authDomain: "fesageo-cf82b.firebaseapp.com",
  projectId: "fesageo-cf82b",
  storageBucket: "fesageo-cf82b.firebasestorage.app",
  messagingSenderId: "817340126615",
  appId: "1:817340126615:web:d115544a1e5b4354b8a0d2",
  measurementId: "G-XN2QXPBQMH"
};

// تهيئة التطبيق وقاعدة البيانات
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// تصدير كل الدوال والمتغيرات اللي تحتاجها صفحات الموقع المختلفة
export {
  db,
  collection,
  addDoc,
  getDocs,
  doc,
  getDoc,
  updateDoc,
  deleteDoc,
  orderBy,
  query,
  where
};
