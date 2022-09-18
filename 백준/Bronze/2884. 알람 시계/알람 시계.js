const fs = require('fs');
let input = fs.readFileSync('/dev/stdin', 'utf8').split(' ');
let h = parseInt(input[0]);
let m = parseInt(input[1]);

/*
일반 시간: 0시 45분 ~ 23시 59분
날짜 바뀜: 0시 0분 ~ 0시 44분

시간 바뀜: 0분 ~ 44분
시간 안바뀜: 45분 ~ 59분
*/

if (h == 0 && (m >= 0 && m <= 44)) {
    h = 23;
    if (m == 0) {
        m = 60 - 45;
    } else {
        m = 60 - (45 - m);
    }
} else {
    if (m >= 0 && m <= 44) {
        h = h - 1;
        if (m == 0) {
            m = 60 - 45;
        } else {
            m = 60 - (45 - m);
        }
    } else {
        m = m - 45;
    }
}

console.log(h + " " + m);