function passwordGenerator({ sliderValue }) {
    //console.log("SliderValue: " + sliderValue);
    
    const password = [];
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+";

    for (let i = 0; i < sliderValue; i++) {
        const rndm = Math.floor(Math.random() * characters.length);
        const ff = Math.floor(Math.random() * 2);
        const randomCharacter = characters[rndm];
        password.push(randomCharacter);

        if (i !== 0) {
            if (ff === 1) {
                if (password[i] === password[i - 1]) {
                    password.pop();
                    i--;
                    }
                }
            }
    }
    const stringVar = password.join('');
    console.log("Generated Password: " + stringVar);
    return stringVar;
}   


    

export default passwordGenerator;