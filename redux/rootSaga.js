import { all } from "redux-saga/effects";

import AppSaga from "./appSaga";
import ShopSaga from "./shopSaga";
import Ecommerce from "./ecommerceSaga";

export default function* rootSaga() {
    yield all([AppSaga(), ShopSaga(), Ecommerce()]);
}
