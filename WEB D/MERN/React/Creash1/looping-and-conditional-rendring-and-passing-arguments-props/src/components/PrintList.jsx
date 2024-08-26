import CreateList from "./CreateList"

const PrintList = ({ CarNames }) => {
    // let cars = ['Mahindra', 'Audi', 'BMW', 'Mercedes', 'Porsche', 'Ferrari', 'Aston Martin', 'Pagani', 'Bugatti', 'Tata', 'Land Rower', 'Volvo'];

    // return <>

    //     <ul className="list-group">

    //         {cars.map((car) => (
    //             <li key={car} className="list-group-item">{car}</li>
    //         ))}

    //     </ul>
    // </>

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    // return <>
    //     <ul className="list-group">
    //         {CarNames.map((c) => (
    //             <li key={c} className="list-group-item">{c}</li>
    //         ))}
    //     </ul>
    // </>

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    return <>
        <ul className="list-group">
            {CarNames.map((c) => (
                <CreateList key={c} CarName={c} />
            ))}
        </ul>
    </>
}

export default PrintList;