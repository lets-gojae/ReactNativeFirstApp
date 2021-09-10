import React, {createContext, useReducer, useContext} from 'react';

const initialState = {
  id: '',
  category: 0,
  name: '',
  descriptin: '',
  image: '',
  price: 0,
  discount: 0,
  discountPrice: 0,
  recommend: false,
  newProduct: false,
  bestProduct: false,
};

export default function productReducer(state = initialState, action: any) {
  switch (action.type) {
    case 'setDetailData':
      return {
        ...state,
        payload: action,
      };
  }
}
