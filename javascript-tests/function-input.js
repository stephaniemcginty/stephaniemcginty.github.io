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
        const areaOfTriangleBase = document.getElementById('area-of-triangle-base');
        const areaOfTriangleHeight = document.getElementById('area-of-triangle-height');
        const areaOfTriangleDisplay = document.getElementById('area-of-triangle-display');

        areaOfTriangleDisplay.textContent = areaOfTriangle(areaOfTriangleBase.value, areaOfTriangleHeight.value);
    }

    areaOfCircleAction.onclick = () => {
        const areaOfCircleInput = document.getElementById('area-of-circle-input');
        const areaOfCircleDisplay = document.getElementById('area-of-circle-display');

        areaOfCircleDisplay.textContent = areaOfCircle(areaOfCircleInput.value);
    }

}

    const feetToInches = (feet) => {
        return feet * 12;
    }

    const milesToFeet = (miles) => {
        return miles * 5280;
    }

    const areaOfTriangle = (base, height) => {
        area = base * height / 2;
        console.log(area)
        return area;
    }

    const areaOfCircle = (radius) => {
        return area = Math.PI * Math.pow(radius, 2);
    }

