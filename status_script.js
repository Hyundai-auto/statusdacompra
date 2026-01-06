document.addEventListener('DOMContentLoaded', () => {
    updateProgress();
});

function updateProgress() {
    const steps = document.querySelectorAll('.step');
    const progressBar = document.getElementById('progressBar');
    const activeSteps = document.querySelectorAll('.step.active');
    
    // Calcula a porcentagem da barra de progresso
    // Se temos 5 etapas, temos 4 espaços entre elas.
    // A altura deve chegar até o centro do ícone da última etapa ativa.
    if (activeSteps.length > 0) {
        const totalSteps = steps.length;
        const activeCount = activeSteps.length;
        
        // Porcentagem baseada no número de etapas ativas
        // (activeCount - 1) / (totalSteps - 1) * 100
        const percentage = ((activeCount - 1) / (totalSteps - 1)) * 100;
        
        progressBar.style.height = `${percentage}%`;
    }
}

// Função utilitária para mudar o status dinamicamente (exemplo de uso futuro)
function setOrderStatus(statusIndex) {
    const steps = document.querySelectorAll('.step');
    steps.forEach((step, index) => {
        if (index <= statusIndex) {
            step.classList.add('active');
        } else {
            step.classList.remove('active');
        }
    });
    updateProgress();
}
