
export function buttonMove() {

    const button = document.getElementById("button_submit");
    const slcsex = document.getElementById("slcSex");
    const slcPAL = document.getElementById("slcPAL");

    const color_error = "rgb(200, 0, 0)";
    const color_submit = "rgb(0, 200, 0)";

    console.log("Export funktioniert.");

    const buttonMove = () => {

        const slcsexValue = slcsex.value;
        const slcPALValue = slcPAL.value;

        if (slcsexValue == "none" || slcPALValue == "none") {

            /*
            const buttonRect = button.getBoundingClientRect();
            const buttonX = buttonRect.x;
            const buttonLeft = buttonRect.left;
            const buttonRight = buttonRect.right;

            console.log("X: " + buttonX, "Left: " + buttonLeft, "Right :" + buttonRight);
            */

            const displacementX = 240;

            const boolDirect = randomDirection();
            console.log(boolDirect);

            const direction = boolDirect === 0 ? "" : "-";
            console.log(`${direction}${displacementX}`);
            
            const CSSRule = `@keyframes move {
                from {
                    transform: translateX(0);
                    
                }
                50% {
                    transform: translateX(${direction}${displacementX}px);
                }
                to {
                    transform: translateX(0);
                }
            }`

            console.log(document.styleSheets);
            const sheet = document.styleSheets[0];

            sheet.insertRule(CSSRule, sheet.cssRules.length);

            button.classList.add("move");
            button.style.backgroundColor = color_error;

            // console.log("X: " + buttonX, "Left: " + buttonLeft, "Right :" + buttonRight);
        } else {
            button.style.backgroundColor = color_submit;
        }
    }

    /*
    const buttonMoveReverse = () => {
        const displacementX = 240;

        const CSSRule = `@keyframes move { transform: translateX(0); }`

        const sheet = document.styleSheets[0];
        sheet.insertRule(CSSRule, sheet.cssRules.length);

        button.classList.add("move");
    }
    */

    const changeButtonColor = () => {
        const slcsexValue = slcsex.value;
        const slcPALValue = slcPAL.value;

        console.log(slcsexValue, slcPALValue);
        if (slcsexValue == "none" || slcPALValue == "none") {
            button.style.backgroundColor = color_error;
        }
        else {
            button.style.backgroundColor = color_submit;
        }
    }

    document.addEventListener("keydown", changeButtonColor);
    document.addEventListener("click", changeButtonColor);
    slcsex.addEventListener("change", changeButtonColor);
    slcPAL.addEventListener("change", changeButtonColor);
    button.addEventListener("mouseover", buttonMove);
    // button.addEventListener("mouseleave", buttonMoveReverse);

}

const randomDirection = () => {
    let Numb = Math.random();
    Numb < 0.5
        ? Numb = 0
        : Numb = 1;
    return Numb;
}