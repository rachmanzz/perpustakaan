export type EntityRepositoryType<R, T> = {
    createResolve?: (...arg: T[]) => R,
    saveResolve?: (...arg:T[]) => R,
    countResolve?: (()=> number) | number
}

const RepositoryMock = <R, T>(arg: EntityRepositoryType<R, T>|null) => {
    return {
        create: jest.fn().mockImplementation(async (...arg_opt: T[]) => Promise.resolve(arg?.createResolve?.(...arg_opt) ?? arg_opt)),
        save: jest.fn().mockImplementation((...arg_opt: T[]) => Promise.resolve(arg && typeof arg.saveResolve !== 'undefined' ? arg.saveResolve(...arg_opt): arg_opt)),
        count: jest.fn().mockImplementation(() => Promise.resolve(typeof arg.countResolve !== 'undefined' && typeof arg.countResolve === 'number' ? arg.countResolve : typeof arg.countResolve === 'function' ? arg.countResolve() : 0))

    }
}

export default RepositoryMock;