export default function (context) {
    if (process.server) {
        context.store.dispatch('auth/initAuth', context.req.headers)
        context.store.dispatch('user/loadUser', context.store.state.auth.token)
    }
}
