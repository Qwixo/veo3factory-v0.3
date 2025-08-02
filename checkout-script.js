// Simple demo checkout - no payment processing
let isProcessing = false;

function createDemoCheckout() {
    if (isProcessing) return;
    isProcessing = true;
    
    const checkoutBtn = document.getElementById('checkout-btn');
    
    // Show loading state
    checkoutBtn.innerHTML = `
        <span class="button-text">PROCESSING...</span>
        <span class="button-subtext">Please wait</span>
    `;
    checkoutBtn.disabled = true;
    checkoutBtn.style.opacity = '0.7';
    checkoutBtn.style.cursor = 'not-allowed';
    
    // Simulate processing for demo (no actual payment)
    setTimeout(() => {
        window.location.href = 'thank-you.html';
    }, 2000);
}

// Initialize checkout functionality
document.addEventListener('DOMContentLoaded', () => {
    const checkoutBtn = document.getElementById('checkout-btn');
    
    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', createDemoCheckout);
        console.log('Demo checkout initialized - no payment processing');
    }
});