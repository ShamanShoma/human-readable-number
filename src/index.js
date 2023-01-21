module.exports = function toReadable (number) {
const units = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
const dozens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
const tenths = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

let strNum = String(number);

if (strNum.length == 1) {
    number = units[number];
} else if (strNum.length == 2) {
    if (strNum[0] == 1) {
      number = dozens[parseInt(strNum[1])];
    } else {
      number = (tenths[parseInt(strNum[0]) - 2] + ((strNum[1] != '0') ? (' ' + units[parseInt(strNum[1])]):''));
    }
} else if (strNum.length == 3) {
    if (strNum[1] == 1) {
      number = (units[parseInt(strNum[0])] + ' hundred ' + dozens[parseInt(strNum[2])]);
    } else {
        number = (units[parseInt(strNum[0])] + ' hundred' + ((strNum[1] != '0') ? (' ' + tenths[parseInt(strNum[1]) - 2]):'') + ((strNum[2] != '0') ? (' ' + units[parseInt(strNum[2])]):''));
    }
}

return number;
}