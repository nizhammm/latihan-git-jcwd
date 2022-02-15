// 1. Remove vowels
// Input: "javascript"
// Output: "jvscrpt"

// 2. Alphabet value
// Hitung jumlah value suatu string dimana setiap huruf memiliki value
// posisi huruf tersebut di dalam abjad. Contoh: A = 1, B = 2, Z = 26, J = 10
// Examples
// Input: "abc"
// Output: 6

// Input: "steve"
// Output: 71

// 3. Odd alphabet value
// Sama seperti soal nomor 2, tetapi kali ini hanya hitung huruf yang memiliki
// value ganjil

// Input: "steve"
// Output: 29

// Input: "abc"
// Output: 4

// 4. Unique items
// Diketahui ada 2 array of numbers, dimana 2 array tersebut memiliki beberapa
// value/number yang sama. Tampilkan sebuah array baru yang berisi list value
// unique (hanya berada di salah satu array saja)

// Input:
// arr1 = [1, 3, 7, 4]
// arr2 = [1, 5, 3, 7, 0]
// Output: [5, 4, 0]

// Bonus Question
// 5. Remove duplicates
// Diketahui ada 2 array of numbers, dimana 2 array tersebut memiliki beberapa
// value/number yang sama. Tampilkan sebuah array baru yang berisi list value
// dari kedua array tersebut, tetapi sudah

// =======================================================

// 1.
const alphaVowels = (string) => {
    let alpha = ["a", "i", "u", "e", "o"];
    let result = "";
    for (let i = 0; i < string.length; i++ ){
        if (!alpha.includes(string[i])){
            result += string[i];
        }
    }
    return result;
};
console.log(alphaVowels("javascript")); 

// 2. 
const alphabetValue = (string) => {
    const alphabetArr = "abcdefghijklmnopqrstuvwxyz".split("");
    let result = 0;

    for (let i = 0; i < string.split("").length; i++ ){
        result += alphabetArr.indexOf(string[i]) + 1;
    }
    return result;
}
console.log(alphabetValue("steve"));

// 3.
const alphabetValueGanjil = (string) => {
    const alphabetArr = "abcdefghijklmnopqrstuvwxyz".split("");
    let result = 0;

    for (let i = 0; i < string.split("").length; i++ ){
        if (!((alphabetArr.indexOf(string[i]) + 1) % 2 == 0)){
            result += alphabetArr.indexOf(string[i]) + 1;
        }
    }
    return result;
}
console.log(alphabetValueGanjil("steve"));
console.log(alphabetValueGanjil("abc"));

// 4.
const arr1 = [1, 3, 4, 7]
const arr2 = [1, 3, 4, 5, 7, 9]

const unique = () => {
    let result = [];
    for (let i = 0; i < arr1.length; i++){
        if (arr2.indexOf(arr1[i]) === -1){
            result.push(arr1[i]);
        }
    }
    for (let i = 0; i < arr2.length; i++){
        if (arr1.indexOf(arr2[i]) === -1){
            result.push(arr2[i])
        }
    }
    return result;
}
console.log(unique([1, 3, 4, 7], [1, 3, 4, 5, 7, 9]))




