const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    //   case ActionTypes.SET_CURRENT_STORY_LINK: {
    //     return {
    //       ...state,
    //       CURRENT_STORY_LINK: action.payload.link
    //     };
    //   }
    default: {
      return state;
    }
  }
};
