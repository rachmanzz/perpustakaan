import RepositoryMock from "../common/test-utils/repository-mock.utils";

const mockedUserRepository = RepositoryMock({
    countResolve: Math.floor(Math.random() * 100) + 1
})

export const userProviders = [
    {
        provide: 'USER_REPOSITORY',
        useValue: mockedUserRepository,
    },

];