import getTodoId from '../utils/getTodoId'

const Todo = {
    email: {
        fragment: 'fragment TodoId on Todo { id }',
        resolve(parent, args, { request }, info) {
            const TodoId = getTodoId(request, false)

            if (TodoId && TodoId === parent.id) {
                return parent.title
            } else {
                return null
            }
        }
    }
}

export { Todo as default }