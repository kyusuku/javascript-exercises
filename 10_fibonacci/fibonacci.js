const fibonacci = function(n) {
    let arr = [0, 1];

    for (let i = 2; i <= n; i++) {
        arr[i] = arr[i - 1] + arr[i - 2];
    }

    return n >= 0 ? arr[n] : "OOPS";
}

// Do not edit below this line
module.exports = fibonacci;
