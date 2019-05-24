const sum = (a, b) => {
    if (a && b) {
        return a + b;
    }
    throw new Error('Invalid Arguments')

}
// console.log(sum(2))

try {
    console.log(sum(2))
}
catch (error) {
    console.log('Error occured')
    // console.log(error)
}

console.log('Monica Bellucci')
