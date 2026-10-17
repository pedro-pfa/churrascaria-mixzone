/* ============================================================
   DADOS DO SITE - Frango da Via 4
   Edite aqui: contactos, categorias e produtos.
   ============================================================ */
window.NEGOCIO = {
  nome: "Frango da Via 4",
  slogan: "Sabor que une, tradição que fica!",
  tipo: "Churrascaria Tradicional",
  endereco: "Zango 4, Rua da Feira, 4 de Abril",
  cidade: "Luanda, Angola",
  horarioTexto: "Seg–Sáb, 07h30–23h",
  horario: { dias: [1,2,3,4,5,6], abre: 7.5, fecha: 23 }, // 0 = Domingo
  whatsapp: "244953190638",
  whatsappTexto: "+244 953 190 638",
  mensagemWhatsapp: "Olá! Vi o site e gostaria de fazer um pedido.",
  nif: "Pedro Firmino Afonso",
  moeda: "Kz",
  instagram: "#",
  facebook: "#"
};

window.CATEGORIAS = [
  { id: "especialidade", nome: "Especialidade da Casa", svg: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/></svg>' },
  { id: "grelhados",     nome: "Grelhados",             svg: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 3v18"/><path d="M9 3v18"/><path d="M3 9h18"/><path d="M3 15h18"/></svg>' },
  { id: "pratos",        nome: "Pratos do Dia",         svg: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 11h18"/><path d="M5 11v6a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-6"/><path d="M12 11V7"/><path d="M8 7h8"/></svg>' },
  { id: "pequeno",       nome: "Pequenos Almoços",      svg: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 8h1a4 4 0 1 1 0 8h-1"/><path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z"/><line x1="6" y1="2" x2="6" y2="4"/><line x1="10" y1="2" x2="10" y2="4"/><line x1="14" y1="2" x2="14" y2="4"/></svg>' },
  { id: "sobremesas",    nome: "Sobremesas",            svg: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v20"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>' },
  { id: "bebidas",       nome: "Bebidas",               svg: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 3h12l-1 8H7L6 3Z"/><path d="M8 11v10h8V11"/></svg>' }
];

/* imagem: "assets/images/ficheiro.jpg" (vazio = mostra o ícone da categoria)
   precoAntigo: preço riscado (promoção) | selo: texto opcional | destaque: true = aparece na vitrine da Home */
window.PRODUTOS = [
  // --- ESPECIALIDADE ---
  { id: 1, nome: "Frango Grelhado Inteiro", descricao: "O nosso frango suculento na brasa, servido com batata frita e arroz.", preco: 8000, categoria: "especialidade", imagem: "assets/images/produto-01.jpg", selo: "Mais Pedido", destaque: true },
  { id: 2, nome: "Meio Frango Grelhado", descricao: "Metade do nosso frango na brasa, com batata frita e arroz.", preco: 4500, categoria: "especialidade", imagem: "assets/images/produto-02.jpg", destaque: true },
  
  // --- GRELHADOS ---
  { id: 3, nome: "Grelhada Mista", descricao: "Seleção de carnes grelhadas na hora com acompanhamentos.", preco: 6500, precoAntigo: 7500, categoria: "grelhados", imagem: "assets/images/produto-03.jpg", selo: "Promoção", destaque: true },
  { id: 4, nome: "Costeletas de Porco", descricao: "Costeletas tenras grelhadas com o tempero da casa.", preco: 5500, categoria: "grelhados", imagem: "assets/images/produto-04.jpg", destaque: true },
  
  // --- PRATOS DO DIA ---
  { id: 5, nome: "Prato do Dia: Funge com Muamba", descricao: "O prato muda todos os dias. Pergunte-nos o de hoje.", preco: 3500, categoria: "pratos", imagem: "assets/images/produto-05.jpg", selo: "Varia por dia", destaque: true },
  { id: 6, nome: "Peixe Cacusso com Repolho", descricao: "Cacusso cozinhado com repolho, ao estilo tradicional.", preco: 4000, categoria: "pratos", imagem: "assets/images/produto-06.jpg" },
    // --- PRATOS DO DIA ---
  { id: 7, nome: "Sopa / Caldo do Dia", descricao: "Sopa ou caldo quentinho, feito na hora.", preco: 1500, categoria: "pratos", imagem: "https://images.unsplash.com/photo-1547592180-85f173990554?q=80&w=800&auto=format&fit=crop" },
  
  // --- PEQUENOS ALMOÇOS ---
  { id: 8, nome: "Café Expresso", descricao: "Café forte e fresco, tirado na hora.", preco: 500, categoria: "pequeno", imagem: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=800&auto=format&fit=crop" },
  { id: 9, nome: "Galão", descricao: "Café com leite servido em copo alto.", preco: 700, categoria: "pequeno", imagem: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?q=80&w=800&auto=format&fit=crop" },  { id: 10, nome: "Cappuccino", descricao: "Café com leite cremoso e um toque de canela.", preco: 1000, categoria: "pequeno", imagem: "https://images.unsplash.com/photo-1534778101976-62847782c213?q=80&w=800&auto=format&fit=crop" },
  { id: 11, nome: "Tostas Mistas", descricao: "Pão tostado com fiambre e queijo derretido.", preco: 1800, categoria: "pequeno", imagem: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=800&auto=format&fit=crop" },
  { id: 12, nome: "Omelete Mista", descricao: "Omelete com fiambre, queijo e legumes frescos.", preco: 2000, categoria: "pequeno", imagem: "https://images.unsplash.com/photo-1510693206972-df098062cb71?q=80&w=800&auto=format&fit=crop" },
  
  // --- SOBREMESAS ---
  { id: 13, nome: "Mousse de Chocolate", descricao: "Mousse cremosa de chocolate, servida gelada.", preco: 1200, categoria: "sobremesas", imagem: "https://images.unsplash.com/photo-1541783245831-57d6fb0926d3?q=80&w=800&auto=format&fit=crop", destaque: true },
  { id: 14, nome: "Pudim de Leite", descricao: "Pudim caseiro com calda de caramelo.", preco: 1200, categoria: "sobremesas", imagem: "https://images.unsplash.com/photo-1551024506-0bccd828d307?q=80&w=800&auto=format&fit=crop" },
  
  // --- BEBIDAS ---
  { id: 15, nome: "Coca-Cola", descricao: "Garrafa pequena, bem gelada.", preco: 600, categoria: "bebidas", imagem: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?q=80&w=800&auto=format&fit=crop" },
  { id: 16, nome: "Água Mineral", descricao: "Água mineral natural ou fresca.", preco: 500, categoria: "bebidas", imagem: "https://images.unsplash.com/photo-1523362628745-0c100150b504?q=80&w=800&auto=format&fit=crop" },
  { id: 17, nome: "Sumo Natural", descricao: "Sumo de fruta, vários sabores.", preco: 800, categoria: "bebidas", imagem: "https://images.unsplash.com/photo-1613478223719-2ab802602423?q=80&w=800&auto=format&fit=crop" }
];