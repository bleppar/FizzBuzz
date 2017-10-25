const _ = require('lodash')

const messages = (start,end) => {       
    while(start<end){
    if (start % 3 == 0 && start % 5 == 0) {
        console.log(start + ": FizzBuzz")
    }
    else if (start % 3 == 0 ) {
        console.log(start + ": Fizz")
    }
    else if (start % 5 == 0) {
        console.log(start + ": Buzz")
    }
    start++
    }
}

messages(1,115)
