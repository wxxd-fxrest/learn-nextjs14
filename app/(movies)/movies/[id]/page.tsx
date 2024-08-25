import { Suspense } from 'react';
import MovieInfo, { getMovie } from '../../../../components/movie-info';
import MovieVideos from '../../../../components/movie-videos';

interface IParams {
    params: { id: string };
}

export async function generateMetadata({ params: { id } }: IParams) {
    const movie = await getMovie(id);
    return {
        title: movie.title,
    };
}

export default async function MovieDetail({ params: { id } }: IParams) {
    return (
        <div>
            <Suspense fallback={<h1> Loading movie info </h1>}>
                {/* @ts-expect-error Async Server Component */}
                <MovieInfo id={id} />
            </Suspense>
            <Suspense fallback={<h1> Loading movie video </h1>}>
                {/* @ts-expect-error Async Server Component */}
                <MovieVideos id={id} />
            </Suspense>
        </div>
    );
}

// Promise.all == 두 함수가 동시 시작하도록 함 -> 하지만 로링되는 동안 사용자는 UI를 확인할 수 없기 때문에 로딩 상태를 분리해서 가져오는대로 보여질 수 있도록 함
