import { database } from "../schema/connection";
import type { Users } from "./db";

export const userModel = {
    async create(userInfo: Users) {
        const user = await database.insertInto('Users').values(userInfo).returningAll().executeTakeFirst();

        return user;
    },

    async get(id: string) {
        const user = await database.selectFrom('Users').selectAll().where('Users.id', '==', id).executeTakeFirst();

        return user;
    },

    async update(id: string, ) {
        
    },
};
