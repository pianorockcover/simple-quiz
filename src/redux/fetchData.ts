export const fetchData = (apiUrl: string) => (dispatch: (action: any) => void) => {
    const oReq = new XMLHttpRequest();
    oReq.open("GET", apiUrl, true);
    oReq.setRequestHeader('Content-Type', 'application/json');

    oReq.onload = () =>
        dispatch({ type: "RECEIVE_DATA", data: JSON.parse(oReq.response) });

    oReq.send();
    dispatch({ type: "REQUEST_DATA" });
}
