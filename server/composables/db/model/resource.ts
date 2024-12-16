import { database } from "../schema/connection";

export const resourceModel = {
    async create() {
        
    },

    async get(id: string) {
        const resource = await database.selectFrom('Resources').selectAll().where('Resources.id', '==', id).executeTakeFirst();

        return resource;
    },

    async filter(start: number, end: number) {
        
    }
};
