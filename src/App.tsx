import * as React from "react";
import { Quiz } from "./components/Quiz";
import { Character } from "./components/Character";
import { Loadnig } from "./components/Loading";
import { connect } from "react-redux";
import { QuizData } from "./redux/reducers";
import { bindActionCreators } from "redux";
import { fetchData } from "./redux/fetchData";
import "normalize.css";
import "./styles/site.less";

interface Props {
    data?: QuizData;
    fetchData: () => void,
}

interface State {
    characterId?: number;
    data?: QuizData;
}

export class App extends React.Component<Props, State> {
    state: State = {};

    componentDidMount() {
        this.props.fetchData();
    }

    render() {
        if (!this.props.data) {
            return <Loadnig />;
        }

        const { questions, characters, title } = this.props.data;

        const onFinish = (characterId: number) => () => this.setState({ characterId });
        const character = characters && characters.find((item: CharacterInterface) => item.id === this.state.characterId);

        const onRestart = () => this.setState({ characterId: undefined });

        return (
            <>
                {!character ?
                    <>
                        <h1>{title}</h1>
                        <Quiz questions={questions} onFinish={onFinish} />
                    </>
                    :
                    <>
                        <Character {...character} />
                        <button onClick={onRestart} className="restart">Restart</button>
                    </>
                }
            </>
        )
    }
}

const AppContainer = connect(
    (state: State) => ({
        data: state.data,
    }),
    (dispatch) => bindActionCreators({
        fetchData,
    }, dispatch)
)(App);

export default AppContainer;
