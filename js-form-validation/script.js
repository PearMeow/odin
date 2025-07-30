console.log("hello");

const body = document.querySelector("body");
const form = document.createElement("form");
const emailLabel = document.createElement("label");
const email = document.createElement("input");
const countryLabel = document.createElement("label");
const country = document.createElement("select");
const france = document.createElement("option");
const us = document.createElement("option");
const sweden = document.createElement("option");
const australia = document.createElement("option");

const postalCodeLabel = document.createElement("label");
const postalCode = document.createElement("input");
const passwordLabel = document.createElement("label");
const password = document.createElement("input");
const passwordConfirmLabel = document.createElement("label");
const passwordConfirm = document.createElement("input");
const confirmBtn = document.createElement("button");

form.setAttribute("novalidate", "");

emailLabel.setAttribute("for", "email");
emailLabel.textContent = "Email: ";
email.setAttribute("id", "email");
email.setAttribute("name", "email");
email.setAttribute("type", "email");
email.setAttribute("required", "");
email.addEventListener("input", () => {
    const valid = email.validity;
    if (valid.typeMismatch) {
        email.setCustomValidity("I asked for an email, buddy.");
    } else {
        email.setCustomValidity("");
    }
    email.reportValidity();
});

const patterns = {
    france: "[0-9]{4}",
    us: "[0-9]{5}",
    sweden: "[0-9]{2}",
    australia: "[0-9]{1}",
};

countryLabel.setAttribute("for", "country");
countryLabel.textContent = "Country: ";
country.setAttribute("id", "country");
country.setAttribute("name", "country");
country.setAttribute("required", "");
france.value = "france";
france.textContent = "France";
us.value = "us";
us.textContent = "United States";
sweden.value = "sweden";
sweden.textContent = "Sweden";
australia.value = "australia";
australia.textContent = "Australia";
country.appendChild(france);
country.appendChild(us);
country.appendChild(sweden);
country.appendChild(australia);
country.addEventListener("change", () => {
    postalCode.setAttribute("pattern", patterns[country.value]);
});

postalCodeLabel.setAttribute("for", "postalCode");
postalCodeLabel.textContent = "Postal Code: ";
postalCode.setAttribute("id", "postalCode");
postalCode.setAttribute("name", "postalCode");
postalCode.setAttribute("pattern", patterns.france);
postalCode.setAttribute("required", "");
postalCode.addEventListener("change", () => {
    const valid = postalCode.validity;
    if (valid.patternMismatch) {
        postalCode.setCustomValidity(
            `The correct pattern for ${country.value} is ${patterns[country.value]}`,
        );
    } else {
        postalCode.setCustomValidity("");
    }
    postalCode.reportValidity();
});

passwordLabel.setAttribute("for", "password");
passwordLabel.textContent = "Password: ";
password.setAttribute("id", "password");
password.setAttribute("name", "password");
password.setAttribute("type", "password");
password.setAttribute("minLength", 1);
password.setAttribute("required", "");
password.addEventListener("change", () => {
    const valid = password.validity;
    if (valid.tooShort) {
        password.setCustomValidity("It must be longer...");
    } else {
        password.setCustomValidity("");
        if (password.value !== passwordConfirm.value) {
            passwordConfirm.setCustomValidity("They must be the same...");
        }
        passwordConfirm.reportValidity();
    }
    password.reportValidity();
});

passwordConfirmLabel.setAttribute("for", "passwordConfirm");
passwordConfirmLabel.textContent = "Confirm Password: ";
passwordConfirm.setAttribute("id", "passwordConfirm");
passwordConfirm.setAttribute("name", "passwordConfirm");
passwordConfirm.setAttribute("type", "password");
passwordConfirm.setAttribute("required", "");
passwordConfirm.addEventListener("change", () => {
    if (password.value !== passwordConfirm.value) {
        passwordConfirm.setCustomValidity("They must be the same...");
    } else {
        passwordConfirm.setCustomValidity("");
    }
    passwordConfirm.reportValidity();
});

confirmBtn.setAttribute("type", "confirm");
confirmBtn.textContent = "Submit";

form.addEventListener("submit", (event) => {
    if (form.reportValidity() === false) {
        event.preventDefault();
    }
});

form.appendChild(emailLabel);
form.appendChild(email);
form.appendChild(countryLabel);
form.appendChild(country);
form.appendChild(postalCodeLabel);
form.appendChild(postalCode);
form.appendChild(passwordLabel);
form.appendChild(password);
form.appendChild(passwordConfirmLabel);
form.appendChild(passwordConfirm);
form.appendChild(confirmBtn);
body.appendChild(form);
