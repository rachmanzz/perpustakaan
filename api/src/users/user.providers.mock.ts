import RepositoryMock from "../common/test-utils/repository-mock.utils";

const mockedUserRepository = RepositoryMock({
    countResolve: Math.floor(Math.random() * 100) + 1
})
const mockedCardRepository = RepositoryMock({})
const mockedProfileRepository = RepositoryMock({})

export const userProviders = [
    {
        provide: 'USER_REPOSITORY',
        useValue: mockedUserRepository,
    },
    {
        provide: 'CARD_REPOSITORY',
        useValue: mockedCardRepository,
    },
    {
        provide: 'PROFILE_REPOSITORY',
        useValue: mockedProfileRepository,
    }

];