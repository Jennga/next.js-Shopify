export default function Layout({ children}: {children:  React.ReactNode}) {
    return (
        <main>
            <nav>Tipos Categorías</nav>
            {children}
        </main>
    )
}