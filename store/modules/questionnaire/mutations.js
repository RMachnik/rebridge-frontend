export const types = {
    SET_TEMPLATES: 'SET_TEMPLATES',
    ADD_TEMPLATE: 'ADD_TEMPLATE',
    SET_CURRENT_TEMPLATE: 'SET_CURRENT_TEMPLATE',
    REMOVE_CURRENT_TEMPLATE: 'REMOVE_CURRENT_TEMPLATE',
};

export const mutations = {
    [types.SET_TEMPLATES](state, template) {
        state.templates = template;
    },
    [types.ADD_TEMPLATE](state, template) {
        state.templates.unshift(template);
    },
    [types.SET_CURRENT_PROJECT](state, template) {
        state.currentTemplate = template;
    },
    [types.REMOVE_CURRENT_PROJECT](state) {
        state.currentTemplate = null;
    },
};
