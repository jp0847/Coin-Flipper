// TODO: Declare any global variables we need

//Html Element Selector
let pennyImage = document.querySelector("#penny-img")
let flipButton = document.querySelector("#flip")
let clearButton = document.querySelector("#clear")
let statusMessage = document.querySelector("#status")
let numberHeadsText = document.querySelector("#heads")
let numberTailsText = document.querySelector("#tails")
let percentHeadsText = document.querySelector("#heads-percent")
let percentTailsText = document.querySelector("#tails-percent")

//Value variables
let numberHeads = 0
let numberTails = 0
let percentHeads = 0
let percentTails = 0
let total = 0

document.addEventListener('DOMContentLoaded', function () {
    // This is just a sanity check to make sure your JavaScript script is getting loaded
    // You can remove it once you see it in your browser console in the developer tools


    // TODO: Add event listener and handler for flip and clear buttons

    // Flip Button Click Handler
        flipButton.addEventListener('click', function(e){
        // TODO: Determine flip outcome - generate range 0 - 100
        let result = Math.round(Math.random() * 100)
        console.log(result)
        total ++
        
        if (result < 50) {
            numberHeads ++
            console.log("numberHeads value", numberHeads)
            numberHeadsText.textContent = `${numberHeads}`
            statusMessage.textContent = "You flipped heads"
            pennyImage.src = ".././assets/images/penny-heads.jpg"

        } else {
            numberTails ++
            console.log("numberTails value", numberTails)
            numberTailsText.textContent = `${numberTails}`
            statusMessage.textContent = "You flipped tails"
            pennyImage.src = ".././assets/images/penny-tails.jpg"
        }
        
        percentHeads = Math.round((numberHeads/total) * 100)
        percentHeadsText.textContent = `${percentHeads}%`
        percentTails = Math.round((numberTails/total) * 100)
        percentTailsText.textContent = `${percentTails}%`

        // TODO: Update image and status message in the DOM

        // Update the scorboard
        // TODO: Calculate the total number of rolls/flips
        // Make variables to track the percentages of heads and tails
        // TODO: Use the calculated total to calculate the percentages
        // HINT: Make sure not to divide by 0! (if total is 0, percent will be 0 as well)
        // TODO: Update the display of each table cell
    })

    // Clear Button Click Handler
    clearButton.addEventListener("click", function(e){

         numberHeads = 0
         numberTails = 0
         percentHeads = 0
         percentTails = 0
         total = 0
        numberHeadsText.textContent = `${numberHeads}`
        numberTailsText.textContent = `${numberTails}`
        percentHeadsText.textContent = `${numberHeads}`
        percentTailsText.textContent = `${percentTails}`
        statusMessage.textContent = "Lets Get Rolling!"



        })
        // TODO: Reset global variables to 0
        // TODO: Update the scoreboard (same logic as in flip button click handler)

})