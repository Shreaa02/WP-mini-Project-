
document.querySelector('a[href="#about-us"]').addEventListener('click', function (e) {
    e.preventDefault();

    const aboutSection = document.querySelector('#about-us');

   
    aboutSection.scrollIntoView({
        behavior: 'smooth',
    });

  
});


