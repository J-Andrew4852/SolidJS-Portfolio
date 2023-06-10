import { Component } from 'solid-js';
import styles from './bibliofile.module.css'
import galImg1 from '../../assets/images/BiFi/GuidePic.png'
import galImg2 from '../../assets/images/BiFi/SignUpPic.png'
import galImg3 from '../../assets/images/BiFi/StorysPic.png'
import galImg4 from '../../assets/images/BiFi/CharacterPic.png'
import galImg5 from '../../assets/images/BiFi/CharactersPic.png'
import galImg6 from '../../assets/images/BiFi/NotesPic.png'


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
                    <h2>BiblioFile</h2>
                    <p>Bibliofile is a website for writers, teachers and other creatives that will benefit from a randomised character generator. The website allows users to sign up, create stories, add characters to their stories, make edits to characters, and write notes on both stories and characters. As part of a three-person group, which included a UX Designer (Ben Crook) and a UX Researcher (Kate MacKenzie), I contributed as the Web Developer.</p>
                </div>
                <div class={styles.galleryContainer}>
                    <img class={styles.img1} src={galImg1} alt="Image 1" />
                    <img class={styles.img2} src={galImg2} alt="Image 2" />
                    <img class={styles.img3} src={galImg3} alt="Image 3" />
                    <img class={styles.img4} src={galImg4} alt="Image 4" />
                    <img class={styles.img5} src={galImg5} alt="Image 5" />
                    <img class={styles.img6} src={galImg6} alt="Image 6" />
                </div>
            </div>
            <div class={styles.linkSection}>
                <div class={styles.projectPageBtn} onClick={props.onClick} onmouseenter={props.onHover} onmouseleave={props.onLeave}>View<br />Project<br />Page</div>
            </div>
        </div>
    )
}

export default Bibliofile;