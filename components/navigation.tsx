'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from '../styles/navigation.module.css';

export default function Navigation() {
    const path = usePathname();

    return (
        <nav className={styles.nav}>
            <div className={styles.logo}>WOODLIX</div>
            <ul className={styles.list}>
                <li>
                    <Link href="/" className={path === '/' ? styles.active : ''}>
                        Home
                    </Link>
                </li>
                <li>
                    <Link href="/about-us" className={path === '/about-us' ? styles.active : ''}>
                        About Us
                    </Link>
                </li>
            </ul>
        </nav>
    );
}
