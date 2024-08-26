function AddTodo() {
    return <>
        <div class="row input-r" >
            <div class="col-6"  >
                <input type='text' class="input-group1" placeholder='Enter todo here' />
            </div>
            <div class="col-4"  >
                <input type='date' class="input-group1" />
            </div>
            <div class="col-2"  >
                <button type='submit'  class="btn btn-success">Add</button>
            </div>
        </div>
    </>
}

export default AddTodo