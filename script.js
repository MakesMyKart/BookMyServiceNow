// script.js
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


