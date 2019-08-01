import * as React from "react";
import { AnswerText } from "./answers/AnswerText";
import { AnswerImage } from "./answers/AnswerImage";

type Props = QuestionInterface & {
    amount: number;
    isActive: boolean;
    index: number;
    onNext: (characterId: number) => void;
}

interface State {
    activeAnswerIndex?: number;
}

export class Question extends React.Component<Props, State> {
    state: State = {};

    render() {
        const { isActive, index, amount, text, answers } = this.props;
        const onNext = (characterId: number, activeAnswerIndex: number) => () => {
            this.setState({ activeAnswerIndex });
            this.props.onNext(characterId);
        }

        return (
            <div className={`question ${isActive ? "question-active" : ""}`}>
                <div className="label">{`${index + 1} / ${amount}`}</div>
                <div className="text">
                    {text}
                </div>
                <div className="answers">
                    {answers.map((answer: AnswerInterface, key: number) => {
                        const answerProps = {
                            characterId: answer.characterId,
                            isActive: this.state.activeAnswerIndex === key,
                            key,
                            index: key,
                            onNext,
                        }

                        return (
                            <>
                                {answer.imageUrl ? <AnswerImage imageUrl={answer.imageUrl} {...answerProps} />
                                    : answer.text ? <AnswerText text={answer.text} {...answerProps} />
                                        : null}
                            </>
                        )
                    })}

                </div>
            </div>

        )
    }
}
