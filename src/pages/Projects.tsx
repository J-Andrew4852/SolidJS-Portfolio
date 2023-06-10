import { Component, createEffect, createSignal } from 'solid-js';
import styles from '../Projects.module.css'
import ExhibitionSpace from '../components/ExhibitionSpace/ExhibitionSpace';
import Bibliofile from '../components/Bibliofile/Bibliofile';
import SustainabilityVictoria from '../components/SustainabilityVictoria/SustainabilityVictoria';
import ESProject from '../components/ExhibitionSpace/ProjectPage/ESProject';
import BFProject from '../components/Bibliofile/ProjectPage/BFProject';
import SVProject from '../components/SustainabilityVictoria/ProjectPage/SVProject';


const Projects: Component = () => {
    const [activeTab, setActiveTab] = createSignal(0);
    const [color, setColor] = createSignal('');
    const [hover, setHover] = createSignal(false);
    const [isAnimating, setIsAnimating] = createSignal(false)

    createEffect(() => {
        setTimeout(() => {
            const params = new URLSearchParams(location.search);
            const activeTabQueryParam = params.get('activeTab');
            console.log('test1');
            
            console.log('test2');
            setActiveTab(parseInt(!!activeTabQueryParam ? activeTabQueryParam : "0"));
        }, 0);
    }, []);

    createEffect(() => {
        const circleAni = document.querySelector(`.${styles.circleAni}`) as HTMLElement;
        circleAni.style.backgroundColor = color();
        if (!isAnimating() && hover()) {
            circleAni.classList.add(styles.hovered);
            console.log(hover())
        } else {
            circleAni.classList.remove(styles.hovered);
            console.log(hover())
        }
    }, [color, hover]);


    const transitionAnimation = () => {
        const circleAni = document.querySelector(`.${styles.circleAni}`) as HTMLElement;
        setIsAnimating(true);
        circleAni.classList.add(styles.active);
      
        setTimeout(() => {
          circleAni.classList.remove(styles.active);
          setIsAnimating(false);
          setHover(false);
        }, 1500);
    };

    const handleTabClick = (index: number, color: string) => {
        switch (index) {
            case 3:
                setColor(color)
                transitionAnimation();
                setTimeout(() => {
                    setActiveTab(3);
                }, 1000);
                break;
            case 4:
                setColor(color)
                transitionAnimation();
                setTimeout(() => {
                    setActiveTab(4);
                }, 1000);
                break;
            case 5:
                setColor(color)
                transitionAnimation();
                setTimeout(() => {
                    setActiveTab(5);
                }, 1000);
                break;
            default:
                setActiveTab(0);
        }
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    createEffect(() => {
        // Get the element for the new active tab
        const activeTabElement = document.querySelector(`#${styles[`tab${activeTab()}`]}`);

        // Scroll the page to the top of the new active tab
        window.scrollTo({
            top: 0, // Subtract 90 to account for the header
            behavior: 'smooth', // Optional smooth scrolling animation
        });
    }, [activeTab]);

    return (
        <div class={styles.projectsPage}>
            <div class={styles.titleContainer}>
                <div class={activeTab() === 0 || activeTab() === 3 ? styles.activeTitle : ''} onClick={() => setActiveTab(0)}>Exhibition Space</div>
                <div class={activeTab() === 1 || activeTab() === 4 ? styles.activeTitle : ''} onClick={() => setActiveTab(1)}>Bibliofile</div>
                <div class={activeTab() === 2 || activeTab() === 5 ? styles.activeTitle : ''} onClick={() => setActiveTab(2)}>Sustainability Victoria</div>
            </div>
            <div class={styles.circleAni} id="circleAni"></div>
            {activeTab() === 0 && <ExhibitionSpace onClick={() => handleTabClick(3, 'rgba(121, 197, 0, 1)')} onHover={() => {setHover(true); setColor('rgba(121, 197, 0, 1)')}} onLeave={() => setHover(false)}/>}
            {activeTab() === 1 && <Bibliofile onClick={() => handleTabClick(4, 'rgba(245, 175, 25)')} onHover={() => {setHover(true); setColor('rgba(245, 175, 25)')}} onLeave={() => setHover(false)} />}
            {activeTab() === 2 && <SustainabilityVictoria onClick={() => handleTabClick(5, 'rgba(17, 152, 120)')} onHover={() => {setHover(true); setColor('rgba(17, 152, 120)')}} onLeave={() => setHover(false)} />}
            {activeTab() === 3 && <ESProject />}
            {activeTab() === 4 && <BFProject />}
            {activeTab() === 5 && <SVProject />}
        </div>
    )
}

export default Projects;