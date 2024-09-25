const inverterString = string => {
    let stringInvertida = [];
    for (const letra of string) {
        stringInvertida.unshift(letra)
    }
    return console.log(stringInvertida.join(''));
}

inverterString("oruam")
inverterString("reven")
inverterString("hannah")