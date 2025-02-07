// script.js
<script type="module">
    // Import the functions you need from the SDKs you need
    import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
    import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-analytics.js";

    // Your web app's Firebase configuration
    const firebaseConfig = {
        apiKey: "AIzaSyDQg0KQ2ecP8dRXDN6E0OSW_oZm69xe0bQ",
        authDomain: "bookmyservicechat.firebaseapp.com",
        projectId: "bookmyservicechat",
        storageBucket: "bookmyservicechat.firebasestorage.app",
        messagingSenderId: "640781387847",
        appId: "1:640781387847:web:7808c9a8359b4661d28962",
        measurementId: "G-EYDQSQX12H"
    };

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);
</script>

function bookService(service, price) {
  var options = {
    "key": "rzp_live_vECzUJjFz7836Q", // Replace with your actual Razorpay API key (you already provided this)
    "amount": price * 100, // Amount in paise
    "currency": "INR",
    "name": "BookMyServiceNow",
    "description": service,
    "image": "https://via.placeholder.com/150", // Replace with your logo URL if available
    "handler": function (response) {
      // On successful payment, redirect to Payment Success page with service info
      window.location.href = "payment-success.html?service=" + encodeURIComponent(service);
    },
    "prefill": {
      "name": "Customer Name", // Ideally, you’d prefill based on user info if logged in
      "email": "customer@example.com"
    },
    "theme": {
      "color": "#28a745"
    }
  };

  var rzp = new Razorpay(options);
  rzp.open();
}


