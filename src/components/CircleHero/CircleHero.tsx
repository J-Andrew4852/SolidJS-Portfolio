import { Component, createSignal } from 'solid-js';
import { Accessor } from 'solid-js';
import styles from './circleHero.module.css';

interface Props {
    fillColor: Accessor<any>;
    fillColorD: Accessor<any>;
    fillColorL: Accessor<any>;
    onClick: () => void;
}

const CircleHero: Component<Props> = (props) => {

    return (
        <div style={{ background: `rgba(${props.fillColor()})` }} class={styles.container} onClick={props.onClick}>
            <div class={styles.content}>
                <div style={{ background: `rgba(${props.fillColorL()})` }} class={`${styles.circle} ${styles.circle1}`}></div>
                <div style={{ background: `rgba(${props.fillColor()})` }} class={`${styles.circle} ${styles.circle2}`}></div>
                <div style={{ background: `rgba(${props.fillColor()})` }} class={`${styles.circle} ${styles.circle3}`}></div>
                <div style={{ background: `rgba(${props.fillColorD()})` }} class={`${styles.circle} ${styles.circle4}`}></div>
                <div style={{ background: `rgba(${props.fillColorD()})` }} class={`${styles.circle} ${styles.circle5}`}></div>
                <div style={{ background: `rgba(${props.fillColor()})` }} class={`${styles.circle} ${styles.circle6}`}></div>
                <div style={{ background: `rgba(${props.fillColor()})` }} class={`${styles.circle} ${styles.circle7}`}></div>
                <div style={{ background: `rgba(${props.fillColorL()})` }} class={`${styles.circle} ${styles.circle8}`}></div>
                <div style={{ background: `rgba(${props.fillColorL()})` }} class={`${styles.circle} ${styles.circle9}`}></div>
                <div class={styles.clrBtn} ></div>
            </div>
        </div>
    );
};


export default CircleHero;