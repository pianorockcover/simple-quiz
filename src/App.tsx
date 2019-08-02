import "./styles/site.less";
import "normalize.css";
import { bindActionCreators } from "redux";
import { Character } from "./components/Character";
import { connect } from "react-redux";
import { fetchData } from "./redux/fetchData";
import { Loadnig } from "./components/Loading";
import { Quiz } from "./components/Quiz";
import { QuizData } from "./redux/reducers";
import { SimpleImg } from "react-simple-img";
import * as React from "react";

interface AppProps {
    data?: QuizData;
    fetchData: () => void,
}

export interface AppState {
    characterId?: number;
    data?: QuizData;
}

export const initialState: AppState = {};

export class App extends React.Component<AppProps, AppState> {
    state = initialState;

    componentDidMount() {
        this.props.fetchData();
    }

    render() {
        if (!this.props.data) {
            return <Loadnig />;
        }

        const { questions, characters, title, imageUrl, desc } = this.props.data;

        const onFinish = (characterId: number) => this.setState({ characterId });
        const onRestart = () => this.setState({ characterId: undefined });

        const character = characters && characters.find((item: CharacterInterface) => item.id === this.state.characterId);

        return (
            <>
                {!character ?
                    <>
                        <h1><span>{title}</span></h1>
                        <div className="image">
                            <SimpleImg
                                src={imageUrl}
                                height={250}
                                className="main-quiz-image"
                            />
                            <div className="desc">
                                <h2>About This Quiz</h2>
                                <p>{desc}</p>
                                <img src="img/icon-arrow-down.svg" className="arrow-down" />
                            </div>
                        </div>
                        <Quiz questions={questions} onFinish={onFinish} />
                    </>
                    : <Character {... { ...character, onRestart }} />
                }
            </>
        )
    }
}

const AppContainer = connect(
    (state: AppState) => ({
        data: state.data,
    }),
    (dispatch) => bindActionCreators({
        fetchData,
    }, dispatch)
)(App);

export default AppContainer;
