export class StringCalculator {
    private static readonly emptyString: string = '';
    private static readonly zero: number = 0;
    private static readonly comma: string = ',';

    public add(numbers: string): number {
        if (this.areInputNumbersEmpty(numbers)) {
            return StringCalculator.zero;
        }
        if (numbers.includes(StringCalculator.comma)) {
            return this.addSplittedNumbers(numbers.split(StringCalculator.comma));
        }
        return parseInt(numbers);
    }

    private areInputNumbersEmpty(numbers: string): boolean {
        return numbers === StringCalculator.emptyString;
    }

    private addSplittedNumbers(splittedNumbers: string[]): number {
        return splittedNumbers
            .map((splittedNumber) => parseInt(splittedNumber))
            .reduce((splittedNumber1, splittedNumber2) => splittedNumber1 + splittedNumber2);
    }
}
