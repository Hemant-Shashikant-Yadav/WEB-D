import CreateList from "./CreateList"
import { useState } from 'react'


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

    // return <>
    //     <ul className="list-group">
    //         {CarNames.map((c) => (
    //             <CreateList key={c} CarName={c}} />
    //         ))}
    //     </ul>
    // </>

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    let [bought, setBought] = useState([]);

    const buttonClickcedFucntion = (event, c) => {
        let b = [...bought+c]

        setBought(b)

        // console.log(`Click`);
        // console.log(` Click`);
    }




    return <>
        <ul className="list-group">
            {CarNames.map((c, index) => (
                <CreateList key={index}
                    CarName={c}
                    bought={bought.includes(c)}
                    buttonClickcedFucntion={(event)=>buttonClickcedFucntion(event, c)}

                />

            ))}
        </ul>
    </>
}

export default PrintList;