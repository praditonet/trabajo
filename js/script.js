// Portfolio JavaScript Functionality

// DOM Elements
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

// Mobile Navigation Toggle
if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        navToggle.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
        });
    });
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        if (window.scrollY > 100) {
            navbar.style.background = 'rgba(255, 255, 255, 0.98)';
            navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.boxShadow = 'none';
        }
    }
});

// Skills Progress Animation
const skillProgressBars = document.querySelectorAll('.skill-progress');
const animateSkillBars = () => {
    skillProgressBars.forEach(bar => {
        const width = bar.getAttribute('data-width');
        if (width) {
            bar.style.width = width + '%';
        }
    });
};

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.3,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-up');
            
            // Animate skill bars when skills section is visible
            if (entry.target.classList.contains('skills-detail')) {
                setTimeout(animateSkillBars, 500);
            }
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const elementsToAnimate = document.querySelectorAll('.skill-card, .value-card, .project-card, .timeline-item, .skills-detail');
    elementsToAnimate.forEach(el => {
        observer.observe(el);
    });
});

// Project Filtering
const filterButtons = document.querySelectorAll('.filter-btn');
const projectItems = document.querySelectorAll('.project-item');

if (filterButtons.length > 0) {
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            button.classList.add('active');
            
            const filterValue = button.getAttribute('data-filter');
            
            projectItems.forEach(item => {
                if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
                    item.style.display = 'block';
                    setTimeout(() => {
                        item.style.opacity = '1';
                        item.style.transform = 'translateY(0)';
                    }, 100);
                } else {
                    item.style.opacity = '0';
                    item.style.transform = 'translateY(20px)';
                    setTimeout(() => {
                        item.style.display = 'none';
                    }, 300);
                }
            });
        });
    });
}

// Project Modal Functionality
const projectModal = document.getElementById('projectModal');
const projectLinks = document.querySelectorAll('.project-link[data-project]');
const modalClose = document.querySelector('.modal-close');

// Project data
const projectData = {
    ecommerce: {
        title: 'E-commerce Moderno',
        image: 'img/proyecto1.jpg',
        description: 'Una plataforma completa de comercio electrónico desarrollada con tecnologías modernas. Incluye sistema de pagos, gestión de inventario y panel administrativo.',
        features: [
            'Carrito de compras dinámico',
            'Sistema de pagos con Stripe',
            'Panel de administración',
            'Gestión de inventario',
            'Sistema de reviews',
            'Responsive design'
        ],
        technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'JWT'],
        github: 'https://github.com/usuario/ecommerce',
        live: 'https://ecommerce-demo.com'
    },
    taskmanager: {
        title: 'Task Manager Pro',
        image: 'img/proyecto2.jpg',
        description: 'Aplicación de gestión de tareas con colaboración en tiempo real. Permite crear equipos, asignar tareas y hacer seguimiento del progreso.',
        features: [
            'Colaboración en tiempo real',
            'Sistema de notificaciones',
            'Gestión de equipos',
            'Calendario integrado',
            'Reportes de productividad',
            'Interfaz intuitiva'
        ],
        technologies: ['Vue.js', 'Express', 'Socket.io', 'MySQL', 'Redis'],
        github: 'https://github.com/usuario/taskmanager',
        live: 'https://taskmanager-demo.com'
    },
    dashboard: {
        title: 'Analytics Dashboard',
        image: 'img/proyecto3.jpg',
        description: 'Panel de control interactivo para visualización de datos empresariales. Incluye gráficos dinámicos y reportes personalizables.',
        features: [
            'Gráficos interactivos',
            'Filtros avanzados',
            'Exportación de datos',
            'Actualizaciones en tiempo real',
            'Múltiples tipos de visualización',
            'API REST completa'
        ],
        technologies: ['Angular', 'D3.js', 'Python', 'PostgreSQL', 'Docker'],
        github: 'https://github.com/usuario/dashboard',
        live: 'https://dashboard-demo.com'
    },
    fitness: {
        title: 'FitTracker App',
        image: 'img/proyecto1.jpg',
        description: 'Aplicación móvil para seguimiento de entrenamientos y hábitos saludables. Incluye integración con wearables y red social.',
        features: [
            'Seguimiento de entrenamientos',
            'Integración con wearables',
            'Red social fitness',
            'Planes personalizados',
            'Estadísticas detalladas',
            'Notificaciones push'
        ],
        technologies: ['React Native', 'Firebase', 'Redux', 'Node.js'],
        github: 'https://github.com/usuario/fittracker',
        live: null
    },
    branding: {
        title: 'Brand Identity Design',
        image: 'img/proyecto2.jpg',
        description: 'Proyecto completo de identidad corporativa para startup tecnológica. Incluye logo, paleta de colores y manual de marca.',
        features: [
            'Diseño de logo',
            'Paleta de colores',
            'Tipografía corporativa',
            'Manual de marca',
            'Aplicaciones del branding',
            'Material publicitario'
        ],
        technologies: ['Adobe Illustrator', 'Figma', 'Adobe Photoshop'],
        github: null,
        live: 'https://behance.net/proyecto-branding'
    },
    blog: {
        title: 'Blog Platform CMS',
        image: 'img/proyecto3.jpg',
        description: 'Sistema de gestión de contenidos personalizado para blogs con editor avanzado y optimización SEO automática.',
        features: [
            'Editor WYSIWYG avanzado',
            'Optimización SEO automática',
            'Sistema de comentarios',
            'Múltiples autores',
            'Gestión de medios',
            'Panel de analytics'
        ],
        technologies: ['Next.js', 'Strapi', 'GraphQL', 'PostgreSQL'],
        github: 'https://github.com/usuario/blog-cms',
        live: 'https://blog-cms-demo.com'
    }
};

