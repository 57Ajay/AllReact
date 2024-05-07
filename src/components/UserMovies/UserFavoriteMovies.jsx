import styles from "./UserFavoriteMovies.module.scss"
import { useState } from "react";
const UserFavoriteMovies = ()=>{
    const [favoriteMovies, setFavoriteMovies] = useState([
        "Oppenheimer",
        "Avengers endgame",
        "Inception",
        "The Dark Knight Trilogy",
        "Interstellar",
        "Lord of the rings Trilogy",
        "Star Wars (all)",
        "The Hobbit trilogy",
        "John wick",
    ]);



    const addMovie = (e) => {
        e.preventDefault();
        const dupleMovie = favoriteMovies.some(movie => e.target.elements.movie.value.toLowerCase() === movie.toLowerCase());
        if(dupleMovie || e.target.elements.movie.value === "") return (alert("Movie already exists"));
        else{
            e.preventDefault();
            const newMovie = e.target.elements.movie.value;
            setFavoriteMovies([...favoriteMovies, newMovie]);
            e.target.elements.movie.value = "";
        }
    };

    return(
        <div className={styles.userFavoriteMovies}>
            <h1 className={styles.userFavoriteMovies__heading}>User Favorite Movies</h1>
            <ul className={styles.userFavoriteMovies__list}>
                {favoriteMovies.map((movie) => (
                    <li className={styles.userFavoriteMovies__item} key={movie}>{movie}</li>
                ))}
            </ul>
            <form onSubmit={addMovie}>
                <input type="text" name="movie" placeholder="Add a movie" />
                <button type="submit" >Add</button>
            </form>
        </div>
    );
};

export default UserFavoriteMovies;
