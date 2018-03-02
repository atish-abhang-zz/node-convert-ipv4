Convert IPv4 address from decimal to binary and binary to decimal.






example:
```javascript
var convert=require('node-convert-ipv4');

var myDecimalIp=convert.binaryToDecimal("10101100.00010000.00001010.00000001");

console.log(myDecimalIp);   //172.16.10.1;

var myBinaryIp=convert.decimalToBinary("192.168.1.1");

console.log(myBinaryIp);    //11000000.10101000.00000001.00000001
```