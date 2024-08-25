import Link from 'next/link';
import Movie from '../../components/movie';
import styles from '../../styles/homepage.module.css';

export const metadata = {
    title: 'Home',
};

export const URL = 'https://nomad-movies.nomadcoders.workers.dev/movies';

async function getMovies() {
    const response = await fetch(URL);
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
