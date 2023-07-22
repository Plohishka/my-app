import styles from './style.module.css';

function UsersCard(props) {
    const {user: {name: {first: firstname, last: lastname}, email, phone, picture:{large}}} = props;

    return(
        <article className={styles.wrapper}>
            <img src={large} alt={`${firstname} ${lastname}`} className={styles.img}></img>
            <h1>{`${firstname} ${lastname}`}</h1>
            <p>{phone}</p>
            <p>{email}</p>

        </article>
    )
        
    
}


export default UsersCard;
