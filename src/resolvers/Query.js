import getTodoId from '../utils/getTodoId'

const Query = {
    Todos(parent, args, { prisma }, info) {
        const opArgs = {
            first: args.first,
            skip: args.skip,
            after: args.after,
            orderBy: args.orderBy
        }
        
        if (args.query) {
            opArgs.where = {
                OR: [{
                    name_contains: args.query
                }]
            }
        }

        return prisma.query.Todos(opArgs, info)
    }
}

export { Query as default }