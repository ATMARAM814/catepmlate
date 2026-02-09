// Mobile Menu Toggle
const mobileToggle = document.querySelector('.mobile-toggle');
const navLinks = document.querySelector('.nav-links');

if (mobileToggle) {
    mobileToggle.addEventListener('click', () => {
        navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
        if (navLinks.style.display === 'flex') {
            navLinks.style.flexDirection = 'column';
            navLinks.style.position = 'absolute';
            navLinks.style.top = '100%';
            navLinks.style.left = '0';
            navLinks.style.width = '100%';
            navLinks.style.background = 'white';
            navLinks.style.padding = '20px';
            navLinks.style.boxShadow = '0 5px 10px rgba(0,0,0,0.1)';
        }
    });
}

// GST Calculator Logic
function calculateGST() {
    const amount = parseFloat(document.getElementById('gst-amount').value);
    const rate = parseFloat(document.getElementById('gst-rate').value);
    const type = document.getElementById('gst-type').value;
    
    if (isNaN(amount)) {
        alert("Please enter a valid amount");
        return;
    }
    
    let gstAmount, netAmount, totalAmount;
    
    if (type === 'exclusive') {
        // GST is added to the amount
        netAmount = amount;
        gstAmount = (amount * rate) / 100;
        totalAmount = netAmount + gstAmount;
    } else {
        // GST is included in the amount
        totalAmount = amount;
        netAmount = amount / (1 + (rate / 100));
        gstAmount = totalAmount - netAmount;
    }
    
    document.getElementById('res-net').textContent = '₹' + netAmount.toFixed(2);
    document.getElementById('res-gst').textContent = '₹' + gstAmount.toFixed(2);
    document.getElementById('res-total').textContent = '₹' + totalAmount.toFixed(2);
}

// Smooth Scrolling for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
            
            // Close mobile menu if open
            if (window.innerWidth <= 768) {
                navLinks.style.display = 'none';
            }
        }
    });
});
