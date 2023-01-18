export class Doller {
    amount: number;

    constructor(amount: number) {
        this.amount = amount;
    }

    times(multiplier: number): Doller {
        return new Doller(this.amount * multiplier);
    }
}