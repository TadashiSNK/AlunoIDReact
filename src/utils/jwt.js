import jwt from 'jsonwebtoken'



const secret = "essaéachaveSecreta"

function generateToken(payload) {
    return jwt.sign(payload, secret, { expiresIn: 60*60*5 })
}




export default generateToken