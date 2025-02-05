function makePayment() {
    var service = document.getElementById("service").value;
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;

    if (!name || !email) {
        alert("Please fill all details");
        return;
    }

    var amount = service === "rent-friend" ? 500 : service === "talk-to-me" ? 300 : 700;

    var options = {
        "key": "rzp_live_vECzUJjFz7836Q",
        "amount": amount * 100,
        "currency": "INR",
        "name": "BookMyServiceNow",
        "description": "Service Payment",
        "handler": function (response) {
            alert("Payment Successful! Booking Confirmed.");
        },
        "prefill": {
            "name": name,
            "email": email
        }
    };

    var rzp = new Razorpay(options);
    rzp.open();
}
