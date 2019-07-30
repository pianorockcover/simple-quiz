import * as React from "react";
import { Quiz } from "./components/Quiz";
import { Character } from "./components/Character";
import { Loadnig } from "./components/Loading";
import { connect } from "react-redux";
import { fetch } from "./fetch"
import { QuizData } from "./redux/reducers";

interface Props {
    data?: QuizData;
    fetch: () => void,
}

interface State {
    characterId?: number;
    data?: QuizData;
}

export class App extends React.Component<Props, State> {
    componentDidMount() {
        this.props.fetch();
    }

    render() {
        if (!this.props.data) {
            return <Loadnig />;
        }

        const { questions, characters } = this.props.data;

        const onFinish = (characterId: number) => () => this.setState({ characterId });
        const character = characters && characters.find((item: CharacterInterface) => item.id === this.state.characterId);

        return !character ? (
            <>
                <h1>Which character are you?</h1>
                <Quiz questions={questions} onFinish={onFinish} />
            </>
        ) : <Character {...character} />
    }
}

const AppContainer = connect(
    (state: State) => ({
        data: state.data,
    }),
    {
        fetch,
    }
)(App);

export default AppContainer;