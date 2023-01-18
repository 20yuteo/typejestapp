import { Doller } from "../src/index";

describe("Doller", () => {
    test('money test', () => {
        const five: Doller = new Doller(5);
        expect(five.times(2)).toStrictEqual(new Doller(10));
        expect(five.times(3)).toStrictEqual(new Doller(15));
    });

    test("equal", () => {
        expect(new Doller(5).equals(new Doller(5))).toStrictEqual(true);
        expect(new Doller(5).equals(new Doller(6))).toStrictEqual(false);
    });
});
