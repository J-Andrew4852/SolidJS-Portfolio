import { Component } from 'solid-js';
import styles from './sVProject.module.css'
import { GithubLarge, WebsiteLink } from '../../Icons/Icons';
import imgHome from '../../../assets/images/ViSu/Home.jpg'
import imgMenu from '../../../assets/images/ViSu/BurgerMenu.jpg'

const SVProject: Component = () => {
    return (
        <div class={styles.projectPage}>
            <div class={styles.topColourSection}>
                <div class={`${styles.figma} ${styles.box}`}>
                    <a href='https://www.figma.com/file/nxcU78wDuYl0MAKOtp4q8X/Final-Prototype-Edited?type=design&t=qeIGDVfJibfCuBOB-1 ' target="_blank">
                        <div class={styles.webLink}>
                            <WebsiteLink colour='white' linkers='https://www.figma.com/file/nxcU78wDuYl0MAKOtp4q8X/Final-Prototype-Edited?type=design&t=qeIGDVfJibfCuBOB-1' />
                            <p>See the Figma document</p>
                        </div>
                    </a>
                </div>
                <div class={`${styles.blog} ${styles.box}`}>
                    <a href='https://www.behance.net/gallery/120584181/UX-3-Assess-%20ment-3-App-Prototype' target="_blank">
                        <div class={styles.webLink}>
                            <WebsiteLink colour='white' linkers='https://www.behance.net/gallery/120584181/UX-3-Assess-%20ment-3-App-Prototype' />
                            <p>Check out the blog</p>
                        </div>
                    </a>
                </div>
            </div>
            <div class={styles.writeUpSection}>
                <div class={styles.goalSolution}>
                    <div class={styles.goal}>
                        <h2>Project Goals</h2>
                        <ol class={styles.goalPoints}>
                            <li>Guide users through what home grown plants will suit their situation</li>
                            <li>Assist users in maintaining the plants through information and reminders</li>
                            <li>Show the users how they can use what they grow in their cooking</li>
                            <li>Give the users recipes that are suited to their needs and skill level</li>
                            <li>Let users set reminders and add recipes to their favourites</li>
                            <li>Incentivise the user to cook their own meals and take care of their plants</li>
                        </ol>
                    </div>
                    <div class={styles.solution}>
                        <h2>Solution</h2>
                        <p>The final solution is the interactive Figma mockup that showcases all the pages of the mobile application. The mockup contains all the necessary functions that the user requires and has a fitting aesthetic theme to the design. Although while the mockup is expansive and covers every necessary page, it doesn’t have the animations and micro-interactions that a high quality mockup should have.<br /><br />The app focuses on letting the user select the type of cuisine they would like to cook, then once they save recipes to their favourites the app will recommend what herbs and other plants show up often in those recipes. Through this the user is able to learn to cook new healthy meals while taking care of plants that they will eventually be using within their cooking.</p>
                    </div>
                </div>
                <div class={styles.roleSection}>
                    <div class={styles.myRole}>
                        <h2>Application Walkthrough</h2>
                    </div>
                    <div class={styles.myRole}>
                        <div class={styles.galleryContainer}>
                            <img class={styles.img1} src={imgHome} alt="Image 1" />
                            <img class={styles.img2} src={imgMenu} alt="Image 2" />
                        </div>
                        <p class={styles.walkthroughPoints}>The Homepage showcases the 4 main functions of the app, finding recipes you like through filters such as cuisines or through a search. Then the herbs that are recommend to you will show up on the Bookmarked page, where the user can then add herbs to the Home Herbs page once you have the plant.</p>
                    </div>
                    <div class={styles.myRole}>
                        <p class={styles.walkthroughPoints}>Create an account through the secure sign-up and login page.</p>
                    </div>
                    <div class={styles.myRole}>
                        <p class={styles.walkthroughPoints}>Add Stories to organise your Characters into groups, then create as many Characters as you want within those stories.</p>
                    </div>
                    <div class={styles.myRole}>
                        <p class={styles.walkthroughPoints}>Once you have created a Character you can regenerate every aspect of that Character, or you can choose to regenerate or change certain parts.</p>
                    </div>
                    <div class={styles.myRole}>
                        <p class={styles.walkthroughPoints}>You can also start writing notes on the Characters or the Stories that you have created.</p>
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

export default SVProject;