function checkResult(mark) {
    return new Promise((resolve, reject) => {
        if (mark >= 35) {
            resolve("Pass");
        } else {
            reject("Fail");
        }
    });
}

async function displayResult() {
    try {
        let result = await checkResult(40);
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}

displayResult();
