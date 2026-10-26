import "./styles.css";
import { pageLoadFunction } from "./initialPageLoad.js"
import { createHomeTab } from "./homeTab.js"
import { createMenuTab } from "./menuTab.js"
import { createAboutTab } from "./aboutTab.js"


pageLoadFunction()

const nav = document.querySelector("nav") 
const homeBtn = document.querySelector(".homeBtn")
const menuBtn = document.querySelector(".menuBtn")
const aboutBtn = document.querySelector(".aboutBtn")

homeBtn.addEventListener("click", () => {
    let content = document.querySelector("#content")
    content.replaceChildren()
    createHomeTab()
})

nav.appendChild(homeBtn)

menuBtn.addEventListener("click", () => {
    let content = document.querySelector("#content")
    content.replaceChildren()
    createMenuTab()
})

nav.appendChild(menuBtn)

aboutBtn.addEventListener("click", () => {
    let content = document.querySelector("#content")
    content.replaceChildren()
    createAboutTab()
})

nav.appendChild(aboutBtn)


