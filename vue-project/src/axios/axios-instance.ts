import axios from 'axios';

const api = axios.create({
    baseURL: 'https://auth-qa.wsm.powerplay.studio/api/'
});

api.defaults.headers.post['Content-Type'] = 'application/json';
api.defaults.headers.post['Pps-Game-Token'] = 'QhsSExGkWtNZT8nA5DymX0riBgaq1YFof4IKbCpJdjPLR3czM7Vu2e69wlHvUO';

// Môžete pridať interceptory pre požiadavky alebo odpovede

export default api;