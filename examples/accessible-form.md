# Example: Accessible Form with Validation

This example demonstrates how to build an accessible contact form following WCAG 2.2 Level AA standards with proper validation and error handling.

## Overview

This form includes:

- Proper label associations
- Keyboard navigation support
- ARIA live regions for error announcements
- Inline validation with helpful error messages
- Appropriate input types for mobile optimization
- Clear visual focus indicators

## Complete Implementation

```tsx
import React, { useState, FormEvent } from "react";

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
}

export default function AccessibleContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // Validation functions
  const validateName = (name: string): string | undefined => {
    if (!name.trim()) {
      return "Name is required";
    }
    if (name.trim().length < 2) {
      return "Name must be at least 2 characters";
    }
    return undefined;
  };

  const validateEmail = (email: string): string | undefined => {
    if (!email.trim()) {
      return "Email is required";
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return "Please enter a valid email address";
    }
    return undefined;
  };

  const validatePhone = (phone: string): string | undefined => {
    if (!phone.trim()) {
      return "Phone number is required";
    }
    const phoneRegex = /^[\d\s\-\+\(\)]+$/;
    if (!phoneRegex.test(phone)) {
      return "Please enter a valid phone number";
    }
    return undefined;
  };

  const validateMessage = (message: string): string | undefined => {
    if (!message.trim()) {
      return "Message is required";
    }
    if (message.trim().length < 10) {
      return "Message must be at least 10 characters";
    }
    return undefined;
  };

  // Handle field blur for validation
  const handleBlur = (field: keyof FormData) => {
    setTouched({ ...touched, [field]: true });

    let error: string | undefined;
    switch (field) {
      case "name":
        error = validateName(formData.name);
        break;
      case "email":
        error = validateEmail(formData.email);
        break;
      case "phone":
        error = validatePhone(formData.phone);
        break;
      case "message":
        error = validateMessage(formData.message);
        break;
    }

    setErrors({ ...errors, [field]: error });
  };

  // Handle input change
  const handleChange = (field: keyof FormData, value: string) => {
    setFormData({ ...formData, [field]: value });

    // Clear error when user starts typing
    if (touched[field] && errors[field]) {
      setErrors({ ...errors, [field]: undefined });
    }
  };

  // Validate all fields
  const validateForm = (): boolean => {
    const newErrors: FormErrors = {
      name: validateName(formData.name),
      email: validateEmail(formData.email),
      phone: validatePhone(formData.phone),
      message: validateMessage(formData.message),
    };

    setErrors(newErrors);
    setTouched({
      name: true,
      email: true,
      phone: true,
      message: true,
    });

    return !Object.values(newErrors).some((error) => error !== undefined);
  };

  // Handle form submission
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      setSubmitSuccess(true);
      setFormData({ name: "", email: "", phone: "", message: "" });
      setTouched({});
      setErrors({});

      // Reset success message after 5 seconds
      setTimeout(() => setSubmitSuccess(false), 5000);
    } catch (error) {
      setErrors({
        ...errors,
        message: "Failed to submit form. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Contact Us</h1>

      {/* Success message with ARIA live region */}
      {submitSuccess && (
        <div
          role="alert"
          aria-live="polite"
          className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg text-green-800"
        >
          <strong>Success!</strong> Your message has been sent. We'll get back
          to you soon.
        </div>
      )}

      <form onSubmit={handleSubmit} noValidate>
        {/* Name field */}
        <div className="mb-6">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Name{" "}
            <span className="text-red-600" aria-label="required">
              *
            </span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={(e) => handleChange("name", e.target.value)}
            onBlur={() => handleBlur("name")}
            aria-required="true"
            aria-invalid={touched.name && errors.name ? "true" : "false"}
            aria-describedby={
              touched.name && errors.name ? "name-error" : undefined
            }
            className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              touched.name && errors.name
                ? "border-red-500 focus:ring-red-500"
                : "border-gray-300"
            }`}
          />
          {touched.name && errors.name && (
            <p
              id="name-error"
              role="alert"
              className="mt-2 text-sm text-red-600"
            >
              {errors.name}
            </p>
          )}
        </div>

        {/* Email field */}
        <div className="mb-6">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Email{" "}
            <span className="text-red-600" aria-label="required">
              *
            </span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={(e) => handleChange("email", e.target.value)}
            onBlur={() => handleBlur("email")}
            aria-required="true"
            aria-invalid={touched.email && errors.email ? "true" : "false"}
            aria-describedby={
              touched.email && errors.email ? "email-error" : undefined
            }
            className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              touched.email && errors.email
                ? "border-red-500 focus:ring-red-500"
                : "border-gray-300"
            }`}
          />
          {touched.email && errors.email && (
            <p
              id="email-error"
              role="alert"
              className="mt-2 text-sm text-red-600"
            >
              {errors.email}
            </p>
          )}
        </div>

        {/* Phone field */}
        <div className="mb-6">
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Phone{" "}
            <span className="text-red-600" aria-label="required">
              *
            </span>
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={(e) => handleChange("phone", e.target.value)}
            onBlur={() => handleBlur("phone")}
            aria-required="true"
            aria-invalid={touched.phone && errors.phone ? "true" : "false"}
            aria-describedby={
              touched.phone && errors.phone ? "phone-error" : undefined
            }
            className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              touched.phone && errors.phone
                ? "border-red-500 focus:ring-red-500"
                : "border-gray-300"
            }`}
          />
          {touched.phone && errors.phone && (
            <p
              id="phone-error"
              role="alert"
              className="mt-2 text-sm text-red-600"
            >
              {errors.phone}
            </p>
          )}
        </div>

        {/* Message field */}
        <div className="mb-6">
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Message{" "}
            <span className="text-red-600" aria-label="required">
              *
            </span>
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            value={formData.message}
            onChange={(e) => handleChange("message", e.target.value)}
            onBlur={() => handleBlur("message")}
            aria-required="true"
            aria-invalid={touched.message && errors.message ? "true" : "false"}
            aria-describedby={
              touched.message && errors.message ? "message-error" : undefined
            }
            className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              touched.message && errors.message
                ? "border-red-500 focus:ring-red-500"
                : "border-gray-300"
            }`}
          />
          {touched.message && errors.message && (
            <p
              id="message-error"
              role="alert"
              className="mt-2 text-sm text-red-600"
            >
              {errors.message}
            </p>
          )}
        </div>

        {/* Submit button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </button>
      </form>
    </div>
  );
}
```

