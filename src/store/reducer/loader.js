import {
  SHOW_LOADER,
  HIDE_LOADER,
} from '../constant/loader';

const initial = {
  view: false,
};

const loaderReducer = (state = initial, action) => {
  switch(action.type) {
    case SHOW_LOADER:
      return {
        ...state,
        view: true,
      };

    case HIDE_LOADER:
      return {
        ...state,
        view: false,
      };

    default:
      return state;
  }
};

export default loaderReducer;
