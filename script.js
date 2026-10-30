import { saveProfile, loadProfile, removeProfile } from "./storage.js";



const nameInput = document.getElementById("name-input");
const colorInput = document.getElementById("color-input");
const  saveButton = document.getElementById("save-button");
const clearButton = document.getElementById("clear-button");
const profileDisplay = document.getElementById("profile-display");



saveButton.addEventListener("click", function () {
    const profile = {
        name: nameInput.ariaValueMax,
        color: colorInput.value
    };

   saveProfile(profile)
    profileDisplay.textContent = `${profile.name} likes ${profile.color}`;
});


clearButton.addEventListener("click", function () {
    removeProfile();
    profileDisplay.textContent = "";
});



const savedProfile = loadProfile();

if(savedProfile === null) {
    profileDisplay.textContent = "Nothing saved yet.";
} else {
    profileDisplay.textContent = `${savedProfile.name} likes ${saveProfile.color}`;
}