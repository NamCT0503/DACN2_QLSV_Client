import promptSync from "prompt-sync";

function main(req){
    // const prompt = promptSync();
    // console.log(
    //     '--------------------------------------------------------\n'+
    //     '***Nhập vào một chuỗi, lọc ra các phần tử lặp lại quá 1 lần trong chuỗi***'
    // );
    // const stringInput = prompt('- Nhập chuỗi đầu vào: ');
    
    let charAtStrInput = [];
    for(let char of stringInput){
        if(charAtStrInput[char]){
            charAtStrInput[char]++;
        } else {
            charAtStrInput[char] = 1;
        }
    }

    
    // console.log(charAtStrInput);
    let result = [];
    for(let key in charAtStrInput){
        if(charAtStrInput[key] === 1){
            result.push(key);
        }
    }

    console.log(result?.length? result: 'Rỗng');
}

const req = main('abcab');
main()