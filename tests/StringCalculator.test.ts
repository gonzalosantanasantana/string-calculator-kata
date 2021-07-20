import { StringCalculator } from '../src/StringCalculator';

describe('String Calculator', (): void => {
    let sut: StringCalculator;
    beforeEach(() => {
        sut = new StringCalculator();
    });

    it('should return 0 when string is empty', (): void => {
        expect(sut.add('')).toBe(0);
    });

    it('should return a value of the sum when string only have a number', (): void => {
        expect(sut.add('1')).toBe(1);
        expect(sut.add('2')).toBe(2);
        expect(sut.add('7')).toBe(7);
        expect(sut.add('0')).toBe(0);
    });

    it('should return the value of the sum when string contains two numbers splitted by a comma', (): void => {
        expect(sut.add('1,2')).toBe(3);
        expect(sut.add('0,4')).toBe(4);
        expect(sut.add('10,20')).toBe(30);
    });

    it('should return the sum of an unknown amount of numbers splitted by commas', (): void => {
        expect(sut.add('0,4,10')).toBe(14);
        expect(sut.add('1,2,3,10,4')).toBe(20);
    });
});
