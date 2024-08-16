
export class Answer {
    Content: string;
    IsCorrect: boolean;

    constructor(content: string, isCorrect: boolean) {
        this.Content = content;
        this.IsCorrect = isCorrect;
    }
}