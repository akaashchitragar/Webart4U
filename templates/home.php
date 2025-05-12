<?php
// Set page title
$page_title = "Home";

// Process form submission
$formSubmitted = false;
$formError = false;

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Get form data
    $name = isset($_POST['name']) ? trim($_POST['name']) : '';
    $email = isset($_POST['email']) ? trim($_POST['email']) : '';
    $phone = isset($_POST['phone']) ? trim($_POST['phone']) : '';
    $subject = isset($_POST['subject']) ? trim($_POST['subject']) : '';
    $message = isset($_POST['message']) ? trim($_POST['message']) : '';
    
    // Basic validation
    if (empty($name) || empty($email) || empty($message)) {
        $formError = true;
    } else {
        // In a real scenario, you would send an email here
        // For demo purposes, we'll just mark the form as submitted
        $formSubmitted = true;
    }
}
?>

<!-- Hero Section -->
<section class="hero">
    <div class="hero-background">
        <div class="hero-shapes">
            <div class="shape shape-1"></div>
            <div class="shape shape-2"></div>
            <div class="shape shape-3"></div>
            <div class="shape shape-4"></div>
            <div class="shape shape-5"></div>
        </div>
        <div class="code-pattern">
            <div class="code-line"></div>
            <div class="code-line"></div>
            <div class="code-line"></div>
            <div class="code-bracket">{</div>
            <div class="code-bracket">}</div>
            <div class="code-dots">
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div class="code-tag">&lt;/&gt;</div>
            <div class="code-circle"></div>
        </div>
    </div>
    <div class="container">
        <div class="hero-content">
            <div class="hero-badge-wrapper">
                <span class="hero-badge">Your Vision, Our Masterpiece</span>
            </div>
            <h1 class="hero-title">Transform Your <span class="accent-text">Digital Vision</span> Into Reality</h1>
            <p class="hero-description">Award-winning UI/UX design, web development, and mobile solutions that elevate your brand and drive business growth.</p>
            <div class="hero-actions">
                <a href="#portfolio" class="btn btn-primary">Explore Portfolio</a>
                <a href="#contact" class="btn btn-outline">Free Consultation</a>
            </div>
            <div class="hero-stats">
                <div class="stat-item">
                    <span class="stat-number">200+</span>
                    <span class="stat-label">Projects Completed</span>
                </div>
                <div class="stat-item">
                    <span class="stat-number">95+</span>
                    <span class="stat-label">Client Satisfaction</span>
                </div>
                <div class="stat-item">
                    <span class="stat-number">20+</span>
                    <span class="stat-label">Years Experience</span>
                </div>
            </div>
        </div>
        <div class="hero-visual">
            <div class="mockup-wrapper">
                <div class="floating-elements">
                    <div class="element element-1">
                        <img src="<?php echo IMAGES_PATH; ?>tech-logos/adobe-xd-1-logo-svgrepo-com.svg" alt="Adobe XD" class="tech-logo">
                    </div>
                    <div class="element element-2">
                        <img src="<?php echo IMAGES_PATH; ?>tech-logos/figma-1-logo-svgrepo-com.svg" alt="Figma" class="tech-logo">
                    </div>
                    <div class="element element-3">
                        <img src="<?php echo IMAGES_PATH; ?>tech-logos/react-logo-svgrepo-com.svg" alt="React" class="tech-logo">
                    </div>
                    <div class="element element-4">
                        <img src="<?php echo IMAGES_PATH; ?>tech-logos/android-logo-svgrepo-com.svg" alt="Android" class="tech-logo">
                    </div>
                    <div class="element element-5">
                        <img src="<?php echo IMAGES_PATH; ?>tech-logos/nodejs-icon-logo-svgrepo-com.svg" alt="Node.js" class="tech-logo">
                    </div>
                </div>
                <div class="device-glow"></div>
                <img src="<?php echo IMAGES_PATH; ?>your-device-mockup.png" alt="Device Mockup" class="real-device-mockup">
            </div>
        </div>
    </div>
    <div class="scroll-indicator">
        <div class="scroll-text">Scroll</div>
        <div class="mouse-icon">
            <div class="mouse-wheel"></div>
        </div>
    </div>
</section>

<!-- Hero section tech logo styles -->
<style>
    .hero .floating-elements .tech-logo {
        filter: none !important;
        opacity: 1 !important;
    }
    
    .hero .element {
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.12);
        transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
    }
    
    .hero .element:hover {
        transform: translateY(-8px) scale(1.05);
        box-shadow: 0 15px 35px rgba(0, 0, 0, 0.18);
    }
</style>

<!-- About Section -->
<section id="about" class="section about-section bg-light-grey">
    <div class="about-background">
        <div class="about-shapes">
            <div class="shape about-shape-1"></div>
            <div class="shape about-shape-2"></div>
            <div class="shape about-shape-3"></div>
        </div>
    </div>
    <div class="container">
        <div class="section-title" data-aos="fade-up">
            <p class="section-subtitle">About Us</p>
            <h2>Who We Are</h2>
        </div>
        
        <div class="bento-grid">
            <!-- Main About Box -->
            <div class="bento-box bento-box-large" data-aos="fade-up" data-aos-delay="100">
                <div class="bento-content">
                    <div class="about-badge-wrapper">
                        <span class="about-badge">Est. 2002</span>
                    </div>
                    <h3>Our Story</h3>
                    <p>Webart4U stands at the forefront of digital innovation in India and beyond. We transform ambitious ideas into powerful digital experiences through expert design and development.</p>
                    <p>Over the years, we've evolved from a small team of passionate designers and developers to a comprehensive digital agency serving clients worldwide.</p>
                    <div class="bento-image-container">
                        <img src="<?php echo IMAGES_PATH; ?>about/team-photo.jpg" alt="Webart4U Team" class="bento-story-image">
                        <div class="image-overlay">
                            <div class="team-pulse"></div>
                        </div>
                    </div>
                </div>
                <div class="box-decoration">
                    <div class="dot-pattern"></div>
                </div>
            </div>
            
            <!-- Mission Box -->
            <div class="bento-box bento-box-medium bento-box-primary" data-aos="fade-up" data-aos-delay="200">
                <div class="bento-icon">
                    <i class="fas fa-bullseye"></i>
                </div>
                <div class="bento-content">
                    <h3>Our Mission</h3>
                    <p>To empower businesses with digital solutions that create meaningful connections, drive growth, and exceed expectations in an ever-evolving digital landscape.</p>
                </div>
                <div class="corner-accent"></div>
            </div>
            
            <!-- Vision Box -->
            <div class="bento-box bento-box-medium bento-box-secondary" data-aos="fade-up" data-aos-delay="300">
                <div class="bento-icon">
                    <i class="fas fa-eye"></i>
                </div>
                <div class="bento-content">
                    <h3>Our Vision</h3>
                    <p>To be the catalyst for digital transformation, helping businesses harness technology to achieve their fullest potential.</p>
                </div>
                <div class="corner-accent"></div>
            </div>
            
            <!-- Core Values Boxes -->
            <div class="bento-box bento-box-small bento-box-value" data-aos="fade-up" data-aos-delay="400">
                <div class="bento-icon pulse-icon">
                    <i class="fas fa-award"></i>
                </div>
                <div class="bento-content">
                    <h4>Excellence</h4>
                    <p>Delivering nothing short of exceptional quality</p>
                </div>
            </div>
            
            <div class="bento-box bento-box-small bento-box-value" data-aos="fade-up" data-aos-delay="500">
                <div class="bento-icon pulse-icon">
                    <i class="fas fa-lightbulb"></i>
                </div>
                <div class="bento-content">
                    <h4>Innovation</h4>
                    <p>Embracing emerging technologies and creative approaches</p>
                </div>
            </div>
            
            <div class="bento-box bento-box-small bento-box-value" data-aos="fade-up" data-aos-delay="600">
                <div class="bento-icon pulse-icon">
                    <i class="fas fa-users"></i>
                </div>
                <div class="bento-content">
                    <h4>User-Centricity</h4>
                    <p>Placing end-users at the heart of every solution</p>
                </div>
            </div>
            
            <div class="bento-box bento-box-small bento-box-value" data-aos="fade-up" data-aos-delay="700">
                <div class="bento-icon pulse-icon">
                    <i class="fas fa-check-circle"></i>
                </div>
                <div class="bento-content">
                    <h4>Integrity</h4>
                    <p>Maintaining transparency and honesty in all interactions</p>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Services Section -->
<section id="services" class="section">
    <div class="container">
        <div class="section-title">
            <p class="section-subtitle">What We Offer</p>
            <h2>Our Services</h2>
        </div>
        
        <div class="services-container">
            <!-- UI/UX Design -->
            <div class="service-card service-card-design">
                <div class="service-icon">
                    <i class="fas fa-pencil-ruler"></i>
                </div>
                <div class="service-content">
                    <h3 class="service-title">UI/UX Design</h3>
                    <p>Transform user experiences with intuitive, engaging designs that drive conversions.</p>
                    <ul class="service-points">
                        <li>Design thinking approach</li>
                        <li>User-centric interfaces</li>
                        <li>Strategic craftsmanship</li>
                    </ul>
                </div>
            </div>
            
            <!-- Website Development -->
            <div class="service-card service-card-web">
                <div class="service-icon">
                    <i class="fas fa-laptop-code"></i>
                </div>
                <div class="service-content">
                    <h3 class="service-title">Website Development</h3>
                    <p>Build responsive, high-performance websites that showcase your brand.</p>
                    <ul class="service-points">
                        <li>Latest technologies</li>
                        <li>Responsive frameworks</li>
                        <li>Standout digital presence</li>
                    </ul>
                </div>
            </div>
            
            <!-- Web Applications -->
            <div class="service-card service-card-app">
                <div class="service-icon">
                    <i class="fas fa-cogs"></i>
                </div>
                <div class="service-content">
                    <h3 class="service-title">Web Applications</h3>
                    <p>Custom web applications designed to streamline operations and enhance productivity.</p>
                    <ul class="service-points">
                        <li>Scalable solutions</li>
                        <li>Secure architecture</li>
                        <li>Tailored requirements</li>
                    </ul>
                </div>
            </div>
            
            <!-- Mobile App Development -->
            <div class="service-card service-card-mobile">
                <div class="service-icon">
                    <i class="fas fa-mobile-alt"></i>
                </div>
                <div class="service-content">
                    <h3 class="service-title">Mobile App Development</h3>
                    <p>Native and cross-platform mobile applications that extend your reach.</p>
                    <ul class="service-points">
                        <li>iOS & Android platforms</li>
                        <li>Performance-focused</li>
                        <li>Engaging user experience</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</section>

<style>
    /* Enhanced Services Section Styles */
    #services {
        position: relative;
        padding: 120px 0 140px; /* Increased bottom padding for better balance */
        overflow: hidden;
    }
    
    #services .section-title {
        margin-bottom: 60px;
        text-align: center;
    }
    
    .services-container {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 30px;
        max-width: 1400px;
        margin: 0 auto;
        padding: 0 20px;
    }
    
    .service-card {
        flex: 1;
        min-width: 260px;
        max-width: 300px;
        display: flex;
        flex-direction: column;
    }
    
    @media screen and (max-width: 768px) {
        #services {
            padding: 90px 0 110px;
        }
        
        .services-container {
            gap: 20px;
        }
        
        .service-card {
            min-width: 100%;
        }
    }
</style>

