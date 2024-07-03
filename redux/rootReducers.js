import ecommerceReducer from './ecommerceSlice';
import shopReducer from './shopSlice';
import appReducer from './appSlice';

const rootReducers = {
  // Reducers here
    ecommerce: ecommerceReducer,
    shop: shopReducer,
    app: appReducer
};

export default rootReducers;