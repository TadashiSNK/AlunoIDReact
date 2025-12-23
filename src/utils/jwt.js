import { jwtDecode } from 'jwt-decode'



const secret = "essaéachaveSecreta"

function generateToken(payload) {
    return jwt.sign(payload, secret, { expiresIn: 60*60*5 })
}

function decodeToken(){
    const token = localStorage.getItem("token")

    var decoded

    if (token != null){
        console.log("token existe")
        decoded = jwtDecode(token)
    } 
    else{
        return null
    }

    return {
        "nome": decoded.nome,
        "userID": decoded.userID
    }
}



export {generateToken, decodeToken}