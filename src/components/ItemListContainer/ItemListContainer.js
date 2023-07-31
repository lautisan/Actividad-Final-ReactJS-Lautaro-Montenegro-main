import './ItemListContainer.css'
import { useState, useEffect } from 'react'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import { getDocs, collection, query, where } from 'firebase/firestore'
import { db } from '../../services/firebase'


const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const { categoryId } = useParams()

    useEffect(() => {
        setLoading(true)

        const collectionRef = !categoryId
        ? collection(db, 'prods')
        : query(collection(db, 'prods'), where('category', '==', categoryId))

        getDocs(collectionRef).then(response => {
            const prodsAdaptados = response.docs.map(doc => { 
                const data = doc.data()
                return { id: doc.id, ...data}
            })
            setProducts(prodsAdaptados)
        }).catch(error => {
            console.log(error)
        }).finally(() => {
            setLoading(false)
        })

    }, [categoryId])


    if(loading) {
        return <h1>Cargando prods...</h1>
    }

    return (
        <div onClick={() => console.log('click en itemlistcontainer')}>
            <h1>{`${greeting} ${categoryId || ''}`}</h1>
            <ItemList products={products} />
        </div>
    )
}

export default ItemListContainer