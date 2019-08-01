interface CharacterInterface {
    name: string;
    id: number;
    imageUrl: string;
    fact: string;
}

interface AnswerInterface {
    text?: string;
    characterId: number;
    imageUrl?: string;
}

interface QuestionInterface {
    text: string;
    type: "text" | "image";
    answers: AnswerInterface[];
}