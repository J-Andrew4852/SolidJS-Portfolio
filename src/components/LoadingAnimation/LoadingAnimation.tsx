import { Component } from 'solid-js';
import styles from './loadingAnimation.module.css';

const LoadingAnimation: Component = () => {
  return (
    <div class={styles.loading}>
      <div class={styles.circle}></div>
      <div class={styles.circle}></div>
      <div class={styles.circle}></div>
    </div>
  );
};

export default LoadingAnimation;
