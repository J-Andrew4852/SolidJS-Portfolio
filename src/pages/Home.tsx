import { Component } from 'solid-js';
import { createSignal } from 'solid-js';
import HomeCanvas from '../components/HomeCanvas/HomeCanvas';
import styles from '../Home.module.css'
import CircleHero from '../components/CircleHero/CircleHero';
import { Linkedin } from '../components/Icons/Icons';
import { Email } from '../components/Icons/Icons';
import { Github } from '../components/Icons/Icons';
import { Link } from 'solid-app-router';
import Card from '../components/Card/Card';
import GradCardImg from '../assets/images/GradShowGS.jpg';
import BibliofileImg from '../assets/images/BiblioFileG.jpg'
import Footer from '../components/Footer/Footer';


const Home: Component = () => {
    const [fillColor, setFillColor] = createSignal("50, 28, 100");
    const [fillColorD, setFillColorD] = createSignal("29, 17, 51");
    const [fillColorL, setFillColorL] = createSignal("9, 32, 77");

    function changeColor() {
        const colors = ['121, 197, 0', '245, 175, 25', '17, 152, 120', '195, 20, 50', '50, 28, 100'];
        const nextIndex = colors.indexOf(fillColor()) + 1;
        setFillColor(colors[nextIndex % colors.length]);
        const colorsD = ['2, 130, 76', '241, 39, 17', '41, 1, 155', '66, 29, 113', '29, 17, 51'];
        const nextIndexD = colorsD.indexOf(fillColorD()) + 1;
        setFillColorD(colorsD[nextIndexD % colorsD.length]);
        const colorsL = ['15, 170, 0', '226, 89, 32', '1, 84, 131', '134, 30, 117', '9, 32, 77'];
        const nextIndexL = colorsL.indexOf(fillColorL()) + 1;
        setFillColorL(colorsL[nextIndexL % colorsL.length]);
        // console.log(fillColor())
    }

    return (
        <div class={styles.homePage}>
            <div class={styles.topSection}>
                <HomeCanvas fillColor={fillColor} />
                <CircleHero fillColor={fillColor} fillColorD={fillColorD} fillColorL={fillColorL} onClick={changeColor}/>
                <div class={styles.leftSection}>
                    <div class={styles.heroText}>
                        <h2 class={styles.heroHeader}>James Andrew Digital</h2>
                        <p class={styles.heroBody}>Hi, I'm James. I recently graduated from Curtin University. I am a Frontend Dev/Web Designer, located in Perth.</p>
                    </div>
                    <div class={styles.iconsBtnContainer}>
                        <div class={styles.iconsContainer}>
                            <Github colour={'black'} linkers='https://github.com/J-Andrew4852/' />
                            <Linkedin colour={'black'} />
                            <Email colour={'black'} email='james.andrew4852@gmail.com' />
                        </div>
                        <Link href="/projects">
                            <div class={styles.projectsBtn}>Projects</div>
                        </Link>
                    </div>
                </div>
            </div>
            <div class={styles.midSection} style={`background: linear-gradient(rgba(${fillColorL()}, 0.9) -35.75%, rgba(${fillColor()}, 0.9) 49.47%, rgba(${fillColorD()}, 0.9) 134.15%);`}>
                <div class={styles.showreelContainer}>SHOWREEL<br />COMING<br />SOON</div>
            </div>
            <div class={styles.botSection}>
                <div class={styles.botText}>
                    <h2 class={styles.botHeader}>Portfolio Work</h2>
                    <p class={styles.botBody}>My portfolio contains my best work while I was completing my Digital Design degree at Curtin University. While the course focused more on web design, I have come to enjoy coding more and therefore my best projects are my website development projects.</p>
                    <div class={styles.botBtnContainer}>
                        <Link href="/projects">
                            <div class={styles.projectsBtn}>Projects</div>
                        </Link>
                    </div>
                </div>
                <div class={styles.cardContainer}>
                    <Card
                        imageSrc={GradCardImg}
                        altText={"Project Image"}
                        title={"Exibition Space"}
                        description={"Frontend / Group Project"}
                        linkers='/projects'
                    />
                    <Card
                        imageSrc={BibliofileImg}
                        altText={"Project Image"}
                        title={"Bibliofile"}
                        description={"Fullstack / Group Project"}
                        linkers='/projects?activeTab=1'
                    />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Home;