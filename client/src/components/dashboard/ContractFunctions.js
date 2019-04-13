import axios from 'axios'

export const findConsts = newUser => {
    return axios
        .get('users/findConsts', {
        })
        .then(res => {
            console.log("returned from server"+res)
            return res.data
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