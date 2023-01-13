import { Doller } from "../src/index";

test('money test', () => {
    const five = new Doller(5);
    five.times(2);
    expect(five.amount).toBe(10);
})