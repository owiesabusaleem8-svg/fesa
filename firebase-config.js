// استيراد المكتبات الأساسية من الإصدار الذي جاءك بالظبط
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.15.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.15.0/firebase-analytics.js";
// استيراد دوال قاعدة البيانات Firestore للاستخدام في الموقع
import { getFirestore, collection, addDoc, getDocs } from "https://www.gstatic.com/firebasejs/12.15.0/firebase-firestore.js";

// إعدادات مشروعك الرسمية الكاملة
const firebaseConfig = {
  apiKey: "AIzaSyCM8G90ijGh-05WBJOgLKgM0oscieDRiNs",
  authDomain: "fesageo-cf82b.firebaseapp.com",
  projectId: "fesageo-cf82b",
  storageBucket: "fesageo-cf82b.firebasestorage.app",
  messagingSenderId: "817340126615",
  appId: "1:817340126615:web:d115544a1e5b4354b8a0d2",
  measurementId: "G-XN2QXPBQMH"
};

// تهيئة تفعيل الخدمات
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app); // تفعيل قاعدة البيانات

// تصدير المتغيرات لكي نستخدمها في باقي صفحات الموقع
export { db, collection, addDoc, getDocs };