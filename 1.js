function displayMessage() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Welcome to JavaScript!");
        }, 2000);
    });
}

async function showMessage() {
    let message = await displayMessage();
    console.log(message);
}

showMessage();
