document.addEventListener('DOMContentLoaded', function() {

    // --- Accordion Functionality for Facilities Page ---
    const accordionButtons = document.querySelectorAll('.accordion-button');

    accordionButtons.forEach(button => {
        button.addEventListener('click', () => {
            const content = button.nextElementSibling;
            
            // Close other open accordions
            accordionButtons.forEach(otherButton => {
                if (otherButton !== button) {
                    otherButton.nextElementSibling.style.maxHeight = null;
                }
            });

            // Toggle the clicked accordion
            if (content.style.maxHeight) {
                content.style.maxHeight = null;
            } else {
                content.style.maxHeight = content.scrollHeight + "px";
            } 
        });
    });

});

