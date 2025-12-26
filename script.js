function bookNow() {
    const phoneNumber = "8801847761970";
    const message = encodeURIComponent(
        "Hi, I want to book your luxury bridal makeup service."
    );

    window.open(
        "https://wa.me/" + phoneNumber + "?text=" + message,
        "_blank"
    );
}