## CSS Styles (if not using Tailwind)

```css
/* Focus styles for accessibility */
input:focus,
textarea:focus,
button:focus {
  outline: 2px solid #3b82f6;
  outline-offset: 2px;
}

/* Error state styles */
.input-error {
  border-color: #ef4444;
}

.input-error:focus {
  outline-color: #ef4444;
}

/* Success message animation */
@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.success-message {
  animation: slideIn 0.3s ease-out;
}

/* Ensure minimum touch target size (44x44px) for mobile */
@media (max-width: 768px) {
  button,
  input,
  textarea {
    min-height: 44px;
  }
}
```

## Key Accessibility Features

1. **Semantic HTML**: Uses proper `<label>`, `<input>`, and `<button>` elements
2. **Label Association**: Each input has an associated label using `htmlFor`/`id`
3. **Required Field Indicators**: Visual (\*) and screen reader announcements
4. **ARIA Attributes**:
   - `aria-required="true"` for required fields
   - `aria-invalid` to indicate validation state
   - `aria-describedby` to link error messages
   - `role="alert"` for error and success messages
   - `aria-live="polite"` for success announcements
5. **Keyboard Navigation**: All interactive elements are keyboard accessible
6. **Focus Management**: Clear focus indicators with 2px outline
7. **Error Handling**: Inline error messages announced to screen readers
8. **Input Types**: Uses `type="email"` and `type="tel"` for better mobile experience
9. **Color Contrast**: Error red (#ef4444) and success green meet WCAG AA standards
10. **Touch Targets**: Minimum 44x44px for mobile devices

## Testing Checklist

- [ ] Tab through all form fields in order
- [ ] Submit form with empty fields and verify error messages
- [ ] Test with screen reader (NVDA, JAWS, or VoiceOver)
- [ ] Verify error messages are announced
- [ ] Test on mobile device with virtual keyboard
- [ ] Check color contrast with browser DevTools
- [ ] Verify focus indicators are visible
- [ ] Test form submission success flow
- [ ] Validate with axe DevTools or Lighthouse

## WCAG 2.2 Compliance

This form meets the following WCAG 2.2 Level AA criteria:

- **1.3.1 Info and Relationships**: Proper label associations
- **1.4.3 Contrast (Minimum)**: 4.5:1 contrast ratio for text
- **2.1.1 Keyboard**: All functionality available via keyboard
- **2.4.7 Focus Visible**: Clear focus indicators
- **3.2.2 On Input**: No unexpected context changes
- **3.3.1 Error Identification**: Errors clearly identified
- **3.3.2 Labels or Instructions**: Clear labels and instructions
- **3.3.3 Error Suggestion**: Helpful error messages
- **4.1.2 Name, Role, Value**: Proper ARIA attributes
- **4.1.3 Status Messages**: ARIA live regions for announcements
