let number = 12345678910;
let pin = 1234;

document.getElementById("btn-login").addEventListener("click", function (e) {
  e.preventDefault();

  const MobileNumber = document.getElementById("mobile-number").value;
  const mobileNumberConverted = parseInt(MobileNumber);

  const pinNumber = document.getElementById("pin-number").value;
  const pinNumberConverted = parseInt(pinNumber);
  if (number === mobileNumberConverted && pin === pinNumberConverted) {
    window.location.href = "./home.html";
  } else {
    alert("Please valid Credentials");
  }
});
