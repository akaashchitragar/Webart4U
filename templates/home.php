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
<section id="technologies" class="section bg-light">
    <div class="container">
        <div class="section-title">
            <p class="section-subtitle">Our Tools</p>
            <h2>Technologies We Use</h2>
        </div>
        
        <div class="tech-categories">
            <div class="tech-category animate-on-scroll">
                <h3>Frontend Technologies</h3>
                <div class="tech-list">
                    <div class="tech-item"><i class="fab fa-html5"></i> HTML5</div>
                    <div class="tech-item"><i class="fab fa-css3-alt"></i> CSS3</div>
                    <div class="tech-item"><i class="fab fa-react"></i> React.js</div>
                    <div class="tech-item"><i class="fab fa-angular"></i> Angular</div>
                    <div class="tech-item"><i class="fab fa-vuejs"></i> Vue.js</div>
                    <div class="tech-item"><i class="fab fa-js"></i> Next.js</div>
                    <div class="tech-item"><i class="fab fa-js"></i> TypeScript</div>
                    <div class="tech-item"><i class="fab fa-css3"></i> Tailwind CSS</div>
                    <div class="tech-item"><i class="fab fa-bootstrap"></i> Bootstrap</div>
                </div>
            </div>
            
            <div class="tech-category animate-on-scroll">
                <h3>Backend Technologies</h3>
                <div class="tech-list">
                    <div class="tech-item"><i class="fab fa-node-js"></i> Node.js</div>
                    <div class="tech-item"><i class="fab fa-node-js"></i> Express.js</div>
                    <div class="tech-item"><i class="fab fa-python"></i> Python/Django</div>
                    <div class="tech-item"><i class="fab fa-php"></i> PHP</div>
                </div>
            </div>
            
            <div class="tech-category animate-on-scroll">
                <h3>Database Technologies</h3>
                <div class="tech-list">
                    <div class="tech-item"><i class="fas fa-database"></i> MongoDB</div>
                    <div class="tech-item"><i class="fas fa-database"></i> MySQL</div>
                    <div class="tech-item"><i class="fas fa-database"></i> PostgreSQL</div>
                    <div class="tech-item"><i class="fas fa-database"></i> Redis</div>
                    <div class="tech-item"><i class="fas fa-fire"></i> Firebase</div>
                    <div class="tech-item"><i class="fas fa-database"></i> Supabase</div>
                    <div class="tech-item"><i class="fab fa-aws"></i> AWS DynamoDB</div>
                </div>
            </div>
            
            <div class="tech-category animate-on-scroll">
                <h3>Design Tools</h3>
                <div class="tech-list">
                    <div class="tech-item"><i class="fab fa-adobe"></i> Adobe Illustrator</div>
                    <div class="tech-item"><i class="fab fa-adobe"></i> Adobe XD</div>
                    <div class="tech-item"><i class="fab fa-figma"></i> Figma</div>
                    <div class="tech-item"><i class="fas fa-frame"></i> Framer</div>
                </div>
            </div>
            
            <div class="tech-category animate-on-scroll">
                <h3>DevOps & Hosting</h3>
                <div class="tech-list">
                    <div class="tech-item"><i class="fab fa-aws"></i> AWS</div>
                    <div class="tech-item"><i class="fab fa-google"></i> Google Cloud Platform</div>
                    <div class="tech-item"><i class="fab fa-microsoft"></i> Microsoft Azure</div>
                    <div class="tech-item"><i class="fab fa-docker"></i> Docker</div>
                    <div class="tech-item"><i class="fab fa-github"></i> GitHub Actions</div>
                    <div class="tech-item"><i class="fas fa-server"></i> cPanel</div>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Testimonials Section -->
