let settingsmenu = document.querySelector(".settings-menu")
let darkBtn = document.getElementById("dark-btn");


function settingsMenuToggle(){
    settingsmenu.classList.toggle("settings-menu-height");
}
darkBtn.onclick = function(){
darkBtn.classList.toggle("dark-btn-on")
document.body.classList.toggle("dark-theme");

}
// JavaScript function to navigate to a new page
function navigateToPage(pageUrl) {
    window.location.href = pageUrl;
}

document.addEventListener("DOMContentLoaded", function () {
    const stories = document.querySelectorAll('.story');
    const enlargedImageContainer = document.getElementById('enlarged-image-container');
    const enlargedImage = document.getElementById('enlarged-image');
    const closeEnlargedImage = document.getElementById('close-enlarged-image');

    stories.forEach(function (story) {
        story.addEventListener('click', function () {
            const backgroundImage = getComputedStyle(story).backgroundImage;
            const imageUrl = backgroundImage.match(/url\(['"]?(.*?)['"]?\)/)[1];
            enlargedImage.src = imageUrl;
            enlargedImageContainer.style.display = 'flex';
        });
    });

    closeEnlargedImage.addEventListener('click', function () {
        enlargedImageContainer.style.display = 'none';
    });
});
// Add this code at the end of your script.js file

// ... (your existing code) ...

function handleLike(likeBtn) {
    // Implement your logic to handle likes here
    const likeCount = parseInt(likeBtn.querySelector('span').innerText);
    likeBtn.querySelector('span').innerText = likeCount + 1;
}

function showCommentSection(commentBtn) {
    const postContainer = commentBtn.closest('.post-container');
    const commentSection = postContainer.querySelector('.comment-section');
    commentSection.style.display = 'block';
    commentBtnBtn.querySelector('span').innerText = likeCount + 1;
}

function handleShare() {
    
    alert('Shared!');
}

function postComment() {
    // Implement your logic to post comments here
    const commentSection = event.target.closest('.comment-section');
    const textarea = commentSection.querySelector('textarea');
    const commentText = textarea.value.trim();

    if (commentText !== '') {
        // Add the comment to the comment section
        const commentList = document.createElement('div');
        commentList.classList.add('comment-list');
        commentList.innerHTML = `<p>${commentText}</p>`;
        commentSection.insertBefore(commentList, textarea);

        // Clear the textarea
        textarea.value = '';
    }
}
function handleFileSelection() {
    const fileInput = document.getElementById('fileInput');
    const previewContainer = document.getElementById('previewContainer');
    const files = fileInput.files;

    previewContainer.innerHTML = '';

    for (const file of files) {
        const reader = new FileReader();

        reader.onload = function (e) {
            const preview = document.createElement('div');
            preview.classList.add('preview-item');

            if (file.type.startsWith('image/')) {
                preview.innerHTML = `<img src="${e.target.result}" alt="Image Preview">`;
            } else if (file.type.startsWith('video/')) {
                preview.innerHTML = `<video width="100%" height="100%" controls><source src="${e.target.result}" type="${file.type}"></video>`;
            }

            previewContainer.appendChild(preview);
        };

        reader.readAsDataURL(file);
    }
}













// Add the functions provided in the previous messages here

function displayFileName() {
    const fileInput = document.getElementById('file-input');
    const fileName = fileInput.files[0].name;
    alert(`Selected file: ${fileName}`);
}

function postContent() {
    const postText = document.getElementById('post-text').value;
    const feelingButton = document.getElementById('post-feeling');
    const isFeeling = feelingButton.classList.contains('active');

    // Get the file input and check if a file is selected
    const fileInput = document.getElementById('file-input');
    const selectedFile = fileInput.files[0];

    // Create a new post container
    const newPostContainer = document.createElement('div');
    newPostContainer.className = 'post-container';

    // Add post content to the new post container
    newPostContainer.innerHTML = `
        <div class="post-row">
            <div class="user-profile">
                <img src="HELF IMAGES/profile.png" alt="Profile Image">
                <div>
                    <p>Helf Consultation</p>
                    <span>${new Date().toLocaleString()}</span>
                </div>
            </div>
            <a href="#" onclick="deletePost(this)"><i class="fa-solid fa-trash"></i></a>
        </div>
        <p class="post-text">${postText}${isFeeling ? ' Feeling/Activity' : ''}</p>
    `;

    // If an image is selected, read and display it
    if (selectedFile) {
        const reader = new FileReader();
        reader.onload = function (e) {
            const imageContainer = document.createElement('div');
            imageContainer.className = 'post-image';
            imageContainer.innerHTML = `<img src="${e.target.result}" alt="Post Image">`;
            newPostContainer.appendChild(imageContainer);
    
            // Adjust the image size based on the default container height
            const defaultContainerHeight = 150; // Adjust this value as needed
            const imageElement = imageContainer.querySelector('img');
            imageElement.style.maxHeight = `${defaultContainerHeight}px`;
        };
        reader.readAsDataURL(selectedFile);
    }

    // Append the new post container to the main content
    const mainContent = document.querySelector('.main-content');
    mainContent.appendChild(newPostContainer);

    // Clear the post text, reset feeling button, and file input
    document.getElementById('post-text').value = '';
    feelingButton.classList.remove('active');
    fileInput.value = '';
}

function deletePost(deleteButton) {
    const postContainer = deleteButton.closest('.post-container');
    postContainer.remove();
}





