import crypto from 'node:crypto';
import fs from 'node:fs';
import * as jose from 'jose';
import { useLogger } from 'nuxt/kit';

const logger = useLogger('Token Auth');
const config =  useRuntimeConfig();

let privateKey : crypto.KeyObject;
let publicKey : crypto.KeyObject;
try {
    privateKey = crypto.createPrivateKey({key: fs.readFileSync('./config/privateKey.pem', {encoding: 'utf8'}), passphrase: String(config.KEY_PASS)});
    publicKey = crypto.createPublicKey(fs.readFileSync('./config/publicKey.pem', {encoding: 'utf8'}));
} catch (error) {
    logger.log(error);
}

const TokenAuth = {
    async createToken(payload: Record<string, unknown>) {
        payload.padding = crypto.randomBytes(48).toString('base64');
        return new jose.SignJWT(payload)
            .setProtectedHeader({alg: 'EdDSA'}) // Ed25519
            .setExpirationTime('6h')
            .setNotBefore('0.1s')
            .sign(privateKey);
    },

    async verifyToken(token: string) {       
        try {
            const { payload } = await jose.jwtVerify(token, publicKey, {
                algorithms: ['EdDSA'],
            });

            return {
                result: payload,
            };
        } catch (error) {
            logger.log(error);

            return {
                error: 'invalid token',
            };
        }
    },
}

export default TokenAuth;
