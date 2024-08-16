import { Question } from "@/models/question";

const geographie: Question[] = [
    {
        Topic: "Geschichte",
        Content: "Wann wurde die Bundesrepublik Deutschland gegründet?",
        Answer: null,
        Answers: [
            {
                Content: "1945",
                IsCorrect: false
            }, {
                Content: "23.05.1949",
                IsCorrect: true
            }, {
                Content: "1989",
                IsCorrect: false
            }
        ],
        SparqlQuery: `
SELECT ?capital
WHERE {
  wd:Q183 wdt:P571 ?capital
}
        `
    }
];

export default geographie;