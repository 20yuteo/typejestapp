import { Doller } from "../src/index";

test('money test', () => {
    let five: Doller = new Doller(5);
    five.times(2);
    expect(five.amount).toBe(10);
    five = five.times(3);
    expect(five.amount).toBe(15);
})