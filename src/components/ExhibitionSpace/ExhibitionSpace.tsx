import { Component, createSignal } from 'solid-js';
import { Link } from 'solid-app-router';
import styles from './exhibitionSpace.module.css'
import galImg1 from '../../assets/images/GradShowGS.jpg'
import galImg2 from '../../assets/images/ExSp/ExSp2.png'
import galImg3 from '../../assets/images/ExSp/ExSp3.png'
import galImg4 from '../../assets/images/ExSp/ExSp4.png'
import galImg5 from '../../assets/images/ExSp/ExSp5.png'

interface Props {
    onClick: () => void;
    onHover: () => void;
    onLeave: () => void;
}

const ExhibitionSpace: Component<Props> = (props) => {
    
    return (
        <div class={styles.projectSection}>
            <div class={styles.previewContent}>
                <div class={styles.textContainer}>
                    <div class={styles.previewTitles}>
                        <h2>Exhibition Space</h2>
                        <h3>Frontend - Group Project</h3>
                    </div>
                    <p>Exhibition Space was a website created for the 2022 Gradshow featuring Digital, Animation, Game, and Graphic Design students. In my role as the Frontend Lead, I utilized Next.js to tackle complex sections of the website, including data handling, state changes, and plugin integration. Additionally, I was responsible for managing the Github Repository and the successful launch of the website.</p>
                </div>
                <div class={styles.galleryContainer}>
                    <img class={styles.img1} src={galImg1} alt="Image 1" />
                    <img class={styles.img2} src={galImg2} alt="Image 2" />
                    <img class={styles.img3} src={galImg3} alt="Image 3" />
                    <img class={styles.img4} src={galImg4} alt="Image 4" />
                    <img class={styles.img5} src={galImg5} alt="Image 5" />
                </div>
            </div>
            <div class={styles.linkSection}>
                <div class={styles.projectPageBtn} onClick={props.onClick} onmouseenter={props.onHover} onmouseleave={props.onLeave}>View<br />Project<br />Page</div>
            </div>
        </div>
    )
}

export default ExhibitionSpace;