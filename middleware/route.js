export default function(context){
    if (process.server) {
        if (context.store.state.auth.token) {
            context.redirect('/projects');
        }
    }
}