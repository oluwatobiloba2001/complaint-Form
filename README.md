
# 📝 Customer Complaint Form

A fully functional and styled **Customer Complaint Form** built with **HTML, CSS, and JavaScript**.  
The form validates user input in real-time, provides visual feedback, and prevents submission until all required fields are valid.

---

## 📌 Features

- **Custom Validation**
  - Checks for valid name, email, order number, product code, and quantity.
  - Ensures at least one complaint reason and one desired solution is selected.
  - Requires detailed descriptions if "Other" is chosen.
- **Live Feedback**
  - Fields are highlighted **green** if valid, **red** if invalid.
- **Regex-based Validation**
  - Uses regular expressions for email, product code, and order number formats.
- **Manual Submission Control**
  - Prevents submission until all validations pass.
  - Displays messages for both success and error states.
- **Responsive Design**
  - Works well on desktop and mobile devices.

---

## 📂 Project Structure

.
├── index.html       # Main HTML structure of the form
├── styles.css       # Styling for form layout, borders, and responsiveness
├── script.js        # JavaScript validation and form handling logic
└── README.md        # Project documentation



## ⚙️ Installation & Usage

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/customer-complaint-form.git

2. **Navigate to the project folder**

   ```bash
   cd customer-complaint-form
   ```

3. **Open the `index.html` file in your browser**

   ```bash
   # On most systems
   open index.html
   # Or double-click it in your file explorer
   ```

---

## 🖥️ How It Works

1. **User fills in all required fields**

   * Full Name
   * Email Address (valid format)
   * Order No. (must start with `2024` followed by 6 digits)
   * Product Code (specific letter-number pattern)
   * Quantity (number greater than 0)
   * At least one complaint reason
   * At least one desired solution

2. **Real-time validation**

   * As the user types or selects options, the field borders change color.
   * Error messages appear when trying to submit an incomplete form.

3. **Form submission**

   * If all validations pass, the form displays a success message.
   * If not, it prevents submission and highlights problem fields.

---

## 🧪 Example Valid Inputs

| Field        | Example Input                               |
| ------------ | ------------------------------------------- |
| Full Name    | John Doe                                    |
| Email        | [john@example.com](mailto:john@example.com) |
| Order No     | 2024123456                                  |
| Product Code | AB12-C123-DE4                               |
| Quantity     | 2                                           |

---

## 📜 License

This project is licensed under the **MIT License** – feel free to use and modify it.

---

## 🤝 Contributing

If you’d like to contribute:

1. Fork this repository.
2. Create a new branch for your changes.
3. Submit a pull request describing your improvements.

If you want, I can **also add usage instructions for `checkValidity()`** so that someone reading your README knows there’s an alternative simpler way to handle validation. That could make it even more complete.
```
