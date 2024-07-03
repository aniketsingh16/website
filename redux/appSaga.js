import { put, takeEvery, all } from "redux-saga/effects";
import { toggleDrawerSuccess, toggleSearchBoxSuccess } from "./appSlice";


function* toggleSearchBoxSaga({ payload }) {
    try {
        yield put(toggleSearchBoxSuccess(payload));
    } catch (err) {
        console.log(err);
    }
}

function* toggleDrawerSaga({ payload }) {
    try {
        yield put(toggleDrawerSuccess(payload));
    } catch (err) {
        console.log(err);
    }
}
function* rootSaga() {
    yield all([
        takeEvery('app/toggleSearchBox', toggleSearchBoxSaga),
        takeEvery('app/toggleDrawer', toggleDrawerSaga),
    ]);
}

export default rootSaga;  //watcherFunciton