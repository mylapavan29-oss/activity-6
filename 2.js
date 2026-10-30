function addNumbers() {
    return new Promise((resolve) => {
        let sum = 10 + 20;
        resolve(sum);
    });
}

async function calculateSum() {
    let result = await addNumbers();
    console.log("Sum =", result);
}

calculateSum();
