// Mock Array of Projects based on the user's past systems
const projects = [
  {
    title: "Sistema de Logística Avançado",
    description: "Plataforma escalável para controle de pátio, integração de cancelas e gestão de expedição com UI unificada em React.",
    tags: ["React", "Express", "Node.js", "Postgres"],
    img: "https://images.unsplash.com/photo-1586528116311-ad8ed3c84a0d?q=80&w=2070&auto=format&fit=crop",
    link: "#"
  },
  {
    title: "SoloIQ Agronomic Intelligence",
    description: "Sistema PWA offline-first focado em diagnósticos de campo, cálculo de 'Health Score' para talhões e alertas automáticos aos produtores.",
    tags: ["PWA", "Firebase", "Offline-First", "GeoJSON"],
    img: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=2070&auto=format&fit=crop",
    link: "#"
  },
  {
    title: "SaaS Ponto Certo",
    description: "Sistema multi-tenant com geolocalização e Modo Totem para gestão de ponto eletrônico corporativo, baseado na nuvem.",
    tags: ["Firestore", "SaaS", "Mobile-First"],
    img: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop",
    link: "#"
  }
];

// Function to render projects dynamically into the DOM
function renderProjects() {
  const projectsGrid = document.getElementById('projects-grid');
  
  if (!projectsGrid) return;
  
  // Clear the placeholder
  projectsGrid.innerHTML = '';

  // Loop through each project object and construct the HTML string
  projects.forEach(project => {
    // Creating tags HTML dynamically
    const tagsHTML = project.tags.map(tag => `<span class="tag">${tag}</span>`).join('');

    // Semantic card using <article>
    const cardHTML = `
      <article class="project-card">
        <img src="${project.img}" alt="Imagem do projeto ${project.title}" class="project-img" loading="lazy">
        <div class="project-content">
          <h3 class="project-title">${project.title}</h3>
          <p class="project-description">${project.description}</p>
          <div class="project-tags">
            ${tagsHTML}
          </div>
          <a href="${project.link}" class="project-link" target="_blank" rel="noopener noreferrer">
            Ver Detalhes <span>&rarr;</span>
          </a>
        </div>
      </article>
    `;

    // Append to grid
    projectsGrid.innerHTML += cardHTML;
  });
}

// Render projects once DOM is fully parsed
document.addEventListener('DOMContentLoaded', renderProjects);
