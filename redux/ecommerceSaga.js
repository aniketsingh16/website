import { put, takeEvery, all } from "redux-saga/effects";
import { setCartItemsSuccess, setWishlistItemsSuccess } from "./ecommerceSlice";

function* getWishlistItems({ payload }) {
    try {
        yield put(setWishlistItemsSuccess(payload));
    } catch (err) {
        console.log(err);
    }
}

function* getCartItems({ payload }) {
    try {
        yield put(setCartItemsSuccess(payload));
    } catch (err) {
        console.log(err);
    }
}
function* rootSaga() {
    yield all([
        takeEvery('ecommerce/setWishlistItems', getWishlistItems),
        takeEvery('ecommerce/setCartItems', getCartItems),
    ]);
}

export default rootSaga;  //watcherFunciton