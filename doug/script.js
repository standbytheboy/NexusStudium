const togglesFaq = document.querySelectorAll('.faq-toggle')

togglesFaq.forEach(toggle => {
    toggle.addEventListener('click', () => {
        toggle.parentNode.classList.toggle('active2')
    })
});

document.getElementById("help_faq").addEventListener("click", () => {
    let faqContainer = document.getElementById("faq_container");
        if (faqContainer.style.display === "none" || faqContainer.style.display === "") {
            faqContainer.style.display ==="block";
        } else {
            faqContainer.style.display = "none";
        };

})