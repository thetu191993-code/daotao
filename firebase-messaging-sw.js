// Nạp thư viện Firebase phiên bản tương thích chạy ngầm
importScripts('https://www.gstatic.com/firebasejs/10.12.2/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.12.2/firebase-messaging-compat.js');

// Cấu hình Firebase của anh
const firebaseConfig = {
    apiKey: "AIzaSyC7iFVmgoUL-sW3UlaMV0rlNQYugFiw2uA",
    authDomain: "ehs-training-app.firebaseapp.com",
    projectId: "ehs-training-app",
    storageBucket: "ehs-training-app.firebasestorage.app",
    messagingSenderId: "354083430003",
    appId: "1:354083430003:web:059953b7b9c1a9470a5406"
};

// Khởi tạo Firebase trong môi trường chạy ngầm
firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

// Hàm hứng thông báo khi trình duyệt bị đóng
messaging.onBackgroundMessage(function(payload) {
  console.log('[firebase-messaging-sw.js] Nhận thông báo ngầm: ', payload);
  
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: 'https://cdn-icons-png.flaticon.com/512/1022/1022331.png', // Có thể thay bằng link Logo công ty anh
    badge: 'https://cdn-icons-png.flaticon.com/512/1022/1022331.png'
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
