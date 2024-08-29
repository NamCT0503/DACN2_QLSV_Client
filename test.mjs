import { createInterface } from 'readline';
import promptSync from 'prompt-sync';

const prompt = promptSync();

async function main() {
    let mangNhaVao = [];
    const rl = createInterface({
        input: process.stdin,
        output: process.stdout
    });

    let mang = 0, phantu = 0;
    let mangA = [], mangB = [], mangC = [];

    console.log(
        '1.1. Nhập vào một mảng và một chữ. Sau đó kiểm tra tính hợp lệ của chữ đó theo:\n'
        +'a. Các chữ cái trong chữ đó đều phải thuộc mảng nhập vào.\n'
        +'b. Các chữ cái phải liền kề tuần tự nhau (theo chiều ngang hoặc dọc).'
    )
    console.log('---------------------------------------------------------------------');

    do {
        mang = parseInt(prompt('- Nhập số mảng bạn mong muốn (tối đa 3): '));
        if(!mang) console.log('Giá trị nhập vào không phải số!');
    } while (mang <= 0|| mang > 3 || !mang);
    do {
        phantu = prompt('- Nhập số phần tử sẽ có trong một mảng (tối đa 4): ');
        if(!phantu) console.log('Giá trị nhập vào không phải số!');
    } while (phantu <= 0 || phantu > 4 || !phantu);

    for(let i=0; i<mang; i++){
        for(let j=0; j<phantu; j++){
            const giatri = prompt(`- Nhập giá trị phần tử ${j} mảng ${i}: `);
            if(mang === 3){
                if(i === 0) mangA.push(giatri.toUpperCase());
                if(i === 1) mangB.push(giatri.toUpperCase());
                if(i === 2) mangC.push(giatri.toUpperCase());
            } else if(mang === 2){
                if(i === 0) mangA.push(giatri.toUpperCase());
                if(i === 1) mangB.push(giatri.toUpperCase());
            } else {
                mangA.push(giatri.toUpperCase());
            }
        }
    }
    if(mangA.length != 0) mangNhaVao.push(mangA);
    if(mangB.length != 0) mangNhaVao.push(mangB);
    if(mangC.length != 0) mangNhaVao.push(mangC);
    console.log('--> mang: '+mang, 'phantu: '+phantu);
    console.log(`--> ${mangA}\n   ${mangB}\n   ${mangC}`);
    console.log('--> Mảng sau khi ghép: '+mangNhaVao+' and: '+mangNhaVao.length, mangNhaVao[0].length);

    const chuNhapVao = prompt('- Nhập chữ để kiểm tra: ');
    console.log('--> Chữ kiểm tra: '+chuNhapVao+' and: '+chuNhapVao.length);

    const result = checkLetterInWord(mangNhaVao, chuNhapVao.toUpperCase());
    
    console.log('KQ: ', result);
    rl.close();
}

function checkLetterInWord(mangNhaVao, chuNhapVao){
    let result = true;
    let vitri_chu = [];
    for(let x=0; x<chuNhapVao.length-1; x++){
        let vitri = [];
        let letter = chuNhapVao.charAt(x);
        let letter_next = chuNhapVao.charAt(x+1);
        for(let i=0; i<mangNhaVao.length; i++){
            for(let j=0; j<mangNhaVao[0].length; j++){
                if(mangNhaVao[i][j] === letter){
                    if(
                       ((i+1<mangNhaVao.length && mangNhaVao[i+1][j] === letter_next) ||
                       (j+1<mangNhaVao[0].length && mangNhaVao[i][j+1] === letter_next) || 
                       (i-1>=0 && mangNhaVao[i-1][j] === letter_next) || 
                       (j-1>=0 && mangNhaVao[i][j-1] === letter_next))
                    ){
                        result = true;
                    } else {
                        result = false;
                    }
                    
                    vitri.push({
                        letter: letter,
                        letter_next: letter_next,
                        xy: [i, j],
                        bool: result
                    });
                    vitri_chu.push({
                        letter: letter,
                        xy: [i, j],
                        bool: result
                    });
                    console.log('vitri: ', vitri)
                    console.log('vt_chu: ', vitri_chu)
                }
            }
        }
        let count = 0;
        if(vitri.length > 1){
            for(let i=0; i<vitri.length; i++){
                if(vitri[i]?.bool === true){
                    count = 1;
                    result = true;
                }
            }
        } 
        else {
            if(vitri[0].bool === false){
                return result = false;
            }
            count = 1;
        }

        if(count == 0){
            return result = false;
        }
    }

    for(let i=0; i<vitri_chu.length; i++){
        for(let j=vitri_chu.length-1; j>0; j--){
            if(
                vitri_chu[i]?.letter === vitri_chu[j]?.letter &&
                vitri_chu[i]?.xy === vitri_chu[j]?.xy &&
                vitri_chu[i]?.bool === vitri_chu[j]?.bool
            ){
                vitri_chu.splice(i, 1);
            }
        }
    }
    console.log('vt_chu sau: ', vitri_chu)
    return result;
}

main();