import React, { useState } from 'react';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import styles from "./index.module.css";
import { EMAIL_REQ_FIELD, ERR_MSG, ERR_REQ_MSG, ERROR_MSG_EMAIL, ERROR_MSG_EMAIL_REQ, ERROR_MSG_NAME, INVALID_EMAIL, NAME_REQ, PHONE_NO_REQ, PHONE_NO_REQ_LENGTH, PHONE_NO_VALID, SUCCESS_MSG, SUGGESTIONS_MSG, SUGGESTIONS_REQ_MSG, WARNING_MSG } from '../../constants/index'

interface FeedbackForm {
  TotalData: any;
}
const FeedbackForm: React.FC<FeedbackForm> = ({ TotalData }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    suggestions: ''
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    phone: '',
    suggestions: ''
  });
  // state management for snackbar

  type SnackbarSeverity = 'success' | 'error' | 'warning' | 'info';

  interface SnackbarState {
    open: boolean;
    message: string;
    severity: SnackbarSeverity;
  }
  const [snackbar, setSnackbar] = useState<SnackbarState>({
    open: false,
    message: '',
    severity: 'success', // success, error, warning, or info  
  });

  const handleSnackbarClose = () => {
    setSnackbar({ ...snackbar, open: false });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    validateField(name, value);
  };

  const validateField = (name: string, value: string) => {
    let error = '';

    if (name === 'name' && !value) {
      error = ERROR_MSG_NAME;
    }

    if (name === 'email') {
      if (!value) {
        error = ERROR_MSG_EMAIL_REQ;
        // Updated regax pattern to accept the different domains of email
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
        error = ERROR_MSG_EMAIL;
      }
    }


    const cleanValue = value.trim(); // Remove leading/trailing spaces

    // Remove leading zeros from the value (for 11-digit numbers starting with 0)
    const trimmedValue = cleanValue.replace(/^0+/, '');

    // Remove any non-digit characters (optional, to ensure only digits are processed)
    const digitOnlyValue = trimmedValue.replace(/\D/g, '');

    // Check if the field is 'phone'
    if (name === 'phone') {
      if (!digitOnlyValue) {
        error = PHONE_NO_REQ; // Phone number is required
      } else if (
        digitOnlyValue.length !== 10 ||     // Ensure exactly 10 digits
        !/^\d+$/.test(digitOnlyValue)       // Ensure only digits are present
      ) {
        error = PHONE_NO_VALID; // Invalid phone number format
      }
    }


    if (name === 'suggestions' && !value) {
      error = SUGGESTIONS_MSG;
    }

    setErrors({ ...errors, [name]: error });
  };
  // Functionality for handling the form submission process
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {

    e.preventDefault();
    // Validates required fields and processes the form submission if all inputs meet the criteria.
    if (validateForm()) {
      try {
        // Updated the local URL to point to the TSUAT environment. 
        const response = await fetch(process.env.BASE_URL + "api/feedback-forms", {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${process.env.NEXT_PUBLIC_ACCESS_KEY}`
          },
          body: JSON.stringify({
            data: formData,
          }),
        });
        // Displays a snackbar with a "form submitted" message if the response fulfills all the required conditions.
        if (response.ok) {
          setSnackbar({
            open: true,
            message: SUCCESS_MSG,
            severity: 'success',
          });
          setFormData({
            name: '',
            email: '',
            phone: '',
            suggestions: '',
          });
          setErrors({
            name: '',
            email: '',
            phone: '',
            suggestions: '',
          });
        } else {
          // if the condition is not satisfied then this message is will show
          setSnackbar({
            open: true,
            message: ERR_MSG,
            severity: 'error',
          });
        }
      } catch (error) {
        // If the condition fails, the catch block will handle the error and display the corresponding message.
        setSnackbar({
          open: true,
          message: ERR_REQ_MSG,
          severity: 'error',
        });
      }
    } else {
      // If any required fields are left empty, this message will be displayed to notify the user.
      setSnackbar({
        open: true,
        message: WARNING_MSG,
        severity: 'warning',
      });
    }
  };

  const validateForm = () => {
    const newErrors = { name: '', email: '', phone: '', suggestions: '' };
    let isValid = true;

    if (!formData.name) {
      newErrors.name = NAME_REQ;
      isValid = false;
    }

    if (!formData.email) {
      newErrors.email = EMAIL_REQ_FIELD;
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = INVALID_EMAIL;
      isValid = false;
    }

    const cleanValue = formData.phone
      .trim()                              // Remove leading/trailing spaces
      .replace(/^0+/, '');                 // Remove leading zeros

    // Ensure the value contains only digits
    const digitOnlyValue = cleanValue.replace(/\D/g, '');

    if (!digitOnlyValue) {
      newErrors.phone = PHONE_NO_REQ;      // Phone number is required
      isValid = false;
    } else if (
      digitOnlyValue.length !== 10 ||      // Ensure exactly 10 digits
      !/^\d+$/.test(digitOnlyValue)        // Ensure only digits are present
    ) {
      newErrors.phone = PHONE_NO_REQ_LENGTH; // Invalid phone number length or format
      isValid = false;
    }


    if (!formData.suggestions) {
      newErrors.suggestions = SUGGESTIONS_REQ_MSG;
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  // We are using the handleKeyDown function to prevent form submission when the Error message is shown.
  const handleKeyDown = (e: React.KeyboardEvent) => {
    const target = e.target as HTMLInputElement | HTMLTextAreaElement;
    if (e.key === 'Enter') {
      const fieldName = target.name;
      if (errors[fieldName]) {
        e.preventDefault();
      }
    }
  };

  return (
    <div className={styles.feedbackFormCard}>
      <div className={styles.formTitle}>{TotalData?.FeedbackTitle}</div>
      <form className={styles.feedBackForm} onSubmit={handleSubmit}>
        <div className={styles.field}>
          <label className={styles.label}>{TotalData?.Name}</label>
          <input
            type={TotalData?.TextType}
            name="name"
            placeholder={TotalData?.NamePlaceholder}
            className={styles.inputField}
            value={formData.name}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            required
          />
          {errors.name && <p className={styles.errorMessage}>{errors.name}</p>}
        </div>
        <div className={styles.field}>
          <label className={styles.label}>{TotalData?.Email}</label>
          <input
            type={TotalData?.Email}
            name="email"
            placeholder={TotalData?.EmailPlaceholder}
            className={styles.inputField}
            value={formData.email}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            required
          />
          {errors.email && <p className={styles.errorMessage}>{errors.email}</p>}
        </div>
        <div className={styles.field}>
          <label className={styles.label}>{TotalData?.number}</label>
          <input
            type={TotalData?.TelephoneType}
            name="phone"
            placeholder={TotalData?.NumberPlaceholder}
            className={`${styles.inputField} ${TotalData?.TelephoneType === 'number' ? styles.noSpin : ''}`} // Add noSpin class conditionally
            value={formData.phone}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            required
          />
          {errors.phone && <p className={styles.errorMessage}>{errors.phone}</p>}
        </div>
        <div className={styles.field}>
          <label className={styles.label}>{TotalData?.Suggestions}</label>
          <textarea
            name="suggestions"
            placeholder={TotalData?.FeedbackPlaceHolder}
            className={styles.suggestion}
            value={formData.suggestions}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            required
          />
          {errors.suggestions && <p className={styles.errorMessage}>{errors.suggestions}</p>}
        </div>
        <input type={TotalData?.SubmitType} value="Send" className={styles.submitButton} />
      </form>

      {/* Snackbar for feedback */}
      <Snackbar
        open={snackbar.open}
        autoHideDuration={2000}
        onClose={handleSnackbarClose}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        style={{ zIndex: 99999, top: "20%" }}
      >
        <Alert onClose={handleSnackbarClose} severity={snackbar.severity} sx={{ width: '100%' }}>
          {snackbar.message}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default FeedbackForm;

