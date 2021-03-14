module.exports = function toReadable (number) {
    const num0 = ['zero'];
    const numone = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const numtwenty = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    const num = ['hundred'];
    let n = number;
    if (n == 0) {
        return num0[0];
    } else if (n < 20) {
        let i = n;
        return numone[i]
    } else if (n < 100 && n%10 == 0) {
        let str = String(n);
        let arr = str.split('');
        return numtwenty[arr[0]];
    } else if (n < 100) {
        let str = String(n);
        let arr = str.split('');
        return numtwenty[arr[0]] + ' ' + numone[arr[1]];
    } else if (n%100 == 0) {
        let str = String(n);
        let arr = str.split('');
        return numone[arr[0]] + ' ' + num[0];
    } else if (n > 100 && n < 120 || n > 200 && n < 220 || n > 300 && n < 320 || n > 400 && n < 420 || n > 500 && n < 520 || n > 600 && n < 620 || n > 700 && n < 720 || n > 800 && n < 820 || n > 900 && n < 920) {
        let str = String(n);
        let arr = str.split('');
        let h = n%100;
        console.log(h);
        return numone[arr[0]] + ' ' + num[0] + ' ' + numone[h];
    } else if (n%10 == 0) {
        let str = String(n);
        let arr = str.split('');
        return numone[arr[0]] + ' ' + num[0] + ' ' + numtwenty[arr[1]];
    } else if (n < 1000) {
        let str = String(n);
        let arr = str.split('');
        return numone[arr[0]] + ' ' + num[0] + ' ' + numtwenty[arr[1]] + ' ' + numone[arr[2]];
    }
}
