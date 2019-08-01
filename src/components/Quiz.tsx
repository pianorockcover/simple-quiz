import * as React from "react";
import { Question } from "./Question";
import { getTheMostFrequentItem } from "./helpers";

interface Props {
    questions: QuestionInterface[];
    onFinish: (characterId: number) => void;
}

interface State {
    currentQuestionIndex: number;
    results: number[];
}

export class Quiz extends React.Component<Props, State> {
    state: State = {
        currentQuestionIndex: 0,
        results: [],
    }

    render() {
        const { currentQuestionIndex } = this.state;
        const { questions, onFinish } = this.props;

        return questions.map((question: QuestionInterface, key: number) => {
            const questionRef = React.createRef<HTMLDivElement>();

            const onNext = (characterId: number) => {
                const newQuestionIndex = currentQuestionIndex + 1;
                const results = this.state.results.concat([characterId]);

                if (questions[newQuestionIndex]) {
                    this.setState({
                        results,
                        currentQuestionIndex: newQuestionIndex,
                    });

                    const { offsetTop, offsetHeight } = questionRef!.current!;

                    return window.scrollTo({
                        behavior: "smooth",
                        top: (offsetTop + offsetHeight + 40),
                    })
                }

                onFinish(getTheMostFrequentItem(results));
            }

            return (
                <div ref={questionRef} key={key}>
                    <Question {...{
                        ...question,
                        onNext,
                        key,
                        index: key,
                        amount: questions.length,
                        isActive: key === currentQuestionIndex,
                    }} />
                </div>
            )
        });
    }
}
