// PASSWORD TOGGLE
function togglePassword() {
  const passwordInput = document.getElementById("password");
  const lockIcon = document.getElementById("lockIcon");

  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    lockIcon.setAttribute("name", "lock-open");
  } else {
    passwordInput.type = "password";
    lockIcon.setAttribute("name", "lock-closed");
  }
}

// IMAGE PREVIEW AND IMAGE DATA
let imgData = ""; // global variable to store base64 image

const profilePhoto = document.getElementById('profilePhoto');
const previewImage = document.getElementById('previewImage');

profilePhoto.addEventListener('change', function () {
  const file = this.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function () {
      imgData = reader.result; // save base64 image data
      previewImage.src = imgData;
      previewImage.style.display = 'block';
    };
    reader.readAsDataURL(file);
  }
});

// FORM SUBMISSION
document.getElementById('form').addEventListener('submit', function (e) {
  e.preventDefault(); // prevent form from reloading

  // Collecting values
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const dateBirth = document.getElementById('dB').value;
  const phoneNumber = document.getElementById('phone').value;
  const about = document.getElementById('about').value;

  // Logging to console
  console.log("Name:", name);
  console.log("Email:", email);
  console.log("Password:", password);
  console.log("Date of Birth:", dateBirth);
  console.log("Phone Number:", phoneNumber);
  console.log("About:", about);
  console.log("Profile Image (base64):", imgData || "No image selected");

  // Saving to localStorage
  const localArray = JSON.parse(localStorage.getItem('List-One')) || [];

  localArray.push({
    name,
    email,
    password,
    dateBirth,
    phoneNumber,
    about,
    img: imgData // base64 image
  });

  localStorage.setItem('List-One', JSON.stringify(localArray));

  // Optional: alert or reset form
  alert("Form data saved successfully!");
  e.target.reset();
  previewImage.src = "./b05e65e027bbc1c590ce4e283666b946.jpg"; // reset preview image
  imgData = ""; // reset image
});
