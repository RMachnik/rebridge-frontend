export default function (context) {
    if (process.server) {
        context.store.dispatch('projects/loadAll', context.store.state.auth.token)
    }
}