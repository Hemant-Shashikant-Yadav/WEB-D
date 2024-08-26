

const ErrorMessage = ({ CarNames }) => {
    // let cars = ['Mahindra', 'Audi', 'BMW', 'Mercedes', 'Porsche', 'Ferrari', 'Aston Martin', 'Pagani', 'Bugatti', 'Tata', 'Land Rower', 'Volvo'];
    // let cars=[];

    // if (cars.length === 0) {
    //     return <><h1 style={{ color: "red" }}>No data found!!! List is Empty</h1></>
    // }
    // return null;

    // return <>
    //     {cars.length === 0 ?<h1 style={{ color: "red" }}>No data found!!! List is Empty</h1>:null}
    // </>

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    if (CarNames.length === 0) {
        return <><h1 style={{ color: "red" }}>No data found!!! List is Empty</h1></>
    }
    return null;

    // return <>
    //     {CarNames.length === 0 ?<h1 style={{ color: "red" }}>No data found!!! List is Empty</h1>:null}
    // </>
}

export default ErrorMessage;