export default function(context) {
    if (process.server) {
        context.store.dispatch('auth/initAuth', context.req.headers);
    }
    if (context.store.state.auth.token) {
        context.store.dispatch('user/loadUser', context.store.state.auth.token);
        context.store.dispatch('projects/all', context.store.state.auth.token);
    }
}