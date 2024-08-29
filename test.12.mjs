import PromptSync from "prompt-sync";
import { createInterface } from 'readline';

function main(){
    console.log('---------------------------------------')
    console.log('1.2. Lọc ra tất cả các phần tử xuất hiện quá một 1 trong danh sách người dùng nhập vào');

    const prompt = PromptSync();
    const rl = createInterface({
        input: process.stdin,
        output: process.stdout
    });

    let phantu, arrInput = [];
    do {
        phantu = parseInt(prompt('- Nhập số phần tử của mảng (>0): '));
    } while (phantu <= 0 || !phantu);

    for(let i=0; i<phantu; i++){
        
        let giatri;
        do {
            giatri = parseInt(prompt(`- Nhập phần tử ${i+1}: `));
        } while (!giatri);
        arrInput.push(giatri);
    }
    
    let result = [];
    for(let i=0; i<arrInput.length; i++){
        for(let j=arrInput.length-1; j>i; j--){
            if(arrInput[i] === arrInput[j]){
                result.push(arrInput[i]);
            }
        }
    }
    console.log(result);
    rl.close();
}

main();