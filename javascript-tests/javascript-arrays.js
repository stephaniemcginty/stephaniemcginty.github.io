window.onload = () => {

const arrays = {
    numbers: [15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5],
    names: ['JavaScript', 'HTML', 'CSS', 'Java', 'C#', 'Python', 'C/C++']
}



const numbersAction = document.getElementById("numbers-action");
const namesAction = document.getElementById("names-action");

numbersAction.onclick = () => {
    const numbersDisplay = document.getElementById("numbers-display");
    for (let number of arrays.numbers) {
        const li = document.createElement("li");
                li.appendChild(document.createTextNode(number));
                numbersDisplay.appendChild(li);


    namesAction.onclick = () => {
        const namesDisplay = document.getElementById("names-display");
        arrays.names.sort();
        for (let names of arrays.names) {
            const li = document.createElement("li");
            li.appendChild(document.createTextNode(names));
            namesDisplay.appendChild(li);
        }
    }

    }
}

}