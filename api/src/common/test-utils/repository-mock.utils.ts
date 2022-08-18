export type EntityRepositoryType<R, T> = {
    createResolve?: (...arg: T[]) => R,
    saveResolve?: (...arg:T[]) => R,
    countResolve?: (()=> number) | number,
    findAllResolve?: (()=> R[]),
    findOneResolve?: ((...arg:T[])=> R),
    findResolve?: ((...arg: T[])=> R[]),
    findOneOrFailResolve?: ((...arg: T[])=> R),
    updateResolve?: ((...arg: T[])=> R),
    deleteResolve?: ((...arg: T[])=> R),
}

const RepositoryMock = <R, T>(arg: EntityRepositoryType<R, T>|null) => {
    return {
        create: jest.fn().mockImplementation(async (...arg_opt: T[]) => Promise.resolve(arg?.createResolve?.(...arg_opt) ?? arg_opt)),
        save: jest.fn().mockImplementation((...arg_opt: T[]) => Promise.resolve(arg && typeof arg.saveResolve !== 'undefined' ? arg.saveResolve(...arg_opt): arg_opt)),
        count: jest.fn().mockImplementation(() => Promise.resolve(typeof arg.countResolve !== 'undefined' && typeof arg.countResolve === 'number' ? arg.countResolve : typeof arg.countResolve === 'function' ? arg.countResolve() : 0)),
        find: jest.fn().mockImplementation((...arg_opt: T[]) => Promise.resolve(arg && typeof arg.findResolve !== 'undefined' && typeof arg.findResolve === 'function' ? arg.findResolve(...arg_opt)  : arg_opt)),
        findOne: jest.fn().mockImplementation((...arg_opt: T[]) => Promise.resolve(arg && typeof arg.findOneResolve !== 'undefined' && typeof arg.findOneResolve === 'function' ? arg.findOneResolve(...arg_opt)  : null)),
        findOneOrFail: jest.fn().mockImplementation((...arg_opt: T[]) => Promise.resolve(arg && typeof arg.findOneOrFailResolve !== 'undefined' && typeof arg.findOneOrFailResolve === 'function' ? arg.findOneOrFailResolve(...arg_opt)  : null)),
        update: jest.fn().mockImplementation((...arg_opt: T[]) => Promise.resolve(arg && typeof arg.updateResolve !== 'undefined' && typeof arg.updateResolve === 'function' ? arg.updateResolve(...arg_opt)  : null)),
        delete: jest.fn().mockImplementation((...arg_opt: T[]) => Promise.resolve(arg && typeof arg.deleteResolve !== 'undefined' && typeof arg.deleteResolve === 'function' ? arg.deleteResolve(...arg_opt)  : null)),
        findAll: jest.fn().mockImplementation(() => Promise.resolve(arg && typeof arg.findAllResolve !== 'undefined' && typeof arg.findAllResolve === 'function' ? arg.findAllResolve()  : null))
    }
}

export default RepositoryMock;