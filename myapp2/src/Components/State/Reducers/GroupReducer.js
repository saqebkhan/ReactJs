const initialState={
    group : [
        {name:"PDAC",
        desc: "This is Reducer of group"
    },
        {name:"PDAC",
        desc: "This is Reducer of group"
    },
        {name:"PDAC",
        desc: "This is Reducer of group"
    }
    ]
}
export const groupReducer=(state=initialState,action)=>{
    switch(action.type){
        case "ADD_GROUP" :
            return {
                ...state,
                group: [action.grouop,...state.group],
            };
            default :
            return state;
    }

};