<section id="testimonials" class="section bg-light">
    <div class="container">
        <div class="section-title">
            <p class="section-subtitle">Client Feedback</p>
            <h2>What Our Clients Say</h2>
        </div>
        <div class="testimonials-slider">
            <div class="testimonial-card animate-on-scroll">
                <p class="testimonial-content">"Webart4U transformed our vision for telemedicine into a platform that has revolutionized healthcare delivery in rural areas. Their technical expertise and understanding of user needs resulted in a solution that exceeded our expectations."</p>
                <div class="testimonial-author">
                    <img src="<?php echo IMAGES_PATH; ?>testimonials/rajesh.jpg" alt="Rajesh Mehta" class="author-image">
                    <div class="author-info">
                        <h4>Rajesh Mehta</h4>
                        <p class="author-position">CEO of GlobalHealth</p>
                    </div>
                </div>
            </div>
            
            <div class="testimonial-card animate-on-scroll">
                <p class="testimonial-content">"The e-commerce platform developed by Webart4U has been instrumental in our 200% growth over the past year. Their attention to detail and focus on user experience has significantly improved our conversion rates and customer retention."</p>
                <div class="testimonial-author">
                    <img src="<?php echo IMAGES_PATH; ?>testimonials/priya.jpg" alt="Priya Sharma" class="author-image">
                    <div class="author-info">
                        <h4>Priya Sharma</h4>
                        <p class="author-position">Marketing Director at VelocityShop</p>
                    </div>
                </div>
            </div>
            
            <div class="testimonial-card animate-on-scroll">
                <p class="testimonial-content">"Working with Webart4U was a game-changer for our startup. Their team not only delivered a stunning mobile application but also provided valuable insights that helped shape our business model. They're true partners in our success story."</p>
                <div class="testimonial-author">
                    <img src="<?php echo IMAGES_PATH; ?>testimonials/ahmed.jpg" alt="Ahmed Khan" class="author-image">
                    <div class="author-info">
                        <h4>Ahmed Khan</h4>
                        <p class="author-position">Founder of TourExplore</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Team Section -->
<section id="team" class="section">
    <div class="container">
        <div class="section-title">
            <p class="section-subtitle">Meet Our Experts</p>
            <h2>Our Team</h2>
        </div>
        <div class="team-grid">
            <div class="team-member animate-on-scroll">
                <img src="<?php echo IMAGES_PATH; ?>team/sheetal.jpg" alt="Sheetal Chavan" class="member-image">
                <div class="member-info">
                    <h3 class="member-name">Sheetal Chavan</h3>
                    <p class="member-position">Managing Director</p>
                    <p>With visionary leadership and strategic insight, Sheetal guides Webart4U's growth and innovation initiatives.</p>
                    <div class="member-social">
                        <a href="#" aria-label="LinkedIn"><i class="fab fa-linkedin-in"></i></a>
                        <a href="#" aria-label="Twitter"><i class="fab fa-twitter"></i></a>
                        <a href="#" aria-label="Email"><i class="fas fa-envelope"></i></a>
                    </div>
                </div>
            </div>
            
            <div class="team-member animate-on-scroll">
                <img src="<?php echo IMAGES_PATH; ?>team/akash.jpg" alt="Akash Chitragar" class="member-image">
                <div class="member-info">
                    <h3 class="member-name">Akash Chitragar</h3>
                    <p class="member-position">Vibe Developer</p>
                    <p>Akash brings energy and creativity to every project, specializing in developing captivating user experiences.</p>
                    <div class="member-social">
                        <a href="#" aria-label="LinkedIn"><i class="fab fa-linkedin-in"></i></a>
                        <a href="#" aria-label="Twitter"><i class="fab fa-twitter"></i></a>
                        <a href="#" aria-label="Email"><i class="fas fa-envelope"></i></a>
                    </div>
                </div>
            </div>
            
            <div class="team-member animate-on-scroll">
                <img src="<?php echo IMAGES_PATH; ?>team/vathsala.jpg" alt="Vathsala H K" class="member-image">
                <div class="member-info">
                    <h3 class="member-name">Vathsala H K</h3>
                    <p class="member-position">Core UI/UX Designer</p>
                    <p>As our lead UI/UX designer, Vathsala transforms complex requirements into intuitive, beautiful interfaces.</p>
                    <div class="member-social">
                        <a href="#" aria-label="LinkedIn"><i class="fab fa-linkedin-in"></i></a>
                        <a href="#" aria-label="Twitter"><i class="fab fa-twitter"></i></a>
                        <a href="#" aria-label="Email"><i class="fas fa-envelope"></i></a>
                    </div>
                </div>
            </div>
            
            <div class="team-member animate-on-scroll">
                <img src="<?php echo IMAGES_PATH; ?>team/shraddha.jpg" alt="Shraddha Annigeri" class="member-image">
                <div class="member-info">
                    <h3 class="member-name">Shraddha Annigeri</h3>
                    <p class="member-position">Graphics Designer</p>
                    <p>Shraddha's exceptional visual storytelling abilities bring brands to life across digital platforms.</p>
                    <div class="member-social">
                        <a href="#" aria-label="LinkedIn"><i class="fab fa-linkedin-in"></i></a>
                        <a href="#" aria-label="Twitter"><i class="fab fa-twitter"></i></a>
                        <a href="#" aria-label="Email"><i class="fas fa-envelope"></i></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- FAQ Section -->
