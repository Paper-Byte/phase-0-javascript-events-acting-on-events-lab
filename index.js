// Your code here
const dodger = document.getElementById('dodger');

const moveDodgerLeft = () =>{
    const leftNumbers = dodger.style.left.replace('px', '');
    const parseLeft = parseInt(leftNumbers);

    if(parseLeft > 0){
        dodger.style.left = `${parseLeft - 1}px`;
    }
}

const moveDodgerRight = () => {
    const leftNumbers = dodger.style.left.replace('px', '');
    const parseLeft = parseInt(leftNumbers);

    if(parseLeft > 0){
        dodger.style.left = `${parseLeft + 1}px`;
    }
}

document.addEventListener('keydown', function(e) {
    if(e.key === 'ArrowLeft') {
        moveDodgerLeft();
    }
    if(e.key === 'ArrowRight') {
        moveDodgerRight();
    }
})
