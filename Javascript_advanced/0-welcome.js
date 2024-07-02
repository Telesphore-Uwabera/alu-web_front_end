function welcome(firstName, lastName) {
  let fullName = `${firstName} ${lastName}`;

  function displayFullName() {
    alert(`Welcome ${fullName}!`);
  }

  displayFullName();
}

// Testing the function
welcome('Holberton', 'School');

