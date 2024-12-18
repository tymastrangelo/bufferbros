document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("quote-modal");
    const openButton = document.getElementById("quote-button");
    const closeButton = document.querySelector(".close-button");

    // Open modal
    openButton.addEventListener("click", () => {
        modal.style.display = "flex";
    });

    // Close modal
    closeButton.addEventListener("click", () => {
        modal.style.display = "none";
    });

    // Close modal on outside click
    window.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });
});