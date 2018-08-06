export default function(context) {
    if (process.server) {
        context.store.dispatch('auth/initAuth', context.req.headers).then(
            () => {
                let token = context.store.state.auth.token;
                context.store.dispatch('user/loadUser', token).then(
                    () => context.store.dispatch('projects/all', token),
                );
            },
        ).then(()=>handleRouting(context));
    } else {
        let token = context.store.state.auth.token;
        if (token) {
            context.store.dispatch('user/loadUser', token).then(
                () => context.store.dispatch('projects/all', token),
            ).then(()=>handleRouting(context));
        }
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
    if (process.server) {
        if (context.store.state.auth.token) {
            context.redirect('/projects');
        }
    }
}