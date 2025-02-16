function togglePainel(painelId) {
    const paineis = document.querySelectorAll('.painel');
    
    paineis.forEach(painel => {
        if (painel.id === painelId) {
            painel.style.display = painel.style.display === "block" ? "none" : "block";
        } else {
            painel.style.display = "none";
        }
    });
}

document.addEventListener("DOMContentLoaded", function () {
    const faqs = document.querySelectorAll(".faq");

    faqs.forEach(faq => {
        faq.addEventListener("click", function () {
            this.classList.toggle("active2");

            const faqText = this.querySelector(".faq-text");
            if (faqText.style.display === "none" || !faqText.style.display) {
                faqText.style.display = "block";
            } else {
                faqText.style.display = "none";
            }
        });
    });
});
