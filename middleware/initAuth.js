export default function (context) {
    if (process.server) {
        context.store.dispatch('auth/initAuth', context.req.headers)
    }
}
