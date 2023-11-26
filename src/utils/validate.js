export const checkValidate = (email, password) => {
  const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(
    email
  );
  const isPasswordValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

  // if (!name) return "Please enter the full name";
  if (!isEmailValid) return "Email is not valid, Try again.";
  if (!isPasswordValid) return "Password is not valid, Try again.";

  return null;
};

export const checkValidateName = (name) => {
  if (!name) return "Please enter the full name";
  return null;
};
