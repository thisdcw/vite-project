import service from "../api/axios"
import {User} from "../model/user.ts";

export async function login(params: User.LoginForm) {
    return service({
        url: '/user/login',
        method: 'POST',
        data: params
    })
}
