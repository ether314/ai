// Simple Reddit Clone JavaScript Functionality

document.addEventListener('DOMContentLoaded', function() {
    // Voting functionality
    const upvoteButtons = document.querySelectorAll('.upvote');
    const downvoteButtons = document.querySelectorAll('.downvote');
    
    upvoteButtons.forEach(button => {
        button.addEventListener('click', function() {
            handleVote(this, 'up');
        });
    });
    
    downvoteButtons.forEach(button => {
        button.addEventListener('click', function() {
            handleVote(this, 'down');
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
    const loginBtn = document.querySelector('.login');
    const signupBtn = document.querySelector('.signup');
    
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
    
    // Comment functionality
    const commentButtons = document.querySelectorAll('.action-btn:first-child');
    commentButtons.forEach(button => {
        button.addEventListener('click', function() {
            showComments();
        });
    });
});

// Handle voting
function handleVote(button, voteType) {
    const post = button.closest('.post');
    const voteCountElement = post.querySelector('.vote-count');
    
    // Get current votes
    let currentVotes = parseVoteCount(voteCountElement.textContent);
    
    // Update vote count based on vote type
    if (voteType === 'up') {
        currentVotes += 1;
        button.style.color = '#ff4500';
        // Reset downvote color if it was previously clicked
        const downvoteBtn = post.querySelector('.downvote');
        downvoteBtn.style.color = '#878a8c';
    } else if (voteType === 'down') {
        currentVotes -= 1;
        button.style.color = '#7193ff';
        // Reset upvote color if it was previously clicked
        const upvoteBtn = post.querySelector('.upvote');
        upvoteBtn.style.color = '#878a8c';
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

// Create post function
function createPost() {
    const postText = prompt('What would you like to talk about?');
    if (postText && postText.trim() !== '') {
        alert('Post created successfully! In a real application, this would be added to the feed.');
    }
}

// Login function
function login() {
    const username = prompt('Enter your username:');
    if (username && username.trim() !== '') {
        alert(`Welcome back, ${username}!`);
    }
}

// Signup function
function signup() {
    const username = prompt('Choose a username:');
    if (username && username.trim() !== '') {
        alert(`Welcome to Reddit, ${username}!`);
    }
}

// Show comments function
function showComments() {
    alert('Comments section would open here. In a real application, this would show the comments for the post.');
}
