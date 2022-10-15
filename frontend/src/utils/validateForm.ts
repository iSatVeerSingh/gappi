export type FormDataType = {
  fullName: string;
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
};

type FormType = 'login' | 'signup';

export const ValidateForm = (
  formData: Partial<FormDataType>,
  formType: FormType
): Partial<FormDataType> | null => {
  const formErrors: Partial<FormDataType> = {};

  if (formType === 'login') {
    if (!formData.username || formData.username.length < 4) {
      formErrors.username = 'username must be atleast 4 characters long';
    }
    if (!formData.password || formData.password.length < 8) {
      formErrors.password = 'password must be atleast 8 characters long';
    }
  }

  if (formType === 'signup') {
    if (!formData.fullName || formData.fullName.length < 2) {
      formErrors.fullName = 'full name must be atleast 2 characters long';
    }
    if (
      !formData.email ||
      !/^[a-z0-9\.]+@[a-z0-9]+\.[a-z]+$/.test(formData.email)
    ) {
      formErrors.email = 'provide a valid email';
    }
    if (!formData.username || formData.username.length < 4) {
      formErrors.username = 'username must be atleast 4 characters long';
    }
    if (!formData.password || formData.password.length < 8) {
      formErrors.password = 'password must be atleast 8 characters long';
    }
    if (
      !formData.confirmPassword ||
      (formData.password && formData.confirmPassword !== formData.password)
    ) {
      formErrors.confirmPassword = 'password does not match';
    }
  }

  if (Object.keys(formErrors).length !== 0) {
    return formErrors;
  }

  return null;
};
