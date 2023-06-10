import { Component } from 'solid-js';
import styles from './bFProject.module.css'
import { Express, GithubLarge, HTML5, Javascript, LitElement, MongoDB, Nodejs, Parcel, Sass, WebsiteLink } from '../../Icons/Icons';
import guidePage from '../../../assets/Clips/guidePage.mp4'
import loginPage from '../../../assets/Clips/loginPage.mp4'
import storyPage from '../../../assets/Clips/storyPage.mp4'
import characterPage from '../../../assets/Clips/characterPage.mp4'
import notesPage from '../../../assets/Clips/notesPage.mp4'


const BFProject: Component = () => {
    return (
        <div class={styles.projectPage}>
            <div class={styles.topColourSection}>
                <div class={`${styles.tools} ${styles.box}`}>
                    <p>Tools Used</p>
                    <HTML5 />
                    <Sass />
                    <Javascript />
                    <Nodejs />
                    <MongoDB />
                    <Express />
                    <LitElement />
                    <Parcel />
                </div>
                <div class={`${styles.webLinks} ${styles.box}`}>
                    <a href="https://biblio-file-frontend.vercel.app/" target="_blank">
                        <div class={styles.webLink}>
                            <WebsiteLink colour='white' linkers='https://biblio-file-frontend.vercel.app/' />
                            <p>Check out the website</p>
                        </div>
                    </a>
                    <a href="https://github.com/J-Andrew4852/BiblioFile-frontend" target="_blank">
                        <div class={styles.webLink}>
                            <GithubLarge colour='white' linkers='https://github.com/J-Andrew4852/BiblioFile-frontend' />
                            <p>See the Frontend repository</p>
                        </div>
                    </a>
                    <a href="https://github.com/J-Andrew4852/BiblioFile-backend" target="_blank">
                        <div class={styles.webLink}>
                            <GithubLarge colour='white' linkers='https://github.com/J-Andrew4852/BiblioFile-backend' />
                            <p>See the Backend repository</p>
                        </div>
                    </a>
                </div>
            </div>
            <div class={styles.writeUpSection}>
                <div class={styles.goalSolution}>
                    <div class={styles.goal}>
                        <h2>Project Goals</h2>
                        <ol class={styles.goalPoints}>
                            <li>Provide a user-friendly website for generating random characters to assist writers in their work</li>
                            <li>Generate comprehensive character traits that are both relevant and descriptive</li>
                            <li>Have sections for users to document and explore the characters they have created</li>
                            <li>Enable users to organise and manage their notes and characters within the website</li>
                            <li>Implement a secure sign-up and login feature so users can save and access their characters and notes seamlessly</li>
                        </ol>
                    </div>
                    <div class={styles.solution}>
                        <h2>Solution</h2>
                        <p>The website achieves the main goals of having a sign-up and login feature which lets the users create characters and notes on their account. The user is able to sign-up, create a story, create characters within that story, edit the characters and write notes on their story and character pages.<br /><br />Although the functionality of the ambitious project is there, due to the time constraints and what I chose to build the website with, I was unable to have the styling and responsive design to a standard that I can be happy with. The website is only suited for computer screens and laptops will likely need to zoom out on their browser.<br /><br />The core function of the website, character generation works great. The depth of traits and ability for editing is much greater and refined when compared to other character generators that we found during our research.</p>
                    </div>
                </div>
                <div class={styles.roleSection}>
                    <div class={styles.myRole}>
                        <h2>Website Walkthrough</h2>
                        <p class={styles.walkthroughPoints}>Once on the website you will find a guide page, explaining the purpose and functions of the website.</p>
                    </div>
                    <div class={styles.clipContainer}>
                        <video autoplay loop muted>
                            <source src={guidePage} type="video/mp4"/>
                        </video>
                    </div>
                    <div class={styles.myRole}>
                        <p class={styles.walkthroughPoints}>Create an account through the secure sign-up and login page.</p>
                    </div>
                    <div class={styles.clipContainer}>
                        <video autoplay loop muted>
                            <source src={loginPage} type="video/mp4"/>
                        </video>
                    </div>
                    <div class={styles.myRole}>
                        <p class={styles.walkthroughPoints}>Add Stories to organise your Characters into groups, then create as many Characters as you want within those stories.</p>
                    </div>
                    <div class={styles.clipContainer}>
                        <video autoplay loop muted>
                            <source src={storyPage} type="video/mp4"/>
                        </video>
                    </div>
                    <div class={styles.myRole}>
                        <p class={styles.walkthroughPoints}>Once you have created a Character you can regenerate every aspect of that Character, or you can choose to regenerate or change certain parts.</p>
                    </div>
                    <div class={styles.clipContainer}>
                        <video autoplay loop muted>
                            <source src={characterPage} type="video/mp4"/>
                        </video>
                    </div>
                    <div class={styles.myRole}>
                        <p class={styles.walkthroughPoints}>You can also start writing notes on the Characters or the Stories that you have created.</p>
                    </div>
                    <div class={styles.clipContainer}>
                        <video autoplay loop muted>
                            <source src={notesPage} type="video/mp4"/>
                        </video>
                    </div>
                </div>
            </div>
            <div class={styles.botColourSection}>
                <div class={styles.reflectSection}>
                    <div class={`${styles.leadershipBox} ${styles.textBox}`}>
                        <h2>Reflection</h2>
                        <p>After taking some classes at Curtin University for writing, I became somewhat of a creative writer myself and had the idea of BiblioFile. It was an ambitious project for the timeframe, especially with it being my first Full-stack website, but it is rewarding to see my idea become a working product. While I am satisfied with the functionality of the website, I would like to eventually rebuild the website with modern frameworks and less plugins. I believe that I would be able to rebuild the website and fix most if not all of the current issues with my current web development skills. Although if I were to go through the effort of rebuilding the website I would like to redesign it and look at the possibility of using AI image generators to create the images of the characters and their background.</p>
                    </div>
                    <div class={`${styles.quoteBox} ${styles.textBox}`}>
                        <h2>"The development of the BiblioFile website was an enjoyable challenge that I could work hard towards completing, as I felt the idea was unique and interesting."</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BFProject;