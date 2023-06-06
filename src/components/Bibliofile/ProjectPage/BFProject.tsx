import { Component } from 'solid-js';
import styles from './bFProject.module.css'
import { Express, GithubLarge, HTML5, Javascript, LitElement, MongoDB, Nodejs, Parcel, Sass, WebsiteLink } from '../../Icons/Icons';

const BFProject: Component = () => {
    return (
        <div class={styles.projectPage}>
                        <div class={styles.topColourSection}>
                <div class={`${styles.tools} ${styles.box}`}>
                    <p>Tools Used</p>
                    <HTML5 />
                    <Sass />
                    <Javascript />
                    <Nodejs />
                    <MongoDB />
                    <Express />
                    <LitElement />
                    <Parcel />
                </div>
                <div class={`${styles.webLinks} ${styles.box}`}>
                    <a href="https://biblio-file-frontend.vercel.app/" target="_blank">
                        <div class={styles.webLink}>
                            <WebsiteLink colour='white' linkers='https://biblio-file-frontend.vercel.app/' />
                            <p>Check out the website</p>
                        </div>
                    </a>
                    <a href="https://github.com/J-Andrew4852/BiblioFile-frontend" target="_blank">
                        <div class={styles.webLink}>
                            <GithubLarge colour='white' linkers='https://github.com/J-Andrew4852/BiblioFile-frontend' />
                            <p>See the Frontend repository</p>
                        </div>
                    </a>
                    <a href="https://github.com/J-Andrew4852/BiblioFile-backend" target="_blank">
                        <div class={styles.webLink}>
                            <GithubLarge colour='white' linkers='https://github.com/J-Andrew4852/BiblioFile-backend' />
                            <p>See the Backend repository</p>
                        </div>
                    </a>
                </div>  
            </div>
        </div>
    )
}

export default BFProject;