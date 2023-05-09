import { get } from "./_DOM";
import { deleteMainContent } from ".";

export const renderNewsfeed = () => {
    deleteMainContent();
    const newsDiv = document.createElement('div');
    newsDiv.id = 'news-div';
    newsDiv.classList.add('content');
    get.mainContentWrapper.appendChild(newsDiv);
}