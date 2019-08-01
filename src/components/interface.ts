interface CharacterInterface {
    name: string;
    id: number;
    imageUrl: string;
}

interface AnswerInterface {
    text?: string;
    imageUrl?: string;
    characterId: number;
}

interface QuestionInterface {
    text: string;
    answers: AnswerInterface[];
}