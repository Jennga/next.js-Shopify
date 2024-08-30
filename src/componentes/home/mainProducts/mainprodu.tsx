import { Header } from "app/componentes/compartir/header"
import Image from 'next/image'
import styles from './mainprodu.module.sass'

const getProduct = async () => {
    try {
        const response = await fetch(`${process.env.SHOPIFY_HOSTNAME}/admin/api/2024-07/products.json`, {
            headers: new Headers({
                'X-Shopify-Access-Token': process.env.SHOPIFY_API_KEY || ""
            })
        })
    //se puede usar los datos o se puede hacer de dos maneras 
    //1.-asi se puede iterar 
        //const data = await response.json()
        //return data.products
    
    //2. 
        const {products} = await response.json()
        return products
    } catch(error) {
        console.log(error)
   }
   
}

export const Mainprodu = async() => {
    const products = await getProduct()
    
    return(
        <section className={styles.Mainprodu}>
            <h3>Nuevos Productos solo para ti</h3>
            <div className={styles.contenedorprodu}>
                {products?.map((product: any) => {
                    const imageSrc = product.images[0].src;
                    return (
                        <article key={product.id} className={styles.contarti}>
                            <p>{products.title}</p>
                            <Image src={imageSrc} fill alt={products.title} loading="eager" />
                        </article> //esto normalmente da errores por que se bloquea por seguridad hay que dales permiso en next.config.js
                    )
                })}
            </div>
        </section>
    )
}