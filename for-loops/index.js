window.onload = () => {
    const listButton = document.getElementById('run-for-loop');

    listButton.onclick = () => {
        const myList = document.getElementById('my-list');

        for (let i = 0; i < 6; i++) {
            elfCode.appendToList(myList, i);
        }

    }
}
