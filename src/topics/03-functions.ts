
const addNumbers = (a: number, b: number) => {
    return {
        result: a + b
    }
}

const multiply = ( firstNumber: number, SecondNumber: number, base: number = 2 ) => {
    return ( firstNumber +  SecondNumber ) * base 
}

const multiplyResult: number =  multiply(5, 3)

console.log({
    multiplyResult
})