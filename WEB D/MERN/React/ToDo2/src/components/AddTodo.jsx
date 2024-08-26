function AddTodo() {
    return <>
        <div className="row input-r" >
            <div className="col-6"  >
                <input type='text' className="input-group1" placeholder='Enter todo here' />
            </div>
            <div className="col-4"  >
                <input type='date' className="input-group1" />
            </div>
            <div className="col-2"  >
                <button type='submit'  className="btn btn-success">Add</button>
            </div>
        </div>
    </>
}

export default AddTodo