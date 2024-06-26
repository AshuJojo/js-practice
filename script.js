const ball = document.getElementById('ball');
const ballContainer = document.getElementById('container');
const ballContainerWidth = ballContainer.clientWidth;
const ballContainerHeight = ballContainer.clientHeight;

const ballContainerBoundary = ballContainer.getBoundingClientRect();

function moveRight() {
    const ballCurrentPosition = ball.getBoundingClientRect();
    const x = ballContainerBoundary.right - ballContainerBoundary.x - ballCurrentPosition.width;
    const y = ballCurrentPosition.bottom - ballContainerBoundary.bottom;

    ball.style.transform = `translate(${x}px, ${y}px)`;
    ball.style.transition = 'all 2s ease-in';
}

function moveLeft() {
    const ballCurrentPosition = ball.getBoundingClientRect();
    const x = ballContainerBoundary.left - ballContainerBoundary.x;
    const y = ballCurrentPosition.bottom - ballContainerBoundary.bottom;

    ball.style.transform = `translate(${x}px, ${y}px)`;
    ball.style.transition = 'all 2s ease-in';
}

function moveUp() {
    const ballCurrentPosition = ball.getBoundingClientRect();
    const x = ballCurrentPosition.left - ballContainerBoundary.left;
    const y = ballContainerBoundary.top + ballCurrentPosition.height - ballContainerBoundary.y - ballContainerHeight;

    ball.style.transform = `translate(${x}px, ${y}px)`;
    ball.style.transition = 'all 2s ease-in';
}

function moveDown() {
    const ballCurrentPosition = ball.getBoundingClientRect();
    const x = ballCurrentPosition.left - ballContainerBoundary.left;
    const y = ballContainerBoundary.bottom - ballContainerBoundary.y - ballContainerHeight;

    ball.style.transform = `translate(${x}px, ${y}px)`;
    ball.style.transition = 'all 2s ease-in';
}