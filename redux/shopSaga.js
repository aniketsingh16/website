import { put, takeEvery, all } from "redux-saga/effects";
import { changeShopGridViewSuccess, toggleShopFilterSuccess } from "./shopSlice";

function* handleToggleViewModeSaga({ payload }) {
    try {
        yield put(changeShopGridViewSuccess(payload));
    } catch (err) {
        console.log(err);
    }
}

function* handleToggleShopFilterSaga({ payload }) {
    try {
        yield put(toggleShopFilterSuccess(payload));
    } catch (err) {
        console.log(err);
    }
}
function* rootSaga() {
    yield all([
        takeEvery('shop/changeShopGridView', handleToggleViewModeSaga),
        takeEvery('shop/toggleShopFilter', handleToggleShopFilterSaga),
    ]);
}

export default rootSaga;  //watcherFunciton