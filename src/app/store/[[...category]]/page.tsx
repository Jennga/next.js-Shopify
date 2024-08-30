interface CategoryProps {
    params: {
        category: string[] //agregar array

        searhParams?:string //
    }
}

export default function Category(props: CategoryProps){
    const { category } = props.params
    return(
        <h1>Categoria dinámica: {category}</h1>
    )
}