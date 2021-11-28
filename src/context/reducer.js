import { cloneDeep } from 'lodash';

export const actionTypes = {
    STORE_TANKS: 'STORE_TANKS',
    STORE_DATA: 'STORE_DATA',
    STORE_BULLETS: 'STORE_BULLETS',
    CLEAR_BULLETS: 'CLEAR_BULLETS',
};

// {
//     "entity_id": 387632377231672300,
//     "entity_type": "PlayerSession",
//     "entity_name": "team 5",
//     "x": 1912,
//     "y": 1648,
//     "facing": "left"
// }

const clearBullets = (state, action) => {
    return {
        ...state,
        bullets: {},
    };
};

const storeTanks = (state, action) => {
    const copy = cloneDeep(state.tanks);

    action.payload.forEach((element) => {
        if (copy[element.entity_id]) {
            if (element.x !== copy[element.entity_id].x && element.y !== copy[element.entity_id].y) {
                // console.log(element.entity_id);
                copy[element.entity_id] = {
                    ...element,
                    prevState: {
                        x: copy[element.entity_id].x,
                        y: copy[element.entity_id].y,
                        facing: copy[element.entity_id].facing,
                    },
                };
            }
        } else {
            copy[element.entity_id] = {
                ...element,
                prevState: {
                    x: element.x,
                    y: element.y,
                    facing: element.facing,
                },
            };
        }
    });

    return {
        ...state,
        tanks: copy,
    };
};

const storeBullets = (state, action) => {
    const copy = cloneDeep(state.bullets);

    Object.keys(copy).forEach((key) => {
        const item = action.payload.find((element) => element.entity_id === key);
        if (!item) delete copy[key];
    });

    action.payload.forEach((element) => {
        if (copy[element.entity_id]) {
            if (element.x !== copy[element.entity_id].x && element.y !== copy[element.entity_id].y) {
                // console.log(element.entity_id);
                copy[element.entity_id] = {
                    ...element,
                    prevState: {
                        x: copy[element.entity_id].x,
                        y: copy[element.entity_id].y,
                        facing: copy[element.entity_id].facing,
                    },
                };
            }
        } else {
            copy[element.entity_id] = {
                ...element,
                prevState: {
                    x: element.x,
                    y: element.y,
                    facing: element.facing,
                },
            };
        }
    });

    console.log(copy);

    return {
        ...state,
        bullets: copy,
    };
};

const reducer = (state, action) => {
    switch (action.type) {
        case actionTypes.STORE_TANKS:
            return storeTanks(state, action);

        case actionTypes.STORE_BULLETS:
            return storeBullets(state, action);

        case actionTypes.CLEAR_BULLETS:
            return clearBullets(state, action);

        default:
            break;
    }
};

export default reducer;
