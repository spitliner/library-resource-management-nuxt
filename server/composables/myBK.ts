import TokenAuth from "./token";

export const myBKapi = {
    async checkToken (tokenStr: string) {
        const decrypt = await TokenAuth.verifyToken(tokenStr);

        if (undefined !== decrypt.error) {
            return false;
        }

        

        return true;
    },

    async generateToken () {

    }
}

