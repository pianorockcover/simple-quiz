interface CharacterInterface {
    fact: string;
    id: number;
    imageUrl: string;
    name: string;
}

interface AnswerInterface {
    characterId: number;
    imageUrl?: string;
    text?: string;
}

interface QuestionInterface {
    answers: AnswerInterface[];
    text: string;
    type: "text" | "image";
}