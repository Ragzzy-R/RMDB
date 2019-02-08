import ConfigurationActionTypes from "../../ActionTypes/ConfigurationActionTypes";

const initialState = {
  imageConfig: {}
};

export default (state = initialState, action) => {
  /* eslint-disable */
  const a = action;
  console.log("IMAGECONFIG", action);
  switch (action.type) {
    case ConfigurationActionTypes.ACTIONTYPE_CONFIGURATION_SET_IMAGE_CONFIG: {
      return {
        ...state,
        imageConfig: action.payload
      };
    }
    default: {
      return state;
    }
  }
  /* eslint-enable */
};
