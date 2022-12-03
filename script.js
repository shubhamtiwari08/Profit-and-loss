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
        var loss = (initial - current) * quantity
        console.log(`your loss is ${loss}`)
    } else if (current > initial) {
        var profit = (current - initial) * quantity
        console.log(`your profit is ${profit}`)
    } else {
        result.textContent = " tu chakka tera baap bada chakka"
    }
}

