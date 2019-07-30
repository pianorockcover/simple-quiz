import * as React from "react";

interface Props {
    questions: QuestionInterface[];
}

interface State {
    currentQuestionIndex: number;
}

export class Quiz extends React.Component<Props, State> {
    state: State = {
        currentQuestionIndex: 0,
    }

    render() {
        const question = this.props.questions[this.state.currentQuestionIndex];

        return (
            <Question />
        )
    }
}
