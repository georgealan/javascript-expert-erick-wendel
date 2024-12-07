class Fibonacci {
  * execute(input, current = 0, next = 1) {
    // Process all sequences and halt.
    if(input === 0) return

    // Return value
    yield current

    // Recursive call, delegates function but not return any value.
    yield * this.execute(input - 1, next, current + next)
  }  
}

module.exports = Fibonacci;