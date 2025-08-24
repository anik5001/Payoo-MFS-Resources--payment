document.getElementById("cash-out-form").style.display = "none";
document.getElementById("transfer-money-form").style.display = "none";
document.getElementById("get-bonus-form").style.display = "none";
document.getElementById("pay-bill-form").style.display = "none";
document.getElementById("add-money-form").style.display = "none";
document.getElementById("transaction-form").style.display = "none";
// toggle
function toggle() {
  document.getElementById("cash-out-form").style.display = "none";
  document.getElementById("transfer-money-form").style.display = "none";
  document.getElementById("get-bonus-form").style.display = "none";
  document.getElementById("pay-bill-form").style.display = "none";
  document.getElementById("add-money-form").style.display = "none";
  document.getElementById("transaction-form").style.display = "none";
  document.getElementById("latest-payment-parent").style.display = "none";
}

// login logout
document.getElementById("log-out-btn").addEventListener("click", function (e) {
  e.preventDefault();
  window.location.href = "./index.html";
});

let transactionHistoryData = [];
function transactionOfType(typePay) {
  var ob = {
    name: typePay,
    date: new Date().toLocaleTimeString(),
  };
  transactionHistoryData.push(ob);
}

// Add money Feature toggle

document
  .getElementById("add-money-card")
  .addEventListener("click", function (e) {
    e.preventDefault();
    toggle();
    document.getElementById("add-money-form").style.display = "block";
  });
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
      document.getElementById("available-balance").innerText = availableBalance;

      var ob = {
        name: "Bank Deposit",
        date: new Date().toLocaleTimeString(),
      };
      transactionHistoryData.push(ob);
    } else {
      alert("Invalid credentials");
    }
  });

// cash out feature
document
  .getElementById("cash-out-card")
  .addEventListener("click", function (e) {
    e.preventDefault();

    toggle();
    document.getElementById("cash-out-form").style.display = "block";
  });

// cash out to balance
document.getElementById("withdraw-btn").addEventListener("click", function (e) {
  e.preventDefault();

  const agentNumber = document.getElementById("agent-number").value;
  const pinCashMoney = parseInt(document.getElementById("cash-out-pin").value);
  let availableBalance = parseInt(
    document.getElementById("available-balance").innerText
  );
  let cashOutAmount = parseInt(
    document.getElementById("cash-out-amount").value
  );
  if (agentNumber.length === 11 && pinCashMoney === 1234) {
    availableBalance = availableBalance - cashOutAmount;
    document.getElementById("available-balance").innerText = availableBalance;

    transactionOfType("CashOut");
  } else {
    alert("Invalid credentials");
  }
});

// transfer money feature

document
  .getElementById("transfer-money-card")
  .addEventListener("click", function (e) {
    e.preventDefault();

    toggle();
    document.getElementById("transfer-money-form").style.display = "block";
  });
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
    document.getElementById("available-balance").innerText = availableBalance;
    transactionOfType("Transfer Money");
  } else {
    alert("Invalid credentials");
  }
});
// get bonus feature
document
  .getElementById("get-bonus-card")
  .addEventListener("click", function (e) {
    e.preventDefault();

    toggle();
    document.getElementById("get-bonus-form").style.display = "block";
  });
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
      document.getElementById("available-balance").innerText = availableBalance;
      transactionOfType("Get Bonus");
    } else {
      alert("Invalid credentials");
    }
  });

// pay bill feature
document
  .getElementById("pay-bill-card")
  .addEventListener("click", function (e) {
    e.preventDefault();

    toggle();
    document.getElementById("pay-bill-form").style.display = "block";
  });
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
    document.getElementById("available-balance").innerText = availableBalance;
    transactionOfType("Bill Pay");
  } else {
    alert("Invalid credentials");
  }
});
// transaction feature
document
  .getElementById("transaction-card")
  .addEventListener("click", function (e) {
    e.preventDefault();
    document.getElementById("transactions-history").innerText = "";
    toggle();
    document.getElementById("transaction-form").style.display = "block";

    for (const data of transactionHistoryData) {
      const div = document.createElement("div");
      const divParent = document.getElementById("transactions-history");

      div.innerHTML = ` <div class=" flex justify-between items-center bg-white rounded-2xl p-3 mt-3">

        <div class="flex ">
          <img class="block rounded-full h-10 p-2 bg-[#f4f5f7]" src="./assets/wallet1.png" alt="">

          <div class="ml-3">
            <h1>${data.name}</h1>
            <p> ${data.date}</p>
          </div>
        </div>
        <i class="fa-solid fa-ellipsis-vertical"></i>
      </div>`;
      divParent.appendChild(div);
    }
  });

document
  .getElementById("latest-pay-btn")
  .addEventListener("click", function () {
    document.getElementById("latest-payment-parent").style.display = "block";
    document.getElementById("transaction-form").style.display = "none";
    document.getElementById("latest-payment").innerText = "";
    for (let i = transactionHistoryData.length - 1; i >= 0; i--) {
      const div = document.createElement("div");
      const divParent = document.getElementById("latest-payment");

      div.innerHTML = ` <div class=" flex justify-between items-center bg-white rounded-2xl p-3 mt-3">

        <div class="flex ">
          <img class="block rounded-full h-10 p-2 bg-[#f4f5f7]" src="./assets/wallet1.png" alt="">

          <div class="ml-3">
            <h1>${transactionHistoryData[i].name}</h1>
            <p> ${transactionHistoryData[i].date}</p>
          </div>
        </div>
        <i class="fa-solid fa-ellipsis-vertical"></i>
      </div>`;
      divParent.appendChild(div);
    }
  });
