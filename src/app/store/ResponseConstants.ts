interface Response {
    code?: string;
    message?: string;
    stack?: string;
}

export class ResponseConstants {
    public EMAIL_USED = 'auth/email-already-in-use';
    public EMAIL_USED_TEXT = 'El email esta en uso';

    public LOGIN_WRONG  = 'auth/wrong-password';
    public LOGIN_WRONG_TEXT  = 'Usuario o clave incorrectos';

    constructor() {}

    public getMessage(response: Response): string {

        if ( response.code === this.EMAIL_USED ) {
            return this.EMAIL_USED_TEXT;
        }

        if ( response.code === this.LOGIN_WRONG ) {
            return this.LOGIN_WRONG_TEXT;
        }


    }

}
