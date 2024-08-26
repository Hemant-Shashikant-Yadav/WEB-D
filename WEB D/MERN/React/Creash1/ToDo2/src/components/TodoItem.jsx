import IterateTodoItem from './IterateTodoItem'

function TodoItem({ tditem }) {
    return <>
        {tditem.map((singleItem, i) => (
            <IterateTodoItem key={i} singleItem={singleItem} />
        ))}
    </>
}

export default TodoItem;