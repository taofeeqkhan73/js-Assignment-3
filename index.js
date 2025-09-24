// question no-1
let s = "AbaDd";
let countA = 0;
let countD = 0;
for (let i = 0; i < s.length; i++) {
    if (s[i] === 'A') countA++;

    if (s[i] === 'D') countD++;

}
console.log(countA, countD);

// question no-2
let S2 = "prepbytes";
let freq = {};
let ans = "";

for (let ch of S2) {
    freq[ch] = (freq[ch] || 0) + 1;
}

let keys = Object.keys(freq).sort();
for (let ch of keys) {
    if (freq[ch] > 1) ans += ch + freq[ch];
}

console.log(ans);

// question no-3
let s3 ="prepbytes";
let vowels = "aeiouAEIOU";
let count = 0;
for(let i = 0; i < s3.length; i++) {
    if (vowels.includes(s3[i])) count++;

}
console.log(count);

// question no-4
let str4 = "prep";
let str = "bytes";
console.log(str4. concat(str));

let x = "prep";
let y = "bytes";
let z = x + y;
console.log(z);

// question no-5
let str5 = " CeDqe"
console.log(str5. lastIndexOf("e"));

let num = " CeDqe"
let len = 0;
for (let i of num){
    len++;
}
console.log(len);

// question no-6
let S = "ADDAAADDDDD";  
let A = 0;
let D = 0;

for (let i = 0; i < S.length; i++) {
    if (S[i] === 'A') {
        A++;
    } else if (S[i] === 'D') {
        D++;
    }
}

if (A > D) {
    console.log("Aditya");
} else if (D > A) {
    console.log("Danish");
} else {
    console.log("Draw");
}

// question no-7
let p = "preBytes";
let t = "Technologies";
console.log(p + t);

// question no-8
let S8 = "naman";
let reverseds = S8.split('').reverse().join('');
console.log(S8 === reverseds ? "True" : "False");

// question no-9
let str9 = "I am utkarsh raj";
let reversed = str9. split('').reverse().join('');
console.log(reversed);

// question no-10
let n1 ="prepbyte";
let n2 ="prepbyte";
console.log(n1 == n2? "yes" : " no");

// question no-11
let str11 ="Hi, I am You. You prepbytes";
console.log(str11. replace("You", "prepbyte"));

// question no-12
let str12 =" I am utkarsh raj";
console.log(str12. split(""));

// question no-13
let str13 = "prepbyte";
let str14 = "aeiouAEIOU";

let vCount = 0, cCount = 0;

for(let ch of str13) {

    if(str14. includes(ch))
    vCount++;

   else cCount++;

} 
console.log(vCount, cCount);
