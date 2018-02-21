const usersState = []

export default function mesage (state = usersState, action) {

    if (action.type === 'ADD_NEW_MESAGE') {
        return [
            ...state,
            action.payload
        ];
    }
    return state;
};