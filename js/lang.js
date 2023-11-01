$(document).ready(function () {
    $('.language').click(function () {
        $('.language ul').toggleClass('show-list');
    });

    $('.language ul li a').click(function (e) {
        e.stopPropagation();
        $('.language ul').removeClass('show-list');
    });
});

$(function () {
    //English
    $(".en").click(function () {
        event.preventDefault();

        //Muda a bandeira para a linguagem selecionada
        $(".language-selected").removeClass("change-br");
        $(".language-selected").addClass("change-en");

        //Navegação
        $(".nav-item:nth-child(1)").html('<a href="#home" class="nav-link">Home</a>');
        $(".nav-item:nth-child(2)").html('<a href="#content" class="nav-link">Skills</a>');
        $(".nav-item:nth-child(3)").html('<a href="#projects" class="nav-link">Projects</a>');
        $(".nav-item:nth-child(4)").html('<a href="#about" class="nav-link">About</a>');


        //Hero
        $("#name-hero p").html('I&apos;m a <span id="text-highlight">game designer</span> based in Brazil');

        //Conteúdo

        //Tools
        $("#tools h3").text('Tools and Languages');

        $("#tools ul li:nth-child(1) p").html('<span id="text-highlight">Unreal Engine 4 & 5</span><br>Blueprints, C++, Python, Editor Utilities, High Quality ilumination, XR Projects, UMGs</p>');
        $("#tools ul li:nth-child(2) p").html('<p><span id="text-highlight">Unity</span><br>C#, JavaScript, Multiple Platforms</p>');
        $("#tools ul li:nth-child(3) p").html('<p><span id="text-highlight">Godot</span><br>GDScript, Level Design, 2D</p>');

        //Skills
        $("#skills h3").html('Main Skills');

        $("#skills ul:nth-child(2) p").html('<span id="text-highlight">Main Skills</span>');
        $("#skills ul:nth-child(2) li:nth-child(2)").html('Workgroup');
        $("#skills ul:nth-child(2) li:nth-child(3)").html('Project Management');
        $("#skills ul:nth-child(2) li:nth-child(4)").html('Building projects from scratch');
        $("#skills ul:nth-child(2) li:nth-child(5)").html('Building projects from templates and upgrading existing projects');

        $("#skills ul:nth-child(3) p").html('<span id="text-highlight">Coding Skills</span>');
        $("#skills ul:nth-child(3) li:nth-child(2)").html('Experienced with Data Structures');
        $("#skills ul:nth-child(3) li:nth-child(3)").html('Pathfinding');
        $("#skills ul:nth-child(3) li:nth-child(4)").html('Machine States');
        $("#skills ul:nth-child(3) li:nth-child(5)").html('Shader Programming');
        $("#skills ul:nth-child(3) li:nth-child(6)").html('Animation handling');

        $("#skills ul:nth-child(4) p").html('<span id="text-highlight">Illumination Skills</span>');
        $("#skills ul:nth-child(4) li:nth-child(2)").html('Lumen and Baked lighting based scene setup');
        $("#skills ul:nth-child(4) li:nth-child(3)").html('Volumetric and Light probes setup');
        $("#skills ul:nth-child(4) li:nth-child(4)").html('Realistic and Artistic lighting knowledge');
        $("#skills ul:nth-child(4) li:nth-child(5)").html('Lightmap UV building');
        $("#skills ul:nth-child(4) li:nth-child(6)").html('Deep Lighting debug');

        //Projects
        $(".projects:nth-child(1) h3").text('Professional projects');
        $(".projects:nth-child(2) h3").text('Personal projects');

        //Professional Projects
        //Project 1
        $('#projects h4:eq(0)').text('Professional project 1');
        $('#projects p:eq(1)').text('Professional project text 1');

        //Project 2
        $('#projects h4:eq(1)').text('Professional project 2');
        $('#projects p:eq(2)').text('Professional project text 2');

        //Project 3
        $('#projects h4:eq(2)').text('Professional project 3');
        $('#projects p:eq(3)').text('Professional project text 3');

        //Project 4
        $('#projects h4:eq(3)').text('Professional project 4');
        $('#projects p:eq(4)').text('Professional project text 4');

        //Personal Projects
        //Project 1
        $('#projects h4:eq(4)').text('Personal project 1');
        $('#projects p:eq(6)').text('Personal project text 1');

        //Project 2
        $('#projects h4:eq(5)').text('Personal project 2');
        $('#projects p:eq(7)').text('Personal project text 2');

        //Project 3
        $('#projects h4:eq(6)').text('Personal project 3');
        $('#projects p:eq(8)').text('Personal project text 3');

        //Project 4
        $('#projects h4:eq(7)').text('Personal project 4');
        $('#projects p:eq(9)').text('Personal project text 4');

        //About
        $('#about-title h2').text('About me');
        $('#about-title p').html('<p><a href="/cv/Willian Metzger - CV en.pdf">Resume</a></p>');
        $('#location-experience p:eq(0)').text('Brazil');
        $('#location-experience p:eq(1)').text('4 yrs of experience');

        //Footer
        $('footer h4').text('Tell me about your next project!');
        return false;
    });
});

