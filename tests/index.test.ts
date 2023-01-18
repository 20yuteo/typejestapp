import { Doller } from "../src/index";

describe("Doller", () => {
    test('money test', () => {
        const five: Doller = new Doller(5);
        let product = five.times(2);
        expect(product.amount).toBe(10);
        product = five.times(3);
        expect(product.amount).toBe(15);
    });
});
