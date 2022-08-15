export type EntityRepositoryType<R, T> = {
    saveResolve?: (...arg:T[]) => R
}

const RepositoryMock = <R, T>(arg: EntityRepositoryType<R, T>|null) => {
    return {
        save: jest.fn().mockImplementation((...arg_opt: T[]) => Promise.resolve(arg && typeof arg.saveResolve !== 'undefined' ? arg.saveResolve(...arg_opt): arg_opt))

    }
}

export default RepositoryMock;