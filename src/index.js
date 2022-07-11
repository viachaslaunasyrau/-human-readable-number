module.exports = function toReadable (number) {
    let easyNumbers = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven','eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    let tensNumber = [' ', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety', 'hundred'];
    let arrNum = number.toString().split('');

    if (number === 0) return 'zero';

    if (arrNum.length == 1) {  
        return easyNumbers[number]; 
    }

    if (arrNum.length == 2) {  
        if (number < 100 && number % 10 == 0) {
            return tensNumber[arrNum[0]]; 
        } else if (number < 20) {
            return easyNumbers[number]; 
        } else {
            return (tensNumber[arrNum[0]] + ' ' + easyNumbers[arrNum[1]]);
        } 
    }

    if (arrNum.length == 3){
        if (arrNum[1] == 0 && arrNum[2] == 0){
            return (easyNumbers[parseInt(arrNum[0])] + ' hundred');
        }else if(arrNum[1] == 0){
            return (easyNumbers[parseInt(arrNum[0])] + ' hundred ' + easyNumbers[parseInt(arrNum[2])]);
        }else if(arrNum[2] == 0){
            return (easyNumbers[parseInt(arrNum[0])] + ' hundred ' + tensNumber[parseInt(arrNum[1])]);
        }else if(arrNum[1] == 1){
            return (easyNumbers[parseInt(arrNum[0])] + ' hundred ' + easyNumbers[parseInt(arrNum[1] + arrNum[2])]);
        }else {
            return (easyNumbers[parseInt(arrNum[0])] + ' hundred ' + tensNumber[parseInt(arrNum[1])] + ' ' + easyNumbers[parseInt(arrNum[2])]);
        }
    }
}
