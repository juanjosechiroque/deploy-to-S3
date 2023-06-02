import { Link } from "react-router-dom"

const Missing = () => {
    return (
        <article style={{ padding: "100px" }}>
            <h1>Oops!</h1>
            <p>Error de página</p>
            <div className="flexGrow">
                <Link to="/">Volver al admin</Link>
            </div>
        </article>
    )
}

export default Missing
