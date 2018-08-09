export default {
prettyLog: function (error) {
    if (error.response) {
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
        return error.response.data.message
        } else if (error.request) {

            console.log(error.request);
            return technicalIssue
        } else {
            console.log('Error', error.message);
            return technicalIssue
        }

    console.log(error.config);
    return technicalIssue
},
}
const technicalIssue = "Przepraszamy, nastąpiła przerwa techniczna.";
