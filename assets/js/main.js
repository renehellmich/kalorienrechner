

const outputError = document.getElementById("p_error_output");
const output = document.getElementById("output");

let PAL = 0;

const calcBMR = () => {
    const weight = document.getElementById("input_weight").value;
    const height = document.getElementById("input_height").value;
    const age = document.getElementById("input_age").value;
    const slcsex = document.getElementById("slcSex").value;

    let BMR = 0;

    switch(slcsex) {
        case "male":
            // BMR = 66 + (13.7 x Gewicht in Kilogramm) + (5 x Körpergröße in cm) – (6.8 x Alter in Jahren)
            BMR = 66 + (13.7 * weight) + (5 * height) - (6.8 * age)
            break;
        case "female":
            // BMR = 655 + (9.6 X Gewicht in Kilogramm) + (1.8 X Körpergröße in cm) – (4.7 x Alter in Jahren).
            BMR = 655 + (9.6 * weight) + (1.8 * height) - (4.7 * age)
            break;
        case "none":
            outputError.style.display = "block";
            outputError.innerText = "Bitte wählen Sie ein Geschlecht aus!";
            break;
        
    }

    return BMR;
}

const calcPAL = () => {
    const slcPAL = document.getElementById("slcPAL").value;

    switch(slcPAL) {
        case "sit":
            PAL = 1.2;
            break;
        case "lightactiv":
            PAL = 1.375;
            break;
        case "modeactiv":
            PAL = 1.55;
            break;
        case "veryactiv":
            PAL = 1.725;
            break;
        case "heavyactiv":
            PAL = 1.9
            break;
        case "none":
            PAL = 0;
            outputError.style.display = "block";
            outputError.innerText = "Bitte wählen Sie einen Aktivitätsfaktor aus!";
            break;
    }

    return PAL;
}


function calcKcal(BMR, PAL) {
    const BMR = calcBMR();
    const PAL = calcPAL();

    output.innerText = BMR * PAL + " kcal";
}

// calcKcal(calcBMR(), calcPAL());