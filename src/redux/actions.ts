import { QuizData } from "./reducers";

export const requestData = () => ({
    type: 'REQUEST_DATA',
});

export const receiveData = (data: QuizData) => ({
    type: 'RECEIVE_DATA',
    data,
});
