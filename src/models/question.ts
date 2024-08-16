import { Answer } from './answer';

export class Question {
    Topic: string;
    Content: string;
    Answers: Answer[];
    Answer: Answer | null;
    SparqlQuery: string;

    constructor(topic: string, content: string, answers: Answer[], query: string) {
        this.Topic = topic;
        this.Content = content;
        this.Answers = answers;
        this.Answer = null;
        this.SparqlQuery = query;
    }
}
