import profileImage from './icons/woman.png'
import homeImage from './icons/real-estate.png'
import newsfeedImage from './icons/newspaper.png';
import settingsImage from './icons/essentials.png';

export const get = (() => {
    const profileBtn = document.getElementById('profile-btn');
    const homeBtn = document.getElementById('home-btn');
    const newsfeedBtn = document.getElementById('news-btn');
    const settingsBtn = document.getElementById('settings-btn')
    const mainContentWrapper = document.getElementById('content-wrapper');
    const home = document.getElementById('home-div');
    const profile = document.getElementById('profile-div');
    const newsfeed = document.getElementById('news-div');
    const settings = document.getElementById('settings-div');

    return {
        profileBtn,
        homeBtn,
        newsfeedBtn,
        settingsBtn,
        home,
        profile,
        newsfeed,
        settings,
        mainContentWrapper
    }
})();

const appendImages = (() => {
    const profile = new Image;
    profile.src = profileImage;
    get.profileBtn.appendChild(profile);

    const home = new Image;
    home.src = homeImage;
    get.homeBtn.appendChild(home);

    const news = new Image;
    news.src = newsfeedImage;
    get.newsfeedBtn.appendChild(news);

    const settings = new Image;
    settings.src = settingsImage;
    get.settingsBtn.appendChild(settings);

})();