// export const BASE_URL = 'http://vps563480.ovh.net:8080'
export const BASE_URL = 'http://localhost:8080';

export function config(token) {
    return {
        data: '',
        headers: {
            'Content-Type': 'application/json;charset=UTF-8',
            'Authorization': 'Bearer ' + token,
        },
    };
}