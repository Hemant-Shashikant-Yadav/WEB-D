const IterateTodoItem = ({singleItem}) => {
    return <>
        <div className="row todo-itm-container" >
            <div className="col-6 todo-items"  >
                {singleItem.name}
            </div>
            <div className="col-4 todo-items"  >
                {singleItem.date}
            </div>
            <div className="col-2 "  >
                <button type='submit' className="btn btn-danger">delete</button>
            </div>
        </div>
    </>
}

export default IterateTodoItem;