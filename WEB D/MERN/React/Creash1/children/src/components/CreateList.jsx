
// const buttonClickcedFucntion = () => {

//     // console.log(`Click`);
//     console.log(` Click`);
// }

const CreateList = ({ CarName, buttonClickcedFucntion ,bought}) => {
    return (
        <li className={`list-group-item ${bought ? 'active' : ''}`}>
            <span>{CarName}</span>
            {/* <button className="btn btn-info" onClick={() => { console.log(`${CarName} "button clicked"`) }}>Buy</button> */}
            {/* <button className="btn btn-info" onClick={(event) => buttonClickcedFucntion(event)}>Buy</button> */}
            <button className="btn btn-info" onClick={buttonClickcedFucntion}>Buy</button>
        </li>);
}



export default CreateList;