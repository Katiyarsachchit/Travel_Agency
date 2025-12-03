// Function to Open the Booking Modal
function openBooking(packageName) {
    // 1. Get the modal element
    const modal = document.getElementById("bookingModal");
    
    // 2. Set the modal to display flex (to center it)
    modal.style.display = "flex";

    // 3. Pre-fill the package name in the input box
    document.getElementById("pkgName").value = packageName;
}

// Function to Close the Booking Modal
function closeBooking() {
    const modal = document.getElementById("bookingModal");
    modal.style.display = "none";
}

// Handle Form Submission
document.addEventListener("DOMContentLoaded", function() {
    
    const bookingForm = document.getElementById("bookingForm");

    bookingForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Stop page from refreshing

        // Get user details
        const name = document.getElementById("userName").value;
        const pkg = document.getElementById("pkgName").value;

        // Simulate a success message
        alert(`Congratulations ${name}! \nYour trip to ${pkg} has been successfully booked. \nWe will contact you shortly.`);

        // Close modal and reset form
        closeBooking();
        bookingForm.reset();
    });

    // Close modal if user clicks outside the box
    window.onclick = function(event) {
        const modal = document.getElementById("bookingModal");
        if (event.target == modal) {
            closeBooking();
        }
    }
});