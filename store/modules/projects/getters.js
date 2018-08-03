export default{
    find: (state,getters) => (id) =>{
        return getters.all.find(project => project.id == id)
    },
    all: (state) => { return state.projects}
}