$(function () {
    //Português
    $(".br").click(function () {
        event.preventDefault();

        //Muda a bandeira para a linguagem selecionada
        $(".language-selected").removeClass("change-en");
        $(".language-selected").addClass("change-br");


        //Navegação
        $(".nav-item:nth-child(1)").html('<a href="#home" class="nav-link">Início</a>');
        $(".nav-item:nth-child(2)").html('<a href="#content" class="nav-link">Habilidades</a>');
        $(".nav-item:nth-child(3)").html('<a href="#projects" class="nav-link">Projetos</a>');
        $(".nav-item:nth-child(4)").html('<a href="#about" class="nav-link">Sobre</a>');


        //Hero
        $("#name-hero p").html('Sou um <span id="text-highlight">designer de jogos</span> do Brasil');

        //Conteúdo

        //Tools
        $("#tools h3").text('Ferramentas e Linguages');

        $("#tools ul li:nth-child(1) p").html('<span id="text-highlight">Unreal Engine 4 & 5</span><br>Blueprints, C++, Python, Utilitários do Editor, Iluminação de Alta Qualidade, Projetos de XR, UMGs</p>');
        $("#tools ul li:nth-child(2) p").html('<p><span id="text-highlight">Unity</span><br>C#, JavaScript, Multiplas Plataformas</p>');
        $("#tools ul li:nth-child(3) p").html('<p><span id="text-highlight">Godot</span><br>GDScript, Criação de Níveis, 2D</p>');

        //Skills
        $("#skills h3").html('Habilidades');

        $("#skills ul:nth-child(2) p").html('<span id="text-highlight">Habilidades Principais</span>');
        $("#skills ul:nth-child(2) li:nth-child(2)").html('Trabalho em equipe');
        $("#skills ul:nth-child(2) li:nth-child(3)").html('Gestão de projetos');
        $("#skills ul:nth-child(2) li:nth-child(4)").html('Construção de projetos do zero');
        $("#skills ul:nth-child(2) li:nth-child(5)").html('Construção de projetos a partir de modelos e atualização de projetos existentes');

        $("#skills ul:nth-child(3) p").html('<span id="text-highlight">Habilidades de Codificação</span>');
        $("#skills ul:nth-child(3) li:nth-child(2)").html('Experiência com estrutura de dados');
        $("#skills ul:nth-child(3) li:nth-child(3)").html('Navegação de caminho');
        $("#skills ul:nth-child(3) li:nth-child(4)").html('Estados de máquina');
        $("#skills ul:nth-child(3) li:nth-child(5)").html('Programação de Shader');
        $("#skills ul:nth-child(3) li:nth-child(6)").html('Manipulação de Animação');

        $("#skills ul:nth-child(4) p").html('<span id="text-highlight">Habilidades de Iluminação</span>');
        $("#skills ul:nth-child(4) li:nth-child(2)").html('Configuração de cena baseada em Iluminação Lumen e Baked');
        $("#skills ul:nth-child(4) li:nth-child(3)").html('Configuração de sondas de luz e volumétricas');
        $("#skills ul:nth-child(4) li:nth-child(4)").html('Conhecimento em iluminação realista e artística');
        $("#skills ul:nth-child(4) li:nth-child(5)").html('Construção de Lightmap UV');
        $("#skills ul:nth-child(4) li:nth-child(6)").html('Depuração de Iluminação Profunda');

        //Projects
        $(".projects:nth-child(1) h3").text('Projetos profissionais');
        $(".projects:nth-child(2) h3").text('Projetos pessoais');

        //Professional Projects
        //Project 1
        $('#projects h4:eq(0)').text('Projeto profissional 1');
        $('#projects p:eq(1)').text('Texto projeto profissional 1');

        //Project 2
        $('#projects h4:eq(1)').text('Projeto profissional 2');
        $('#projects p:eq(2)').text('Texto projeto profissional 2');

        //Project 3
        $('#projects h4:eq(2)').text('Projeto profissional 3');
        $('#projects p:eq(3)').text('Texto projeto profissional 3');

        //Project 4
        $('#projects h4:eq(3)').text('Projeto profissional 4');
        $('#projects p:eq(4)').text('Texto projeto profissional 4');

        //Personal Projects
        //Project 1
        $('#projects h4:eq(4)').text('Projeto pessoal 1');
        $('#projects p:eq(6)').text('Texto projeto pessoal 1');

        //Project 2
        $('#projects h4:eq(5)').text('Projeto pessoal 2');
        $('#projects p:eq(7)').text('Texto projeto pessoal 2');

        //Project 3
        $('#projects h4:eq(6)').text('Projeto pessoal 3');
        $('#projects p:eq(8)').text('Texto projeto pessoal 3');

        //Project 4
        $('#projects h4:eq(7)').text('Projeto pessoal 4');
        $('#projects p:eq(9)').text('Texto projeto pessoal 4');

        //About
        $('#about-title h2').text('Sobre mim');
        $('#about-title p').html('<p><a href="/cv/Willian Metzger - CV pt-BR.pdf">CV</a></p>');
        $('#location-experience p:eq(0)').text('Brasil');
        $('#location-experience p:eq(1)').text('4 anos de exp.');

        //Footer
        $('footer h4').text('Conte-me sobre o seu próximo projeto!');
        return false;
    });
});