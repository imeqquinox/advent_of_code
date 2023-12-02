import * as fs from 'fs';

function readFileContents() {
    const fileName: string = '1\\input.txt';
    let fileContent = fs.readFileSync(fileName, 'utf8');
    const lines = fileContent.split(/\r?\n/);
    return lines;
}

function CalculateCalibrationSum() {
    const elements = readFileContents();
    let totalSum: number = 0; 

    elements.forEach(element => {
        let firstDigit = (element.match(/\d/))![0];
        let lastDigit = (element.match(/\d/g))?.pop() || '';
        
        let combined = firstDigit + lastDigit;
        totalSum += parseInt(combined);
    })

    console.log(totalSum);
}

CalculateCalibrationSum();