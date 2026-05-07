export const validateForm = (formData) => {
  const errors = {};

  if (!formData.userName || formData.userName.trim().length < 5) {
    errors.userName = "Imię i nazwisko musi mieć min. 5 znaków.";
  }

  const phoneRegex = /^[0-9]{9,12}$/;
  if (!formData.phone || !phoneRegex.test(formData.phone.replace(/\s/g, ""))) {
    errors.phone = "Podaj poprawny numer telefonu.";
  }

  if (!formData.subject || formData.subject.trim().length < 3) {
    errors.subject = "Wpisz temat wiadomości.";
  }

  if (!formData.message || formData.message.trim().length < 15) {
    errors.message = "Wiadomość musi mieć min. 15 znaków.";
  }

  if (!formData.rodo) {
    errors.rodo = "Musisz zaakceptować zgodę RODO.";
  }

  return errors;
};