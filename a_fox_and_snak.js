const fs = require("fs");

const input = fs.readFileSync(0, "utf8").trim().split(" ").map(Number);

const [n, m] = input;

for (let i = 0; i < n; i++) {
    if (i % 2 === 0) {
        // Odd rows (1st, 3rd, 5th...) -> all '#'
        console.log("#".repeat(m));
    } else {
        if (Math.floor(i / 2) % 2 === 0) {
            // Snake on the right
            console.log(".".repeat(m - 1) + "#");
        } else {
            // Snake on the left
            console.log("#" + ".".repeat(m - 1));
        }
    }
}s