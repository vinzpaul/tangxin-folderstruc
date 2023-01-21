import { FOLLOW_MODEL } from '../constants';
export const addFriend = (friendsIndex) => ({
  type: FOLLOW_MODEL,
  payload: friendsIndex,
});
