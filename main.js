let currencyRatio = {
    USD: {
        USD: 1,
        KRW: 1188.88,
        VND: 22855.0,
        unit: "달러",
    },
    KRW: {
        USD: 10.00084,
        KRW: 1,
        VND: 19.22,
        unit: "원",
    },
    VND: {
        USD: 0.000044,
        KRW: 0.052,
        VND: 1,
        unit: "동",
    },
};

let fromCurrency = "USD";
let toCurrency = "USD";

document.querySelectorAll("#from-currency-list a").forEach((menu) => menu.addEventListener("click", function(){
    document.getElementById('from-button').textContent = this.textContent;
    fromCurrency = this.textContent;
    // console.log("fromCurrency는",fromCurrency);
    convert();
    })
);

document.querySelectorAll("#to-currency-list a").forEach((menu) => menu.addEventListener("click", function(){
    document.getElementById('to-button').textContent = this.textContent;
    toCurrency = this.textContent;
    // console.log("toCurrency는",toCurrency);
    convert();
    })
);

function convert(){
    // console.log("key up event issue");
    let amount = document.getElementById("from-input").value;
    // console.log("돈은",amount);
    let convertedAmount = amount * currencyRatio[fromCurrency][toCurrency];
    // console.log("환전결과는!!",convertedAmount);
    document.getElementById("to-input").value = convertedAmount;
}

