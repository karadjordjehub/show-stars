//Zadatak koji je cest za jumiore - ispisivanje zvezdica u konzoli.

showStar(5)

function showStar(rows) {
    for (let row = 1; row <= rows; row++){
        let pattern = '';
        for (let i = 0; i < row; i++)
        pattern += '*';
    console.log(pattern);
    }
}