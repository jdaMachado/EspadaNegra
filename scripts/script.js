window.sr = ScrollReveal();

sr.reveal('#sb1', {
    duration: 1000,
    origin:'bottom',
    distance:'100px',
});

sr.reveal('#sb2', {
    duration: 2000,
    origin:'bottom',
    distance:'100px',
});

sr.reveal('#sb3', {
    duration: 3000,
    origin:'bottom',
    distance:'100px',
});

sr.reveal('#pAbout', {
    duration: 3000,
});

sr.reveal('#bodypage1', {
    duration: 2000,
});

sr.reveal('#qSomos', {
    duration: 2000,
    origin:'top',
    distance:'100px',
});

sr.reveal('#participa', {
    duration: 3000,
});

sr.reveal('#whatHema', {
    duration: 2000,
    origin:'top',
    distance:'50px',
});

sr.reveal('.horarioEPreço',{
    duration: 3000,
})

sr.reveal('#liOne', {
    duration: 1000,
    origin:'top',
    distance:'50px',
});

sr.reveal('#liTwo', {
    duration: 2500,
    origin:'bottom',
    distance:'50px',
});

sr.reveal('#liThree', {
    duration: 2000,
    origin:'top',
    distance:'50px',
});

sr.reveal('#liFour', {
    duration: 3000,
    origin:'bottom',
    distance:'50px',
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


        
        
        