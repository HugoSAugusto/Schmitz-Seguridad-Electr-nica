const traducoes = {
    es: {        
        "trad.serv1":"Protegemos lo que más importa — Seguridad 360° para hogares, empresas y grandes proyectos.",
        "trad.serv2":"Soluciones completas: cámaras HD, monitoreo humano 24/7, conectividad para hoteles, seguridad para grandes fazendas y mucho más.",
        "trad.serv3":"Cámaras de Seguridad HD",
        "trad.serv4":"Monitoreo en vivo 24/7",
        "trad.serv5": "Seguridad para Hoteles",
        "trad.serv6": "Seguridad en Grandes Fazendas",
        "trad.serv7":"Sistemas de Alarma y Control de Acceso",
        "trad.serv8":"Redes de Seguridad y Conectividad",

        "trad.ide":"Nuestros Servicios",
        "trad.ide1":"Seguridad Residencial",
        "trad.ide2":"Su casa o empresa protegida 24horas;",
        "trad.ide3":"Monitora la atividad de cada colaborador;",
        "trad.ide4":"Mantenga la ordene sobre monitoramiento de animales",
        "trad.ide5":"seguridad en sus manos",
        "trad.ide6":"Controle inmediato desde su celular;",
        "trad.ide7":"Acceso remoto a cámaras en tiempo real;",
        "trad.ide8":"Monitoreo humano que anticipa riesgos",
        "trad.ide9":"Cámaras De Vigilancia",
        "trad.ide10":"Imágenes nítidas en todo momento;",
        "trad.ide11":"Visión nocturna de última generación;",
        "trad.ide12":"Monitoreo en vivo desde cualquier lugar",

        "trad.foo":"Conoce nuestros servicios principales",
        "trad.red":"Redes Sociales",
        "trad.red1":"Conéctate con nosotros en nuestras redes sociales",
        "trad.foo1":"Contáctanos",
        "trad.foo2":"&copy; 2025 Schmitz Seguridad Electrónica. Todos los derechos reservados.",
    },
    pt: {
        "trad.serv1":"Protegendo o que mais importa — Segurança 360° para fazendas, empresas e grandes projetos.",
        "trad.serv2":"Soluções completas: câmeras HD, monitoramento humano 24/7 conectividade para hotéis, segurança para grandes fazendas e muito mais.",
        "trad.serv3":"Câmeras de segurança HD",
        "trad.serv4":"Monitoramento ao vivo 24/7",
        "trad.serv5": "Segurança Hoteleira",
        "trad.serv6": "Segurança em Grandes Fazendas",
        "trad.serv7": "Sistemas de Alarme e Controle de Acesso",
        "trad.serv8":"Redes de Segurança e Conectividade",

        "trad.ide":"Nossos Serviços",
        "trad.ide1":"Segurança Residencial",
        "trad.ide2":"Sua casa ou empresa protegida 24 horas;",
        "trad.ide3":"Monitora a atividade de cada colaborador;",
        "trad.ide4":"Manter a ordem no monitoramento de animais",
        "trad.ide5":"Segurança Suas Mãos",
        "trad.ide6":"Controle imediato pelo seu celular;",
        "trad.ide7":"Acesso remoto às câmeras em tempo real;",
        "trad.ide8":"Monitoramento humano que antecipa riscos",
        "trad.ide9":"Câmeras De Vigilância",
        "trad.ide10":"Imagens nítidas a todo momento;",
        "trad.ide11":"Visão noturna de última geração;",
        "trad.ide12":"Monitoramento ao vivo de qualquer lugar",

        "trad.foo":"Conheça nossos principais serviços",
        "trad.red":"Redes Sociais",
        "trad.red1":"Conecte-se conosco em nossas redes sociais",
        "trad.foo1":"Contate-nos",
        "trad.foo2":"&copy; 2025 Schmitz Electronic Security. Todos os direitos reservados.",
    }
};

function trocarIdioma(lang) {
    if (!traducoes[lang]) return;

    document.querySelectorAll("[data-translate]").forEach(el => {
        const chave = el.getAttribute("data-translate");
        if (traducoes[lang][chave]) {
            el.innerHTML = traducoes[lang][chave];
        }
    });

    localStorage.setItem("lang", lang);
}

document.addEventListener("DOMContentLoaded", () => {
    const langBtn = document.getElementById("lang-btn");
    let langAtual = localStorage.getItem("lang") || "es";

    // Atualiza idioma inicial
    trocarIdioma(langAtual);
    atualizarBotao(langAtual);

    langBtn.addEventListener("click", () => {
        langAtual = langAtual === "es" ? "pt" : "es"; 
        trocarIdioma(langAtual);
        atualizarBotao(langAtual);
    });

    function atualizarBotao(lang) {
        if (lang === "es") {
            langBtn.textContent = "🇪🇸 ES";
        } else {
            langBtn.textContent = "🇧🇷 PT";
        }
    }
});
