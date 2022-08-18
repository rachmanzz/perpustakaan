import RepositoryMock from "../common/test-utils/repository-mock.utils";

const mockedRegionRepository = RepositoryMock({
    countResolve: Math.floor(Math.random() * 100) + 1
})
export const userProviders = [
    {
        provide: 'USER_REPOSITORY',
        useValue: mockedRegionRepository,
    }
];