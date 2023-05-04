import { NavLink } from 'solid-app-router';
import { Component } from 'solid-js';
import styles from './nav.module.css'
import { useLocation } from 'solid-app-router';
import logo from '../../assets/images/Logo.svg'

const Nav: Component = () => {
    const location = useLocation();
    
    return (
        <nav class={styles.navBar}>
            <a href="/">
                <div class={styles.logoContainer}>
                    <img class={styles.logo} src={logo} alt="logo" />
                </div>
            </a>
            <div class={styles.navContainer}>
                <NavLink href='/' class={location.pathname === '/' ? `${styles.navBtn} ${styles.activeNav}` : styles.navBtn}>
                    Home
                </NavLink>
                <NavLink href='/projects' class={location.pathname === '/projects' ? `${styles.navBtn} ${styles.activeNav}` : styles.navBtn}>
                    Projects
                </NavLink>
                <NavLink href='/about' class={location.pathname === '/about' ? `${styles.navBtn} ${styles.activeNav}` : styles.navBtn}>
                    About
                </NavLink>
            </div>
        </nav>
    )
}

export default Nav;