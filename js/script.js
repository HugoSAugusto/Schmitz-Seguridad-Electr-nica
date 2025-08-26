// Navegación móvil
    const menuBtn = document.getElementById('menuBtn');
    const menu = document.getElementById('menu');
    menuBtn?.addEventListener('click',()=>menu.classList.toggle('open'));

    // Pseudo-ruteo con hash + títulos/meta dinámicos para SEO básico
    const metaTitle = document.querySelector('title');
    const metaDesc = document.querySelector('meta[name="description"]');
    const routeMeta = {
      '#home': {
        t: 'Schmitz Seguridad Electrónica | Seguridad 360° en Paraguay',
        d: 'Cámaras HD, monitoreo humano 24/7, seguridad hotelera (Starlink + SI Net), fazendas, alarmas y redes en Paraguay.'
      },
      '#sobre': { t:'Sobre Nosotros – Schmitz', d:'Historia, misión, visión, valores y diferenciales: transparencia y calidad como pilares.' },
      '#servicios': { t:'Servicios – Schmitz', d:'Cámaras, monitoreo 24/7, hoteles, fazendas, alarmas y redes. Cotice ahora por WhatsApp.' },
      '#unidades': { t:'Unidades – Schmitz', d:'Nueva Esperanza y Ciudad del Este KM4. Teléfonos y mapas.' },
      '#blog': { t:'Blog – Schmitz', d:'Artículos de seguridad electrónica y conectividad en Paraguay.' },
      '#contacto': { t:'Contacto – Schmitz', d:'Formulario, teléfonos y WhatsApp para atención inmediata.' }
    };
    function applyMeta(){
      const key = location.hash || '#home';
      const m = routeMeta[key] || routeMeta['#home'];
      metaTitle.textContent = m.t; metaDesc.setAttribute('content', m.d);
      document.querySelectorAll('nav a').forEach(a=>a.classList.toggle('active', a.getAttribute('href')===key));
    }
    window.addEventListener('hashchange', applyMeta); applyMeta();

    // URLs amigables simuladas (pushState) al hacer clic en CTAs de servicios
    document.querySelectorAll('.card a.more').forEach(a=>{
      a.addEventListener('click', (e)=>{
        const slug = a.dataset.slug; if(slug){ history.pushState({}, '', slug); setTimeout(()=>history.pushState({}, '', '#contacto'), 10); }
      });
    });

    // Blog modal (contenido demo)
    const posts = {
      'camaras-empresa-paraguay': {
        title:'Cómo elegir el mejor sistema de cámaras para su empresa en Paraguay',
        html:`<p>Evalúe objetivos (disuasión, evidencia), topología de red, almacenamiento (NVR/SD/NAS), ángulos y luz, y defina una política de retención. Prefiera marcas con soporte local.</p>`
      },
      'ventajas-monitoreo-24-7': {
        title:'5 ventajas de tener monitoreo humano 24/7',
        html:`<ol><li>Respuesta inmediata.</li><li>Prevención de pérdidas.</li><li>Escalado con seguridad pública.</li><li>Reportes y auditoría.</li><li>Tranquilidad para el equipo.</li></ol>`
      },
      'starlink-si-net-hoteles-paraguay': {
        title:'Internet satelital para hoteles: Starlink y SI Net en Paraguay',
        html:`<p>Combine enlaces satelitales con balanceo y red Wi‑Fi profesional. Estudie SLA, latencia y planes de contingencia.</p>`
      },
      'seguridad-avanzada-fazendas': {
        title:'Seguridad avanzada para grandes fazendas: lo que necesita saber',
        html:`<p>Perímetros con sensores, radioenlaces para grandes distancias y replicadores para cobertura total. Diseñe en capas.</p>`
      }
    };
    const modal = document.getElementById('modal');
    const modalTitle = document.getElementById('modalTitle');
    const modalBody = document.getElementById('modalBody');
    function openPost(id){ const p = posts[id]; if(!p) return; modalTitle.textContent=p.title; modalBody.innerHTML=p.html; modal.showModal(); }
    function openPolicy(which){
      const titles = {privacy:'Política de Privacidad', terms:'Términos de Uso'};
      const bodies = {
        privacy:`<p>Respetamos su privacidad. Usamos información de contacto solo para responder a solicitudes y mejorar el servicio. Puede solicitar la eliminación de sus datos.</p>`,
        terms:`<p>El uso del sitio implica la aceptación de nuestros términos. La información aquí publicada puede cambiar sin previo aviso.</p>`
      };
      modalTitle.textContent = titles[which] || 'Información';
      modalBody.innerHTML = bodies[which] || '';
      modal.showModal();
    }
    function closeModal(){ modal.close(); }

    // Botón PT-BR: recomendación de plugin de traducción
    document.getElementById('ptBR')?.addEventListener('click',(e)=>{
      e.preventDefault();
      modalTitle.textContent='Tradução para Português (PT‑BR)';
      modalBody.innerHTML=`<p>Para tornar o site bilíngue rapidamente, recomendamos integrar um <strong>plugin de tradução</strong> (ex.: GTranslate, Weglot, TranslatePress). A versão em espanhol permanece principal. </p>
      <ol>
        <li>Instale o plugin escolhido.</li>
        <li>Defina <em>Espanhol</em> como idioma padrão.</li>
        <li>Ative <em>Português (Brasil)</em> como idioma adicional.</li>
        <li>Habilite o seletor de idioma no cabeçalho.</li>
      </ol>`;
      modal.showModal();
    });

    // Accesibilidad: cerrar modal con ESC
    window.addEventListener('keydown', (e)=>{ if(e.key==='Escape' && modal.open) closeModal(); });