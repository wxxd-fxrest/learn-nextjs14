import Movie from '../../components/movie';
import styles from '../../styles/homepage.module.css';
import { MOVIE_URL } from '../constants';

export const metadata = {
    title: 'Home',
};

async function getMovies() {
    const response = await fetch(MOVIE_URL);
    const json = await response.json();
    return json;
}

export default async function HomPage() {
    const movies = await getMovies();
    return (
        <div className={styles.movieGrid}>
            {movies.map((movie) => (
                <Movie key={movie.id} id={movie.id} poster_path={movie.poster_path} title={movie.title} />
            ))}
        </div>
    );
}
