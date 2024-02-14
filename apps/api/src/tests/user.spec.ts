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
        await createUser.execute({data: {
            name: 'John Doe',
            email: 'test@test.com',
            password: '123456'
        }})

        expect(createUserSpy).toHaveBeenCalled()
    })

    it('Should be able to list users', async () => {
        await listUser.execute()

        expect(listUserSpy).toHaveBeenCalled()
    })

    it('Should be able to login', async () => {
        await loginUser.execute({data: {
            email: 'teste@gmail.com',
            password: '123456'
        }})

        expect(loginUserSpy).toHaveBeenCalled()
    })

    it('Should be able to delete a user', async () => {
        await deleteUser.execute('test@gmail.com')

        expect(deleteUserSpy).toHaveBeenCalled()
    })
})