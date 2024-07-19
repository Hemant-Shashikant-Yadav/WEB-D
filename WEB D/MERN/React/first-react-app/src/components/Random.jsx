export default function Random() {
    let random = Math.floor(Math.random() * 100);
    return <>
        <span>
            Random number generated is =
        </span>
        {random}
    </>
}