import { NavLink } from 'solid-app-router';
import { Component, createSignal } from 'solid-js';
import styles from './nav.module.css'
import { useLocation } from 'solid-app-router';
import logo from '../../assets/images/Logo.svg'
import { Cross, Menu } from '../Icons/Icons';

const Nav: Component = () => {
    const location = useLocation();
    const [isMenuOpen, setIsMenuOpen] = createSignal(false);
  
    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen());
    };
    
    return (
        <nav class={styles.navBar}>
            <div class={`${styles.mobileNavContainer} ${isMenuOpen() ? styles.mobileNavOpen : styles.mobileNavClosed}`}>
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
            <div class={styles.navContent}>
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
                <div class={styles.burgerMenu} onClick={toggleMenu}>
                    {isMenuOpen() ? <Cross /> : <Menu />}
                </div>
            </div>
        </nav>
    )
}

export default Nav;