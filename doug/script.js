function togglePainel(painelId) {
    const painel = document.getElementById(painelId);
    if (painel.style.display === "none" || painel.style.display === "") {
        painel.style.display = "block";
    } else {
        painel.style.display = "none";
    }
}