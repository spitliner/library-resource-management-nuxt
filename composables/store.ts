import { defineStore } from 'pinia';

export const userInfoStore = defineStore('user-info', {
    state: () => ({ id: '', name: '', role: '', guest: true }),
    getters: {
        getInfo: ( state ) => state,
    },
    actions: {
        update() {
            
        }
    }
});
