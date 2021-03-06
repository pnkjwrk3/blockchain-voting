import axios from 'axios'

export const register = newUser => {
    return axios
        .post('users/register', {
            first_name: newUser.first_name,
            last_name: newUser.last_name,
            email: newUser.email,
            password: newUser.password,
            pubkey: newUser.pubkey,
            UID: newUser.UID,
            constname: newUser.constname
        })
        .then(res => {
            console.log("Registered"+res)
        })

}

export const login = user => {
    return axios
        .post('users/login', {
            email: user.email,
            password: user.password,
            pubkey: user.pubkey
            //UID: user.UID
        })
        .then(res => {
            localStorage.setItem('usertoken', res.data)
            //console.log(res.data)
            return res.data
        })
        .catch(err => {
            console.log(err)
        })
}

export const findAddress = user => {
    return axios
        .post('users/findAddress', {
            name: user.name
        })
        .then(res => {
            return res.data
        })
        .catch(err => {
            console.log(err)
        })
}