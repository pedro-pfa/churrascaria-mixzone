/* ===== Lógica do site - Frango da Via 4 ===== */
(function () {
  var N = window.NEGOCIO, C = window.CATEGORIAS, P = window.PRODUTOS;
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var kz = function (v) { return String(v).replace(/\B(?=(\d{3})+(?!\d))/g, '.') + ' ' + N.moeda; };
  var wa = function (t) { return 'https://wa.me/' + N.whatsapp + '?text=' + encodeURIComponent(t); };
  var icone = function (id) { var c = C.filter(function (x) { return x.id === id; })[0]; return c ? c.svg : '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><circle cx="12" cy="12" r="10"/></svg>'; };

  /* Aberto / Fechado (hora de Luanda) */
  function aberto() {
    var p = new Intl.DateTimeFormat('en-GB', { timeZone: 'Africa/Luanda', weekday: 'short', hour: 'numeric', minute: 'numeric', hour12: false }).formatToParts(new Date());
    var g = function (t) { return p.filter(function (x) { return x.type === t; })[0].value; };
    var d = { Sun: 0, Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6 }[g('weekday')];
    var h = (+g('hour') % 24) + (+g('minute')) / 60;
    return N.horario.dias.indexOf(d) > -1 && h >= N.horario.abre && h < N.horario.fecha;
  }

  /* Cabeçalho, rodapé e botão WhatsApp */
  function estrutura() {
    var pag = location.pathname.split('/').pop() || 'index.html';
    var links = [['index.html', 'Início'], ['cardapio.html', 'Cardápio'], ['sobre.html', 'Sobre'], ['contato.html', 'Contato']];
    var nav = links.map(function (l) { return '<a href="' + l[0] + '"' + (l[0] === pag ? ' aria-current="page"' : '') + '>' + l[1] + '</a>'; }).join('');
    
    // Cabeçalho com a imagem do logotipo
    $('#topo').innerHTML = 
      '<div class="container">' +
        '<a class="marca" href="index.html" aria-label="' + N.nome + ' - início">' +
          '<img src="assets/images/logo.png" alt="Logo Frango da Via 4" style="width: 48px; height: 48px; border-radius: 50%; object-fit: cover; border: 2px solid var(--gold);">' +
          '<span><b>' + N.nome + '</b><small>' + N.slogan + '</small></span>' +
        '</a>' +
        '<button class="menu-btn" aria-label="Abrir menu" aria-expanded="false">☰</button>' +
        '<nav class="menu" aria-label="Principal">' + nav + '</nav>' +
      '</div>';
      
    var b = $('.menu-btn'), m = $('.menu');
    b.onclick = function () { var a = m.classList.toggle('aberto'); b.setAttribute('aria-expanded', a); };
    
    // Estado Aberto/Fechado para o rodapé
    var on = aberto();
    var estadoHtml = '<span style="display:inline-flex;align-items:center;gap:6px;font-size:.85rem;font-weight:700;color:' + (on ? '#4ade80' : '#f87171') + ';">' +
      '<span style="display:inline-block;width:8px;height:8px;border-radius:50%;background:' + (on ? '#4ade80' : '#f87171') + ';"></span>' +
      (on ? 'Aberto agora' : 'Fechado agora') + '</span>';

    // Rodapé
    $('#rodape').innerHTML = 
      '<div class="container">' +
        '<div><h3>' + N.nome + '</h3><p>' + N.tipo + '<br>Criador: ' + N.nif + '</p></div>' +
        '<div><h3>Visite-nos</h3><p>' + N.endereco + '<br>' + N.cidade + '<br>' + estadoHtml + ' · ' + N.horarioTexto + '</p></div>' +
        '<div><h3>Contacto</h3><p><a href="' + wa(N.mensagemWhatsapp) + '">WhatsApp ' + N.whatsappTexto + '</a><br>Comer no local · Takeaway · Entregas · Reservas<br><a href="' + N.instagram + '">Instagram</a> · <a href="' + N.facebook + '">Facebook</a></p></div>' +
      '</div>';
      
    // Botão flutuante do WhatsApp com ícone SVG real
    var f = document.createElement('a');
    f.className = 'wa'; 
    f.href = wa(N.mensagemWhatsapp); 
    f.setAttribute('aria-label', 'Falar no WhatsApp');
    f.innerHTML = '<svg viewBox="0 0 24 24" fill="currentColor" width="32" height="32"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38a9.9 9.9 0 0 0 4.74 1.21c5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2zm0 18.15a8.2 8.2 0 0 1-4.19-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.2 8.2 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.25-8.24s8.24 3.7 8.24 8.24-3.7 8.24-8.25 8.24zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.12-.17.25-.64.81-.78.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.02-.38.11-.5.11-.11.25-.29.37-.43.12-.14.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.22.25-.86.85-.86 2.07s.88 2.4 1 2.56c.12.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.14-1.18-.06-.1-.23-.16-.48-.29z"/></svg>';
    document.body.appendChild(f);
  }

  /* Card de produto (para o cardápio) */
  function card(p) {
    var foto = p.imagem ? 'style="background-image:url(' + p.imagem + ')"' : '';
    return '<article class="card reveal"><div class="foto" ' + foto + ' aria-hidden="true">' + (p.imagem ? '' : icone(p.categoria)) + '</div>' +
      (p.selo ? '<span class="selo">' + p.selo + '</span>' : '') +
      '<div class="corpo"><h3>' + p.nome + '</h3><p class="muted">' + p.descricao + '</p><p class="preco">' + kz(p.preco) +
      (p.precoAntigo ? '<s>' + kz(p.precoAntigo) + '</s>' : '') + '</p><a class="btn" href="' + wa('Olá! Gostaria de pedir: ' + p.nome) + '">Pedir</a></div></article>';
  }

  /* Home: Nova Vitrine de Destaques e Atalhos */
  function home() {
    var cPrincipal = $('#vitrine-principal'); 
    var cLista = $('#vitrine-lista');
    
    // 1. Atalhos de categorias (sempre que existirem na página)
    var atalhos = $('#atalhos');
    if (atalhos) {
      atalhos.innerHTML = C.map(function (k) { 
        return '<a class="atalho reveal" href="cardapio.html?cat=' + k.id + '"><span class="svg-ico" aria-hidden="true">' + k.svg + '</span><h3>' + k.nome + '</h3></a>'; 
      }).join('');
    }

    // 2. Se não estivermos na Home, paramos aqui
    if (!cPrincipal || !cLista) return; 

    // 3. Lógica da Vitrine
    var d = P.filter(function (p) { return p.destaque; });
    if (!d.length) return;

    var atual = 0;
    var total = d.length;

    function renderPrincipal(index) {
      var p = d[index];
      var imgStyle = p.imagem ? 'style="background-image:url(' + p.imagem + ')"' : '';
      var iconeHtml = p.imagem ? '' : '<span class="ico-grande">' + icone(p.categoria) + '</span>';
      
      cPrincipal.innerHTML = 
        '<div class="vp-foto" ' + imgStyle + '>' + iconeHtml + '</div>' +
        '<div class="vp-info">' +
          '<span class="vp-selo">' + (p.selo || 'Destaque') + '</span>' +
          '<h3>' + p.nome + '</h3>' +
          '<p>' + p.descricao + '</p>' +
          '<div class="vp-preco">' + kz(p.preco) + '</div>' +
          '<a class="btn" href="' + wa('Olá! Gostaria de pedir: ' + p.nome) + '">Pedir agora</a>' +
        '</div>';
    }

    function renderLista() {
      cLista.innerHTML = d.map(function(p, i) {
        return '<div class="vl-item ' + (i === atual ? 'ativo' : '') + '" data-i="' + i + '">' +
                 '<div class="vl-foto" style="background-image:url(' + (p.imagem || '') + ')">' + (p.imagem ? '' : icone(p.categoria)) + '</div>' +
                 '<div class="vl-texto"><h4>' + p.nome + '</h4><span>' + kz(p.preco) + '</span></div>' +
               '</div>';
      }).join('');
      
      var itens = cLista.querySelectorAll('.vl-item');
      itens.forEach(function(item, idx) {
        item.onclick = function() {
          atual = idx;
          renderPrincipal(atual);
          atualizarListaAtiva();
          reiniciarTimer();
        };
      });
    }

    function atualizarListaAtiva() {
      var itens = cLista.querySelectorAll('.vl-item');
      itens.forEach(function(item, idx) {
        item.classList.toggle('ativo', idx === atual);
      });
    }

    var timer;
    function avancar() {
      atual = (atual + 1) % total;
      renderPrincipal(atual);
      atualizarListaAtiva();
    }
    function reiniciarTimer() {
      clearInterval(timer);
      timer = setInterval(avancar, 5000); // 5 segundos
    }

    renderPrincipal(0);
    renderLista();
    reiniciarTimer();
  }

  /* Cardápio: busca + filtro */
  function cardapio() {
    var g = $('#produtos'); if (!g) return;
    var cat = new URLSearchParams(location.search).get('cat') || 'todas', q = $('#busca'), chips = $('#chips');
    
    chips.innerHTML = [{ id: 'todas', nome: 'Todos', svg: '' }].concat(C).map(function (k) {
      return '<button class="chip" data-c="' + k.id + '">' + (k.svg ? '<span class="svg-ico">' + k.svg + '</span> ' : '') + k.nome + '</button>';
    }).join('');
    
    function mostrar() {
      var t = q.value.toLowerCase().trim();
      var l = P.filter(function (p) { return (cat === 'todas' || p.categoria === cat) && (p.nome + ' ' + p.descricao).toLowerCase().indexOf(t) > -1; });
      [].forEach.call(chips.children, function (b) { b.setAttribute('aria-pressed', b.dataset.c === cat); });
      g.innerHTML = l.length ? l.map(card).join('') : '<p>Nenhum produto encontrado. Tente outra palavra.</p>';
      revelar();
    }
    
    chips.onclick = function (e) { 
      var btn = e.target.closest('.chip');
      if (btn) { cat = btn.dataset.c; mostrar(); } 
    };
    q.oninput = mostrar; 
    mostrar();
  }

  /* Fade-in ao rolar */
  function revelar() {
    if (!('IntersectionObserver' in window)) return;
    var io = new IntersectionObserver(function (es) { 
      es.forEach(function (e) { 
        if (e.isIntersecting) { e.target.classList.add('visivel'); io.unobserve(e.target); } 
      }); 
    }, { threshold: .1 });
    document.querySelectorAll('.reveal:not(.visivel)').forEach(function (el) { io.observe(el); });
  }

  /* Remove o selo "Powered by Netlify" */
  function semNetlify() {
    document.querySelectorAll('[class*="netlify" i],[id*="netlify" i],a[href*="netlify.com"]').forEach(function (e) { 
      if (e.tagName === 'A' && e.parentElement && e.parentElement.children.length === 1) {
        e.parentElement.remove();
      } else {
        e.remove(); 
      }
    });
  }

  /* Inicialização Global */
  document.addEventListener('DOMContentLoaded', function() {
    estrutura(); 
    home(); 
    cardapio(); 
    revelar(); 
    semNetlify();
    
    // Observa alterações no body para remover o Netlify se ele aparecer depois
    new MutationObserver(semNetlify).observe(document.body, { childList: true, subtree: true });
  });

})();