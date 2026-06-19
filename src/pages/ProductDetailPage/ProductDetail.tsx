import { useParams } from "react-router-dom";


function ProductDetail () {
    const { id } = useParams()
    return <h1>Soy el detalle de el producto # {id}</h1>
}

export default ProductDetail;