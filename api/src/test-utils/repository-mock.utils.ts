export type EntityRepositoryType<R, T> = {
    saveResolve?: (...arg:T[]) => R,
    countResolve?: (()=> number) | number
}

const RepositoryMock = <R, T>(arg: EntityRepositoryType<R, T>|null) => {
    return {
        save: jest.fn().mockImplementation((...arg_opt: T[]) => Promise.resolve(arg && typeof arg.saveResolve !== 'undefined' ? arg.saveResolve(...arg_opt): arg_opt)),
        count: jest.fn().mockImplementation(() => Promise.resolve(typeof arg.countResolve !== 'undefined' && typeof arg.countResolve === 'number' ? arg.countResolve : typeof arg.countResolve === 'function' ? arg.countResolve() : 0))

    }
}

export default RepositoryMock;