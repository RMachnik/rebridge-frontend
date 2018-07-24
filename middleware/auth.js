export default function (context) {

    if (!context.store.state.auth.token) {
        context.redirect('/');
    } else {
        if (context.route.name === 'index') {
            context.redirect('/projects')
        }
    }
}