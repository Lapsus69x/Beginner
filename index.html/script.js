javascript
document.querySelector('button').addEventListener('click', function() {
 this.style.transform = 'scale(0.9)';
 setTimeout(() => {
    this.style.transform = 'scale(1)';
 }, 300);
});