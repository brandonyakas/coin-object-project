let coin = {
    state: 0,
    flip: function() {
        this.state = Math.round(Math.random())
        //https://stackoverflow.com/questions/45136711/javascript-random-generate-0-or-1-integer
        
        /* 1. Randomly set your coin object's "state" property to be either 
           0 or 1: use "this.state" to access the "state" property on this object.*/
    },

    toString: function() {
        if (this.state === 0){
            return "Heads"
        }

        else {
            return "Tails"
        }

        /* 2. Return the string "Heads" or "Tails", depending on whether
           "this.state" is 0 or 1. */
    },

    toHTML: function() {
        let image = document.createElement('img');
        image.style.width = "150px"
        image.style.height = "auto"
        //https://www.techiedelight.com/change-size-of-image-with-javascript/
        
        if (this.state === 0) {
            image.src = "./images/half-dollar-coin-head.jpg"
        }

        else {
            image.src = "./images/half-dollar-coin-tail.jpg"
        }
        /* 3. Set the properties of this image element to show either face-up
           or face-down, depending on whether this.state is 0 or 1.*/

        return document.body.append(image);   
    }
};

function display20Flips() {
    for (let counter = 1; counter <= 20; counter += 1) {
        coin.flip()
        coin.toString()

        if (counter <= 19) {
        document.body.append(coin.toString() + ", ")
        }

        else {
            document.body.append(coin.toString())
        }
    }
}

function display20Images() {
    for (let counter = 1; counter <= 20; counter += 1) {
        coin.flip()
        coin.toHTML()
    }
}

display20Flips()

display20Images()