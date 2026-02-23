/* ============================================================
   ALEX STYLES PORTFOLIO — scripts.js
   Activity 3: Modal, hamburger nav, scroll effects
   ============================================================ */

// ── Project data for modals ──
const projects = {
  project1: {
    title: 'Lumière Café',
    tag: 'Branding',
    color: '#e8c5a0',
    description:
      'A complete visual identity for a boutique Parisian café, covering logo design, typography selection, brand guidelines, menu design, and signage. The palette evokes warmth and sophistication.',
    tools: 'Adobe Illustrator · Photoshop · Brand Guidelines',
  },
  project2: {
    title: 'Aura App',
    tag: 'UI/UX',
    color: '#a0c4e8',
    description:
      'Mobile-first UI design for a mindfulness and wellness app. The project encompassed user research, wireframing, high-fidelity prototypes, and a complete design system with accessible colour ratios.',
    tools: 'Figma · Principle · User Research',
  },
  project3: {
    title: 'Type & Form',
    tag: 'Print',
    color: '#b8e8a0',
    description:
      'A limited-edition poster series exploring experimental typography and abstract form for a contemporary art gallery. Each piece pairs a typeface with a geometric motif to evoke emotion.',
    tools: 'Adobe InDesign · Illustrator · Screen Printing',
  },
  project4: {
    title: 'Nova Launch',
    tag: 'Motion',
    color: '#d4a0e8',
    description:
      'Animated logo reveal and full motion graphics package for a tech start-up product launch. Delivered as After Effects project files and production-ready MP4/WebM exports.',
    tools: 'After Effects · Cinema 4D · Lottie',
  },
  project5: {
    title: 'Vogue Editorial',
    tag: 'Editorial',
    color: '#e8a0b8',
    description:
      'Art direction and layout design for a 12-page editorial spread in a high-fashion magazine. Responsibilities included photographer briefing, layout composition, retouching supervision, and final pre-press.',
    tools: 'InDesign · Photoshop · Pre-press',
  },
  project6: {
    title: 'Verdure Skincare',
    tag: 'Packaging',
    color: '#a0e8e0',
    description:
      'Sustainable packaging design for an organic skincare line, using recycled materials and soy-based inks. The minimal, botanical aesthetic reinforces the brand\'s eco-conscious values.',
    tools: 'Illustrator · Keyshot · Dieline Templates',
  },
};

// ── Modal ──
function openModal(id) {
  const project = projects[id];
  if (!project) return;

  const body = document.getElementById('modal-body');
  body.innerHTML = `
    <div class="modal-image" style="background-color:${project.color}; display:flex; align-items:center; justify-content:center;">
      <span style="font-family:'Playfair Display',serif; font-size:1.5rem; font-weight:700; color:#2c2c2c;">${project.title}</span>
    </div>
    <span class="modal-tag">${project.tag}</span>
    <h2>${project.title}</h2>
    <p>${project.description}</p>
    <p><strong>Tools:</strong> ${project.tools}</p>
  `;

  document.getElementById('modal').classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModal(event) {
  // Close only if clicking overlay background or close button
  if (event && event.target !== document.getElementById('modal') && !event.target.classList.contains('modal-close')) return;
  document.getElementById('modal').classList.remove('active');
  document.body.style.overflow = '';
}

// Close modal on Escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    document.getElementById('modal').classList.remove('active');
    document.body.style.overflow = '';
  }
});

// ── Hamburger navigation ──
const hamburger = document.querySelector('.hamburger');
const navLinks  = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

// Close nav when a link is clicked
navLinks.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
  });
});

// ── Navbar shadow on scroll ──
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 20);
});

// ── Contact form submission ──
function handleSubmit(event) {
  event.preventDefault();
  const btn = event.target.querySelector('button[type="submit"]');
  const original = btn.textContent;
  btn.textContent = '✓ Message Sent!';
  btn.disabled = true;
  btn.style.backgroundColor = '#5a9e5a';
  btn.style.borderColor = '#5a9e5a';
  setTimeout(() => {
    btn.textContent = original;
    btn.disabled = false;
    btn.style.backgroundColor = '';
    btn.style.borderColor = '';
    event.target.reset();
  }, 3000);
}