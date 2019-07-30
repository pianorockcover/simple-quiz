import * as React from "react";

export type AnswerProps = AnswerInterface & {
    onNext: (characterId: number) => () => void;
}

export class Answer<T extends AnswerProps> extends React.Component<T> {
    renderAnswer(content: React.ReactNode) {
        const {onNext, characterId} = this.props;
        return (
            <div className="answer" onClick={onNext(characterId)}>
                {content}
            </div>
        );
    }
}
