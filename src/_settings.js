import { get } from "./_DOM";
import { deleteMainContent } from ".";

export const renderSettings = () => {
    deleteMainContent();
    const settingsDiv = document.createElement('div');
    settingsDiv.id = 'settings-div';
    settingsDiv.classList.add('content');
    get.mainContentWrapper.appendChild(settingsDiv);
}