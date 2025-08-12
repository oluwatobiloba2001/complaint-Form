const form = document.getElementById('form');

    // Get form fields
    const fields = {
        'full-name': document.getElementById('full-name'),
        'email': document.getElementById('email'),
        'order-no': document.getElementById('order-no'),
        'product-code': document.getElementById('product-code'),
        'quantity': document.getElementById('quantity'),
        'complaints-group': document.getElementById('complaints-group'),
        'complaint-description': document.getElementById('complaint-description'),
        'solutions-group': document.getElementById('solutions-group'),
        'solution-description': document.getElementById('solution-description')
    };

    // Helper: check if 'Other' checkbox/radio is selected
    const isOtherChecked = (group, type) => {
        const inputs = group.querySelectorAll(`input[type="${type}"]`);
        for (let input of inputs) {
            if (input.checked && input.value.toLowerCase() === 'other') {
                return true;
            }
        }
        return false;
    };

    // Validation logic
    const validateForm = () => {
        return {
            'full-name': fields['full-name'].value.trim() !== '',
            'email': /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields['email'].value),
            'order-no': /^2024\d{6}$/.test(fields['order-no'].value),
            'product-code': /^[a-zA-Z]{2}\d{2}-[a-zA-Z]\d{3}-[a-zA-Z]{2}\d$/.test(fields['product-code'].value),
            'quantity': /^\d+$/.test(fields['quantity'].value) && parseInt(fields['quantity'].value) > 0,
            'complaints-group': fields['complaints-group'].querySelectorAll('input[type="checkbox"]:checked').length > 0,
            'complaint-description':
                !isOtherChecked(fields['complaints-group'], 'checkbox') ||
                fields['complaint-description'].value.trim().length >= 20,
            'solutions-group': fields['solutions-group'].querySelectorAll('input[type="radio"]:checked').length > 0,
            'solution-description':
                !isOtherChecked(fields['solutions-group'], 'radio') ||
                fields['solution-description'].value.trim().length >= 20
        };
    };

    const isValid = (results) => {
        return Object.values(results).every(v => v === true);
    };

    // Border coloring
    const setBorder = (element, valid) => {
        element.style.border = `2px solid ${valid ? 'green' : 'red'}`;
    };

    const setGroupBorder = (group, valid) => {
        group.style.border = `2px solid ${valid ? 'green' : 'red'}`;
        group.style.padding = '10px';
    };

    const updateFieldBorders = () => {
        const results = validateForm();
        for (let key in results) {
            if (key === 'complaints-group' || key === 'solutions-group') {
                setGroupBorder(fields[key], results[key]);
            } else {
                setBorder(fields[key], results[key]);
            }
        }
    };

    // Event Listeners for dynamic validation
    for (let key in fields) {
        if (key === 'complaints-group' || key === 'solutions-group') {
            const inputs = fields[key].querySelectorAll('input');
            inputs.forEach(input => input.addEventListener('change', updateFieldBorders));
        } else {
            fields[key].addEventListener('change', updateFieldBorders);
        }
    }

    // Submit validation
    form.addEventListener('submit', (e) => {
        const validationResults = validateForm();
        const allValid = isValid(validationResults);

        updateFieldBorders(); // show feedback on submit

        if (!allValid) {
            e.preventDefault();
            document.getElementById('message-box').textContent = 'Please correct the highlighted fields.';
        } else {
            document.getElementById('message-box').textContent = 'Form submitted successfully!';
        }
    });
