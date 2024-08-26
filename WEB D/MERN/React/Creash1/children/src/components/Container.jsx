import styles from './Container.module.css'

const Container = ({children}) => {
    return < >
        <div>this is inside container div</div>
        <div className={styles.container}>{children}</div>
    </>
}


export default Container;