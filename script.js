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
    if (initial === current){
        console.log("no loss no profit")
    } else if (initial < current) {
        var profit = (current - initial) * quantity
        var profitPercentage = (profit / initial) * 100
        console.log("your profit is  " + profit)

    }else (initial > current) {
        var loss = (initial - current) * quantity
        var lossPercentage = (loss / initial) * 100
        console.log("you loss is " + loss) 
    }

}

