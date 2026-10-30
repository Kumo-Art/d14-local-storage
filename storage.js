function saveProfile (profile) {
    localStorage.setItem("profile", JSON.stringify(profile));
}


function loadProfile () {
    const data = localStorage.getItem("profile");

    if (data === null) {
        return null;
    }

    return JSON.parse(data);
}



function removeProfile () {
      localStorage.removeItem("profile");
}


export { saveProfile, loadProfile, removeProfile };