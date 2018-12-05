
window.onload = () => {

    const appearanceButtonDefault = document.getElementById('appearanceActionDefault');
    const appearanceButtonBlue = document.getElementById('appearanceActionBlue')
    const defaultTheme = document.getElementById('default-theme');
    const blueTheme = document.getElementById('blue-theme');

    appearanceButtonDefault.onclick = () => {
        disableStylesheet(blueTheme);
        enableStylesheet(defaultTheme);
    }

    appearanceButtonBlue.onclick = () => {
        disableStylesheet(defaultTheme);
        enableStylesheet(blueTheme);
    }

}

function enableStylesheet (node) {
    node.rel = 'stylesheet';
    }
    
function disableStylesheet (node) {
    node.rel = 'alternate stylesheet';
}               