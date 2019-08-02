import { Reducer } from "redux";
import { AppState, initialState } from "../App";

export interface QuizData {
    characters: CharacterInterface[];
    desc: string;
    imageUrl: string;
    questions: QuestionInterface[];
    title: string;
}

interface Action {
    data?: QuizData;
    type: string;
}

export const dataReducer: Reducer<AppState, Action> = (state = initialState, action: Action) => {
    switch (action.type) {
        case "RECEIVE_DATA":
            return {
                data: action.data,
            }
        default:
            return state;
    }
}
