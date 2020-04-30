(function() {
    "use strict";

    /* 2.

    Create a while loop that uses console.log() to create the output shown below.

        2
        4
        8
        16
        32
        64
        128
        256
        512
        1024
        2048
        4096
        8192
        16384
        32768
        65536

     */

        function displayDoubleTwo() {
            var output = "";
            var i = 2;
            while (i <= 65536) {
                output += i + "\n";
                i *= 2;
            }
            return output;
        }

        console.log(displayDoubleTwo());


    // Ice Cream Seller

    /*
        An ice cream seller can't go home until she sells all of her cones.
        First write enough code that generates a random number between 50 and 100
        representing the amount of cones to sell before you start your loop.
        Inside of the loop your code should generate another random number between 1 and 5,
        simulating the amount of cones being bought by her clients.
        Use a do-while loop to log to the console the amount of cones sold to each person.
        This is a way get the random numbers for this exercise.

     */

    function returnSOrEmpty(num) {
        return (num === 1) ? "" : "s";
    }

    function enoughConesToSell(orderAmt, inventoryAmt) {
        return inventoryAmt >= orderAmt;
    }

    function generateRandomInventory() {
        return Math.floor(Math.random() * 50) + 50;
    }

    function generateRandomOrder() {
        return Math.floor(Math.random() * 5) + 1;
    }

    function createTransactionMsg(conesWereSold, orderedCones, inventoryCones) {
        if (conesWereSold) {
            return  orderedCones + " cone" + returnSOrEmpty(orderedCones) +  " sold...\n";
        } else {
            return "Cannot sell you " + orderedCones + " cones. I only have " + inventoryCones + " left...\n";
        }
    }

    function sellCones() {
        var output = "";
        var allCones = generateRandomInventory();
        var orderedCones;
        do {
            orderedCones = generateRandomOrder();
            if (enoughConesToSell(orderedCones, allCones)) {
                allCones -= orderedCones;
                output += createTransactionMsg(true, orderedCones, allCones);
            } else {
                output += createTransactionMsg(false, orderedCones, allCones);
            }
        } while(allCones > 0);
        output += "Yay! I sold them all!";
        return output;
    }

    console.log(sellCones());

})();