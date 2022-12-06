let initialPrice = document.querySelector("#initial-price")
let quantity = document.querySelector("#Quantity")
let currentPrice = document.querySelector("#Current-price")
const tellMe = document.querySelector("#tell-me")
let result = document.querySelector("#result")

tellMe.addEventListener("click", calculate)




function calculate() {

    var ip = initialPrice.value
    var qty = quantity.value
    var curr = currentPrice.value

    calculateProfitAndLoss(ip, qty, curr)
}

function calculateProfitAndLoss(initial, quantity, current) {
    if (initial > current) {
        var loss = (initial - current) * quantity;
        var lossPercentage = (loss / initial) * 100;

        resultant(
            `Hey, the loss is ${loss} and the percent is ${lossPercentage}%`
        );
    } else if (current > initial) {
        var profit = (current - initial) * quantity;
        var profitPercentage = (profit / initial) * 100;

        resultant(
            `Hey, the profit is ${profit} and the percent is ${profitPercentage}%`
        );
    } else {
        resultant(`No pain no gain and no gain no pain`);
    }
}

function resultant(message) {
    resultant.textContent = message
}
console.log(initial)
