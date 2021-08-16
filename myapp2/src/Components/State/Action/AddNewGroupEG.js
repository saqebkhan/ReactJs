export const addNewGroup = (name, id) => ({
    type: "ADD_NEW_GROUP",
    group: {
        name,
        id,
    },
});