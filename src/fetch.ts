import { receiveData } from "./redux/actions";

export const fetch = () => {
    const url = "backend/data.json";
    const oReq = new XMLHttpRequest();
    oReq.open("GET", url, true);
    oReq.setRequestHeader('Content-Type', 'application/json');

    oReq.onload = () => {
        receiveData({} as any);
        debugger;
    }

    oReq.send();
}
