export default function (context) {
    if (process.server) {
        context.store.dispatch('auth/initAuth', context.req.headers).then(() => handleRouting(context));
    } else {
        context.store.dispatch('auth/loginCheck', context.store.state.auth.token).then(() => handleRouting(context))
    }
}

function handleRouting(context) {
    if (context.store.state.auth.token) {
        //server should always redirect to projects when someone has hit refresh
        if (process.server) {
            context.redirect("/projects")
        }
    }
    if (!context.store.state.auth.token) {
        //for index we don't need auth
        if (context.route.name !== 'index') {
            context.redirect('/');
        }
    }
}