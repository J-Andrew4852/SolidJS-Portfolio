import { Component } from 'solid-js';
import styles from './bibliofile.module.css'

interface Props {
    onClick: () => void;
    onHover: () => void;
    onLeave: () => void;
}

const Bibliofile: Component<Props> = (props) => {
    return (
        <div class={styles.projectSection}>
            <div class={styles.previewContent}>
                <div class={styles.textContainer}>
                    <h2>Overview</h2>
                    <p>Exhibition Space was a website created for the 2022 Gradshow featuring Digital, Animation, Game, and Graphic Design students. In my role as the Frontend Lead, I utilized Next.js to tackle complex sections of the website, including data handling, state changes, and plugin integration. Additionally, I was responsible for managing the Github Repository and the successful launch of the website.</p>
                </div>
                <div class={styles.galleryContainer}>
                </div>
            </div>
            <div class={styles.linkSection}>
                <button class={styles.button} onClick={props.onClick} onmouseenter={props.onHover} onmouseleave={props.onLeave} >View Project</button>
            </div>
        </div>
    )
}

export default Bibliofile;