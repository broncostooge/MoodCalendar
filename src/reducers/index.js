const initialState = {
    Horrible:0,
    Bad:0,
    Average:0,
    Good:0,
    Great:0,
    User: null,
    Doc: null
};

export default (state = initialState, action) => {
    const newState = {...state};
    
    //SET DOC FOR USER FROM FIREBASE
    if (action.type === 'SET_DOC'){
        newState.Doc = action.doc;
    }

    //SET MOOD COUNT WHEN USERS LOGS IN
    if (action.type === 'SET_MOOD_COUNT'){
        newState.Horrible = action.moodCount.Horrible;
        newState.Bad = action.moodCount.Bad;
        newState.Average = action.moodCount.Average;
        newState.Good = action.moodCount.Good;
        newState.Great = action.moodCount.Great;
    }

    //HORRIBLE
    if (action.type === 'INCREASE_HORRIBLE_MOOD_COUNT'){
        newState.Horrible += 1;
    }
    if (action.type === 'DECREASE_HORRIBLE_MOOD_COUNT'){
        newState.Horrible -= 1;
    }

    //BAD
    if (action.type === 'INCREASE_BAD_MOOD_COUNT'){
        newState.Bad += 1;
    }
    if (action.type === 'DECREASE_BAD_MOOD_COUNT'){
        newState.Bad -= 1;
    }

    //AVERAGE
    if (action.type === 'INCREASE_AVERAGE_MOOD_COUNT'){
        newState.Average += 1;
    }
    if (action.type === 'DECREASE_AVERAGE_MOOD_COUNT'){
        newState.Average -= 1;
    }

    //GOOD
    if (action.type === 'INCREASE_GOOD_MOOD_COUNT'){
        newState.Good += 1;
    }
    if (action.type === 'DECREASE_GOOD_MOOD_COUNT'){
        newState.Good -= 1;
    }

    //GREAT
    if (action.type === 'INCREASE_GREAT_MOOD_COUNT'){
        newState.Great += 1;
    }
    if (action.type === 'DECREASE_GREAT_MOOD_COUNT'){
        newState.Great -= 1;
    }

    //SET USER
    if (action.type === 'SET_USER'){
        newState.User = action.User;
    }

    return newState;
}