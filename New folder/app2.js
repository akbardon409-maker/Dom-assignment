// Part 2: Focus and Blur Event Handlers
function handleFocus(fieldName) {
  console.log(`User ${fieldName} field par click/focus kar chuka hai.`);
}

function handleBlur(fieldName) {
  console.log(`User ${fieldName} field se bahar nikal gaya hai.`);
}

// Part 3: Mouse Event Handlers on Submit Button
function handleMouseOver() {
  console.log("Mouse enters Submit button");
}

function handleMouseOut() {
  console.log("Mouse leaves Submit button");
}

function handleButtonClick() {
  console.log("Submit button clicked");
}

// Part 6: Main Form Registration Function
function registerUser(event) {
  // Page reload hone se rokne ke liye
  event.preventDefault();

  // Part 1: Input values get karna
  const username = document.getElementById("username").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const age = Number(document.getElementById("age").value);
  const gender = document.getElementById("gender").value;
  const city = document.getElementById("city").value;

  // Part 4: Age Check Logic
  let ageCategory = "";
  if (age < 13) {
    ageCategory = "Child";
  } else if (age >= 13 && age <= 17) {
    ageCategory = "Teenager";
  } else if (age >= 18 && age <= 59) {
    ageCategory = "Adult";
  } else {
    ageCategory = "Senior";
  }

  // Part 5: Switch Case for City Message
  let cityMessage = "";
  switch (city) {
    case "Karachi":
      cityMessage = "Welcome to the City of Lights!";
      break;
    case "Lahore":
      cityMessage = "Welcome to the Heart of Pakistan!";
      break;
    case "Islamabad":
      cityMessage = "Welcome to the Capital!";
      break;
    default:
      cityMessage = "Welcome from another city!";
      break;
  }

  // Console output
  console.log("=== USER INFORMATION ===");
  console.log(`Username: ${username}`);
  console.log(`Email: ${email}`);
  console.log(`Password: ${password}`);
  console.log(`Age: ${age} (${ageCategory})`);
  console.log(`Gender: ${gender}`);
  console.log(`City: ${city} - ${cityMessage}`);
  console.log("========================");
}