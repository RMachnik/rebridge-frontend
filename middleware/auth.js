export default function(context) {
    if (context.route.name !== 'index' && !context.store.state.auth.token) {
        context.redirect('/');
    } else {
        if (context.route.name === 'index' && context.store.state.auth.token) {
            context.redirect('/projects');
        }
    }
    if (process.server) {
        if (context.store.state.auth.token) {
            context.redirect('/projects');
        }
    }
}