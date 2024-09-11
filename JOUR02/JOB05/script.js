window.addEventListener('scroll', function() {
    const footer = document.getElementById('footer');
    const scrollPercentage = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
    footer.style.backgroundColor = `hsl(${scrollPercentage}, 100%, 50%)`;
});