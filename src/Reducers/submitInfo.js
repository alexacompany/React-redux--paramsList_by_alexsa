
export default function submitInfo (state=[], action) {
    switch (action.type) {
        // case 'GET_VALUE':
        //     return [
        //         ...state
        //     ];
        case 'SAVE_VALUE':
            return [
                ...state,
                {propToSubmit: action.payload}
            ];
        default:
            return state;
    }
}