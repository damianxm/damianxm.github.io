const grid = document.getElementById('projects-grid');

PROJECTS.forEach(p => {
  const imageBlock = p.image
    ? `<img src="${p.image}" alt="${p.title}" loading="lazy" />`
    : `<div class="card-image-placeholder">${p.emoji}</div>`;

  const categoryStrip = p.category
    ? `<div class="card-strip">
         <span class="strip-category">${p.category}</span>
         <div class="card-strip-accent"></div>
       </div>`
    : '';

  const demoLink = p.demo
    ? `<a href="${p.demo}" class="link-row link-demo" target="_blank">
         <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
         <span class="link-label">Live demo</span>
         <span class="link-sep">—</span>
         <span class="link-url">${p.demo}</span>
       </a>`
    : '';

  const stacksHTML = (p.stacks || []).map(s => `
    <div class="stack-block">
      <div class="stack-header">
        <span class="stack-label">${s.label}</span>
        <a href="${s.repo}" class="stack-repo" target="_blank">
          <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836a9.59 9.59 0 0 1 2.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.741 0 .267.18.578.688.48C19.138 20.161 22 16.416 22 12c0-5.523-4.477-10-10-10z"/></svg>
          ${s.repo}
        </a>
      </div>
      <div class="card-tags">
        ${s.tags.map(t => `<span class="tag">${t}</span>`).join('')}
      </div>
    </div>
  `).join('');

  const card = document.createElement('article');
  card.className = 'card';
  card.innerHTML = `
    ${categoryStrip}
    <div class="card-inner">
      <div class="card-image">
        ${imageBlock}
      </div>
      <div class="card-body">
        <h2 class="card-title">${p.title}</h2>
        <p class="card-desc">${p.desc}</p>
        ${demoLink ? `<div class="card-links">${demoLink}</div>` : ''}
        <div class="card-stacks">
          ${stacksHTML}
        </div>
      </div>
    </div>
  `;
  grid.appendChild(card);
});
