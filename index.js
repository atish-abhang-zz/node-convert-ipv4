
exports.decimalToBinary = function (decimalIp) {   //provide decimal IP eg: 192.168.0.1
    var octet = [128, 64, 32, 16, 8, 4, 2, 1]
    var ip_ = decimalIp.split('.');
    var decimal = "";
    var ex;
    ip_.forEach(function (block, index) {
        ex = block;
        octet.forEach(function (k) {
            if (k <= ex) {
                ex = parseInt(ex) - k;
                decimal += "1";
            } else {
                decimal += "0";
            }
        });
        if (index != ip_.length - 1) {
            decimal += ".";
        }
    });
    return decimal;
}

exports.binaryToDecimal = function (binaryIp) {    //provide binary IP eg: 11000000.10101000.00000000.00000001

    var ip_ = binaryIp.split("");
    var octet = [7, 6, 5, 4, 3, 2, 1, 0];
    var counter = 0;
    var sum = 0;
    var decimalIp = "";

    for (var i = 0; i < ip_.length; i++) {
        if (ip_[i] == "1") {
            var raise = Math.pow(2, (octet[counter]));
            sum += raise;
        }
        if (counter > 7 | i == 34) {
            decimalIp += sum;
            if (i != ip_.length - 1) {
                decimalIp += ".";
            }
            counter = 0;
            sum = 0;
        } else {
            counter++;
        }
    }
    return decimalIp;
}