// Open project modal
if (projectLinks.length > 0) {
    projectLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const projectKey = link.getAttribute('data-project');
            const project = projectData[projectKey];
            
            if (project && projectModal) {
                // Populate modal content
                document.getElementById('modalImage').src = project.image;
                document.getElementById('modalTitle').textContent = project.title;
                document.getElementById('modalDescription').textContent = project.description;
                
                // Populate features
                const featuresList = document.getElementById('modalFeatures');
                featuresList.innerHTML = '';
                project.features.forEach(feature => {
                    const li = document.createElement('li');
                    li.textContent = feature;
                    featuresList.appendChild(li);
                });
                
                // Populate technologies
                const techContainer = document.getElementById('modalTags');
                techContainer.innerHTML = '';
                project.technologies.forEach(tech => {
                    const span = document.createElement('span');
                    span.className = 'tag';
                    span.textContent = tech;
                    techContainer.appendChild(span);
                });
                
                // Set links
                const githubLink = document.getElementById('modalGithub');
                const liveLink = document.getElementById('modalLive');
                
                if (project.github) {
                    githubLink.href = project.github;
                    githubLink.style.display = 'inline-flex';
                } else {
                    githubLink.style.display = 'none';
                }
                
                if (project.live) {
                    liveLink.href = project.live;
                    liveLink.style.display = 'inline-flex';
                } else {
                    liveLink.style.display = 'none';
                }
                
                // Show modal
                projectModal.style.display = 'block';
                document.body.style.overflow = 'hidden';
            }
        });
    });
}

// Close modal
if (modalClose) {
    modalClose.addEventListener('click', () => {
        projectModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    });
}

