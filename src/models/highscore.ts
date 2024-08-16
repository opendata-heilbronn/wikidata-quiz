export class Highscore {
    Name: string;
    Time: Number;
    Correct: Number

    constructor(name: string, time: Number, correct: Number) {
        this.Name = name;
        this.Correct = correct;
        this.Time = time;
    }
}
