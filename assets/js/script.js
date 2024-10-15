// Show the modal when the page loads
window.onload = function () {
    document.getElementById('myModal').style.display = 'flex';
};

// Function to close the modal
function closeModal() {
    document.getElementById('myModal').style.display = 'none';
}

// Function to submit the information and update the page
function submitInfo() {
    const userName = document.getElementById('name').value;
    const socialMedia = document.getElementById('socialMedia').value;

    if (userName && socialMedia) {
        // document.getElementById('info').innerHTML = `
        // <h2>Hello, I am ${userName}!</h2>
        // <p>I use this social media handle: <a href="${socialMedia.startsWith('http') ? socialMedia : 'https://' + socialMedia}" target="_blank">${socialMedia}</a></p>
        // `;
        // document.querySelector(".uname").innerHTML = userName
        // document.querySelector(".socialm").innerHTML = socialMedia
        hacktool(socialMedia,userName);
        closeModal(); // Close the modal after submission
    } else {
        alert('Please fill out both fields.');
    }
}