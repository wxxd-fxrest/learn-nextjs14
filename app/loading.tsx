import styles from '../styles/loading.module.css';

export default function Loading() {
    return (
        <div className={styles.loadingContainer}>
            <div className={styles.loadingIcon}></div> {/* 로딩 아이콘 추가 */}
        </div>
    );
}
