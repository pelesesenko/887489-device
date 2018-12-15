var mapModal = document.querySelector(".modal-map");
var mapOpen = document.querySelector(".open-map");
var mapClose = mapModal.querySelector(".modal-map .modal-close");
var feedbackModal = document.querySelector(".feedback-modal");
var feedbackOpen = document.querySelector(".btn-open-form");
var feedbackClose = feedbackModal.querySelector(".feedback-modal .modal-close");
var feedbackSubmit = feedbackModal.querySelector("[type=submit]");
var feedbackLogin = feedbackModal.querySelector("[name=login]");
var feedbackEmail = feedbackModal.querySelector("[name=email]");
var feedbackTxtArea = feedbackModal.querySelector("[name=mail-text]");
var overlay = document.querySelector(".overlay");

var isStorageSupport = true;
var storageLogin = "";
var storageEmail = "";

try {
    storageLogin = localStorage.getItem("login");
    storageEmail = localStorage.getItem("email");
} catch (err) {
    isStorageSupport = false;
}




window.addEventListener("keydown", function(evt) {
    if (evt.keyCode == 27) {
        if (mapModal.classList.contains("modal-show")) {
            evt.preventDefault();
            mapModal.classList.remove("modal-show");
            overlay.style.display = "";

        }
        if (feedbackModal.classList.contains("modal-show")) {
            evt.preventDefault();
            feedbackModal.classList.remove("modal-error");
            feedbackModal.classList.remove("modal-show");
            overlay.style.display = "";
        }

    }
});
mapOpen.addEventListener("click", function(evt) {
    evt.preventDefault();
    mapModal.classList.add("modal-show");
    overlay.style.display = "block";
});
feedbackOpen.addEventListener("click", function(evt) {
    evt.preventDefault();
    feedbackModal.classList.add("modal-show");
    overlay.style.display = "block";
    if (storageLogin) {
        feedbackLogin.value = storageLogin;
        feedbackEmail.focus();
        if (storageEmail) {
            feedbackEmail.value = storageEmail;
            feedbackTxtArea.focus();
        }

    } else { feedbackLogin.focus() }
});

mapClose.addEventListener("click", function(evt) {
    evt.preventDefault();
    mapModal.classList.remove("modal-show");
    overlay.style.display = "";
});
feedbackClose.addEventListener("click", function(evt) {
    evt.preventDefault();
    feedbackModal.classList.remove("modal-show");
    feedbackModal.classList.remove("modal-error");
    overlay.style.display = "";
});
feedbackSubmit.addEventListener("click", function(evt) {
    if (!feedbackLogin.value || !feedbackEmail.value) {
        evt.preventDefault();
        feedbackModal.classList.remove("modal-error");
        feedbackModal.offsetWidth = feedbackModal.offsetWidth;
        feedbackModal.classList.add("modal-error");
        feedbackLogin.style.backgroundColor = "#f6dada";
        if (!feedbackLogin.value) {
            feedbackLogin.style.backgroundColor = "#f6dada";
        }
        if (!feedbackEmail.value) {
            feedbackEmail.style.backgroundColor = "#f6dada";
        }
    } else {
        if (isStorageSupport) {
            localStorage.setItem("feedbackLogin", feedbackLogin.value);
            localStorage.setItem("feedbackEmail", feedbackEmail.value);
        }
    }

});