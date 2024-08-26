import styles from './ButtonContainer.module.css';

const ButtonContainer = () => {
    let keys = [
        "C",
        "1",
        "2",
        "+",
        "3",
        "4",
        "-",
        "5",
        "6",
        "*",
        "7",
        "8",
        "/",
        "=",
        "9",
        "0",
        ".",]

    return <>
        <div className={styles.buttonsContainer}>

            {keys.map((key, index) => (
                <button className={styles.buttonstyle} key={index} >{key}</button>
            ))}
        </div>
    </>
}


export default ButtonContainer;