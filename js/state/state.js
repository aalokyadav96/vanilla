const API_URL = "http://localhost:4000/api"; // Adjust the URL as needed
// const API_URL = "https://showsaw.onrender.com/api"; // Adjust the URL as needed

// State management
const state = {
    token: localStorage.getItem("token"),
    userProfile: null,
    user: localStorage.getItem("user"),
};


function setState(newState) {
    Object.assign(state, newState);
    // localStorage.setItem("token", state.token);
    renderPage(); // Re-render after state change
}


export { API_URL, state, setState }