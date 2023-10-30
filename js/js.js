function checkForName(fullName, firstName) {
  let message;
  const fullNameToLow = fullName.toLowerCase();
  const firstNameToLowCase = firstName.toLowerCase();

  if (fullNameToLow.includes(firstNameToLowCase)) {
    message = true;
  } else {
    message = false;

    return message;
  }
  
}
