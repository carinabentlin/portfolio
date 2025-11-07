//seleciconar a seção about//
const about =document.querySelector('#about');

const formulario = document.querySelector('#formulario');

const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
 

//função para buscar os dados no GitHub//
async function getApiGithub(){

    try{
        //1º passo é fazer requisição get para api do github//
        const dadosPerfil = await fetch('https://api.github.com/users/carinabentlin');

         //2º converter a resposta da api p json//
        const perfilJson = await dadosPerfil.json();

        //3º cria html/css com os dados do perfil//
     const section = document.querySelector('#sobre-perfil'); // ID da section onde o conteúdo será inserido

      section.innerHTML = `
    <figure class="about_image fade-in-up">
        <img src="${perfilJson.avatar_url}" alt="Foto do perfil do GitHub - ${perfilJson.name}">
    </figure>

    <article class="about_content fade-in-up">
        <h2>Sobre Mim</h2>

        <p>
            Sou Desenvolvedora Full Stack – habilidade aperfeiçoada no Bootcamp da Generation Brasil com foco em
            Java, Spring Boot, MySQL, HTML, CSS, JavaScript, React, Git/GitHub e metodologias ágeis.
        </p>
        <p>
            Com formação inicial em comunicação social/jornalismo, tenho mais de 16 anos de experiência em gestão de projetos,
            comunicação corporativa, produção cultural e audiovisual, mantendo atuação contínua em iniciativas culturais
            e de impacto social. Como criadora já publiquei alguns livros e dirigi documentários.
        </p>
        <p>
            Meu propósito é unir a experiência em gestão, cultura e inovação à formação em tech, desenvolvendo soluções que conectem
            pessoas a soluções efetivas – e de quebra – fortalecer a presença de mais mulheres na tecnologia.
        </p>

        <div class="about_status fade-in-up">

            <a href="${perfilJson.html_url}" target="_blank" class="botao">Ver GitHub</a>

            <div class="stats-wrapper">
                <div class="stat-item">
                    <p class="stat-number">${perfilJson.followers}</p>
                    <p class="stat-label">Seguidores</p>
                </div>

                <div class="stat-item">
                    <p class="stat-number">${perfilJson.public_repos}</p>
                    <p class="stat-label">Repositórios</p>
                </div>
            </div>

        </div>
    </article>
`;

// Adiciona animação após o conteúdo ter sido inserido
section.querySelectorAll('figure, article, .about_status').forEach(el => {
    el.classList.add('fade-in-up');
});
        
    } catch(error) {
        console.error("Erro ao carregar perfil:", error);
    }
}
//funcao de envio e validacao de formulario
formulario.addEventListener('submit', function(event) {

//impedir o envio automatico do formulario
    event.preventDefault();

// Expressão regular para validar o e-mail
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Validação do campo nome
const campoNome = document.querySelector('#nome');
const txtNome = document.querySelector('#txtNome');

if (campoNome.value.length < 3) { // length CORRETO
    txtNome.innerHTML = 'O nome deve ter no mínimo 3 caracteres.';
    campoNome.focus();
    return;
} else {
    txtNome.innerHTML = '';
}

// Validação do campo e-mail
const campoEmail = document.querySelector('#email');
const txtEmail = document.querySelector('#txtEmail');

if (!emailRegex.test(campoEmail.value)) {
    txtEmail.innerHTML = 'Digite um e-mail válido.';
    campoEmail.focus();
    return;
} else {
    txtEmail.innerHTML = '';
}

// Validação do campo assunto
const campoAssunto = document.querySelector('#assunto');
const txtAssunto = document.querySelector('#txtAssunto');

if (campoAssunto.value.length < 5) { // length CORRETO
    txtAssunto.innerHTML = 'O assunto deve ter no mínimo 5 caracteres.';
    campoAssunto.focus();
    return;
} else {
    txtAssunto.innerHTML = '';
}



//Se passou por todas as validações envia formulario
formulario.submit();


})


//chamar a função getapigithub()
getApiGithub();
