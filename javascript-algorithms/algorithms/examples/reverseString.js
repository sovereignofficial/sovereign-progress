// https://leetcode.com/problems/reverse-string/

const s = ["h","e","l","l","o"]

const reverseString = (s) =>{
    let left = 0;
    let right = s.length - 1;
    let temp = null;

    while (left < right) {
        temp = s[left];
        s[left] = s[right];
        s[right] = temp;
        left++;
        right--;
    }
}
reverseString(s);
console.log(s);
