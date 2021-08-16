const groupDefaultState = {
    groups : [
        {
            
            id : uuidv4(),
            name : "Redux Practicle",
            image : "logo192.png",
            desc : "This is first group created by Redux"

        },
        {

            id : uuidv4(),
            name : "Learning Redux",
            image : "logo512.png",
            desc : "This is Second Group Created by Redux"

        },
        {

            id : uuidv4(),
            name : "React Developer",
            image : "logo192.png",
            desc : "This is Third group created by Redux"

        },
    ],
};
export const groupReducer = (state = groupDefaultReducer, action)=>{
    switch (action.type) {
        case "ADD_NEW_GROUP":
            return {...state, group: [action.group,...state.group] };
            default:
                return state;
    }
};