<!-- Portfolio Section -->
<section id="portfolio" class="section">
    <div class="portfolio-background">
        <div class="portfolio-gradient-shapes">
            <div class="gradient-shape shape-1"></div>
            <div class="gradient-shape shape-2"></div>
            <div class="gradient-shape shape-3"></div>
        </div>
        <div class="portfolio-dots"></div>
    </div>
    <div class="container">
        <div class="section-title" data-aos="fade-up">
            <p class="section-subtitle">Our Work</p>
            <h2>Featured Projects</h2>
        </div>
        
        <div class="portfolio-list">
            <!-- Floating thumbnail that follows cursor -->
            <div class="cursor-thumbnail" id="cursor-thumbnail">
                <div class="thumbnail-inner">
                    <img src="" alt="" id="cursor-thumbnail-img">
                </div>
            </div>
            
            <!-- Project List -->
            <div class="project-list">
                <!-- Ayushya -->
                <div class="project-item" 
                     data-image="<?php echo IMAGES_PATH; ?>portfolio/ayushya.jpg" 
                     data-title="Ayushya">
                    <div class="project-header">
                        <h3 class="project-title">Ayushya</h3>
                        <span class="project-category">Healthcare Web Platform</span>
                        <div class="project-indicator"><span></span></div>
                    </div>
                    <div class="project-content">
                        <p class="project-description">
                            An Ayurvedic wellness platform providing personalized remedies based on traditional scriptures. 
                            Ayushya combines ancient Ayurvedic knowledge with modern AI to deliver tailored health recommendations 
                            for users based on their unique constitution and symptoms.
                        </p>
                        <div class="tech-stack">
                            <span class="tech-badge frontend">Next.js 15</span>
                            <span class="tech-badge frontend">React Server Components</span>
                            <span class="tech-badge frontend">Tailwind CSS</span>
                            <span class="tech-badge frontend">Shadcn UI</span>
                            <span class="tech-badge frontend">Framer Motion</span>
                            <span class="tech-badge backend">Node.js</span>
                            <span class="tech-badge backend">MongoDB</span>
                            <span class="tech-badge backend">Express</span>
                            <span class="tech-badge backend">TypeScript</span>
                            <span class="tech-badge ai">Google Gemini 1.5 Pro/Ultra</span>
                            <span class="tech-badge ai">OpenAI GPT models</span>
                            <span class="tech-badge other">Clerk Authentication</span>
                        </div>
                    </div>
                </div>
                
                <!-- QRQoder -->
                <div class="project-item" 
                     data-image="<?php echo IMAGES_PATH; ?>portfolio/qrqoder.jpg" 
                     data-title="QRQoder">
                    <div class="project-header">
                        <h3 class="project-title">QRQoder</h3>
                        <span class="project-category">QR Management System</span>
                        <div class="project-indicator"><span></span></div>
                    </div>
                    <div class="project-content">
                        <p class="project-description">
                            A comprehensive QR code generation and management system that allows businesses to create, 
                            customize, and track QR codes for various applications. QRQoder provides advanced analytics 
                            and seamless integration with marketing campaigns.
                        </p>
                        <div class="tech-stack">
                            <span class="tech-badge frontend">React.js</span>
                            <span class="tech-badge frontend">Material UI</span>
                            <span class="tech-badge frontend">Chart.js</span>
                            <span class="tech-badge backend">Node.js</span>
                            <span class="tech-badge backend">Express</span>
                            <span class="tech-badge backend">PostgreSQL</span>
                        </div>
                    </div>
                </div>
                
                <!-- Architects In India -->
                <div class="project-item" 
                     data-image="<?php echo IMAGES_PATH; ?>portfolio/architects.jpg" 
                     data-title="Architects In India">
                    <div class="project-header">
                        <h3 class="project-title">Architects In India</h3>
                        <span class="project-category">Architecture Portfolio Platform</span>
                        <div class="project-indicator"><span></span></div>
                    </div>
                    <div class="project-content">
                        <p class="project-description">
                            A digital platform connecting architects, clients, and architecture enthusiasts across India. 
                            This portfolio and networking platform showcases architectural projects, profiles, and design expertise 
                            with a focus on celebrating Indian architectural talent and heritage.
                        </p>
                        <div class="tech-stack">
                            <span class="tech-badge frontend">Next.js</span>
                            <span class="tech-badge frontend">React</span>
                            <span class="tech-badge frontend">Styled Components</span>
                            <span class="tech-badge frontend">Framer Motion</span>
                            <span class="tech-badge backend">Node.js</span>
                            <span class="tech-badge backend">MongoDB</span>
                            <span class="tech-badge backend">Express</span>
                        </div>
                    </div>
                </div>
                
                <!-- Oikos Consultants -->
                <div class="project-item" 
                     data-image="<?php echo IMAGES_PATH; ?>portfolio/oikos.jpg" 
                     data-title="Oikos Consultants">
                    <div class="project-header">
                        <h3 class="project-title">Oikos Consultants</h3>
                        <span class="project-category">Sustainable Architecture</span>
                        <div class="project-indicator"><span></span></div>
                    </div>
                    <div class="project-content">
                        <p class="project-description">
                            A specialized consultancy platform for sustainable architecture and ecological design services. 
                            Oikos Consultants provides integrated solutions for environmentally responsible building practices, 
                            focusing on minimizing environmental impact while maximizing comfort and functionality.
                        </p>
                        <div class="tech-stack">
                            <span class="tech-badge frontend">Vue.js</span>
                            <span class="tech-badge frontend">Tailwind CSS</span>
                            <span class="tech-badge frontend">Three.js</span>
                            <span class="tech-badge backend">Django</span>
                            <span class="tech-badge backend">PostgreSQL</span>
                            <span class="tech-badge backend">GraphQL</span>
                        </div>
                    </div>
                </div>
                
                <!-- JobCraft.in -->
                <div class="project-item" 
                     data-image="<?php echo IMAGES_PATH; ?>portfolio/jobcraft.jpg" 
                     data-title="JobCraft.in">
                    <div class="project-header">
                        <h3 class="project-title">JobCraft.in</h3>
                        <span class="project-category">Job Search Platform</span>
                        <div class="project-indicator"><span></span></div>
                    </div>
                    <div class="project-content">
                        <p class="project-description">
                            JobCraft is revolutionizing the Indian job search experience by providing smart, localized resume 
                            optimization and job matching services. Built specifically for the Indian market, it helps job seekers 
                            perfect their resumes for Applicant Tracking Systems (ATS) while considering local industry requirements and practices.
                        </p>
                        <div class="tech-stack">
                            <span class="tech-badge frontend">React.js</span>
                            <span class="tech-badge frontend">Material UI</span>
                            <span class="tech-badge frontend">Redux</span>
                            <span class="tech-badge backend">Node.js</span>
                            <span class="tech-badge backend">Express</span>
                            <span class="tech-badge backend">MongoDB</span>
                        </div>
                    </div>
                </div>
                
                <!-- Viberjobs.com -->
                <div class="project-item" 
                     data-image="<?php echo IMAGES_PATH; ?>portfolio/viberjobs.jpg" 
                     data-title="Viberjobs.com">
                    <div class="project-header">
                        <h3 class="project-title">Viberjobs.com</h3>
                        <span class="project-category">Recruitment Platform</span>
                        <div class="project-indicator"><span></span></div>
                    </div>
                    <div class="project-content">
                        <p class="project-description">
                            An innovative recruitment platform that streamlines the hiring process using AI-powered matching algorithms 
                            to connect qualified candidates with the right employers. Viberjobs.com reimagines traditional recruitment 
                            by focusing on candidate-to-job fit and simplified application processes.
                        </p>
                        <div class="tech-stack">
                            <span class="tech-badge frontend">Next.js</span>
                            <span class="tech-badge frontend">React</span>
                            <span class="tech-badge frontend">Tailwind CSS</span>
                            <span class="tech-badge frontend">Framer Motion</span>
                            <span class="tech-badge backend">Node.js</span>
                            <span class="tech-badge backend">Express</span>
                            <span class="tech-badge backend">PostgreSQL</span>
                            <span class="tech-badge ai">ML Algorithms</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Add the CSS styles for the enhanced portfolio section -->
