'use client';

import { useRouter } from 'next/navigation';
import styles from '../styles/homepage.module.css';

interface IMovieProps {
    title: string;
    id: string;
    poster_path: string;
}

export default function Movie({ title, id, poster_path }: IMovieProps) {
    const router = useRouter();
    const onClick = () => {
        router.push(`/movies/${id}`);
    };
    return (
        <div key={id} className={styles.movieCard} onClick={onClick}>
            <img src={poster_path} alt={title} />
            <h3> {title} </h3>
        </div>
    );
}
