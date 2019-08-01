import * as React from "react";

export type AnswerProps = AnswerInterface & {
    onNext: (characterId: number, activeAnswerIndex: number) => () => void;
    isActive: boolean;
    index: number;
}

export class Answer<T extends AnswerProps> extends React.Component<T> {
    type = "";

    renderAnswer(content: React.ReactNode) {
        const { characterId, isActive, index, onNext } = this.props;

        return (
            <div
                className={`answer answer-${this.type} ${isActive ? "answer-active" : ""}`}
                onClick={onNext(characterId, index)}
            >
                {content}
            </div>
        );
    }
}
