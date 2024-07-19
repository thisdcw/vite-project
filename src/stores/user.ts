import {defineStore} from "pinia";

export const useUserStore = defineStore({
    id: 'user',
    state: () => ({
        name: 'admin',
        age: 10
        //其他用户状态
    }),
    getters: {
        isAdult: (state) => state.age >= 18
    },
    actions: {
        incrementAge() {
            this.age++
        }
    }
})


