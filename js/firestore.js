// Firebase Firestore interaction logic will go here.

document.addEventListener('DOMContentLoaded', function() {
    // Contact Form Logic
    const contactForm = document.getElementById('contactForm');
    const formMessageDiv = document.getElementById('form-message');

    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent default form submission

            // In a later step, this will be replaced with Firebase submission logic
            console.log('Contact form submitted (not yet connected to Firebase)');

            const name = contactForm.name.value;
            const email = contactForm.email.value;
            const phone = contactForm.phone.value;
            const message = contactForm.message.value;

            console.log('Form Data:', { name, email, phone, message });

            // Simulate a success message for now
            if (formMessageDiv) {
                formMessageDiv.textContent = 'Message sent successfully! (Frontend demo)';
                formMessageDiv.className = 'form-status-message success'; // Add success class
            }
            contactForm.reset(); // Clear the form

            // Simulate an error message (for testing styling)
            // if (formMessageDiv) {
            //     formMessageDiv.textContent = 'Failed to send message. Please try again. (Frontend demo)';
            //     formMessageDiv.className = 'form-status-message error'; // Add error class
            // }
        });
    }

    // Function to save contact message to Firebase (to be implemented later)
    // async function saveContactMessage(name, email, phone, messageText) {
    //     try {
    //         // const db = firebase.firestore(); // Get Firestore instance
    //         // await db.collection('contactMessages').add({
    //         //     name: name,
    //         //     email: email,
    //         //     phone: phone,
    //         //     message: messageText,
    //         //     timestamp: firebase.firestore.FieldValue.serverTimestamp()
    //         // });
    //         // console.log('Message saved to Firebase');
    //         // return true;
    //     } catch (error) {
    //         // console.error('Error writing document: ', error);
    //         // return false;
    //     }
    // }

    // Get Quote Page Functionality
    const quoteForm = document.getElementById('quoteForm');
    const quotePlanTypeSelect = document.getElementById('quote-plan-type');
    const quoteAreaSqftInput = document.getElementById('quote-area-sqft');
    const quoteEstimatedCostDiv = document.getElementById('quote-estimated-cost');
    const quoteFormMessageDiv = document.getElementById('quote-form-message');

    function calculateAndUpdateQuoteCost() {
        if (!quotePlanTypeSelect || !quoteAreaSqftInput || !quoteEstimatedCostDiv) return;

        const area = parseFloat(quoteAreaSqftInput.value);
        const ratePerSqft = parseFloat(quotePlanTypeSelect.value);

        if (isNaN(area) || area <= 0 || isNaN(ratePerSqft) || ratePerSqft <=0) {
            quoteEstimatedCostDiv.textContent = 'Estimated Cost: ₹0';
            // Optionally provide more specific feedback if inputs are invalid but not empty
            if ((quoteAreaSqftInput.value && (isNaN(area) || area <= 0)) || (quotePlanTypeSelect.value && (isNaN(ratePerSqft) || ratePerSqft <=0))) {
                 quoteEstimatedCostDiv.textContent = 'Please enter valid area and select a plan.';
            }
            return;
        }
        const totalCost = area * ratePerSqft;
        quoteEstimatedCostDiv.textContent = `Estimated Cost: ₹${totalCost.toLocaleString('en-IN')}`;
    }

    if (quotePlanTypeSelect) {
        quotePlanTypeSelect.addEventListener('change', calculateAndUpdateQuoteCost);
    }
    if (quoteAreaSqftInput) {
        quoteAreaSqftInput.addEventListener('input', calculateAndUpdateQuoteCost);
    }

    if (quoteForm) {
        quoteForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent default form submission

            // Validate cost calculation one last time before "submitting"
            calculateAndUpdateQuoteCost();
            // A real submission would also check if cost is > 0 or if inputs are valid

            const planNameSelectedOption = quotePlanTypeSelect.options[quotePlanTypeSelect.selectedIndex];
            const planName = planNameSelectedOption ? planNameSelectedOption.dataset.name : "";
            const rate = quotePlanTypeSelect.value;
            const area = quoteAreaSqftInput.value;
            const estimatedCost = quoteEstimatedCostDiv.textContent; // Get the displayed string
            const name = document.getElementById('quote-name').value;
            const email = document.getElementById('quote-email').value;
            const phone = document.getElementById('quote-phone').value;
            const message = document.getElementById('quote-message').value;

            console.log('Quote form submitted (not yet connected to Firebase)');
            console.log('Quote Data:', { planName, rate, area, estimatedCost, name, email, phone, message });

            if (quoteFormMessageDiv) {
                if (!name || !email || !phone || !area || !rate ) { // Check rate instead of planName for validity
                     quoteFormMessageDiv.textContent = 'Please fill in all required project and contact details.';
                     quoteFormMessageDiv.className = 'form-status-message error';
                     return;
                }
                quoteFormMessageDiv.textContent = 'Quote request sent successfully! We will contact you shortly. (Frontend demo)';
                quoteFormMessageDiv.className = 'form-status-message success';
            }
            quoteForm.reset();
            quoteEstimatedCostDiv.textContent = 'Estimated Cost: ₹0'; // Reset cost display
        });
    }
});

// Function to save quote request to Firebase (to be implemented later)
// async function saveQuoteRequest(quoteData) {
//     try {
//         // const db = firebase.firestore(); // Get Firestore instance
//         // await db.collection('quoteRequests').add({
//         //     ...quoteData,
//         //     timestamp: firebase.firestore.FieldValue.serverTimestamp()
//         // });
//         // console.log('Quote request saved to Firebase');
//         // return true;
//     } catch (error) {
//         // console.error('Error writing document: ', error);
//         // return false;
//     }
// }
