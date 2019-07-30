interface CharacterInterface {
    name: string;
    id: number;
}

interface AnswerInterface {
    text?: string;
    imageUrl?: string;
    characterId: number;
}

interface QuestionInterface {
    text: string;
    imageUrl: string;
    answers: AnswerInterface[];
}