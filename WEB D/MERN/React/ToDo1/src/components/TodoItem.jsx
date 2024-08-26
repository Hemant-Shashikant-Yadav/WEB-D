function TodoItem() {
    return <>
        <div class="row todo-itm-container" >
            <div class="col-6 todo-items"  >
                Buy milk
            </div>
            <div class="col-4 todo-items"  >
                4/5/2024
            </div>
            <div class="col-2 "  >
                <button type='submit' class="btn btn-danger">delete</button>
            </div>
        </div>
    </>
}

export default TodoItem;