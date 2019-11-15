export const repository = {
    saveResult(token) {
        return localStorage.setItem('token', token);
        // return Promise.resolve()
    },
    loadResult() {
        return Promise.resolve(localStorage.getItem('token'));
        // localStorage.getItem('username')
    },
    saveUsersNames(name1, name2) {
        let names = {
            gamer1: name1,
            gamer2: name2
        };
        let gamers = JSON.stringify(names);
        return localStorage.setItem('usersNames', gamers)
    },
    async loadUserName(){
        return localStorage.getItem('username')
    },
    async clearAll(){
        return localStorage.clear()
    }
};

export default repository;