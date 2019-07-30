import * as React from "react";
import { Question } from "./Question";
import { getTheMostFrequentItem } from "./helpers";

interface Props {
    questions: QuestionInterface[];
    onFinish: (characterId: number) => () => void;
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

        const question = questions[currentQuestionIndex];
        const onNext = (characterId: number) => () => {
            const newQuestionIndex = currentQuestionIndex + 1;
            const results = this.state.results.concat([characterId]);

            return questions[newQuestionIndex]
                ? this.setState({
                    results,
                    currentQuestionIndex: newQuestionIndex,
                })
                : onFinish(getTheMostFrequentItem(results))()
        }

        return (
            <Question {...question} onNext={onNext} />
        )
    }
}