<section id="faq" class="section">
    <div class="container">
        <div class="section-title">
            <p class="section-subtitle">Got Questions?</p>
            <h2>Frequently Asked Questions</h2>
        </div>
        
        <div class="faq-container">
            <div class="faq-item animate-on-scroll">
                <div class="faq-question">
                    <h3>What services does Webart4U offer?</h3>
                    <i class="fas fa-chevron-down"></i>
                </div>
                <div class="faq-answer">
                    <p>We specialize in UI/UX design, website development, web applications, and mobile app development for Android and iOS, using the latest tech stack and AI-driven solutions. Our comprehensive digital services are crafted to transform your business challenges into opportunities for growth and innovation.</p>
                </div>
            </div>
            
            <div class="faq-item animate-on-scroll">
                <div class="faq-question">
                    <h3>How long does it take to develop a website or app?</h3>
                    <i class="fas fa-chevron-down"></i>
                </div>
                <div class="faq-answer">
                    <p>The timeline depends on the complexity and scope of the project. Typically, websites take 2-6 weeks, while mobile apps may take 6-12 weeks. We prioritize quality and precision while maintaining efficiency, ensuring your digital solution launches with impact and performs flawlessly from day one.</p>
                </div>
            </div>
            
            <div class="faq-item animate-on-scroll">
                <div class="faq-question">
                    <h3>Do you provide post-launch support?</h3>
                    <i class="fas fa-chevron-down"></i>
                </div>
                <div class="faq-answer">
                    <p>Absolutely! We offer ongoing maintenance and support to ensure your website or app runs smoothly and stays updated. Our dedicated support team provides proactive monitoring, regular updates, performance optimization, and rapid response to any issues—ensuring your digital investment continues to deliver value long after launch.</p>
                </div>
            </div>
            
            <div class="faq-item animate-on-scroll">
                <div class="faq-question">
                    <h3>Can you help with branding and logo design?</h3>
                    <i class="fas fa-chevron-down"></i>
                </div>
                <div class="faq-answer">
                    <p>Definitely! We provide comprehensive branding services including logo creation, brand guideline formulation, visual identity development, and brand storytelling. Our design team crafts memorable, cohesive brand identities that resonate with your target audience and differentiate you in competitive markets.</p>
                </div>
            </div>
            
            <div class="faq-item animate-on-scroll">
                <div class="faq-question">
                    <h3>How do you ensure the security of web applications?</h3>
                    <i class="fas fa-chevron-down"></i>
                </div>
                <div class="faq-answer">
                    <p>Security is paramount in everything we build. We implement industry-standard security protocols, conduct regular vulnerability assessments, and follow OWASP best practices. For applications handling sensitive data, we incorporate additional security measures like encryption, secure authentication, and regular security audits.</p>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Contact Section -->
