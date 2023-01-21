import { FOLLOW_MODEL } from "../constants";

const INITIAL_STATE = {
  current: [],
  possible: ["hongkongdoll", "nana_taipei", "小白兔", '妹哇'],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FOLLOW_MODEL:
      const { current, possible } = state;

      const addedModel = possible.splice(action.payload, 1);

      current.push(addedModel);

      const newState = { current, possible };

      return newState;

    default:
      return state;
  }
};


