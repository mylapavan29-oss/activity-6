function getUserDetails() {
    return new Promise((resolve) => {
        let user = {
            name: "Rupam Sah",
            age: 26
        };

        resolve(user);
    });
}

async function displayUser() {
    let user = await getUserDetails();

    console.log("Name:", user.name);
    console.log("Age:", user.age);
}

displayUser();
