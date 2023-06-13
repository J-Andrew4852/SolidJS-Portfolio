import { Component } from 'solid-js';
import styles from '../About.module.css'
import { Email, Github, Linkedin } from '../components/Icons/Icons';

const About: Component = () => {
    return (
        <div class={styles.aboutPage}>
            <div class={styles.aboutContent}>
                <div class={styles.leftSection}>
                    <div class={styles.imgContainer}>
                        <img class={styles.portraitImg} src="https://2022gradshow.s3.ap-southeast-1.amazonaws.com/Grad+Show+Website+Student+Information+Form+(File+responses)/Edited_Headshots_2022/james_andrew-DIGEX.jpg" alt="Portrait Photo" />
                        <img class={styles.portraitAlt} src="https://2022gradshow.s3.ap-southeast-1.amazonaws.com/Grad+Show+Website+Student+Information+Form+(File+responses)/Edited_Headshots_2022/james_andrew-DIGEX-alt.jpg" alt="Alternate Photo" />
                    </div>
                    <div class={styles.leftTextFlex}>
                        <div class={styles.iconsContainer}>
                            <Github colour={'white'} linkers='https://github.com/J-Andrew4852/' />
                            <Linkedin colour={'white'} />
                            <Email colour={'white'} email='james.andrew4852@gmail.com' />
                        </div>
                        <p class={styles.statusTag}>Currently looking for a Frontend Web Developer position.</p>
                    </div>
                </div>
                <div class={styles.rightPad}></div>
                <div class={styles.rightSection}>
                    <div class={styles.textContainer}>
                        <h2>About Me</h2>
                        <ol class={styles.aboutPoints}>
                            <li>Experienced in design and problem-solving, my passion for web design developed during my Bachelor of Design at Curtin University. With a focus on user experience and solving pain points, I found the process web design to be my niche.</li>
                            <li>My skills in HTML, CSS, JavaScript, React and Next.js have been developed through my time at University. As a leader in the 2022 Gradshow, I gained valuable experience in leadership and further confidence in my web development skills.</li>
                            <li>Continuing to learn after University, I have expanded my knowledge to include Typescript and Solid.js, which I utilized in building this website.</li>
                        </ol>
                    </div>
                    <div class={styles.quotesContainer}>
                        <div class={styles.quoteBox}>
                            <p class={styles.quote}>"James is an efficient and hard worker who willingly takes on responsibilities when issues arise, communicating well and finding solutions."</p>
                            <p class={styles.quoter}>Previous Employer - Sarah Chapman</p>
                        </div>
                        {/* <div class={styles.breakLine}></div> */}
                        <div class={styles.quoteBox}>
                            <p class={styles.quote}>"I have found James to possess a strong work ethic, an ability to collaborate effectively, and a thirst for knowledge. I look forward to seeing what he goes on to achieve."</p>
                            <p class={styles.quoter}>Curtin University Tutor - Harriet Perryer</p>
                        </div>
                        {/* <div class={styles.breakLine}></div> */}
                        <div class={styles.quoteBox}>
                            <p class={styles.quote}>"James is a hard-working front-end developer who thrives in a collaborative environment. His dedication to delivering projects for the greater good of the team are a credit to his work ethic and team spirit."</p>
                            <p class={styles.quoter}>Curtin University Tutor - Joel Louie</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;