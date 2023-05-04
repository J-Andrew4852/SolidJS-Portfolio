import { Component } from 'solid-js';
import styles from './card.module.css'
import { Link } from 'solid-app-router';

interface Props {
    imageSrc: string;
    altText: string;
    title: string;
    description: string;
    linkers: string;
}

const Card: Component<Props> = (props) => {

    return (
        <div class={styles.card}>
            <Link href={props.linkers}>
                <div class={styles.cardImage}>
                    <div class={styles.imageContainer}>
                        <img src={props.imageSrc} alt={props.altText} />
                    </div>
                </div>
                <div class={styles.cardContent}>
                    <h2 class={styles.cardTitle}>{props.title}</h2>
                    <div class={styles.hoverContainer}>
                        <p class={styles.cardDescription}>{props.description}</p>
                        <div class={styles.hoverText}>
                            <div class={styles.dot}></div>
                            <p>View Project</p>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default Card;