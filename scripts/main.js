
//caminho dos scripts
const way = 'scripts/'

// todos meus scripts

const arquivesJS = [
    way + 'toggleClareDarkMode.js'
];

//adicionando cada script em arquivesJS no html

arquivesJS.forEach(_arquive => {
    const script = document.createElement('script');
    script.src = _arquive;
    script.async = false; // garante que carreguem na ordem
    document.head.appendChild(script);
});