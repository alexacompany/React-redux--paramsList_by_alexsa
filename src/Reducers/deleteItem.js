
export default function deleteItem (state=[], action) {
    switch (action.type) {
        case 'DELETE_ITEM':
            return [
                ...state.slice(0, action.ah)
            ];
        default:
            return state;
    }
}