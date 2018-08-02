import {types} from './mutations';
import util from '~/assets/js/util/util';
import projectService from '~/assets/js/api/projects';

export default {
    loadTemplate({commit}, data) {
        return projectService.updateDetails(data).then(
            (response) => {
                commit(types.SET_CURRENT_PROJECT, response.data);
            },
        ).catch((error) => util.prettyLog(error));
    },
};