// Close modal when clicking outside
if (projectModal) {
    projectModal.addEventListener('click', (e) => {
        if (e.target === projectModal) {
            projectModal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
}

// FAQ Functionality
const faqItems = document.querySelectorAll('.faq-item');
if (faqItems.length > 0) {
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        question.addEventListener('click', () => {
            const isActive = item.classList.contains('active');
            
            // Close all FAQ items
            faqItems.forEach(faq => faq.classList.remove('active'));
            
            // Open clicked item if it wasn't active
            if (!isActive) {
                item.classList.add('active');
            }
        });
    });
}

// Contact Form Handling
const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData);
        
        // Basic validation
        if (!data.firstName || !data.lastName || !data.email || !data.subject || !data.message || !data.privacy) {
            alert('Por favor, completa todos los campos obligatorios.');
            return;
        }
        
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(data.email)) {
            alert('Por favor, ingresa un email válido.');
            return;
        }
        
        // Simulate form submission
        const submitButton = contactForm.querySelector('button[type="submit"]');
        const originalText = submitButton.innerHTML;
        
        submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Enviando...';
        submitButton.disabled = true;
        
        // Simulate API call delay
        setTimeout(() => {
            contactForm.style.display = 'none';
            formMessage.style.display = 'block';
            
            // Reset form after showing message
            setTimeout(() => {
                contactForm.reset();
                contactForm.style.display = 'block';
                formMessage.style.display = 'none';
                submitButton.innerHTML = originalText;
                submitButton.disabled = false;
            }, 5000);
        }, 2000);
    });
}

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    const heroImage = document.querySelector('.hero-image');
    
    if (hero && heroImage) {
        const rate = scrolled * -0.5;
        heroImage.style.transform = `translateY(${rate}px)`;
    }
});

// Typing effect for hero title
const heroTitle = document.querySelector('.hero-title');
if (heroTitle) {
    const text = heroTitle.innerHTML;
    heroTitle.innerHTML = '';
    
    let i = 0;
    const typeWriter = () => {
        if (i < text.length) {
            heroTitle.innerHTML += text.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        }
    };
    
    // Start typing effect after page load
    window.addEventListener('load', () => {
        setTimeout(typeWriter, 1000);
    });
}

// Scroll to top functionality
const scrollToTopBtn = document.createElement('button');
scrollToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
scrollToTopBtn.className = 'scroll-to-top';
scrollToTopBtn.style.cssText = `
    position: fixed;
    bottom: 2rem;
    right: 2rem;
    width: 50px;
    height: 50px;
    background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
    color: white;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    box-shadow: var(--shadow-medium);
    opacity: 0;
    visibility: hidden;
    transition: var(--transition);
    z-index: 999;
`;

document.body.appendChild(scrollToTopBtn);

// Show/hide scroll to top button
window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        scrollToTopBtn.style.opacity = '1';
        scrollToTopBtn.style.visibility = 'visible';
    } else {
        scrollToTopBtn.style.opacity = '0';
        scrollToTopBtn.style.visibility = 'hidden';
    }
});

// Scroll to top functionality
scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Loading animation
window.addEventListener('load', () => {
    document.body.classList.remove('loading');
});

// Add loading class initially
document.addEventListener('DOMContentLoaded', () => {
    document.body.classList.add('loading');
});

// Performance optimization: Lazy loading images
const images = document.querySelectorAll('img[data-src]');
const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.getAttribute('data-src');
            img.removeAttribute('data-src');
            observer.unobserve(img);
        }
    });
});

images.forEach(img => imageObserver.observe(img));

// Dark mode toggle (optional)
const darkModeToggle = document.createElement('button');
darkModeToggle.innerHTML = '<i class="fas fa-moon"></i>';
darkModeToggle.className = 'dark-mode-toggle';
darkModeToggle.style.cssText = `
    position: fixed;
    top: 50%;
    right: 1rem;
    width: 40px;
    height: 40px;
    background: var(--primary-color);
    color: white;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    box-shadow: var(--shadow-light);
    transition: var(--transition);
    z-index: 999;
    transform: translateY(-50%);
`;

// Uncomment to enable dark mode toggle
// document.body.appendChild(darkModeToggle);

darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const icon = darkModeToggle.querySelector('i');
    icon.className = document.body.classList.contains('dark-mode') 
        ? 'fas fa-sun' 
        : 'fas fa-moon';
});

// Error handling for images
document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.addEventListener('error', () => {
            img.src = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="400" height="300" viewBox="0 0 400 300"><rect width="400" height="300" fill="%23f0f0f0"/><text x="200" y="150" text-anchor="middle" fill="%23999" font-family="Arial, sans-serif" font-size="16">Imagen no disponible</text></svg>';
        });
    });
});

console.log('Portfolio JavaScript loaded successfully! 🚀');