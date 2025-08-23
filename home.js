document.getElementById("cash-out-form").style.display = "none";
document.getElementById("transfer-money-form").style.display = "none";
document.getElementById("get-bonus-form").style.display = "none";
document.getElementById("pay-bill-form").style.display = "none";
document.getElementById("add-money-form").style.display = "none";
document.getElementById("transaction-form").style.display = "none";

// Add money Feature

document
  .getElementById("add-money-card")
  .addEventListener("click", function (e) {
    e.preventDefault();
    console.log("clicked add money");

    document.getElementById("cash-out-form").style.display = "none";
    document.getElementById("transfer-money-form").style.display = "none";
    document.getElementById("get-bonus-form").style.display = "none";
    document.getElementById("pay-bill-form").style.display = "none";

    document.getElementById("transaction-form").style.display = "none";
    document.getElementById("add-money-form").style.display = "block";
  });

// cash out feature
document
  .getElementById("cash-out-card")
  .addEventListener("click", function (e) {
    e.preventDefault();

    document.getElementById("transfer-money-form").style.display = "none";
    document.getElementById("get-bonus-form").style.display = "none";
    document.getElementById("pay-bill-form").style.display = "none";
    document.getElementById("add-money-form").style.display = "none";
    document.getElementById("cash-out-form").style.display = "block";
    document.getElementById("transaction-form").style.display = "none";
    document.getElementById("add-money-card").style.border = "none";
  });

// transfer money feature

document
  .getElementById("transfer-money-card")
  .addEventListener("click", function (e) {
    e.preventDefault();

    document.getElementById("cash-out-form").style.display = "none";
    document.getElementById("get-bonus-form").style.display = "none";
    document.getElementById("pay-bill-form").style.display = "none";
    document.getElementById("add-money-form").style.display = "none";
    document.getElementById("transfer-money-form").style.display = "block";
    document.getElementById("transaction-form").style.display = "none";
  });

// get bonus feature
document
  .getElementById("get-bonus-card")
  .addEventListener("click", function (e) {
    e.preventDefault();

    document.getElementById("cash-out-form").style.display = "none";
    document.getElementById("transfer-money-form").style.display = "none";
    document.getElementById("pay-bill-form").style.display = "none";
    document.getElementById("add-money-form").style.display = "none";
    document.getElementById("get-bonus-form").style.display = "block";
    document.getElementById("transaction-form").style.display = "none";
  });

// pay bill feature
document
  .getElementById("pay-bill-card")
  .addEventListener("click", function (e) {
    e.preventDefault();

    document.getElementById("cash-out-form").style.display = "none";
    document.getElementById("transfer-money-form").style.display = "none";
    document.getElementById("add-money-form").style.display = "none";
    document.getElementById("get-bonus-form").style.display = "none";
    document.getElementById("pay-bill-form").style.display = "block";
    document.getElementById("transaction-form").style.display = "none";
  });
// transaction feature
document
  .getElementById("transaction-card")
  .addEventListener("click", function (e) {
    e.preventDefault();

    document.getElementById("cash-out-form").style.display = "none";
    document.getElementById("pay-bill-form").style.display = "none";
    document.getElementById("add-money-form").style.display = "none";
    document.getElementById("get-bonus-form").style.display = "none";
    document.getElementById("transfer-money-form").style.display = "none";
    document.getElementById("transaction-form").style.display = "block";
  });
