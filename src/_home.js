import { get } from "./_DOM";
import { deleteMainContent } from ".";

export const renderHome = () => {
    deleteMainContent();
    const homeDiv = document.createElement('div');
    homeDiv.id = 'home-div';
    homeDiv.classList.add('content');
    get.mainContentWrapper.appendChild(homeDiv);
}