<style>
    /* Portfolio Section Background and Ambience */
    #portfolio {
        position: relative;
        overflow: hidden;
        padding: 120px 0;
        z-index: 1;
        background-color: rgba(248, 250, 252, 0.8);
    }
    
    .portfolio-background {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: -1;
        overflow: hidden;
    }
    
    .portfolio-gradient-shapes {
        position: absolute;
        width: 100%;
        height: 100%;
        z-index: -1;
    }
    
    .gradient-shape {
        position: absolute;
        border-radius: 50%;
        filter: blur(80px);
        opacity: 0.5;
    }
    
    .shape-1 {
        background: linear-gradient(135deg, rgba(66, 99, 235, 0.5), rgba(87, 97, 235, 0.3));
        width: 400px;
        height: 400px;
        top: -100px;
        left: -100px;
        animation: float-slow 15s ease-in-out infinite alternate;
    }
    
    .shape-2 {
        background: linear-gradient(135deg, rgba(236, 64, 122, 0.4), rgba(216, 27, 96, 0.2));
        width: 500px;
        height: 500px;
        bottom: -150px;
        right: -150px;
        animation: float-slow 18s ease-in-out infinite alternate-reverse;
    }
    
    .shape-3 {
        background: linear-gradient(135deg, rgba(255, 193, 7, 0.3), rgba(255, 152, 0, 0.2));
        width: 300px;
        height: 300px;
        top: 40%;
        left: 15%;
        animation: float-slow 12s ease-in-out infinite alternate;
    }
    
    @keyframes float-slow {
        0% {
            transform: translate(0, 0) scale(1);
        }
        100% {
            transform: translate(20px, 20px) scale(1.05);
        }
    }
    
    .portfolio-dots {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-image: radial-gradient(circle, rgba(0, 0, 0, 0.05) 1px, transparent 1px);
        background-size: 20px 20px;
        opacity: 0.5;
    }
    
    /* Portfolio List Styling - Enhanced with Glassmorphism */
    .portfolio-list {
        position: relative;
        margin-top: 3rem;
        z-index: 2;
    }
    
    .project-list {
        position: relative;
        width: 100%;
        z-index: 1;
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
    }
    
    /* Project Item Glassmorphism - Enhanced */
    .project-item {
        width: 100%;
        background: rgba(255, 255, 255, 0.3);
        backdrop-filter: blur(16px);
        -webkit-backdrop-filter: blur(16px);
        border-radius: 20px;
        position: relative;
        cursor: pointer;
        border: 1px solid rgba(255, 255, 255, 0.5);
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
        transition: all 0.5s cubic-bezier(0.25, 0.8, 0.25, 1);
        overflow: hidden;
        transform-origin: center left;
    }
    
    .project-item:hover {
        transform: translateY(-5px) scale(1.01);
        box-shadow: 0 15px 40px rgba(0, 0, 0, 0.12);
        background: rgba(255, 255, 255, 0.4);
        border: 1px solid rgba(255, 255, 255, 0.65);
        z-index: 2;
    }
    
    /* Project Header - Always visible */
    .project-header {
        padding: 2rem 2.5rem;
        display: flex;
        align-items: center;
        gap: 1rem;
        position: relative;
        transition: all 0.3s ease;
    }
    
    .project-item:hover .project-header {
        padding-left: 3rem;
    }
    
    .project-title {
        margin: 0;
        font-size: 1.5rem;
        font-weight: 600;
        color: var(--text-color-dark, #111827);
        flex-grow: 1;
        position: relative;
        transition: all 0.4s ease;
    }
    
    .project-title::after {
        content: '';
        position: absolute;
        bottom: -5px;
        left: 0;
        width: 0;
        height: 2px;
        background: var(--primary-color, #ff5a3c);
        transition: width 0.5s cubic-bezier(0.25, 0.8, 0.25, 1);
    }
    
    .project-item:hover .project-title::after {
        width: 40px;
    }
    
    .project-category {
        font-size: 0.9rem;
        color: var(--text-muted, #6b7280);
        padding: 0.35rem 1rem;
        background-color: rgba(255, 255, 255, 0.4);
        backdrop-filter: blur(5px);
        -webkit-backdrop-filter: blur(5px);
        border-radius: 30px;
        border: 1px solid rgba(255, 255, 255, 0.4);
        white-space: nowrap;
        transition: all 0.4s ease;
    }
    
    .project-item:hover .project-category {
        background-color: rgba(255, 255, 255, 0.6);
        transform: translateY(-2px);
        box-shadow: 0 5px 10px rgba(0, 0, 0, 0.05);
    }
    
    .project-indicator {
        width: 24px;
        height: 24px;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        background: rgba(255, 255, 255, 0.3);
        border-radius: 50%;
        transition: all 0.4s ease;
    }
    
    .project-item:hover .project-indicator {
        background: rgba(var(--primary-color-rgb, 255, 90, 60), 0.15);
        transform: rotate(180deg);
    }
    
    .project-indicator span {
        position: relative;
        width: 12px;
        height: 2px;
        background-color: var(--primary-color, #ff5a3c);
        transition: transform 0.4s cubic-bezier(0.68, -0.6, 0.32, 1.6);
    }
    
    .project-indicator span::after {
        content: '';
        position: absolute;
        width: 12px;
        height: 2px;
        background-color: var(--primary-color, #ff5a3c);
        transform: rotate(90deg);
        transition: transform 0.4s cubic-bezier(0.68, -0.6, 0.32, 1.6);
    }
    
    .project-item.active .project-indicator span::after,
    .project-item:hover .project-indicator span::after {
        transform: rotate(0);
    }
    
    /* Project Content - Expandable area with enhanced glassmorphism */
    .project-content {
        max-height: 0;
        overflow: hidden;
        padding: 0 2.5rem;
        opacity: 0;
        background: rgba(255, 255, 255, 0.1);
        transition: max-height 0.6s cubic-bezier(0.4, 0, 0.2, 1), 
                    opacity 0.5s ease, 
                    padding 0.5s ease,
                    background 0.4s ease;
    }
    
    .project-item.active .project-content,
    .project-item:hover .project-content {
        max-height: 800px;
        opacity: 1;
        padding: 0 2.5rem 2.5rem 3rem;
        background: rgba(255, 255, 255, 0.15);
    }
    
    .project-description {
        margin-bottom: 1.75rem;
        line-height: 1.7;
        color: var(--text-color, #374151);
        position: relative;
        transform: translateY(10px);
        opacity: 0;
        transition: transform 0.6s ease, opacity 0.6s ease;
        transition-delay: 0.1s;
    }
    
    .project-item:hover .project-description {
        transform: translateY(0);
        opacity: 1;
    }
    
    /* Tech Stack Badges with enhanced glass effect */
    .tech-stack {
        display: flex;
        flex-wrap: wrap;
        gap: 0.75rem;
        margin-bottom: 0;
        transform: translateY(15px);
        opacity: 0;
        transition: transform 0.6s ease, opacity 0.6s ease;
        transition-delay: 0.2s;
    }
    
    .project-item:hover .tech-stack {
        transform: translateY(0);
        opacity: 1;
    }
    
    .tech-badge {
        display: inline-block;
        padding: 0.35rem 0.85rem;
        border-radius: 30px;
        font-size: 0.85rem;
        font-weight: 500;
        color: white;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        backdrop-filter: blur(5px);
        -webkit-backdrop-filter: blur(5px);
        border: 1px solid rgba(255, 255, 255, 0.2);
    }
    
    .tech-badge:hover {
        transform: translateY(-2px) scale(1.05);
        box-shadow: 0 6px 15px rgba(0, 0, 0, 0.15);
    }
    
    .tech-badge.frontend {
        background: linear-gradient(135deg, rgba(59, 130, 246, 0.9), rgba(37, 99, 235, 0.9));
    }
    
    .tech-badge.backend {
        background: linear-gradient(135deg, rgba(16, 185, 129, 0.9), rgba(5, 150, 105, 0.9));
    }
    
    .tech-badge.ai {
        background: linear-gradient(135deg, rgba(139, 92, 246, 0.9), rgba(124, 58, 237, 0.9));
    }
    
    .tech-badge.other {
        background: linear-gradient(135deg, rgba(245, 158, 11, 0.9), rgba(217, 119, 6, 0.9));
    }
    
    /* Cursor Thumbnail with improved positioning and animation */
    .cursor-thumbnail {
        position: fixed;
        width: 280px;
        height: 175px;
        pointer-events: none;
        z-index: 100;
        transform: translate(20px, -50%) scale(0) rotate(-5deg);
        transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.3s ease;
        opacity: 0;
        border-radius: 16px;
        overflow: hidden;
        box-shadow: 0 20px 40px rgba(0, 0, 0, 0.25);
        border: 1px solid rgba(255, 255, 255, 0.4);
    }
    
    .cursor-thumbnail.visible {
        opacity: 1;
        transform: translate(20px, -50%) scale(1) rotate(0deg);
    }
    
    .thumbnail-inner {
        width: 100%;
        height: 100%;
        overflow: hidden;
        border-radius: 14px;
        background-color: #f8f9fa;
        position: relative;
    }
    
    .thumbnail-inner::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(135deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0) 100%);
        pointer-events: none;
    }
    
    .cursor-thumbnail img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 0.6s ease, opacity 0.4s ease;
    }
    
    .cursor-thumbnail.visible:hover img {
        transform: scale(1.05);
    }
    
    /* Responsive Adjustments */
    @media screen and (max-width: 992px) {
        #portfolio {
            padding: 80px 0;
        }
        
        .gradient-shape {
            filter: blur(60px);
        }
        
        .shape-1 {
            width: 300px;
            height: 300px;
        }
        
        .shape-2 {
            width: 350px;
            height: 350px;
        }
    }
    
    @media screen and (max-width: 768px) {
        .project-header {
            flex-direction: column;
            align-items: flex-start;
            padding: 1.5rem 1.75rem;
        }
        
        .project-item:hover .project-header {
            padding-left: 1.75rem;
        }
        
        .project-category {
            margin-top: 0.75rem;
        }
        
        .project-indicator {
            position: absolute;
            right: 1.5rem;
            top: 1.5rem;
        }
        
        .project-content {
            padding: 0 1.75rem;
        }
        
        .project-item.active .project-content,
        .project-item:hover .project-content {
            padding: 0 1.75rem 1.75rem;
        }
        
        .tech-stack {
            overflow-x: auto;
            padding-bottom: 0.5rem;
            flex-wrap: nowrap;
            scrollbar-width: thin;
        }
        
        .cursor-thumbnail {
            display: none; /* Disable on mobile/touch devices */
        }
        
        .gradient-shape {
            filter: blur(40px);
        }
    }
</style>

<!-- JavaScript for Portfolio Interaction -->
<script>
document.addEventListener('DOMContentLoaded', function() {
    // Elements
    const projectItems = document.querySelectorAll('.project-item');
    const cursorThumbnail = document.getElementById('cursor-thumbnail');
    const cursorThumbnailImg = document.getElementById('cursor-thumbnail-img');
    const portfolioList = document.querySelector('.portfolio-list');
    const portfolioSection = document.getElementById('portfolio');
    
    let currentProject = null;
    let isInsidePortfolio = false;
    let lastX = 0;
    let lastY = 0;
    let animationFrameId = null;
    
    // Add hover event listeners to projects
    projectItems.forEach(project => {
        // Mouseover event for thumbnail
        project.addEventListener('mouseover', function() {
            currentProject = this;
            
            // Set the thumbnail image
            const imageUrl = this.getAttribute('data-image');
            const imageTitle = this.getAttribute('data-title');
            
            if (cursorThumbnailImg.src !== imageUrl) {
                cursorThumbnailImg.style.opacity = 0;
                
                setTimeout(() => {
                    cursorThumbnailImg.src = imageUrl;
                    cursorThumbnailImg.alt = imageTitle;
                    cursorThumbnailImg.style.opacity = 1;
                }, 200);
            } else {
                cursorThumbnailImg.style.opacity = 1;
            }
            
            // Show the thumbnail if we're in the portfolio section
            if (isInsidePortfolio) {
                cursorThumbnail.classList.add('visible');
            }
        });
        
        // Mouse leave event
        project.addEventListener('mouseleave', function() {
            if (!isInsidePortfolio) {
                cursorThumbnail.classList.remove('visible');
            }
        });
    });
    
    // Mouse enter/leave for portfolio section
    portfolioList.addEventListener('mouseenter', function() {
        isInsidePortfolio = true;
        if (currentProject) {
            cursorThumbnail.classList.add('visible');
        }
    });
    
    portfolioList.addEventListener('mouseleave', function() {
        isInsidePortfolio = false;
        cursorThumbnail.classList.remove('visible');
        
        // Cancel any ongoing animation
        if (animationFrameId) {
            cancelAnimationFrame(animationFrameId);
            animationFrameId = null;
        }
    });
    
    // Smooth animation function using requestAnimationFrame
    function animateThumbnail(targetX, targetY) {
        // Cancel any ongoing animation
        if (animationFrameId) {
            cancelAnimationFrame(animationFrameId);
        }
        
        function animate() {
            // Smooth interpolation with easing
            lastX = lastX + (targetX - lastX) * 0.15;
            lastY = lastY + (targetY - lastY) * 0.15;
            
            // Apply position
            cursorThumbnail.style.left = lastX + 'px';
            cursorThumbnail.style.top = lastY + 'px';
            
            // Continue animation if still moving significantly
            if (Math.abs(targetX - lastX) > 0.5 || Math.abs(targetY - lastY) > 0.5) {
                animationFrameId = requestAnimationFrame(animate);
            } else {
                animationFrameId = null;
            }
        }
        
        // Start animation
        animationFrameId = requestAnimationFrame(animate);
    }
    
    // Track mouse movement to update thumbnail position with smooth interpolation
    portfolioList.addEventListener('mousemove', function(e) {
        if (!isInsidePortfolio) return;
        
        // Get portfolio section bounds
        const portfolioBounds = portfolioSection.getBoundingClientRect();
        
        // Calculate thumbnail position - always to the right of cursor by default
        let x = e.clientX + 30; // Position to the right of cursor with more offset
        let y = e.clientY;
        
        // Get thumbnail dimensions
        const thumbnailWidth = cursorThumbnail.offsetWidth;
        const thumbnailHeight = cursorThumbnail.offsetHeight;
        
        // Ensure the thumbnail stays within the viewport bounds
        if (x + thumbnailWidth > window.innerWidth - 20) {
            // If it would go beyond right edge, position it to the left of cursor instead
            x = e.clientX - thumbnailWidth - 30;
        }
        
        // Ensure it stays within vertical bounds
        if (y - (thumbnailHeight / 2) < portfolioBounds.top) {
            y = portfolioBounds.top + (thumbnailHeight / 2);
        } else if (y + (thumbnailHeight / 2) > portfolioBounds.bottom) {
            y = portfolioBounds.bottom - (thumbnailHeight / 2);
        }
        
        // Animate the thumbnail to the new position
        animateThumbnail(x, y);
    });
    
    // Touch devices - fix hover issue
    if ('ontouchstart' in window || navigator.maxTouchPoints) {
        // Add special handling for touch devices
        cursorThumbnail.style.display = 'none';
        
        // For touch devices, make projects toggle on click
        projectItems.forEach(project => {
            project.style.cursor = 'pointer';
            project.addEventListener('click', function() {
                // Close any previously active project
                projectItems.forEach(item => {
                    if (item !== this && item.classList.contains('active')) {
                        item.classList.remove('active');
                    }
                });
                
                // Toggle the current project
                this.classList.toggle('active');
            });
        });
    }
    
    // Add parallax effect to background shapes
    document.addEventListener('mousemove', function(e) {
        const shapes = document.querySelectorAll('.gradient-shape');
        const strength = 0.02; // The strength of the parallax effect
        
        const windowWidth = window.innerWidth;
        const windowHeight = window.innerHeight;
        
        // Calculate mouse position as a percentage
        const mouseXPercent = (e.clientX / windowWidth) - 0.5;
        const mouseYPercent = (e.clientY / windowHeight) - 0.5;
        
        shapes.forEach((shape, index) => {
            // Create different parallax strength for each shape
            const factor = (index + 1) * strength;
            
            // Apply transform with smooth transition
            shape.style.transform = `translate(${mouseXPercent * factor * 100}px, ${mouseYPercent * factor * 100}px)`;
        });
    });
});
</script>

<!-- Technologies Section -->
<section id="technologies" class="section tech-showcase">
    <div class="container">
        <div class="section-title text-center">
            <p class="section-subtitle">Our Tools</p>
            <h2>Technologies We Use</h2>
            <div class="title-separator"><span></span></div>
            <p class="section-description">We leverage the latest and most powerful technologies to deliver exceptional digital solutions</p>
        </div>
        
        <div class="tech-slider-container">
            <div class="tech-slider">
                <div class="tech-track">
                    <!-- Track 1 - First copy of logos -->
                    <div class="tech-slide">
                        <img src="<?php echo IMAGES_PATH; ?>tech-logos/html-logo.png" alt="HTML" class="tech-logo">
                    </div>
                    <div class="tech-slide">
                        <img src="<?php echo IMAGES_PATH; ?>tech-logos/javascript-logo.png" alt="JavaScript" class="tech-logo">
                    </div>
                    <div class="tech-slide">
                        <img src="<?php echo IMAGES_PATH; ?>tech-logos/react-logo-svgrepo-com.svg" alt="React" class="tech-logo">
                    </div>
                    <div class="tech-slide">
                        <img src="<?php echo IMAGES_PATH; ?>tech-logos/angular-logo.png" alt="Angular" class="tech-logo">
                    </div>
                    <div class="tech-slide">
                        <img src="<?php echo IMAGES_PATH; ?>tech-logos/vue-logo.png" alt="Vue.js" class="tech-logo">
                    </div>
                    <div class="tech-slide">
                        <img src="<?php echo IMAGES_PATH; ?>tech-logos/bootstrap-logo.png" alt="Bootstrap" class="tech-logo">
                    </div>
                    <div class="tech-slide">
                        <img src="<?php echo IMAGES_PATH; ?>tech-logos/nodejs-logo.png" alt="Node.js" class="tech-logo">
                    </div>
                    <div class="tech-slide">
                        <img src="<?php echo IMAGES_PATH; ?>tech-logos/php-logo.png" alt="PHP" class="tech-logo">
                    </div>
                    <div class="tech-slide">
                        <img src="<?php echo IMAGES_PATH; ?>tech-logos/python-logo.png" alt="Python" class="tech-logo">
                    </div>
                    <div class="tech-slide">
                        <img src="<?php echo IMAGES_PATH; ?>tech-logos/mongodb-logo.png" alt="MongoDB" class="tech-logo">
                    </div>
                    <div class="tech-slide">
                        <img src="<?php echo IMAGES_PATH; ?>tech-logos/mysql-logo.png" alt="MySQL" class="tech-logo">
                    </div>
                    <div class="tech-slide">
                        <img src="<?php echo IMAGES_PATH; ?>tech-logos/postgresql-logo.png" alt="PostgreSQL" class="tech-logo">
                    </div>
                    <div class="tech-slide">
                        <img src="<?php echo IMAGES_PATH; ?>tech-logos/redis-logo.png" alt="Redis" class="tech-logo">
                    </div>
                    <div class="tech-slide">
                        <img src="<?php echo IMAGES_PATH; ?>tech-logos/firebase-logo.png" alt="Firebase" class="tech-logo">
                    </div>
                    <div class="tech-slide">
                        <img src="<?php echo IMAGES_PATH; ?>tech-logos/supabase-logo.png" alt="Supabase" class="tech-logo">
                    </div>
                    <div class="tech-slide">
                        <img src="<?php echo IMAGES_PATH; ?>tech-logos/aws-logo.png" alt="AWS" class="tech-logo">
                    </div>
                    <div class="tech-slide">
                        <img src="<?php echo IMAGES_PATH; ?>tech-logos/dynamo-logo.png" alt="DynamoDB" class="tech-logo">
                    </div>
                    <div class="tech-slide">
                        <img src="<?php echo IMAGES_PATH; ?>tech-logos/googlecloud-logo.png" alt="Google Cloud" class="tech-logo">
                    </div>
                    <div class="tech-slide">
                        <img src="<?php echo IMAGES_PATH; ?>tech-logos/azure-logo.png" alt="Microsoft Azure" class="tech-logo">
                    </div>
                    <div class="tech-slide">
                        <img src="<?php echo IMAGES_PATH; ?>tech-logos/figma-logo.png" alt="Figma" class="tech-logo">
                    </div>
                    <div class="tech-slide">
                        <img src="<?php echo IMAGES_PATH; ?>tech-logos/adobe-xd-1-logo-svgrepo-com.svg" alt="Adobe XD" class="tech-logo">
                    </div>
                    <div class="tech-slide">
                        <img src="<?php echo IMAGES_PATH; ?>tech-logos/adobeill-logo.png" alt="Adobe Illustrator" class="tech-logo">
                    </div>
                    <div class="tech-slide">
                        <img src="<?php echo IMAGES_PATH; ?>tech-logos/framer-logo.png" alt="Framer" class="tech-logo">
                    </div>
                    <div class="tech-slide">
                        <img src="<?php echo IMAGES_PATH; ?>tech-logos/android-logo-svgrepo-com.svg" alt="Android" class="tech-logo">
                    </div>
                    
                    <!-- Track 2 - Duplicate copy for continuous loop -->
                    <div class="tech-slide">
                        <img src="<?php echo IMAGES_PATH; ?>tech-logos/html-logo.png" alt="HTML" class="tech-logo">
                    </div>
                    <div class="tech-slide">
                        <img src="<?php echo IMAGES_PATH; ?>tech-logos/javascript-logo.png" alt="JavaScript" class="tech-logo">
                    </div>
                    <div class="tech-slide">
                        <img src="<?php echo IMAGES_PATH; ?>tech-logos/react-logo-svgrepo-com.svg" alt="React" class="tech-logo">
                    </div>
                    <div class="tech-slide">
                        <img src="<?php echo IMAGES_PATH; ?>tech-logos/angular-logo.png" alt="Angular" class="tech-logo">
                    </div>
                    <div class="tech-slide">
                        <img src="<?php echo IMAGES_PATH; ?>tech-logos/vue-logo.png" alt="Vue.js" class="tech-logo">
                    </div>
                    <div class="tech-slide">
                        <img src="<?php echo IMAGES_PATH; ?>tech-logos/bootstrap-logo.png" alt="Bootstrap" class="tech-logo">
                    </div>
                    <div class="tech-slide">
                        <img src="<?php echo IMAGES_PATH; ?>tech-logos/nodejs-logo.png" alt="Node.js" class="tech-logo">
                    </div>
                    <div class="tech-slide">
                        <img src="<?php echo IMAGES_PATH; ?>tech-logos/php-logo.png" alt="PHP" class="tech-logo">
                    </div>
                    <div class="tech-slide">
                        <img src="<?php echo IMAGES_PATH; ?>tech-logos/python-logo.png" alt="Python" class="tech-logo">
                    </div>
                    <div class="tech-slide">
                        <img src="<?php echo IMAGES_PATH; ?>tech-logos/mongodb-logo.png" alt="MongoDB" class="tech-logo">
                    </div>
                    <div class="tech-slide">
                        <img src="<?php echo IMAGES_PATH; ?>tech-logos/mysql-logo.png" alt="MySQL" class="tech-logo">
                    </div>
                    <div class="tech-slide">
                        <img src="<?php echo IMAGES_PATH; ?>tech-logos/postgresql-logo.png" alt="PostgreSQL" class="tech-logo">
                    </div>
                    <div class="tech-slide">
                        <img src="<?php echo IMAGES_PATH; ?>tech-logos/redis-logo.png" alt="Redis" class="tech-logo">
                    </div>
                    <div class="tech-slide">
                        <img src="<?php echo IMAGES_PATH; ?>tech-logos/firebase-logo.png" alt="Firebase" class="tech-logo">
                    </div>
                    <div class="tech-slide">
                        <img src="<?php echo IMAGES_PATH; ?>tech-logos/supabase-logo.png" alt="Supabase" class="tech-logo">
                    </div>
                    <div class="tech-slide">
                        <img src="<?php echo IMAGES_PATH; ?>tech-logos/aws-logo.png" alt="AWS" class="tech-logo">
                    </div>
                    <div class="tech-slide">
                        <img src="<?php echo IMAGES_PATH; ?>tech-logos/dynamo-logo.png" alt="DynamoDB" class="tech-logo">
                    </div>
                    <div class="tech-slide">
                        <img src="<?php echo IMAGES_PATH; ?>tech-logos/googlecloud-logo.png" alt="Google Cloud" class="tech-logo">
                    </div>
                    <div class="tech-slide">
                        <img src="<?php echo IMAGES_PATH; ?>tech-logos/azure-logo.png" alt="Microsoft Azure" class="tech-logo">
                    </div>
                    <div class="tech-slide">
                        <img src="<?php echo IMAGES_PATH; ?>tech-logos/figma-logo.png" alt="Figma" class="tech-logo">
                    </div>
                    <div class="tech-slide">
                        <img src="<?php echo IMAGES_PATH; ?>tech-logos/adobe-xd-1-logo-svgrepo-com.svg" alt="Adobe XD" class="tech-logo">
                    </div>
                    <div class="tech-slide">
                        <img src="<?php echo IMAGES_PATH; ?>tech-logos/adobeill-logo.png" alt="Adobe Illustrator" class="tech-logo">
                    </div>
                    <div class="tech-slide">
                        <img src="<?php echo IMAGES_PATH; ?>tech-logos/framer-logo.png" alt="Framer" class="tech-logo">
                    </div>
                    <div class="tech-slide">
                        <img src="<?php echo IMAGES_PATH; ?>tech-logos/android-logo-svgrepo-com.svg" alt="Android" class="tech-logo">
                    </div>
                </div>
            </div>
            
            <div class="tech-slider-overlay left"></div>
            <div class="tech-slider-overlay right"></div>
        </div>
    </div>
</section>

<!-- Add styles for the technology slider -->
<style>
    /* Technology Showcase Section */
    .tech-showcase {
        background-color: #f8fafc;
        padding: 90px 0;
        position: relative;
        overflow: hidden;
    }
    
    .tech-showcase::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 150px;
        background: linear-gradient(180deg, white, transparent);
        z-index: 1;
        pointer-events: none;
    }
    
    .tech-showcase::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        height: 150px;
        background: linear-gradient(0deg, white, transparent);
        z-index: 1;
        pointer-events: none;
    }
    
    .tech-showcase .section-title {
        margin-bottom: 50px;
        position: relative;
        z-index: 2;
    }
    
    .title-separator {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 18px auto;
        height: 2px;
        width: 80px;
    }
    
    .title-separator span {
        height: 100%;
        width: 100%;
        background: linear-gradient(90deg, transparent, var(--primary-color, #FF4B24), transparent);
        display: block;
    }
    
    /* Tech Slider Container */
    .tech-slider-container {
        position: relative;
        width: 100%;
        padding: 15px 0;
        margin: 30px 0;
        overflow: hidden;
    }
    
    /* Tech Slider */
    .tech-slider {
        position: relative;
        width: 100%;
        overflow: hidden;
    }
    
    /* Tech Track - Holds all slides in a continuous track */
    .tech-track {
        display: flex;
        align-items: center;
        width: fit-content;
        animation: slideTrack 70s linear infinite;
    }
    
    /* Pause animation on hover */
    .tech-track:hover {
        animation-play-state: paused;
    }
    
    /* Each slide containing a logo */
    .tech-slide {
        flex-shrink: 0;
        width: 150px;
        height: 90px;
        margin: 0 15px;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: transform 0.3s cubic-bezier(0.25, 0.8, 0.25, 1), filter 0.3s ease;
        position: relative;
    }
    
    .tech-slide:hover {
        transform: translateY(-5px) scale(1.05);
        z-index: 3;
    }
    
    /* Tech Logo */
    .tech-logo {
        max-width: 100%;
        max-height: 65px;
        object-fit: contain;
        filter: grayscale(100%) opacity(0.7);
        transition: filter 0.3s cubic-bezier(0.25, 0.8, 0.25, 1), transform 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
        will-change: transform, filter;
    }
    
    .tech-slide:hover .tech-logo {
        filter: grayscale(0%) opacity(1);
        transform: scale(1.08);
    }
    
    /* Slider gradient overlays for fade effect on the sides */
    .tech-slider-overlay {
        position: absolute;
        top: 0;
        bottom: 0;
        width: 120px;
        z-index: 2;
        pointer-events: none;
    }
    
    .tech-slider-overlay.left {
        left: 0;
        background: linear-gradient(90deg, #f8fafc 0%, rgba(248, 250, 252, 0) 100%);
    }
    
    .tech-slider-overlay.right {
        right: 0;
        background: linear-gradient(270deg, #f8fafc 0%, rgba(248, 250, 252, 0) 100%);
    }
    
    /* Keyframes for sliding animation */
    @keyframes slideTrack {
        0% {
            transform: translateX(0);
        }
        100% {
            transform: translateX(calc(-150px * 24 - 15px * 24)); /* Width of one set of slides */
        }
    }
    
    /* Responsive adjustments */
    @media screen and (max-width: 992px) {
        .tech-slide {
            width: 140px;
            margin: 0 12px;
        }
        
        .tech-logo {
            max-height: 55px;
        }
        
        @keyframes slideTrack {
            0% {
                transform: translateX(0);
            }
            100% {
                transform: translateX(calc(-140px * 24 - 12px * 24));
            }
        }
    }
    
    @media screen and (max-width: 768px) {
        .tech-showcase {
            padding: 60px 0;
        }
        
        .tech-slide {
            width: 120px;
            margin: 0 10px;
        }
        
        .tech-logo {
            max-height: 45px;
        }
        
        .tech-slider-overlay {
            width: 80px;
        }
        
        @keyframes slideTrack {
            0% {
                transform: translateX(0);
            }
            100% {
                transform: translateX(calc(-120px * 24 - 10px * 24));
            }
        }
    }
    
    @media screen and (max-width: 576px) {
        .tech-slide {
            width: 100px;
            margin: 0 8px;
        }
        
        .tech-logo {
            max-height: 38px;
        }
        
        .tech-slider-overlay {
            width: 60px;
        }
        
        @keyframes slideTrack {
            0% {
                transform: translateX(0);
            }
            100% {
                transform: translateX(calc(-100px * 24 - 8px * 24));
            }
        }
    }
</style>

<!-- Testimonials Section -->
<section id="testimonials" class="section">
    <div class="testimonials-background">
        <div class="testimonial-shapes">
            <div class="testimonial-shape shape-1"></div>
            <div class="testimonial-shape shape-2"></div>
            <div class="testimonial-shape shape-3"></div>
        </div>
        <div class="testimonial-dots"></div>
    </div>
    <div class="container">
        <div class="section-title" data-aos="fade-up">
            <p class="section-subtitle">Client Feedback</p>
            <h2>What Our Clients Say</h2>
        </div>
        
        <div class="bento-testimonials">
            <!-- Main Featured Testimonial -->
            <div class="bento-testimonial bento-testimonial-large">
                <div class="testimonial-content">
                    <div class="quote-icon"><i class="fas fa-quote-left"></i></div>
                    <p>"Working with Webart4U transformed our digital presence completely. Their team delivered a sophisticated e-commerce platform that increased our conversion rate by 45% in just three months. What impressed us most was their attentiveness to our business needs and the innovative solutions they brought to the table."</p>
                </div>
                <div class="testimonial-author">
                    <img src="<?php echo IMAGES_PATH; ?>testimonials/james-wilson.jpg" alt="James Wilson" class="author-image">
                    <div class="author-info">
                        <h4>James Wilson</h4>
                        <p class="author-position">CTO at Brightfield Retail, UK</p>
                        <div class="author-rating">
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                        </div>
                    </div>
                </div>
                <div class="corner-accent"></div>
            </div>
            
            <!-- Medium Testimonials -->
            <div class="bento-testimonial bento-testimonial-medium">
                <div class="testimonial-content">
                    <div class="quote-icon"><i class="fas fa-quote-left"></i></div>
                    <p>"Webart4U delivered our healthcare platform on time and within budget. Their understanding of UX in the healthcare space is exceptional. Patient engagement is up 60% since launch."</p>
                </div>
                <div class="testimonial-author">
                    <img src="<?php echo IMAGES_PATH; ?>testimonials/sophia-mueller.jpg" alt="Sophia Mueller" class="author-image">
                    <div class="author-info">
                        <h4>Sophia Mueller</h4>
                        <p class="author-position">Director, MedTech GmbH, Germany</p>
                        <div class="author-rating">
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                        </div>
                    </div>
                </div>
                <div class="corner-accent"></div>
            </div>
            
            <div class="bento-testimonial bento-testimonial-medium">
                <div class="testimonial-content">
                    <div class="quote-icon"><i class="fas fa-quote-left"></i></div>
                    <p>"From concept to execution, the Webart4U team exceeded our expectations. Their mobile app design not only looks beautiful but has significantly improved our customer engagement metrics."</p>
                </div>
                <div class="testimonial-author">
                    <img src="<?php echo IMAGES_PATH; ?>testimonials/michael-brooks.jpg" alt="Michael Brooks" class="author-image">
                    <div class="author-info">
                        <h4>Michael Brooks</h4>
                        <p class="author-position">Founder, InnovateTech, USA</p>
                        <div class="author-rating">
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star-half-alt"></i>
                        </div>
                    </div>
                </div>
                <div class="corner-accent"></div>
            </div>
            
            <!-- Small Testimonials -->
            <div class="bento-testimonial bento-testimonial-small">
                <div class="testimonial-content">
                    <div class="quote-icon"><i class="fas fa-quote-left"></i></div>
                    <p>"Exceptional UI/UX work that truly understands user psychology. Worth every penny!"</p>
                </div>
                <div class="testimonial-author-compact">
                    <img src="<?php echo IMAGES_PATH; ?>testimonials/emma-davies.jpg" alt="Emma Davies" class="author-image-small">
                    <div class="author-info-compact">
                        <h5>Emma Davies</h5>
                        <p>UX Lead, TechForward, UK</p>
                    </div>
                </div>
            </div>
            
            <div class="bento-testimonial bento-testimonial-small">
                <div class="testimonial-content">
                    <div class="quote-icon"><i class="fas fa-quote-left"></i></div>
                    <p>"Their team's technical prowess and creative approach make them stand out in the industry."</p>
                </div>
                <div class="testimonial-author-compact">
                    <img src="<?php echo IMAGES_PATH; ?>testimonials/pierre-dubois.jpg" alt="Pierre Dubois" class="author-image-small">
                    <div class="author-info-compact">
                        <h5>Pierre Dubois</h5>
                        <p>CEO, CreativeVision, France</p>
                    </div>
                </div>
            </div>
            
            <div class="bento-testimonial bento-testimonial-small bento-testimonial-highlight">
                <div class="testimonial-stat">
                    <div class="stat-number large-stat">365<span class="stat-plus">+</span></div>
                    <div class="stat-label">Projects Completed</div>
                    <div class="stat-icon"><i class="fas fa-rocket"></i></div>
                </div>
            </div>
            
            <div class="bento-testimonial bento-testimonial-small">
                <div class="testimonial-content">
                    <div class="quote-icon"><i class="fas fa-quote-left"></i></div>
                    <p>"Their attention to detail and strategic approach to e-commerce transformed our online business."</p>
                </div>
                <div class="testimonial-author-compact">
                    <img src="<?php echo IMAGES_PATH; ?>testimonials/elena-rossi.jpg" alt="Elena Rossi" class="author-image-small">
                    <div class="author-info-compact">
                        <h5>Elena Rossi</h5>
                        <p>Marketing Director, Milano Style, Italy</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Add the CSS styles for the enhanced testimonials section with bento box design -->
<style>
    /* Testimonials Section - Bento Box Design */
    #testimonials {
        position: relative;
        overflow: hidden;
        padding: 100px 0;
        z-index: 1;
        background-color: #f8fafc;
    }
    
    .testimonials-background {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: -1;
        overflow: hidden;
    }
    
    .testimonial-shapes {
        position: absolute;
        width: 100%;
        height: 100%;
        z-index: -1;
    }
    
    .testimonial-shape {
        position: absolute;
        border-radius: 50%;
        filter: blur(70px);
        opacity: 0.5;
    }
    
    .testimonial-shape.shape-1 {
        background: linear-gradient(135deg, rgba(78, 152, 237, 0.4), rgba(55, 125, 200, 0.2));
        width: 350px;
        height: 350px;
        top: -100px;
        right: -100px;
        animation: float-shape 15s ease-in-out infinite alternate;
    }
    
    .testimonial-shape.shape-2 {
        background: linear-gradient(135deg, rgba(255, 89, 60, 0.3), rgba(230, 65, 36, 0.1));
        width: 400px;
        height: 400px;
        bottom: -150px;
        left: -150px;
        animation: float-shape 18s ease-in-out infinite alternate-reverse;
    }
    
    .testimonial-shape.shape-3 {
        background: linear-gradient(135deg, rgba(104, 58, 183, 0.3), rgba(76, 39, 134, 0.1));
        width: 300px;
        height: 300px;
        top: 30%;
        left: 20%;
        animation: float-shape 12s ease-in-out infinite alternate;
    }
    
    @keyframes float-shape {
        0% {
            transform: translate(0, 0) scale(1);
        }
        100% {
            transform: translate(20px, 20px) scale(1.1);
        }
    }
    
    .testimonial-dots {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-image: radial-gradient(circle, rgba(0, 0, 0, 0.04) 1px, transparent 1px);
        background-size: 25px 25px;
        opacity: 0.6;
    }
    
    /* Bento Testimonials Grid */
    .bento-testimonials {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-auto-rows: minmax(min-content, max-content);
        gap: 1.5rem;
        margin-top: 3rem;
    }
    
    /* Bento Testimonial Boxes */
    .bento-testimonial {
        background: rgba(255, 255, 255, 0.8);
        backdrop-filter: blur(10px);
        -webkit-backdrop-filter: blur(10px);
        border-radius: 20px;
        box-shadow: 0 8px 32px rgba(0, 0, 0, 0.05);
        padding: 2rem;
        display: flex;
        flex-direction: column;
        position: relative;
        transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
        border: 1px solid rgba(255, 255, 255, 0.5);
        transform: translateY(0);
        overflow: hidden;
    }
    
    .bento-testimonial:hover {
        transform: translateY(-5px);
        box-shadow: 0 15px 40px rgba(0, 0, 0, 0.1);
        z-index: 2;
    }
    
    /* Testimonial Box Sizes */
    .bento-testimonial-large {
        grid-column: span 2;
        grid-row: span 2;
    }
    
    .bento-testimonial-medium {
        grid-column: span 2;
        grid-row: span 1;
    }
    
    .bento-testimonial-small {
        grid-column: span 1;
        grid-row: span 1;
    }
    
    /* Testimonial Content */
    .testimonial-content {
        position: relative;
        flex-grow: 1;
    }
    
    .bento-testimonial-large .testimonial-content {
        margin-bottom: 1.5rem;
    }
    
    .quote-icon {
        position: absolute;
        top: -1rem;
        left: -0.5rem;
        color: var(--primary-color, #ff5a3c);
        font-size: 1.5rem;
        opacity: 0.7;
        transition: all 0.3s ease;
    }
    
    .bento-testimonial:hover .quote-icon {
        transform: translateY(-3px) rotate(-10deg);
    }
    
    .testimonial-content p {
        font-size: 1rem;
        line-height: 1.7;
        color: var(--text-color-dark, #111827);
        margin: 0.5rem 0 0;
        font-style: italic;
    }
    
    .bento-testimonial-large .testimonial-content p {
        font-size: 1.1rem;
    }
    
    .bento-testimonial-small .testimonial-content p {
        font-size: 0.9rem;
    }
    
    /* Testimonial Author */
    .testimonial-author {
        display: flex;
        align-items: center;
        gap: 1rem;
        padding-top: 1rem;
        border-top: 1px solid rgba(0, 0, 0, 0.05);
    }
    
    .author-image {
        width: 60px;
        height: 60px;
        border-radius: 50%;
        object-fit: cover;
        border: 2px solid white;
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
        transition: transform 0.4s ease;
    }
    
    .bento-testimonial:hover .author-image {
        transform: scale(1.1);
    }
    
    .author-info {
        flex: 1;
    }
    
    .author-info h4 {
        font-size: 1.1rem;
        font-weight: 600;
        margin: 0 0 0.25rem;
        color: var(--text-color-dark, #111827);
    }
    
    .author-position {
        font-size: 0.85rem;
        color: var(--text-muted, #6b7280);
        margin: 0 0 0.5rem;
    }
    
    /* Compact Author for Small Testimonials */
    .testimonial-author-compact {
        display: flex;
        align-items: center;
        gap: 0.75rem;
        margin-top: 1rem;
    }
    
    .author-image-small {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        object-fit: cover;
        border: 2px solid white;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.08);
    }
    
    .author-info-compact h5 {
        font-size: 0.9rem;
        margin: 0 0 0.15rem;
        font-weight: 600;
    }
    
    .author-info-compact p {
        font-size: 0.75rem;
        margin: 0;
        color: var(--text-muted, #6b7280);
    }
    
    /* Ratings */
    .author-rating {
        display: flex;
        gap: 0.2rem;
        font-size: 0.8rem;
        color: #FFC107;
    }
    
    /* Corner Accent */
    .corner-accent {
        position: absolute;
        top: 0;
        right: 0;
        width: 60px;
        height: 60px;
        background: var(--primary-color, #ff5a3c);
        opacity: 0.1;
        clip-path: polygon(100% 0, 0 0, 100% 100%);
        transition: all 0.3s ease;
    }
    
    .bento-testimonial:hover .corner-accent {
        width: 80px;
        height: 80px;
        opacity: 0.15;
    }
    
    /* Highlight Box with Stats */
    .bento-testimonial-highlight {
        background: linear-gradient(135deg, var(--primary-color, #ff5a3c), #e63e1b);
        padding: 1.5rem;
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    
    .testimonial-stat {
        color: white;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
    }
    
    .stat-number {
        font-size: 2.2rem;
        font-weight: 700;
        margin-bottom: 0.25rem;
        line-height: 1;
    }
    
    .large-stat {
        font-size: 2.8rem;
        letter-spacing: -0.03em;
    }
    
    .stat-plus {
        font-size: 2rem;
        vertical-align: super;
        margin-left: -0.2rem;
    }
    
    .stat-label {
        font-size: 0.9rem;
        opacity: 0.9;
        font-weight: 500;
    }
    
    .stat-icon {
        margin-top: 0.75rem;
        font-size: 1.75rem;
        opacity: 0.8;
    }
    
    /* Responsive Adjustments */
    @media screen and (max-width: 1200px) {
        .bento-testimonials {
            grid-template-columns: repeat(3, 1fr);
        }
        
        .bento-testimonial-large {
            grid-column: span 2;
        }
    }
    
    @media screen and (max-width: 992px) {
        .bento-testimonials {
            grid-template-columns: repeat(2, 1fr);
        }
        
        .bento-testimonial-large {
            grid-column: span 2;
        }
        
        .bento-testimonial-medium {
            grid-column: span 2;
        }
        
        .testimonial-shape {
            filter: blur(50px);
        }
    }
    
    @media screen and (max-width: 768px) {
        .bento-testimonials {
            grid-template-columns: 1fr;
            gap: 1rem;
        }
        
        .bento-testimonial-large,
        .bento-testimonial-medium,
        .bento-testimonial-small {
            grid-column: span 1;
        }
        
        #testimonials {
            padding: 70px 0;
        }
        
        .testimonial-shape {
            filter: blur(40px);
        }
    }
</style>

<script>
document.addEventListener('DOMContentLoaded', function() {
    // Add parallax effect to background shapes
    document.addEventListener('mousemove', function(e) {
        if (window.innerWidth <= 768) return; // Disable on mobile
        
        const shapes = document.querySelectorAll('.testimonial-shape');
        const strength = 0.03; // Parallax strength
        
        const windowWidth = window.innerWidth;
        const windowHeight = window.innerHeight;
        
        // Calculate mouse position as a percentage
        const mouseXPercent = (e.clientX / windowWidth) - 0.5;
        const mouseYPercent = (e.clientY / windowHeight) - 0.5;
        
        shapes.forEach((shape, index) => {
            // Different parallax strength for each shape
            const factor = (index + 1) * strength;
            
            // Apply transform
            shape.style.transform = `translate(${mouseXPercent * factor * 100}px, ${mouseYPercent * factor * 100}px)`;
        });
    });
    
    // Add hover effect to testimonials
    const testimonials = document.querySelectorAll('.bento-testimonial');
    
    testimonials.forEach(testimonial => {
        testimonial.addEventListener('mouseenter', function() {
            testimonials.forEach(otherTestimonial => {
                if (otherTestimonial !== testimonial) {
                    otherTestimonial.style.opacity = '0.7';
                }
            });
        });
        
        testimonial.addEventListener('mouseleave', function() {
            testimonials.forEach(otherTestimonial => {
                otherTestimonial.style.opacity = '1';
            });
        });
    });
});
</script>

<!-- Team Section -->
<section id="team" class="section">
    <div class="team-bg">
        <div class="team-shapes">
            <div class="team-shape shape-1"></div>
            <div class="team-shape shape-2"></div>
            <div class="team-shape shape-3"></div>
        </div>
        <div class="team-pattern"></div>
    </div>
    <div class="container">
        <div class="section-title text-center">
            <p class="section-subtitle">Meet Our Experts</p>
            <h2>The Creative Minds Behind Our Success</h2>
            <div class="title-separator"><span></span></div>
            <p class="section-description">Our talented team combines creativity with technical expertise to deliver exceptional digital solutions</p>
        </div>
        
        <div class="team-container">
            <div class="team-member-card animate-on-scroll">
                <div class="member-image-wrapper">
                    <img src="<?php echo IMAGES_PATH; ?>team/akash.jpg" alt="Akash Chitragar" class="member-image">
                    <div class="image-overlay"></div>
                </div>
                <div class="member-info">
                    <h3 class="member-name">Akash Chitragar</h3>
                    <div class="member-title">Vibe Developer</div>
                    <p class="member-bio">Akash brings energy and creativity to every project, specializing in developing captivating user experiences.</p>
                </div>
            </div>
            
            <div class="team-member-card animate-on-scroll">
                <div class="member-image-wrapper">
                    <img src="<?php echo IMAGES_PATH; ?>team/vathsala.jpg" alt="Vathsala H K" class="member-image">
                    <div class="image-overlay"></div>
                </div>
                <div class="member-info">
                    <h3 class="member-name">Vathsala H K</h3>
                    <div class="member-title">Core UI/UX Designer</div>
                    <p class="member-bio">As our lead UI/UX designer, Vathsala transforms complex requirements into intuitive, beautiful interfaces.</p>
                </div>
            </div>
            
            <div class="team-member-card animate-on-scroll">
                <div class="member-image-wrapper">
                    <img src="<?php echo IMAGES_PATH; ?>team/shraddha.jpg" alt="Shraddha Annigeri" class="member-image">
                    <div class="image-overlay"></div>
                </div>
                <div class="member-info">
                    <h3 class="member-name">Shraddha Annigeri</h3>
                    <div class="member-title">Graphics Designer</div>
                    <p class="member-bio">Shraddha's exceptional visual storytelling abilities bring brands to life across digital platforms.</p>
                </div>
            </div>
        </div>
    </div>
</section>

<style>
    /* Modern Team Section Styles */
    #team {
        position: relative;
        padding: 100px 0;
        overflow: hidden;
        z-index: 1;
    }
    
    .team-bg {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: -1;
        overflow: hidden;
    }
    
    .team-shapes {
        position: absolute;
        width: 100%;
        height: 100%;
        z-index: -1;
    }
    
    .team-shape {
        position: absolute;
        border-radius: 50%;
        filter: blur(70px);
        opacity: 0.4;
    }
    
    .team-shape.shape-1 {
        background: linear-gradient(135deg, rgba(255, 75, 36, 0.3), rgba(255, 125, 75, 0.2));
        width: 500px;
        height: 500px;
        top: -200px;
        right: -150px;
    }
    
    .team-shape.shape-2 {
        background: linear-gradient(135deg, rgba(34, 139, 230, 0.3), rgba(59, 130, 246, 0.2));
        width: 600px;
        height: 600px;
        bottom: -250px;
        left: -200px;
    }
    
    .team-shape.shape-3 {
        background: linear-gradient(135deg, rgba(253, 186, 116, 0.2), rgba(253, 186, 116, 0.1));
        width: 300px;
        height: 300px;
        top: 30%;
        left: 10%;
    }
    
    .team-pattern {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-image: radial-gradient(circle, rgba(0, 0, 0, 0.03) 1px, transparent 1px);
        background-size: 30px 30px;
        opacity: 0.6;
    }
    
    .section-title.text-center {
        text-align: center;
        max-width: 800px;
        margin: 0 auto 60px;
    }
    
    .section-description {
        color: rgba(0, 0, 0, 0.6);
        font-size: 1.1rem;
        margin-top: 15px;
    }
    
    .title-separator {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 20px auto;
        height: 2px;
        width: 100px;
    }
    
    .title-separator span {
        height: 100%;
        width: 100%;
        background: linear-gradient(90deg, transparent, #FF4B24, transparent);
        display: block;
    }
    
    .team-container {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        gap: 40px;
        margin-top: 40px;
    }
    
    .team-member-card {
        background: rgba(255, 255, 255, 0.85);
        backdrop-filter: blur(10px);
        border-radius: 20px;
        width: 320px;
        overflow: hidden;
        box-shadow: 0 15px 35px rgba(0, 0, 0, 0.05);
        border: 1px solid rgba(255, 255, 255, 0.2);
        text-align: center;
        transition: all 0.4s ease;
    }
    
    .team-member-card:hover {
        transform: translateY(-15px);
        box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
    }
    
    .member-image-wrapper {
        position: relative;
        width: 180px;
        height: 180px;
        border-radius: 50%;
        margin: 40px auto 20px;
        overflow: hidden;
        border: 5px solid rgba(255, 255, 255, 0.8);
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
        transition: all 0.4s ease;
    }
    
    .team-member-card:hover .member-image-wrapper {
        transform: scale(1.05);
        border-color: rgba(255, 75, 36, 0.3);
    }
    
    .member-image {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 0.6s ease;
    }
    
    .team-member-card:hover .member-image {
        transform: scale(1.1);
    }
    
    .image-overlay {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(
            to bottom,
            rgba(255, 75, 36, 0),
            rgba(255, 75, 36, 0.2)
        );
        opacity: 0;
        transition: opacity 0.4s ease;
    }
    
    .team-member-card:hover .image-overlay {
        opacity: 1;
    }
    
    .member-info {
        padding: 20px 25px 40px;
    }
    
    .member-name {
        font-size: 1.4rem;
        color: #111827;
        margin-bottom: 8px;
        font-weight: 700;
    }
    
    .member-title {
        color: #FF4B24;
        font-weight: 600;
        font-size: 0.95rem;
        letter-spacing: 0.5px;
        margin-bottom: 20px;
        position: relative;
        display: inline-block;
    }
    
    .member-title:after {
        content: '';
        position: absolute;
        bottom: -10px;
        left: 50%;
        transform: translateX(-50%);
        width: 40px;
        height: 2px;
        background-color: rgba(255, 75, 36, 0.3);
    }
    
    .member-bio {
        color: #4B5563;
        font-size: 0.95rem;
        line-height: 1.6;
    }
    
    /* Responsive Adjustments */
    @media screen and (max-width: 992px) {
        #team {
            padding: 80px 0;
        }
        
        .team-shape {
            filter: blur(50px);
        }
        
        .team-container {
            gap: 30px;
        }
    }
    
    @media screen and (max-width: 768px) {
        .team-member-card {
            width: 100%;
            max-width: 320px;
        }
        
        .team-shape {
            filter: blur(40px);
        }
        
        .member-image-wrapper {
            width: 150px;
            height: 150px;
            margin: 30px auto 15px;
        }
        
        .section-description {
            font-size: 1rem;
        }
    }
</style>

<!-- Contact Section -->
<section id="contact" class="section dark-cta-section">
    <div class="cta-background">
        <div class="cta-gradient-shapes">
            <div class="gradient-shape shape-1"></div>
            <div class="gradient-shape shape-2"></div>
            <div class="gradient-shape shape-3"></div>
        </div>
        <div class="cta-dots"></div>
                    </div>
    <div class="container">
        <div class="cta-card">
            <h2>Let's Make Something Together!</h2>
            <p>Ready to transform your digital vision into reality? Contact us now and let's create something extraordinary.</p>
            
            <div class="cta-buttons">
                <a href="javascript:void(0)" class="btn btn-primary cta-btn schedule-btn" data-cal-link="webart4u/consultation" data-cal-namespace="consultation" data-cal-config='{"layout":"month_view","theme":"light"}'>
                    <i class="fas fa-calendar-alt"></i>
                    <span>Schedule a Meeting</span>
                </a>
                
                <div class="button-separator"></div>
                
                <a href="mailto:info@webart4u.com" class="btn btn-circle">
                        <i class="fas fa-envelope"></i>
                </a>
                
                <a href="tel:+918867672589" class="btn btn-circle">
                    <i class="fas fa-phone-alt"></i>
                </a>
                    </div>
                    </div>
                </div>
</section>

<!-- Cal.com Integration -->
<!-- Cal element-click embed code begins -->
<script type="text/javascript">
  (function (C, A, L) { let p = function (a, ar) { a.q.push(ar); }; let d = C.document; C.Cal = C.Cal || function () { let cal = C.Cal; let ar = arguments; if (!cal.loaded) { cal.ns = {}; cal.q = cal.q || []; d.head.appendChild(d.createElement("script")).src = A; cal.loaded = true; } if (ar[0] === L) { const api = function () { p(api, arguments); }; const namespace = ar[1]; api.q = api.q || []; if(typeof namespace === "string"){cal.ns[namespace] = cal.ns[namespace] || api;p(cal.ns[namespace], ar);p(cal, ["initNamespace", namespace]);} else p(cal, ar); return;} p(cal, ar); }; })(window, "https://app.cal.com/embed/embed.js", "init");
Cal("init", "consultation", {origin:"https://cal.com"});

  
  // Important: Please add the following attributes to the element that should trigger the calendar to open upon clicking.
  // `data-cal-link="webart4u/consultation"`
  // data-cal-namespace="consultation"
  // `data-cal-config='{"layout":"month_view","theme":"light"}'`

  Cal.ns.consultation("ui", {"theme":"light","cssVarsPerTheme":{"light":{"cal-brand":"#FF4B24"},"dark":{"cal-brand":"#FF4B24"}},"hideEventTypeDetails":false,"layout":"month_view"});
</script>
<!-- Cal element-click embed code ends -->
            
<!-- Add the CSS styles for the glassmorphism CTA section -->
<style>
    /* Dark CTA Section with Glassmorphism */
    .dark-cta-section {
        position: relative;
        padding: 80px 0; /* Reduced from 120px */
        background-color: #0F172A;
        color: white;
        overflow: hidden;
        z-index: 1;
    }
    
    .cta-background {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: -1;
        overflow: hidden;
    }
    
    .cta-gradient-shapes {
        position: absolute;
        width: 100%;
        height: 100%;
        z-index: -1;
    }
    
    .cta-gradient-shapes .gradient-shape {
        position: absolute;
        border-radius: 50%;
        filter: blur(80px);
        opacity: 0.4;
    }
    
    .cta-gradient-shapes .shape-1 {
        background: linear-gradient(135deg, #FF4B24, #FF7A5A);
        width: 400px;
        height: 400px;
        top: -150px;
        right: -100px;
        animation: float-shape 15s ease-in-out infinite alternate;
    }
    
    .cta-gradient-shapes .shape-2 {
        background: linear-gradient(135deg, #4C6EF5, #7C3AED);
        width: 500px;
        height: 500px;
        bottom: -200px;
        left: -150px;
        animation: float-shape 18s ease-in-out infinite alternate-reverse;
    }
    
    .cta-gradient-shapes .shape-3 {
        background: linear-gradient(135deg, #FF4B24, #FF7A5A);
        width: 300px;
        height: 300px;
        top: 40%;
        left: 30%;
        animation: float-shape 12s ease-in-out infinite alternate;
        opacity: 0.3;
    }
    
    @keyframes float-shape {
        0% {
            transform: translate(0, 0) scale(1);
        }
        100% {
            transform: translate(20px, 20px) scale(1.1);
        }
    }
    
    .cta-dots {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-image: radial-gradient(circle, rgba(255, 255, 255, 0.08) 1px, transparent 1px);
        background-size: 20px 20px;
        opacity: 0.5;
    }
    
    /* Glassmorphism CTA Card */
    .cta-card {
        background: rgba(255, 255, 255, 0.05);
        backdrop-filter: blur(16px);
        -webkit-backdrop-filter: blur(16px);
        border-radius: 24px;
        border: 1px solid rgba(255, 255, 255, 0.1);
        padding: 40px; 
        text-align: center;
        max-width: 1000px; /* Increased from 800px */
        width: 90%; /* Added for better responsiveness */
        margin: 0 auto;
        box-shadow: 0 30px 60px rgba(0, 0, 0, 0.25);
        position: relative;
        overflow: hidden;
        z-index: 1;
    }
    
    .cta-card::before {
        content: '';
        position: absolute;
        top: 0;
        left: -50%;
        width: 200%;
        height: 100%;
        background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
        transform: skewX(-20deg);
        transition: all 0.8s ease;
        z-index: -1;
    }
    
    .cta-card:hover::before {
        left: 100%;
    }
    
    .cta-card h2 {
        font-size: 2.4rem; /* Reduced from 2.8rem */
        font-weight: 700;
        margin-bottom: 16px; /* Reduced from 20px */
        background: linear-gradient(90deg, #FFFFFF, #FF4B24);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
    
    .cta-card p {
        font-size: 1.1rem;
        line-height: 1.6;
        color: rgba(255, 255, 255, 0.8);
        margin-bottom: 30px;
        max-width: 750px; /* Increased from 600px */
        margin-left: auto;
        margin-right: auto;
    }
    
    /* CTA Buttons */
    .cta-buttons {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 20px; /* Increased from 16px */
        flex-wrap: wrap;
        max-width: 800px; /* Added to control width */
        margin: 0 auto;
    }
    
    /* Button Separator */
    .button-separator {
        height: 40px;
        width: 1px;
        background: rgba(255, 255, 255, 0.2);
        margin: 0 12px; /* Increased from 8px */
    }
    
    .cta-btn {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
        padding: 15px 35px; /* Increased from 14px 28px */
        border-radius: 50px;
        font-size: 1rem; /* Increased from 0.95rem */
        font-weight: 600;
        transition: all 0.3s ease;
        text-decoration: none;
        min-width: 220px; /* Added to ensure button has good width */
    }
    
    .schedule-btn {
        background: #FF4B24;
        color: white;
        box-shadow: 0 8px 20px rgba(255, 75, 36, 0.3);
    }
    
    .schedule-btn:hover {
        background: #e63e1b;
        transform: translateY(-5px);
        box-shadow: 0 12px 25px rgba(255, 75, 36, 0.4);
    }
    
    .btn-circle {
        width: 56px; /* Increased from 50px */
        height: 56px; /* Increased from 50px */
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.1);
        border: 1px solid rgba(255, 255, 255, 0.2);
        color: white;
        font-size: 1.2rem; /* Increased from 1.1rem */
        transition: all 0.3s ease;
        backdrop-filter: blur(5px);
        -webkit-backdrop-filter: blur(5px);
    }
    
    .btn-circle:hover {
        transform: translateY(-5px) scale(1.1);
        background: rgba(255, 255, 255, 0.2);
        color: #FF4B24;
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
    }
    
    /* Responsive adjustments */
    @media screen and (max-width: 992px) {
        .cta-card {
            padding: 35px 25px; /* Reduced from 40px 30px */
        }
        
        .cta-card h2 {
            font-size: 2rem; /* Reduced from 2.2rem */
        }
        
        .dark-cta-section {
            padding: 70px 0; /* Reduced from 80px */
        }
        
        .button-separator {
            height: 35px;
        }
    }
    
    @media screen and (max-width: 768px) {
        .cta-card {
            padding: 25px 15px; /* Reduced from 30px 20px */
        }
        
        .cta-card h2 {
            font-size: 1.6rem; /* Reduced from 1.8rem */
        }
        
        .cta-card p {
            font-size: 0.95rem; /* Reduced from 1rem */
        }
        
        .cta-btn {
            padding: 12px 24px; /* Reduced from 14px 28px */
            font-size: 0.85rem; /* Reduced from 0.9rem */
        }
        
        .btn-circle {
            width: 45px; /* Reduced from 50px */
            height: 45px; /* Reduced from 50px */
            font-size: 0.9rem; /* Reduced from 1rem */
        }
        
        .dark-cta-section {
            padding: 50px 0; /* Reduced from 60px */
        }
        
        .button-separator {
            height: 30px;
        }
    }
</style>

<!-- Add the following CSS for the additional styling needed for this page -->
<style>
    .text-center {
        text-align: center;
    }
    
    .about-content {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: var(--spacing-xl);
        margin-top: var(--spacing-xl);
    }
    
    .values-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
        gap: var(--spacing-lg);
        margin-top: var(--spacing-lg);
    }
    
    .value-item {
        text-align: center;
        padding: var(--spacing-lg);
        background-color: var(--bg-color);
        border-radius: var(--border-radius-lg);
        box-shadow: var(--shadow-md);
    }
    
    .value-item i {
        font-size: 2rem;
        color: var(--primary-color);
        margin-bottom: var(--spacing-sm);
    }
    
    .cta-section {
        background-color: var(--bg-light);
    }
    
    .cta-content {
        max-width: 800px;
        margin: 0 auto;
    }
    
    .cta-content h2 {
        margin-bottom: var(--spacing-md);
    }
    
    .cta-content p {
        margin-bottom: var(--spacing-lg);
        font-size: 1.1rem;
    }
    
    /* Animation classes */
    .animate-on-scroll {
        opacity: 0;
        transform: translateY(30px);
        transition: opacity 0.6s ease, transform 0.6s ease;
    }
    
    .animate-on-scroll.animated {
        opacity: 1;
        transform: translateY(0);
    }
    
    /* Stagger the animations */
    .services-grid .animate-on-scroll:nth-child(1) { transition-delay: 0.1s; }
    .services-grid .animate-on-scroll:nth-child(2) { transition-delay: 0.2s; }
    .services-grid .animate-on-scroll:nth-child(3) { transition-delay: 0.3s; }
    .services-grid .animate-on-scroll:nth-child(4) { transition-delay: 0.4s; }
    .services-grid .animate-on-scroll:nth-child(5) { transition-delay: 0.5s; }
    
    .portfolio-grid .animate-on-scroll:nth-child(1) { transition-delay: 0.1s; }
    .portfolio-grid .animate-on-scroll:nth-child(2) { transition-delay: 0.2s; }
    .portfolio-grid .animate-on-scroll:nth-child(3) { transition-delay: 0.3s; }
    .portfolio-grid .animate-on-scroll:nth-child(4) { transition-delay: 0.1s; }
    .portfolio-grid .animate-on-scroll:nth-child(5) { transition-delay: 0.2s; }
    .portfolio-grid .animate-on-scroll:nth-child(6) { transition-delay: 0.3s; }
    
    .team-grid .animate-on-scroll:nth-child(1) { transition-delay: 0.1s; }
    .team-grid .animate-on-scroll:nth-child(2) { transition-delay: 0.2s; }
    .team-grid .animate-on-scroll:nth-child(3) { transition-delay: 0.3s; }
    .team-grid .animate-on-scroll:nth-child(4) { transition-delay: 0.4s; }
    
    /* Responsive adjustments */
    @media screen and (max-width: 992px) {
        .about-content {
            grid-template-columns: 1fr;
        }
    }
    
    /* Contact section styles */
    .contact-container {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: var(--spacing-xl);
        margin-top: var(--spacing-xl);
    }
    
    .contact-detail {
        display: flex;
        gap: var(--spacing-md);
        margin-bottom: var(--spacing-lg);
    }
    
    .contact-icon {
        font-size: 1.5rem;
        color: var(--primary-color);
        display: flex;
        align-items: center;
        justify-content: center;
        width: 50px;
        height: 50px;
        border-radius: var(--border-radius-full);
        background-color: var(--bg-light);
        flex-shrink: 0;
    }
    
    .social-links-contact {
        margin-top: var(--spacing-xl);
    }
    
    .social-icons {
        display: flex;
        gap: var(--spacing-md);
        margin-top: var(--spacing-sm);
    }
    
    .social-icons a {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 40px;
        height: 40px;
        border-radius: var(--border-radius-full);
        background-color: var(--bg-light);
        color: var(--text-color);
        transition: all var(--transition-fast);
    }
    
    .social-icons a:hover {
        background-color: var(--primary-color);
        color: white;
        transform: translateY(-3px);
    }
    
    .form-success {
        text-align: center;
        padding: var(--spacing-xl);
        background-color: var(--bg-light);
        border-radius: var(--border-radius-lg);
        box-shadow: var(--shadow-md);
    }
    
    .form-success i {
        font-size: 3rem;
        color: var(--success-color);
        margin-bottom: var(--spacing-md);
    }
    
    .form-error-message {
        margin-bottom: var(--spacing-md);
        padding: var(--spacing-md);
        background-color: rgba(239, 68, 68, 0.1);
        border-left: 4px solid var(--error-color);
        border-radius: var(--border-radius-sm);
    }
    
    .form-error-message p {
        color: var(--error-color);
        margin: 0;
        display: flex;
        align-items: center;
        gap: var(--spacing-sm);
    }
    
    .contact-form {
        background-color: var(--bg-light);
        padding: var(--spacing-xl);
        border-radius: var(--border-radius-lg);
        box-shadow: var(--shadow-md);
    }
    
    .form-group {
        margin-bottom: var(--spacing-md);
    }
    
    .form-label {
        display: block;
        margin-bottom: var(--spacing-xs);
        font-weight: 500;
    }
    
    .form-control {
        width: 100%;
        padding: 10px 15px;
        border: 1px solid var(--border-color);
        border-radius: var(--border-radius-md);
        background-color: var(--bg-color);
        transition: border-color var(--transition-fast);
    }
    
    .form-control:focus {
        outline: none;
        border-color: var(--primary-color);
    }
    
    textarea.form-control {
        min-height: 120px;
        resize: vertical;
    }
    
    .map-section {
        margin-top: var(--spacing-xxl);
    }
    
    .map-container {
        height: 450px;
        overflow: hidden;
    }
    
    /* Responsive adjustments for contact section */
    @media screen and (max-width: 992px) {
        .contact-container {
            grid-template-columns: 1fr;
        }
    }
    
    /* Technologies section styles */
    .tech-categories {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: var(--spacing-xl);
        margin-top: var(--spacing-xl);
    }
    
    .tech-category {
        background-color: var(--bg-color);
        border-radius: var(--border-radius-lg);
        padding: var(--spacing-xl);
        box-shadow: var(--shadow-md);
    }
    
    .tech-category h3 {
        margin-bottom: var(--spacing-lg);
        color: var(--primary-color);
    }
    
    .tech-list {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
        gap: var(--spacing-md);
    }
    
    .tech-item {
        display: flex;
        align-items: center;
        gap: var(--spacing-sm);
        font-weight: 500;
    }
    
    .tech-item i {
        color: var(--primary-color);
        font-size: 1.2rem;
    }
    
    /* FAQ section styles */
    .faq-container {
        max-width: 800px;
        margin: var(--spacing-xl) auto 0;
    }
    
    .faq-item {
        background-color: var(--bg-color);
        border-radius: var(--border-radius-lg);
        padding: var(--spacing-lg);
        margin-bottom: var(--spacing-md);
        box-shadow: var(--shadow-md);
    }
    
    .faq-question {
        display: flex;
        justify-content: space-between;
        align-items: center;
        cursor: pointer;
    }
    
    .faq-question h3 {
        margin-bottom: 0;
        font-size: 1.25rem;
    }
    
    .faq-question i {
        color: var(--primary-color);
        transition: transform var(--transition-fast);
    }
    
    .faq-answer {
        margin-top: var(--spacing-md);
        padding-top: var(--spacing-md);
        border-top: 1px solid var(--border-color);
        display: none;
    }
    
    .faq-item.active .faq-question i {
        transform: rotate(180deg);
    }
    
    .faq-item.active .faq-answer {
        display: block;
    }
    
    /* Responsive adjustments for new sections */
    @media screen and (max-width: 992px) {
        .tech-categories {
            grid-template-columns: 1fr;
        }
    }
    
    @media screen and (max-width: 768px) {
        .tech-list {
            grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
        }
    }
    
    /* Bento Grid System */
    .bento-grid {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: var(--spacing-md);
        margin-top: var(--spacing-xl);
    }
    
    .bento-box {
        background-color: var(--bg-color);
        border-radius: var(--border-radius-lg);
        box-shadow: var(--shadow-md);
        padding: var(--spacing-lg);
        display: flex;
        flex-direction: column;
        position: relative;
        overflow: hidden;
        transition: transform 0.3s ease, box-shadow 0.3s ease;
        height: 100%;
        border: 1px solid rgba(var(--border-color-rgb), 0.2);
        backdrop-filter: blur(5px);
    }
    
    .bento-box:hover {
        transform: translateY(-3px);
        box-shadow: var(--shadow-lg);
        z-index: 2;
    }
    
    /* Box Sizes */
    .bento-box-large {
        grid-column: span 2;
        grid-row: span 2;
    }
    
    .bento-box-medium {
        grid-column: span 2;
        min-height: 200px;
    }
    
    .bento-box-small {
        grid-column: span 1;
        min-height: 180px;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
    }
    
    /* Box Styles */
    .bento-box-primary {
        background: linear-gradient(145deg, var(--primary-color), var(--primary-color-dark, #d04000));
        color: white;
    }
    
    .bento-box-primary h3 {
        color: white;
    }
    
    .bento-box-secondary {
        background: linear-gradient(145deg, var(--secondary-color), var(--secondary-color-dark, #003366));
        color: white;
    }
    
    .bento-box-secondary h3 {
        color: white;
    }
    
    .bento-box-value {
        position: relative;
        overflow: hidden;
    }
    
    .bento-box-value::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 0;
        height: 2px;
        background-color: var(--primary-color);
        transition: width 0.4s ease;
        transform-origin: left;
    }
    
    .bento-box-value:hover::after {
        width: 100%;
        animation: redLineTravel 0.8s ease-out;
    }
    
    @keyframes redLineTravel {
        0% {
            width: 0;
            opacity: 0.7;
        }
        100% {
            width: 100%;
            opacity: 1;
        }
    }
    
    /* Content Elements */
    .bento-icon {
        font-size: 1.8rem;
        color: var(--primary-color);
        margin-bottom: var(--spacing-sm);
        display: flex;
        align-items: center;
        justify-content: center;
        width: 60px;
        height: 60px;
        border-radius: 50%;
        background-color: rgba(255, 255, 255, 0.15);
        position: relative;
        z-index: 1;
    }
    
    .pulse-icon::after {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        border-radius: 50%;
        background-color: rgba(var(--primary-color-rgb), 0.3);
        z-index: -1;
        animation: pulse 2s infinite;
    }
    
    @keyframes pulse {
        0% {
            transform: scale(1);
            opacity: 0.7;
        }
        70% {
            transform: scale(1.2);
            opacity: 0;
        }
        100% {
            transform: scale(1);
            opacity: 0;
        }
    }
    
    .bento-box-primary .bento-icon,
    .bento-box-secondary .bento-icon {
        color: white;
        background-color: rgba(255, 255, 255, 0.2);
    }
    
    .bento-content {
        flex: 1;
        position: relative;
        z-index: 1;
    }
    
    .bento-content h3 {
        margin-bottom: var(--spacing-sm);
        font-weight: 700;
        position: relative;
        display: inline-block;
    }
    
    .bento-content h3::after {
        content: '';
        position: absolute;
        left: 0;
        bottom: -5px;
        width: 40px;
        height: 3px;
        background: var(--primary-color);
    }
    
    .bento-box-primary .bento-content h3::after,
    .bento-box-secondary .bento-content h3::after {
        background: white;
    }
    
    .bento-content h4 {
        margin-bottom: var(--spacing-xs);
        font-weight: 600;
        position: relative;
        display: inline-block;
    }
    
    .bento-content p {
        margin-bottom: 0;
        line-height: 1.6;
    }
    
    /* Image Styling */
    .bento-image-container {
        position: relative;
        margin-top: var(--spacing-md);
        border-radius: var(--border-radius-md);
        overflow: hidden;
    }
    
    .bento-story-image {
        width: 100%;
        border-radius: var(--border-radius-md);
        box-shadow: var(--shadow-md);
        transition: transform 0.5s ease;
    }
    
    .bento-image-container:hover .bento-story-image {
        transform: scale(1.03);
    }
    
    .image-overlay {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(to bottom, rgba(0,0,0,0) 70%, rgba(0,0,0,0.5) 100%);
        opacity: 0;
        transition: opacity 0.3s ease;
    }
    
    .bento-image-container:hover .image-overlay {
        opacity: 1;
    }
    
    /* Decorative Elements */
    .box-decoration {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        pointer-events: none;
        z-index: 0;
    }
    
    .dot-pattern {
        position: absolute;
        top: 20px;
        right: 20px;
        width: 60px;
        height: 60px;
        background-image: radial-gradient(circle, var(--primary-color) 2px, transparent 2px);
        background-size: 10px 10px;
        opacity: 0.1;
    }
    
    .corner-accent {
        position: absolute;
        top: 0;
        right: 0;
        width: 30px;
        height: 30px;
        background: rgba(255, 255, 255, 0.2);
        clip-path: polygon(100% 0, 0 0, 100% 100%);
    }
    
    .team-pulse {
        position: absolute;
        width: 100px;
        height: 100px;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.3);
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        opacity: 0;
    }
    
    .bento-image-container:hover .team-pulse {
        animation: team-pulse 1.5s ease-out;
    }
    
    @keyframes team-pulse {
        0% {
            transform: translate(-50%, -50%) scale(0);
            opacity: 0.7;
        }
        100% {
            transform: translate(-50%, -50%) scale(2);
            opacity: 0;
        }
    }
    
    /* Responsive Adjustments */
    @media screen and (max-width: 992px) {
        .bento-grid {
            grid-template-columns: repeat(2, 1fr);
        }
        
        .bento-box-large {
            grid-column: span 2;
        }
    }
    
    @media screen and (max-width: 768px) {
        .bento-grid {
            grid-template-columns: 1fr;
        }
        
        .bento-box-large,
        .bento-box-medium,
        .bento-box-small {
            grid-column: span 1;
        }
        
        .about-shapes .shape {
            transform: scale(0.7);
        }
    }
    
    /* Services Section Redesign */
    #services {
        background-color: #1A202C;
        padding: var(--spacing-xxl) 0;
        position: relative;
        overflow: hidden;
        color: #E2E8F0;
    }
    
    #services .section-title h2 {
        color: #ffffff;
    }
    
    #services .section-subtitle {
        color: #A0AEC0;
    }
    
    .services-container {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        gap: 1.25rem;
        margin-top: 3rem;
        position: relative;
        z-index: 1;
    }
    
    .service-card {
        background: rgba(255, 255, 255, 0.03);
        border-radius: 12px;
        padding: 1.5rem;
        overflow: hidden;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
        position: relative;
        flex: 1;
        display: flex;
        flex-direction: column;
        border: 1px solid rgba(255, 255, 255, 0.05);
        max-width: calc(25% - 1rem);
        z-index: 1;
        top: 0;
    }
    
    .service-card::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        border-radius: 12px;
        opacity: 0;
        z-index: -1;
        transition: opacity 0.3s ease;
    }
    
    .service-card:hover {
        transform: translateY(-8px);
        box-shadow: 
            rgba(0, 0, 0, 0.25) 0px 13px 27px -5px,
            rgba(0, 0, 0, 0.2) 0px 8px 16px -8px;
    }
    
    .service-card:hover::before {
        opacity: 1;
    }
    
    .service-icon {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 80px;
        height: 80px;
        border-radius: 50%;
        font-size: 2.25rem;
        margin-bottom: 1.5rem;
        position: relative;
        transition: all 0.3s ease;
        background: rgba(255, 255, 255, 0.05);
        box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.1);
    }
    
    .service-content {
        flex: 1;
        display: flex;
        flex-direction: column;
    }
    
    .service-title {
        font-size: 1.25rem;
        margin-bottom: 0.75rem;
        color: #ffffff;
        position: relative;
        display: inline-block;
        transition: transform 0.3s ease;
    }
    
    .service-card:hover .service-title {
        transform: translateX(3px);
    }
    
    .service-title::after {
        content: '';
        position: absolute;
        bottom: -0.25rem;
        left: 0;
        width: 2.5rem;
        height: 2px;
        transition: width 0.3s ease;
    }
    
    .service-card:hover .service-title::after {
        width: 100%;
    }
    
    .service-card p {
        color: #A0AEC0;
        line-height: 1.5;
        margin-top: 0.5rem;
        font-size: 0.95rem;
    }
    
    .service-points {
        list-style: none;
        padding: 0;
        margin: 0.75rem 0 0;
    }
    
    .service-points li {
        position: relative;
        padding-left: 1.25rem;
        margin-bottom: 0.5rem;
        font-size: 0.85rem;
        color: #CBD5E0;
    }
    
    .service-card-design .service-points li:before {
        background-color: #4C6EF5;
    }
    
    .service-card-web .service-points li:before {
        background-color: #12B886;
    }
    
    .service-card-app .service-points li:before {
        background-color: #FA5252;
    }
    
    .service-card-mobile .service-points li:before {
        background-color: #FD7E14;
    }
    
    .service-points li:before {
        content: '';
        position: absolute;
        left: 0;
        top: 0.5rem;
        width: 6px;
        height: 6px;
        border-radius: 50%;
    }
    
    @media screen and (max-width: 1200px) {
        .services-container {
            flex-wrap: wrap;
        }
        
        .service-card {
            max-width: calc(50% - 1rem);
            margin-bottom: 1rem;
        }
    }
    
    @media screen and (max-width: 768px) {
        .service-card {
            max-width: 100%;
        }
        
        .service-icon {
            width: 70px;
            height: 70px;
            font-size: 1.8rem;
        }
    }
    
    /* Different colors for each card */
    .service-card-design {
        border-top: 4px solid #4C6EF5;
    }
    
    .service-card-web {
        border-top: 4px solid #12B886;
    }
    
    .service-card-app {
        border-top: 4px solid #FA5252;
    }
    
    .service-card-mobile {
        border-top: 4px solid #FD7E14;
    }
    
    .service-card-design::before {
        background: linear-gradient(145deg, rgba(76, 110, 245, 0.1) 0%, rgba(76, 110, 245, 0.02) 100%);
    }
    
    .service-card-web::before {
        background: linear-gradient(145deg, rgba(18, 184, 134, 0.1) 0%, rgba(18, 184, 134, 0.02) 100%);
    }
    
    .service-card-app::before {
        background: linear-gradient(145deg, rgba(250, 82, 82, 0.1) 0%, rgba(250, 82, 82, 0.02) 100%);
    }
    
    .service-card-mobile::before {
        background: linear-gradient(145deg, rgba(253, 126, 20, 0.1) 0%, rgba(253, 126, 20, 0.02) 100%);
    }
    
    .service-card:hover .service-icon {
        transform: scale(1.05);
        box-shadow: 0 0 20px rgba(255, 255, 255, 0.1);
    }
    
    .service-card-design:hover .service-icon {
        background: rgba(76, 110, 245, 0.1);
        box-shadow: 0 0 20px rgba(76, 110, 245, 0.3);
    }
    
    .service-card-web:hover .service-icon {
        background: rgba(18, 184, 134, 0.1);
        box-shadow: 0 0 20px rgba(18, 184, 134, 0.3);
    }
    
    .service-card-app:hover .service-icon {
        background: rgba(250, 82, 82, 0.1);
        box-shadow: 0 0 20px rgba(250, 82, 82, 0.3);
    }
    
    .service-card-mobile:hover .service-icon {
        background: rgba(253, 126, 20, 0.1);
        box-shadow: 0 0 20px rgba(253, 126, 20, 0.3);
    }
    
    .service-card-design .service-title::after {
        background: linear-gradient(90deg, #4C6EF5, transparent);
    }
    
    .service-card-web .service-title::after {
        background: linear-gradient(90deg, #12B886, transparent);
    }
    
    .service-card-app .service-title::after {
        background: linear-gradient(90deg, #FA5252, transparent);
    }
    
    .service-card-mobile .service-title::after {
        background: linear-gradient(90deg, #FD7E14, transparent);
    }
    
    .service-card:hover .service-title::after {
        width: 100%;
    }
    
    /* Icon color declarations */
    .service-card-design .service-icon {
        color: #4C6EF5;
    }
    
    .service-card-web .service-icon {
        color: #12B886;
    }
    
    .service-card-app .service-icon {
        color: #FA5252;
    }
    
    .service-card-mobile .service-icon {
        color: #FD7E14;
    }
    
    .bg-light-grey {
        background-color: #F8F9FA;
    }
</style>

<!-- Add smooth scrolling script for hero CTA buttons -->
<script>
document.addEventListener('DOMContentLoaded', function() {
    // Get all anchor links in the hero section
    const heroLinks = document.querySelectorAll('.hero-actions a[href^="#"]');
    
    // Add click event listener to each link
    heroLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Prevent default anchor behavior
            e.preventDefault();
            
            // Get the target section id from the href attribute
            const targetId = this.getAttribute('href');
            
            // Get the target element
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                // Calculate scroll position (with offset for potential fixed headers)
                const headerOffset = 80; // Adjust this value based on your header height
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                
                // Scroll smoothly to the target
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
});
</script>

<!-- Add floating back-to-top button -->
<div id="back-to-top" class="back-to-top">
    <i class="fas fa-arrow-up"></i>
</div>

<!-- Add styles for the back-to-top button -->
<style>
    .back-to-top {
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        background-color: #FF4B24;
        color: white;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        opacity: 0;
        visibility: hidden;
        z-index: 9999;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
        transform: translateY(20px);
    }
    
    .back-to-top.visible {
        opacity: 1;
        visibility: visible;
        transform: translateY(0);
    }
    
    .back-to-top:hover {
        background-color: #e63e1b;
        transform: translateY(-5px);
        box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2);
    }
    
    .back-to-top i {
        font-size: 20px;
    }
    
    @media (max-width: 768px) {
        .back-to-top {
            width: 40px;
            height: 40px;
            bottom: 20px;
            right: 20px;
        }
        
        .back-to-top i {
            font-size: 16px;
        }
    }
</style>

<!-- Add script for the back-to-top button functionality -->
<script>
document.addEventListener('DOMContentLoaded', function() {
    // Get the back-to-top button
    const backToTopButton = document.getElementById('back-to-top');
    
    // Show the button when the user scrolls down 300px
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTopButton.classList.add('visible');
        } else {
            backToTopButton.classList.remove('visible');
        }
    });
    
    // Scroll to the top when the button is clicked
    backToTopButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});
</script>