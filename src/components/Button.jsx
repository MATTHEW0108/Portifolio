import style from '../styles/Button.module.css'

export default function Button (props){
    return (
        <>
            <button className={style.button}>
                <p>{props.name}</p>
            </button>
        </>
    )
}