import styles from './InputText.module.css';

// const handleOnChange = () => {
//     console.log(event.target.value)
// }

// const TextInput = ({ handleOnChange }) => {
const TextInput = ({ handleOnKeyDown }) => {

    return <>
        <input type="text"
            className={styles.inputText}
            placeholder="Enter Text"
            // onChange={(event) => { console.log(event.target.value) }} />
            // onChange={(event) => { handleOnChange(event) }} />
            // onChange={(event) => { handleOnChange(event) }} />
            // onChange={(event) => { handleOnChange(event) }} 

            onKeyDown={(event) => { handleOnKeyDown(event) }}
        />

    </>

}

export default TextInput;