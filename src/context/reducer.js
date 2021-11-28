export const actionTypes = {
    STORE_TANKS: 'STORE_TANKS',
    STORE_DATA: 'STORE_DATA',
};

const storeTanks = (state, action) => {
    return {
        ...state,
        tanks: action.payload,
    };
};

const reducer = (state, action) => {
    switch (action.type) {
        case actionTypes.STORE_TANKS:
            return storeTanks(state, action);

        default:
            break;
    }
};

export default reducer;
