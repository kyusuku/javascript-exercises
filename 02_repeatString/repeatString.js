const repeatString = function(string, reps) {
    if (reps < 0) {
        return "ERROR";
    }

    let ans = "";

    for (let i = 0; i < reps; i++) {
        ans += string;
    }

    return ans;
};

// Do not edit below this line
module.exports = repeatString;
