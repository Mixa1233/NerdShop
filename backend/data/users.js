import bcrypt from 'bcryptjs'

const users = [
    {
        name: 'Admin User',
        email: 'adming@email.com',
        password: bcrypt.hashSync('123456', 10),
        isAdming: true,
    },
    {
        name: 'Mike Marc',
        email: 'mike@email.com',
        password: bcrypt.hashSync('123456', 10),
        isAdming: false,
    },
    {
        name: 'Mini Marc',
        email: 'mini@email.com',
        password: bcrypt.hashSync('123456', 10),
        isAdming: false,
    },
]
export default users