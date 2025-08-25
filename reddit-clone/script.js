// Reddit Clone JavaScript Functionality

document.addEventListener('DOMContentLoaded', function() {
    // Voting functionality
    const upvoteButtons = document.querySelectorAll('.upvote');
    const downvoteButtons = document.querySelectorAll('.downvote');
    
    upvoteButtons.forEach(button => {
        button.addEventListener('click', function() {
            const postId = this.getAttribute('data-post-id');
            vote(postId, 'up');
        });
    });
    
    downvoteButtons.forEach(button => {
        button.addEventListener('click', function() {
            const postId = this.getAttribute('data-post-id');
            vote(postId, 'down');
        });
    });
    
    // Comment functionality
    const commentButtons = document.querySelectorAll('.comment-btn');
    commentButtons.forEach(button => {
        button.addEventListener('click', function() {
            const postId = this.getAttribute('data-post-id');
            showComments(postId);
        });
    });
    
    // Post creation functionality
    const postInput = document.querySelector('.post-input');
    if (postInput) {
        postInput.addEventListener('click', function() {
            createPost();
        });
    }
    
    // Login/Signup functionality
    const loginBtn = document.querySelector('.login-btn');
    const signupBtn = document.querySelector('.signup-btn');
    
    if (loginBtn) {
        loginBtn.addEventListener('click', function() {
            login();
        });
    }
    
    if (signupBtn) {
        signupBtn.addEventListener('click', function() {
            signup();
        });
    }
});

// Voting function
function vote(postId, voteType) {
    const voteCountElement = document.querySelector(`.vote-count[data-post-id="${postId}"]`);
    if (!voteCountElement) return;
    
    let currentVotes = parseVoteCount(voteCountElement.textContent);
    
    // Remove any existing vote styling
    const upvoteBtn = document.querySelector(`.upvote[data-post-id="${postId}"]`);
    const downvoteBtn = document.querySelector(`.downvote[data-post-id="${postId}"]`);
    
    upvoteBtn.classList.remove('voted-up');
    downvoteBtn.classList.remove('voted-down');
    
    // Update vote count based on vote type
    if (voteType === 'up') {
        currentVotes += 1;
        upvoteBtn.classList.add('voted-up');
    } else if (voteType === 'down') {
        currentVotes -= 1;
        downvoteBtn.classList.add('voted-down');
    }
    
    // Update the display
    voteCountElement.textContent = formatVoteCount(currentVotes);
}

// Helper function to parse vote count
function parseVoteCount(voteString) {
    if (voteString.includes('k')) {
        return parseFloat(voteString) * 1000;
    }
    return parseInt(voteString) || 0;
}

// Helper function to format vote count
function formatVoteCount(voteCount) {
    if (voteCount >= 1000) {
        return (voteCount / 1000).toFixed(1) + 'k';
    }
    return voteCount.toString();
}

// Show comments function
function showComments(postId) {
    alert(`Showing comments for post ${postId}. In a full implementation, this would display the comments section.`);
}

// Create post function
function createPost() {
    const postText = prompt('What would you like to post?');
    if (postText) {
        alert(`Post created: "${postText}". In a full implementation, this would add the post to the feed.`);
    }
}

// Login function
function login() {
    const username = prompt('Enter your username:');
    if (username) {
        alert(`Welcome back, ${username}! In a full implementation, this would log you in.`);
    }
}

// Signup function
function signup() {
    const username = prompt('Choose a username:');
    if (username) {
        alert(`Welcome, ${username}! In a full implementation, this would create your account.`);
    }
}

// Add some styling for voted buttons
const style = document.createElement('style');
style.textContent = `
    .voted-up {
        color: #ff4500 !important;
    }
    
    .voted-down {
        color: #7193ff !important;
    }
`;
document.head.appendChild(style);
