import './style.scss'
import { renderProfile } from './_profile';
import { renderNewsfeed } from './_newsfeed';
import { renderHome } from './_home';
import { renderSettings } from './_settings';
import { get } from './_DOM' 

  
export const deleteMainContent = () => {
    Array.from(get.mainContentWrapper.childNodes)
    .filter(node => node.nodeType === node.ELEMENT_NODE)
    .forEach(element => {
    element.classList.contains('content') ?  get.mainContentWrapper.removeChild(element) : false;
        
})
};

export const render = (() => {

    const handleEvents = (() => { 
       get.newsfeedBtn.addEventListener('click', () => {
        renderNewsfeed();
       })

       get.profileBtn.addEventListener('click', () => {
        renderProfile();
       })
       
       get.homeBtn.addEventListener('click', () => {
        renderHome();
       })

       get.settingsBtn.addEventListener('click', () => {
        renderSettings();
       })
    })();

    renderProfile();

})();

