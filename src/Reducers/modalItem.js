

export default function modalItem (state = {modalItem: false}, action) {
    switch (action.type) {
        case 'OPEN_MODAL':
        return {
            ...state,
            modalItem: true
        };
        case 'CLOSE_MODAL':
            return {
                ...state,
                modalItem: false
            };
    }
    return state;
};