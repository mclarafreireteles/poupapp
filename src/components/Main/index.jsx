import style from './main.module.css'

export const Main = ({ children }) => {
    return (
        <main className={style.main}>
            {children}
        </main>
    )
}