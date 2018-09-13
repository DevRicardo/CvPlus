export class State {

    static logged() {

        localStorage.setItem('logged', 'true');
    }

    static getLogged() {
        return localStorage.getItem('logged');
    }

    static logOut() {
        localStorage.setItem('logged', '');
    }

}