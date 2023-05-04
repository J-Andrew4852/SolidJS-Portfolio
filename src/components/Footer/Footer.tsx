import { Component } from 'solid-js';
import styles from './footer.module.css'
import { Email, Github, Linkedin } from '../Icons/Icons';

const Footer: Component = () => {
    return (
        <div class={styles.footer}>         
            <div class={styles.footerContainer}>
                <p>&copy; James Andrew Digital 2022</p>
                <div class={styles.iconsContainer}>
                    <Github colour={'white'} linkers='https://github.com/J-Andrew4852/' />
                    <Linkedin colour={'white'} />
                    <Email colour={'white'} email='james.andrew4852@gmail.com' />
                </div>
            </div>
        </div>
    )
}

export default Footer;