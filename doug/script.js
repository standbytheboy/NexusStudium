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