export default function (context) {
    if (process.server) {
        context.store.dispatch('project/loadProjects', context.store.state.auth.token)
    }
}