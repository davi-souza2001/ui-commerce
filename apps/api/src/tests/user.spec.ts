import {CreateUserService} from '../services/user/create-user'

const createUserSpy = jest.fn()
const listUserSpy = jest.fn()
const loginUserSpy = jest.fn()
const deleteUserSpy = jest.fn()

const createUser = new CreateUserService({
    create: createUserSpy,
    list: listUserSpy,
    login: loginUserSpy,
    delete: deleteUserSpy,
})

describe('Tests for users', () => {
    it('Should be able to create a user', async () => {
        await createUser.execute({
            name: 'John Doe',
            email: 'test@test.com',
            password: '123456'
        })
    })
})