import { deleteMainContent } from ".";
import { get } from "./_DOM";

export const renderProfile = () => {
    deleteMainContent()
    const profileDiv = document.createElement('div');
    profileDiv.id = 'profile-div';
    profileDiv.classList.add('content');
    get.mainContentWrapper.appendChild(profileDiv);
}