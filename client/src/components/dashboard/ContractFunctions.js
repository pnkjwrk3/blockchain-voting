import axios from 'axios'

export const register = newUser => {
    return axios
        .post('contracts/register', {
            name: newUser.name,
            address: newUser.address,
        })
        .then(res => {
            console.log("Registered")
        })

}

export const findAddress = user => {
    return axios
        .post('users/findAddress', {
            name: user.name
        })
        .then(res => {
            // localStorage.setItem('coninst', res.data)
            // console.log(res.data)
            return res.data
        })
        .catch(err => {
            console.log(err)
        })
}