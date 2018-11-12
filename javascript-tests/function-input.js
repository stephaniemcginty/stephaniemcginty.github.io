window.onload = () => {

    const feetToInchesAction = document.getElementById("feet-to-inches-action");
    const milesToFeetAction = document.getElementById('miles-to-feet-action');
    const areaOfTriangleAction = document.getElementById('area-of-triangle-action');
    const areaOfCircleAction = document.getElementById('area-of-circle-action');

    feetToInchesAction.onclick = () => {
        const feetToInchesInput = document.getElementById('feet-to-inches-input');
        const feetToInchesDisplay = document.getElementById('feet-to-inches-display');

        feetToInchesDisplay.textContent = feetToInches(feetToInchesInput.value);
    }

    milesToFeetAction.onclick = () => {
        const milesToFeetInput = document.getElementById('miles-to-feet-input');
        const milesToFeetsDisplay = document.getElementById('miles-to-feet-display');

        milesToFeetsDisplay.textContent = milesToFeet(milesToFeetInput.value);
    }

    areaOfTriangleAction.onclick = () => {
        const areaOfTriangleInput = document.getElementById('area-of-triangle-input');
        const areaOfTriangleDisplay = document.getElementById('area-of-triangle-display');

        areaOfTriangleDisplay.textContent = areaOfTriangle(areaOfTriangleInput.value);
    }

}

    const feetToInches = (feet) => {
        return feet * 12;
    }

    const milesToFeet = (miles) => {
        return miles * 5280;
    }

    const areaOfTriangle = (base, height) => {
        return area = base * height / 2;
    }

    const areaOfCircle = (radius) => {
        return area = Math.PI * Math.pow(radius, 2);
    }

