export default function(context) {
    if (process.server) {
        context.store.dispatch('auth/initAuth', context.req.headers).
            then(() => handleRouting(context));
    } else {
        handleRouting(context);
    }
}

function handleRouting(context) {
    if (context.route.name !== 'index' && !context.store.state.auth.token) {
        context.redirect('/');
    } else {
        if (context.route.name === 'index' && context.store.state.auth.token) {
            context.redirect('/projects');
        }
    }
}