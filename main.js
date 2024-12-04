document.addEventListener('DOMContentLoaded', function()
{
    let avatar = document.querySelector('#avatar')
    let nome = document.querySelector('#nome')
    let login = document.querySelector('#login')
    let repositorios = document.querySelector('#numRepositorio')
    let seguidores = document.querySelector('#seguidores')
    let seguindo = document.querySelector('#seguindo')
    let link = document.querySelector('#link-hub')

        // "login": "GuiMPinto",
        // "name": "PintoJR",
        // "followers": 0,
        // "following": 0,  
        // "html_url": "https://github.com/GuiMPinto"
        // "public_repos": 36,




    fetch('https://api.github.com/users/GuiMPinto')
        .then(function(resposta)
        {
            return resposta.json();
        })
        .then(function(json)
        {
            avatar.src = json.avatar;
            nome.innerText = json.name;
            login.innerText = json.login;
            seguidores.innerText = json.followers;
            seguindo.innerText = json.following;
            repositorios.innerText = json.public_repos;
            link.href = json.html_url;
        })
        .catch(function(erro)
        {
            alert("ERRO . Não é possivel baixar alguns elementos no momento.");
        })
})        


