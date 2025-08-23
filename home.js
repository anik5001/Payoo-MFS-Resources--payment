document.getElementById("cash-out-form").style.display = "none";
document.getElementById("transfer-money-form").style.display = "none";
document.getElementById("get-bonus-form").style.display = "none";
document.getElementById("pay-bill-form").style.display = "none";
document.getElementById("add-money-form").style.display = "none";
document.getElementById("transaction-form").style.display = "none";

// login logout
document.getElementById("log-out-btn").addEventListener("click", function (e) {
  e.preventDefault();
  window.location.href = "./index.html";
});

// Add money Feature

document
  .getElementById("add-money-card")
  .addEventListener("click", function (e) {
    e.preventDefault();

    document.getElementById("cash-out-form").style.display = "none";
    document.getElementById("transfer-money-form").style.display = "none";
    document.getElementById("get-bonus-form").style.display = "none";
    document.getElementById("pay-bill-form").style.display = "none";

    document.getElementById("transaction-form").style.display = "none";
    document.getElementById("add-money-form").style.display = "block";

    // add money to balance
    document
      .getElementById("btn-add-money")
      .addEventListener("click", function (e) {
        e.preventDefault();

        const bankNumber = document.getElementById("bank-number").value;
        const pinAddMoney = parseInt(
          document.getElementById("add-money-pin").value
        );
        let availableBalance = parseInt(
          document.getElementById("available-balance").innerText
        );
        let addAmount = parseInt(document.getElementById("add-amount").value);
        if (bankNumber.length === 11 && pinAddMoney === 1234) {
          availableBalance = availableBalance + addAmount;
          document.getElementById("available-balance").innerText =
            availableBalance;
        } else {
          alert("Invalid credentials");
        }
      });
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

    // cash out to balance
    document
      .getElementById("withdraw-btn")
      .addEventListener("click", function (e) {
        e.preventDefault();

        const agentNumber = document.getElementById("agent-number").value;
        const pinCashMoney = parseInt(
          document.getElementById("cash-out-pin").value
        );
        let availableBalance = parseInt(
          document.getElementById("available-balance").innerText
        );
        let cashOutAmount = parseInt(
          document.getElementById("cash-out-amount").value
        );
        if (agentNumber.length === 11 && pinCashMoney === 1234) {
          availableBalance = availableBalance - cashOutAmount;
          document.getElementById("available-balance").innerText =
            availableBalance;
        } else {
          alert("Invalid credentials");
        }
      });
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

    // transfer money from balance
    document.getElementById("send-btn").addEventListener("click", function (e) {
      e.preventDefault();

      const userNumber = document.getElementById("user-number").value;
      const pinTransferMoney = parseInt(
        document.getElementById("transfer-pin").value
      );
      let availableBalance = parseInt(
        document.getElementById("available-balance").innerText
      );
      let transferAmount = parseInt(
        document.getElementById("transfer-amount").value
      );
      if (userNumber.length === 11 && pinTransferMoney === 1234) {
        availableBalance = availableBalance - transferAmount;
        document.getElementById("available-balance").innerText =
          availableBalance;
      } else {
        alert("Invalid credentials");
      }
    });
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

    //bonus add balance
    document
      .getElementById("get-bonus-btn")
      .addEventListener("click", function (e) {
        e.preventDefault();
        let availableBalance = parseInt(
          document.getElementById("available-balance").innerText
        );
        const couponCode = document.getElementById("coupon-code").value;
        console.log();
        if (couponCode === "anik5001") {
          availableBalance = availableBalance + 1000;
          document.getElementById("available-balance").innerText =
            availableBalance;
        } else {
          alert("Invalid credentials");
        }
      });
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

    // pay bill from balance
    document.getElementById("pay-btn").addEventListener("click", function (e) {
      e.preventDefault();

      const billerNumber = document.getElementById("biller-number").value;
      const pinPayNow = parseInt(document.getElementById("pay-pin").value);
      let availableBalance = parseInt(
        document.getElementById("available-balance").innerText
      );
      let billPayAmount = parseInt(
        document.getElementById("bill-pay-amount").value
      );
      if (billerNumber.length === 11 && pinPayNow === 1234) {
        availableBalance = availableBalance - billPayAmount;
        document.getElementById("available-balance").innerText =
          availableBalance;
      } else {
        alert("Invalid credentials");
      }
    });
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
