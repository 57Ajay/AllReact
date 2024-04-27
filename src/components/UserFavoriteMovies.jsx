import styles from "./UserFavoriteMovies.module.scss"
const UserFavoriteMovies = ()=>{
    return(
        <div className={styles.userFavoriteMovies}>
            <h1 className={styles.userFavoriteMovies__heading}>User Favourite Movies</h1>
            <ul className={styles.userFavoriteMovies__list}>
                <li className={styles.userFavoriteMovies__item}>Oppenheimer</li>
                <li className={styles.userFavoriteMovies__item}>Avengers endgame</li>
                <li className={styles.userFavoriteMovies__item}>Inception</li>
                <li className={styles.userFavoriteMovies__item}>The Dark Knight Trilogy</li>
                <li className={styles.userFavoriteMovies__item}>Interstellar</li>
                <li className={styles.userFavoriteMovies__item}>Lord of the rings Trilogy</li>
                <li className={styles.userFavoriteMovies__item}>Star Wars (all)</li>
                <li className={styles.userFavoriteMovies__item}>The Hobbit trilogy</li>
                <li className={styles.userFavoriteMovies__item}>John wick</li>
            </ul>
        </div>
    );
};

export default UserFavoriteMovies;
