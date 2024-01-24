import * as types from '../types';

const initialState = {
  clickedButton: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case types.CLICKED_BUTTON_SUCCESS: {
      console.log('Sucess');
      const newState = { ...state };
      newState.clickedButton = !newState.clickedButton;
      return newState;
    }

    case types.CLICKED_BUTTON_FAILURE: {
      console.log('Error');
      return state;
    }

    case types.CLICKED_BUTTON_REQUEST: {
      console.log('The request is in progress');
      return state;
    }

    default: {
      return state;
    }
  }
}
