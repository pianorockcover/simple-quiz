export const fetchData = () => (dispatch: (action: any) => void) => {
    const url = "/backend/data.json";
    const oReq = new XMLHttpRequest();
    oReq.open("GET", url, true);
    oReq.setRequestHeader('Content-Type', 'application/json');

    oReq.onload = () =>
        dispatch({ type: "RECEIVE_DATA", data: JSON.parse(oReq.response) });

    oReq.send();
    dispatch({ type: "REQUEST_DATA" });
}