<section id="contact" class="section">
    <div class="container">
        <div class="section-title">
            <p class="section-subtitle">Get In Touch</p>
            <h2>Contact Us</h2>
        </div>
        <div class="contact-container">
            <div class="contact-info">
                <h3>Reach Out To Us</h3>
                <p>Discuss how we can transform your digital presence. Our team is ready to answer your questions and help you with your project.</p>
                
                <div class="contact-detail">
                    <div class="contact-icon">
                        <i class="fas fa-map-marker-alt"></i>
                    </div>
                    <div>
                        <h4>Our Location</h4>
                        <address>
                            Innovation Hub, Tech Park Road,<br>
                            Hubballi, Karnataka 580031,<br>
                            India
                        </address>
                    </div>
                </div>
                
                <div class="contact-detail">
                    <div class="contact-icon">
                        <i class="fas fa-phone"></i>
                    </div>
                    <div>
                        <h4>Phone</h4>
                        <p>+91 836 XXXXXXX</p>
                    </div>
                </div>
                
                <div class="contact-detail">
                    <div class="contact-icon">
                        <i class="fas fa-envelope"></i>
                    </div>
                    <div>
                        <h4>Email</h4>
                        <p><a href="mailto:hello@webart4u.com">hello@webart4u.com</a></p>
                    </div>
                </div>
                
                <div class="contact-detail">
                    <div class="contact-icon">
                        <i class="fas fa-clock"></i>
                    </div>
                    <div>
                        <h4>Office Hours</h4>
                        <p>
                            Monday - Friday: 9:00 AM - 6:00 PM IST<br>
                            Saturday: 10:00 AM - 2:00 PM IST<br>
                            Sunday: Closed
                        </p>
                    </div>
                </div>
                
                <div class="social-links-contact">
                    <h4>Connect With Us</h4>
                    <div class="social-icons">
                        <a href="https://linkedin.com/company/webart4u" aria-label="LinkedIn"><i class="fab fa-linkedin-in"></i></a>
                        <a href="https://twitter.com/webart4u" aria-label="Twitter"><i class="fab fa-twitter"></i></a>
                        <a href="https://github.com/webart4u" aria-label="GitHub"><i class="fab fa-github"></i></a>
                        <a href="https://instagram.com/webart4u" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
                    </div>
                </div>
            </div>
            
            <div class="contact-form-container">
                <?php if ($formSubmitted): ?>
                    <div class="form-success">
                        <i class="fas fa-check-circle"></i>
                        <h3>Thank You!</h3>
                        <p>Your message has been sent successfully. We'll get back to you as soon as possible.</p>
                        <a href="<?php echo SITE_URL; ?>" class="btn btn-primary">Back to Home</a>
                    </div>
                <?php else: ?>
                    <?php if ($formError): ?>
                        <div class="form-error-message">
                            <p><i class="fas fa-exclamation-circle"></i> Please fill in all required fields.</p>
                        </div>
                    <?php endif; ?>
                    
                    <div class="contact-form">
                        <h3>Send Us a Message</h3>
                        <form id="contact-form" method="post" action="<?php echo SITE_URL; ?>">
                            <div class="form-group">
                                <label for="name" class="form-label">Your Name *</label>
                                <input type="text" id="name" name="name" class="form-control" required>
                            </div>
                            
                            <div class="form-group">
                                <label for="email" class="form-label">Your Email *</label>
                                <input type="email" id="email" name="email" class="form-control" required>
                            </div>
                            
                            <div class="form-group">
                                <label for="phone" class="form-label">Phone Number</label>
                                <input type="tel" id="phone" name="phone" class="form-control">
                            </div>
                            
                            <div class="form-group">
                                <label for="subject" class="form-label">Subject</label>
                                <input type="text" id="subject" name="subject" class="form-control">
                            </div>
                            
                            <div class="form-group">
                                <label for="message" class="form-label">Message *</label>
                                <textarea id="message" name="message" class="form-control" required></textarea>
                            </div>
                            
                            <button type="submit" class="btn btn-primary">Send Message</button>
                        </form>
                    </div>
                <?php endif; ?>
            </div>
        </div>
    </div>
</section>

<!-- Map Section -->
<section class="map-section">
    <div class="map-container">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d61523.91631883045!2d75.12646441744387!3d15.364268799999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb8d6d3a2090b17%3A0xf178260867e45bad!2sHub%20Sparkz!5e0!3m2!1sen!2sin!4v1657107219579!5m2!1sen!2sin" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
</section>

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