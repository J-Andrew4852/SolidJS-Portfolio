import { Component } from 'solid-js';
import styles from './sustainabilityVictoria.module.css'
import heroImg from '../../assets/images/ViSu/VSSquare.jpg'

interface Props {
    onClick: () => void;
    onHover: () => void;
    onLeave: () => void;
}

const SustainabilityVictoria: Component<Props> = (props) => {
    return (
        <div class={styles.projectSection}>
            <div class={styles.previewContent}>
                <div class={styles.textContainer}>
                    <h2>Sustainability Victoria</h2>
                    <p>Sustainability Victoria was a fictional brief that required me to design a mobile application to help Victorians home grow plants and then use what they grow in their cooking. This project focused on following a design process in order to refine the design to create the best solution for the given brief. This was a UX / UI design project where the prototype was created in Figma along with the design process being documented in a blog.</p>
                </div>
                <div class={styles.galleryContainer}>
                    <img class={styles.img1} src={heroImg} alt="Image 1" />
                </div>
            </div>
            <div class={styles.linkSection}>
                <div class={styles.projectPageBtn} onClick={props.onClick} onmouseenter={props.onHover} onmouseleave={props.onLeave}>View<br />Project<br />Page</div>
            </div>
        </div>
    )
}

export default SustainabilityVictoria;