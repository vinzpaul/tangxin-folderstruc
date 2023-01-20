const INITIAL_STATE = {
    current: [],
    possible: [
        'Toni',
        'Mark',
        'Liam',
    ],
};

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case 'ADD_FRIEND':

            const { current, possible } = state;

            const addedFriend = possible.splice(action.payload, 1);

            current.push(addedFriend);

            const newState = { current, possible };

            return newState;

        default:
            return state;
    }
}
