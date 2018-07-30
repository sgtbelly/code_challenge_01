
function abbrevName(name){
    name = name.toUpperCase();
    const intName = name.split(' ');
    const newFirstInt = intName[0][0];
    const newSecondInt = intName[1][0];
    return newFirstInt + '.' + newSecondInt;
}