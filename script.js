let initialPrice = document.querySelector("#initial-price")
let quantity = document.querySelector("#Quantity")
let currentPrice = document.querySelector("#Current-price")
const tellMe = document.querySelector("#tell-me")

tellMe.addEventListener("click", calculate)




function calculate() {

    var ip = initialPrice.value
    var qty = quantity.value
    var curr = currentPrice.value

    calculateProfitAndLoss(ip, qty, curr)


}

function calculateProfitAndLoss(initial, quantity, current) {
    if (initial > current) {
        var lossvalue = (initial - current) * quantity
        var lossPercentage = (loss / initial) * 100
        console.log("you loss is " + lossvalue)
    } else if (current > initial) {
        var profitvalue = (current - initial) * quantity
        var profitPercentage = (profit / initial) * 100
        console.log("your profit is  " + profitvalue)

    } else {

        console.log("no loss no profit")
    }

}

