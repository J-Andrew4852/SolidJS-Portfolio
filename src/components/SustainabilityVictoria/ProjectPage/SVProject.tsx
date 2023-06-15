import { Component } from 'solid-js';
import styles from './sVProject.module.css'
import { GithubLarge, WebsiteLink } from '../../Icons/Icons';
import imgHome from '../../../assets/images/ViSu/Home.jpg'
import imgMenu from '../../../assets/images/ViSu/BurgerMenu.jpg'
import imgCuisine from '../../../assets/images/ViSu/CuisineGallery.jpg'
import imgRecipe from '../../../assets/images/ViSu/HomegrownRecipes.jpg'
import imgGuide from '../../../assets/images/ViSu/Recipe.jpg'
import imgTags from '../../../assets/images/ViSu/HomegrownRecipesTags.jpg'
import imgBookmark from '../../../assets/images/ViSu/Bookmarks.jpg'
import imgNotification from '../../../assets/images/ViSu/HomeHerbsBasil.jpg'

const SVProject: Component = () => {
    return (
        <div class={styles.projectPage}>
            <div class={styles.maxWidth}>
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
                            <div class={styles.galleryContainer}>
                                <img class={styles.img1} src={imgCuisine} alt="Image 3" />
                                <img class={styles.img2} src={imgRecipe} alt="Image 4" />
                            </div>
                            <p class={styles.walkthroughPoints}>Choose your favourite cuisines, explore their highest rated recipes and add recipes to your bookmarks.</p>
                        </div>
                        <div class={styles.myRole}>
                            <div class={styles.galleryContainer}>
                                <img class={styles.img1} src={imgGuide} alt="Image 3" />
                                <img class={styles.img2} src={imgTags} alt="Image 4" />
                            </div>
                            <p class={styles.walkthroughPoints}>Search for the recipes you want to see through a tagged search, whether you want certain ingredients, a specific cooking time or recipe difficulty.</p>
                        </div>
                        <div class={styles.myRole}>
                            <div class={styles.galleryContainer}>
                                <img class={styles.img1} src={imgBookmark} alt="Image 3" />
                                <img class={styles.img2} src={imgNotification} alt="Image 4" />
                            </div>
                            <p class={styles.walkthroughPoints}>Once you have bookmarked some recipes, see your recommended herbs and try growing some. The app will guide you through taking care of your plants, just edit the notifications and reminders to you preference.</p>
                        </div>
                    </div>
                </div>
                <div class={styles.botColourSection}>
                    <div class={styles.reflectSection}>
                        <div class={`${styles.leadershipBox} ${styles.textBox}`}>
                            <h2>Reflection</h2>
                            <p>While working on this the Sustainability Victoria brief, I focused on meeting all of the users wants and needs. This lead to a large scale application for the brief, the solution doesn’t just focus on growing plants or cooking healthy food but does but simultaneously. I was able to create a visually pleasing design through multiple redesigns throughout the design process, although the Figma prototype could be more interactive. While the Figma prototype has many screens and functions well, the lack of animations and micro-interaction make the experience further from a fully developed mobile application.</p>
                        </div>
                        <div class={`${styles.quoteBox} ${styles.textBox}`}>
                            <h2>"Throughout the design process I made multiple resdesigns not only leading to a cleaner design but also improving my UX / UI design skills."</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SVProject;