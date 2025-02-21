function passwordGenerator({ sliderValue, includeSpecialChars  }) {
    //console.log("SliderValue: " + sliderValue);
    
    const password = [];
    const charactersNormal = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const charactersWithSpecial = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+";

    for (let i = 0; i < sliderValue; i++) {

        if (includeSpecialChars === false) {
            const rndm = Math.floor(Math.random() * charactersNormal.length);
            const randomCharacter = charactersNormal[rndm];
            password.push(randomCharacter);

        } else if (includeSpecialChars === true) {
            const rndm = Math.floor(Math.random() * charactersWithSpecial.length);
            const randomCharacter = charactersWithSpecial[rndm];
            password.push(randomCharacter);
        }

        const ff = Math.floor(Math.random() * 2);
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
    //console.log("Generated Password: " + stringVar);
    return stringVar;
}   


    

export default passwordGenerator;