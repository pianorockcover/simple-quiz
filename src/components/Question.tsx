import * as React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { AnswerText } from "./answers/AnswerText";
import { AnswerImage } from "./answers/AnswerImage";

type Props = QuestionInterface & {
    onNext: (characterId: number) => () => void;
}

export const Question = (props: Props) => (
    <div className="question">
        <div className="image">
            <LazyLoadImage src={props.imageUrl} />
        </div>
        <div className="text">
            {props.text}
        </div>
        <div className="answers">
            {props.answers.map((answer: AnswerInterface, key: number) => {
                const answerProps = {
                    onNext: props.onNext,
                    characterId: answer.characterId,
                    key,
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
);
