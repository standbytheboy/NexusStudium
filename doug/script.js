const togglesFaq = document.querySelectorAll('.faq-toggle')

togglesFaq.forEach(toggle => {
    toggle.addEventListener('click', () => {
        toggle.parentNode.classList.toggle('active2')
    })
})