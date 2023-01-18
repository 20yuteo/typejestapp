export class Doller {
    amount: number;

    constructor(amount: number) {
        this.amount = amount;
    }

    times(multiplier: number): Doller {
        return new Doller(this.amount * multiplier);
    }

    equals(doller: Doller): boolean {
        return this.amount === doller.amount;
    }
}