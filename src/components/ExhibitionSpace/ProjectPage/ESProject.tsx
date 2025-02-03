import { Component } from 'solid-js';
import styles from './eSProject.module.css'
import { Github, GithubLarge, HTML5, Javascript, Nextjs, Nodejs, Sass, Vercel, WebsiteLink } from '../../Icons/Icons';
import ESProjectMyRole from '../../../assets/Clips/ESProjectMyRole.mp4'
import teamImage1 from '../../../assets/images/ExSp/teamImage1.jpg'
import teamImage2 from '../../../assets/images/ExSp/teamImage2.jpg'
import teamImage3 from '../../../assets/images/ExSp/teamImage3.jpg'

const ESProject: Component = () => {
    return (
        <div class={styles.projectPage}>
            <div class={styles.maxWidth}>
                <div class={styles.topColourSection}>
                    <div class={`${styles.tools} ${styles.box}`}>
                        <p>Tools Used</p>
                        <HTML5 />
                        <Sass />
                        <Javascript />
                        <Nodejs />
                        <Vercel />
                        <Nextjs />
                    </div>
                    <div class={`${styles.webLinks} ${styles.box}`}>
                        <a href="https://grad-show-frontend-v2-2022-j-andrew4852.vercel.app/" target="_blank">
                            <div class={styles.webLink}>
                                <WebsiteLink colour='white' linkers='https://grad-show-frontend-v2-2022-j-andrew4852.vercel.app/' />
                                <p>Check out the website</p>
                            </div>
                        </a>
                        <a href="https://github.com/J-Andrew4852/GradShowV2-2022" target="_blank">
                            <div class={styles.webLink}>
                                <GithubLarge colour='white' linkers='https://github.com/J-Andrew4852/GradShowV2-2022' />
                                <p>See the repository</p>
                            </div>
                        </a>
                    </div>  
                </div>
                <div class={styles.writeUpSection}>
                    <div class={styles.goalSolution}>
                        <div class={styles.goal}>
                            <h2>Project Goals</h2>
                            <ol class={styles.goalPoints}>
                                <li>Showcases the work of 80-90 Digital Design graduates and their socials</li>
                                <li>Plan and prepare parts of the website in advance</li>
                                <li>Coordinate 14 Digital Design students to design and code the website</li>
                                <li>Ensure that the website is up to standards of Curtin University</li>
                                <li>Craft the website to suit the given 'Exhibition Space' theme</li>
                            </ol>
                        </div>
                        <div class={styles.solution}>
                            <h2>Solution</h2>
                            <p>The website successfully showcases the students work, as the main focus on each graduates card being a hero image that is a display of their best work. The website was able to reflect the theme, especially through the hero section and the about page with gave us more room to explore the theme.<br /><br />The functionality of the website is great, from the fast loading to the interactions it works as intended. It has extra features including a toggle between grid and list layouts for the Graduates section and a side tab for quickly viewing the students content.</p>
                        </div>
                    </div>
                    <div class={styles.roleSection}>
                        <div class={styles.myRole}>
                            <h2>My Role</h2>
                            <p>Initially, I was the Frontend Lead I learned Next.js and focused on the graduates page's side folder and dummy data. In the final month,  I was pushed into a leadership role over the project as a whole, as I was the only one left familiar enough with Next.js. My responsibilities expanded to managing the Frontend team and repo, collaborating with the Design and Backend teams, and completing complex website features and sections others couldn’t, error fixing and launching the website. Finally, I completed the award section after the Gradshow night.</p>
                        </div>
                        <div class={styles.clipContainer}>
                            <video autoplay loop muted>
                                <source src={ESProjectMyRole} type="video/mp4"/>
                            </video>
                        </div>
                    </div>
                    <div class={styles.teamSection}>
                        <h2>Team Structure</h2>
                        <div class={styles.teamPointsContainer}>
                            <div class={styles.goal}>
                                <ol class={styles.goalPoints}>
                                    <li>14 Digital Design Students which built the website</li>
                                    <li>29 Animation and Game Design Students which made the showreels</li>
                                    <li>Graphic Design Representatives which created the theme and branding</li>
                                    <li>The photoshoots and all other content on the website were produced by the students</li>
                                </ol>
                            </div>
                            <div class={styles.goal}>
                                <ol class={styles.goalPoints}>
                                    <li>There were weekly meetings from the start of the project until the Gradshow</li>
                                    <li>The weekly meetings brought the students together for updates, discussion on project direction and coordination between different teams</li>
                                    <li>You can find the accreditation recorded on the about page of the website</li>
                                </ol>
                            </div>                   
                        </div>
                        <div class={styles.galleryContainer}>
                            <img class={styles.img1} src={teamImage1} alt="Image 1" />
                            <img class={styles.img2} src={teamImage2} alt="Image 2" />
                            <img class={styles.img3} src={teamImage3} alt="Image 3" />
                        </div>
                    </div>
                </div>
                <div class={styles.botColourSection}>
                    <div class={styles.reflectSection}>
                        <div class={`${styles.leadershipBox} ${styles.textBox}`}>
                            <h2>Reflection</h2>
                            <p>Throughout this project not only did I improve my coding skills greatly, but I also made great strides when it came to leadership. I acquired new knowledge and experience in managing the team, conducting meetings both in person and online, the Github repo and sending updates to the groups Discord. I also gained confidence in my leadership through taking on more responsibilities than I thought I could and rising to the occasion. I didn’t see myself being responsible for the website and its launch at the start of the project, although it became a rewarding and valuable experience in the end.</p>
                        </div>
                        <div class={`${styles.quoteBox} ${styles.textBox}`}>
                            <h2>"This project tested my leadership and coding skills, which lead me to gain confidence and improve in both areas."</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ESProject;