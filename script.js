function bookService(service, price) {
    var options = {
        "key": "rzp_live_vECzUJjFz7836Q", // Replace with your Razorpay API key
        "amount": price * 100,
        "currency": "INR",
        "name": "BookMyServiceNow",
        "description": service,
        "handler": function (response) {
            alert("Payment Successful! Booking Confirmed for " + service);
        }
    };

    var rzp = new Razorpay(options);
    rzp.open();
}

