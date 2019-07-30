import { combineReducers, Reducer } from "redux";

export interface QuizData {
    characters: CharacterInterface[];
    questions: QuestionInterface[];
}

interface Action {
    type: string;
    data?: QuizData;
}

// TODO: Remove ANY!!!
export const dataReducer: Reducer<any, Action> = (state: {} = {}, action: Action) => {
    switch (action.type) {
        case "RECEIVE_DATA":
            return {
                data: action.data,
            }
        default:
            return state;
    }
}
