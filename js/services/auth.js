import { state, API_URL } from "../state/state.js";
import { escapeHTML, validateInputs, isValidUsername, isValidEmail, isValidPassword } from "../utils/utils.js";
import { renderPage, navigate } from "../routes/render.js";
import Snackbar from '../components/ui/Snackbar.mjs';



async function login(event) {
    event.preventDefault();

    const username = escapeHTML(document.getElementById("login-username").value.trim());
    const password = escapeHTML(document.getElementById("login-password").value);

    try {
        const response = await fetch(`${API_URL}/login`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username, password }),
        });

        const res = await response.json();
        if (response.ok) {
            state.token = res.data.token;
            state.user = res.data.userid;
            localStorage.setItem("token", state.token);
            localStorage.setItem("user", state.user);
            localStorage.setItem("refreshToken", res.data.refreshToken); // Save the refresh token
            navigate('/');
            renderPage();
        } else {
            Snackbar(res.message || "Error logging in.", 3000);
        }
    } catch (error) {
        Snackbar("Error logging in. Please try again.", 3000);
    }
}


async function signup(event) {
    event.preventDefault(); // Prevent default form submission

    const username = escapeHTML(document.getElementById("signup-username").value.trim());
    const email = escapeHTML(document.getElementById("signup-email").value.trim());
    const password = escapeHTML(document.getElementById("signup-password").value);

    const errors = validateInputs([
        { value: username, validator: isValidUsername, message: "Username must be between 3 and 20 characters." },
        { value: email, validator: isValidEmail, message: "Please enter a valid email." },
        { value: password, validator: isValidPassword, message: "Password must be at least 6 characters long." },
    ]);

    if (errors) {
        Snackbar(errors, 3000);
        return;
    }

    try {
        const response = await fetch(`${API_URL}/register`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username, email, password }),
        });

        const data = await response.json();
        if (response.ok) {
            Snackbar("Signup successful! You can now log in.", 3000);
            navigate('/login');
            renderPage();
        } else {
            Snackbar(data.message || "Error signing up.", 3000);
        }
    } catch (error) {
        Snackbar("Error signing up. Please try again.", 3000);
    }
}

async function logout() {
    const confirmLogout = confirm("Are you sure you want to log out?");
    if (!confirmLogout) return;

    state.token = null;
    state.user = null;
    state.userProfile = null;
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    localStorage.removeItem("userProfile");
    localStorage.removeItem("refreshToken");
    renderPage();
}

export { login, signup, logout };