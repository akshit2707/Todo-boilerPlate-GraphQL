
import getTodoId from '../utils/getTodoId'
import generateToken from '../utils/generateToken'
import hashPassword from '../utils/hashPassword'

const Mutation = {
    async createTodo(parent, args, { prisma }, info) {
        const Todo = await prisma.mutation.createTodo({
            data: {
                ...args.data
            }
        })

        return {
            Todo
        }
    },
    async deleteTodo(parent, args, { prisma, request }, info) {
        const TodoId = getTodoId(request)

        return prisma.mutation.deleteTodo({
            where: {
                id: TodoId
            }
        }, info)
    },
    async updateTodo(parent, args, { prisma, request }, info) {
        const TodoId = getTodoId(request)


        return prisma.mutation.updateTodo({
            where: {
                id: TodoId
            },
            data: args.data
        }, info)
    }
}

export { Mutation as default }