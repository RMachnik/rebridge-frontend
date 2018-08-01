export default {
    prettyLog: function (error) {
        if (error.response) {
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
            return error.response.data
        } else if (error.request) {
            console.log(error.request);
            return "Sorry, server is unavailable."
        } else {
            console.log('Error', error.message);
            return 'Sorry, server is unavailable.'
        }
        console.log(error.config);
        return "Sorry, server is unavailable."
    },
}
