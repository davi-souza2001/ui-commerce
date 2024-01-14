import {CreateUserService} from '../services/user/create-user'
import { DeleteUserService } from '../services/user/delete-user'
import { ListUserService } from '../services/user/list-user'
import { LoginUserService } from '../services/user/login-user'

const createUserSpy = jest.fn()
const listUserSpy = jest.fn()
const loginUserSpy = jest.fn()
const deleteUserSpy = jest.fn()

const repoSpy = {
    create: createUserSpy,
    list: listUserSpy,
    login: loginUserSpy,
    delete: deleteUserSpy,
}

const createUser = new CreateUserService(repoSpy)
const listUser = new ListUserService(repoSpy)
const loginUser = new LoginUserService(repoSpy)
const deleteUser = new DeleteUserService(repoSpy)

describe('Tests for users', () => {
    it('Should be able to create a user', async () => {
        const user = await createUser.execute({data: {
            name: 'John Doe',
            email: 'test@test.com',
            password: '123456'
        }})

        expect(user).toBeTruthy()
    })

    it('Should be able to list users', async () => {
        expect(await listUser.execute()).toBeTruthy()
    })

    it('Should be able to login', async () => {
        const user = await loginUser.execute({data: {
            email: 'teste@gmail.com',
            password: '123456'
        }})

        expect(user).toBeTruthy()
    })

    it('Should be able to delete a user', async () => {
        const user = await deleteUser.execute('test@gmail.com')

        expect(user).toBeTruthy()
    })
})