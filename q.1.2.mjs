import promptSync from "prompt-sync";

function main(){
    const prompt = promptSync();

    const stringInput = prompt('- Nhập chuỗi: ');

    let charCount = [];
    for (let char of stringInput) {
        if (charCount[char]) {
            charCount[char]++;
        } else {
            charCount[char] = 1;
        }
    }

    let uniqueChars = [];
    for (let char in charCount) {
        if (charCount[char] === 1) {
            uniqueChars.push(char);
        }
    }

    console.log(uniqueChars.length? uniqueChars: ['_'])
}

main();