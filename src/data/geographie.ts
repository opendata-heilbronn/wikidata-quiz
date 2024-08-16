import { Question } from "@/models/question";

const geographie: Question[] = [
    {
        Topic: "Geografie",
        Content: "Was ist die Hauptstadt von Deutschland?",
        Answer: null,
        Answers: [
            {
                Content: "Frankfurt",
                IsCorrect: false
            }, {
                Content: "Berlin",
                IsCorrect: true
            }, {
                Content: "München",
                IsCorrect: false
            }
        ],
        SparqlQuery: `
SELECT ?capital ?capitalName
WHERE {
  wd:Q183 wdt:P36 ?capital .
  ?capital rdfs:label ?capitalName .
  FILTER (lang(?capitalName) = "de")
}`
    }, {
        Topic: "Geografie",
        Content: "Was ist die Hauptstadt von Frankreich?",
        Answer: null,
        Answers: [
            {
                Content: "Lyon",
                IsCorrect: false
            }, {
                Content: "Marseille",
                IsCorrect: false
            }, {
                Content: "Paris",
                IsCorrect: true
            }
        ],
        SparqlQuery: `
SELECT ?capital ?capitalName
WHERE {
  wd:Q183 wdt:P36 ?capital .
  ?capital rdfs:label ?capitalName .
  FILTER (lang(?capitalName) = "de")
}`
    }, {
        Topic: "Geografie",
        Content: "Was ist die Hauptstadt von Italien?",
        Answer: null,
        Answers: [
            {
                Content: "Mailand",
                IsCorrect: false
            }, {
                Content: "Rom",
                IsCorrect: true
            }, {
                Content: "Neapel",
                IsCorrect: false
            }
        ],
        SparqlQuery: `
SELECT ?capital ?capitalName
WHERE {
  wd:Q183 wdt:P36 ?capital .
  ?capital rdfs:label ?capitalName .
  FILTER (lang(?capitalName) = "de")
}`
    }, {
        Topic: "Geografie",
        Content: "In welchem Bundesland liegt die Stadt Köln?",
        Answer: null,
        Answers: [
            {
                Content: "Nordrhein-Westfalen",
                IsCorrect: true
            }, {
                Content: "Hessen",
                IsCorrect: false
            }, {
                Content: "Bayern",
                IsCorrect: false
            }
        ],
        SparqlQuery: `
SELECT ?capital ?capitalName
WHERE {
  wd:Q183 wdt:P36 ?capital .
  ?capital rdfs:label ?capitalName .
  FILTER (lang(?capitalName) = "de")
}`
    }, {
        Topic: "Geografie",
        Content: "In welchem Land liegt die Stadt Wien?",
        Answer: null,
        Answers: [
            {
                Content: "Deutschland",
                IsCorrect: false
            }, {
                Content: "Österreich",
                IsCorrect: true
            }, {
                Content: "Schweiz",
                IsCorrect: false
            }
        ],
        SparqlQuery: `
SELECT ?capital ?capitalName
WHERE {
  wd:Q183 wdt:P36 ?capital .
  ?capital rdfs:label ?capitalName .
  FILTER (lang(?capitalName) = "de")
}`
    }, {
        Topic: "Geografie",
        Content: "In welchem Bundesland liegt die Stadt Chemnitz?",
        Answer: null,
        Answers: [
            {
                Content: "Sachsen",
                IsCorrect: true
            }, {
                Content: "Thüringen",
                IsCorrect: false
            }, {
                Content: "Brandenburg",
                IsCorrect: false
            }
        ],
        SparqlQuery: `
SELECT ?capital ?capitalName
WHERE {
  wd:Q183 wdt:P36 ?capital .
  ?capital rdfs:label ?capitalName .
  FILTER (lang(?capitalName) = "de")
}`
    }, {
        Topic: "Geografie",
        Content: "In welchem Bundesland liegt der Harz?",
        Answer: null,
        Answers: [
            {
                Content: "Niedersachsen",
                IsCorrect: false
            }, {
                Content: "Sachsen-Anhalt",
                IsCorrect: true
            }, {
                Content: "Thüringen",
                IsCorrect: false
            }
        ],
        SparqlQuery: `
SELECT ?capital ?capitalName
WHERE {
  wd:Q183 wdt:P36 ?capital .
  ?capital rdfs:label ?capitalName .
  FILTER (lang(?capitalName) = "de")
}`
    }, {
        Topic: "Geografie",
        Content: "Was ist das nödlichste Bundesland Deutschlands?",
        Answer: null,
        Answers: [
            {
                Content: "Schleswig-Holstein",
                IsCorrect: true
            }, {
                Content: "Mecklenburg",
                IsCorrect: false
            }, {
                Content: "Hamburg",
                IsCorrect: false
            }
        ],
        SparqlQuery: `
SELECT ?capital ?capitalName
WHERE {
  wd:Q183 wdt:P36 ?capital .
  ?capital rdfs:label ?capitalName .
  FILTER (lang(?capitalName) = "de")
}`
    }, {
        Topic: "Geografie",
        Content: "Was ist das südlichste Bundesland Deutschlands?",
        Answer: null,
        Answers: [
            {
                Content: "Bayern",
                IsCorrect: true
            }, {
                Content: "Baden-Württemberg",
                IsCorrect: false
            }, {
                Content: "Hessen",
                IsCorrect: false
            }
        ],
        SparqlQuery: `
SELECT ?capital ?capitalName
WHERE {
  wd:Q183 wdt:P36 ?capital .
  ?capital rdfs:label ?capitalName .
  FILTER (lang(?capitalName) = "de")
}`
    }, {
        Topic: "Geografie",
        Content: "Was ist das größte Bundesland Deutschlands?",
        Answer: null,
        Answers: [
            {
                Content: "Bayern",
                IsCorrect: false
            }, {
                Content: "Nordrhein-Westfalen",
                IsCorrect: false
            }, {
                Content: "Niedersachsen",
                IsCorrect: true
            }
        ],
        SparqlQuery: `
SELECT ?capital ?capitalName
WHERE {
  wd:Q183 wdt:P36 ?capital .
  ?capital rdfs:label ?capitalName .
  FILTER (lang(?capitalName) = "de")
}`
    }

];

export default geographie;