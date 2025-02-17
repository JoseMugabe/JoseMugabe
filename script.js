document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();
    document.getElementById("success-message").style.display = "block";
    setTimeout(() => {
        document.getElementById("success-message").style.display = "none";
    }, 3000);
});
