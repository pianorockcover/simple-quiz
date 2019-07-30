import * as React from "react";
import * as ReactDOM from "react-dom";
import { Quiz } from "./components/Quiz";
import { Character } from "./components/Character";
import { Loadnig } from "./components/Loading";

interface Props {
    characters?: CharacterInterface[],
    questions?: QuestionInterface[],
}

interface State {
    characterId?: number;
}

class App extends React.Component<Props, State> {
    componentDidUpdate() {
        
    }

    render() {
        const { characters, questions } = this.props;

        const onFinish = (characterId: number) => () => this.setState({ characterId });
        const character = characters && characters.find((item: CharacterInterface) => item.id === this.state.characterId);

        return !questions ? <Loadnig />
            : !character ? (
                <>
                    <h1>Which character are you?</h1>
                    <Quiz questions={questions} onFinish={onFinish} />
                </>
            )
            : <Character {...character} />
    }
}

ReactDOM.render(
    <App />,
    document.getElementById("app") as HTMLElement,
);
