-- Drop database if exists and create a new one
DROP DATABASE IF EXISTS webart4u;
CREATE DATABASE webart4u;
USE webart4u;

-- Create contacts table to store contact form submissions
CREATE TABLE contacts (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    phone VARCHAR(20),
    subject VARCHAR(200),
    message TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create users table for admin access
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    full_name VARCHAR(100) NOT NULL,
    role ENUM('admin', 'editor') NOT NULL DEFAULT 'editor',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Create projects table for portfolio
CREATE TABLE projects (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(100) NOT NULL,
    slug VARCHAR(100) NOT NULL UNIQUE,
    category VARCHAR(50) NOT NULL,
    client VARCHAR(100),
    description TEXT NOT NULL,
    features TEXT,
    technologies TEXT,
    thumbnail VARCHAR(255),
    image_gallery TEXT,
    project_url VARCHAR(255),
    completion_date DATE,
    is_featured BOOLEAN DEFAULT 0,
    display_order INT DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Create testimonials table
CREATE TABLE testimonials (
    id INT AUTO_INCREMENT PRIMARY KEY,
    client_name VARCHAR(100) NOT NULL,
    client_position VARCHAR(100),
    client_company VARCHAR(100),
    client_image VARCHAR(255),
    testimonial TEXT NOT NULL,
    rating INT DEFAULT 5,
    display_order INT DEFAULT 0,
    is_active BOOLEAN DEFAULT 1,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Create team_members table
CREATE TABLE team_members (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    position VARCHAR(100) NOT NULL,
    bio TEXT,
    image VARCHAR(255),
    linkedin VARCHAR(255),
    twitter VARCHAR(255),
    github VARCHAR(255),
    email VARCHAR(100),
    display_order INT DEFAULT 0,
    is_active BOOLEAN DEFAULT 1,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Create services table
CREATE TABLE services (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(100) NOT NULL,
    slug VARCHAR(100) NOT NULL UNIQUE,
    icon VARCHAR(50),
    short_description VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    image VARCHAR(255),
    display_order INT DEFAULT 0,
    is_active BOOLEAN DEFAULT 1,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Create settings table for site configuration
CREATE TABLE settings (
    id INT AUTO_INCREMENT PRIMARY KEY,
    setting_key VARCHAR(50) NOT NULL UNIQUE,
    setting_value TEXT NOT NULL,
    setting_group VARCHAR(50) DEFAULT 'general',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Insert default admin user (password: admin123)
INSERT INTO users (username, password, email, full_name, role) 
VALUES ('admin', '$2y$10$YMRtokX8Kd4V9QqnDkPo7eUasXWm2IYAuGh2Kj9NlUOJUzoKGBl1.', 'admin@webart4u.com', 'Admin User', 'admin');

-- Insert default site settings
INSERT INTO settings (setting_key, setting_value, setting_group) VALUES
('site_title', 'Webart4U', 'general'),
('site_description', 'Transforming Digital Visions Into Reality Since 2002', 'general'),
('contact_email', 'hello@webart4u.com', 'contact'),
('contact_phone', '+91 836 XXXXXXX', 'contact'),
('contact_address', 'Innovation Hub, Tech Park Road, Hubballi, Karnataka 580031, India', 'contact'),
('social_linkedin', 'https://linkedin.com/company/webart4u', 'social'),
('social_twitter', 'https://twitter.com/webart4u', 'social'),
('social_github', 'https://github.com/webart4u', 'social'),
('social_instagram', 'https://instagram.com/webart4u', 'social');

-- Insert sample team members
INSERT INTO team_members (name, position, bio, image, linkedin, twitter, github, email, display_order) VALUES
('Sheetal Chavan', 'Managing Director', 'With visionary leadership and strategic insight, Sheetal guides Webart4U\'s growth and innovation initiatives.', 'sheetal.jpg', '#', '#', '#', 'sheetal@webart4u.com', 1),
('Akash Chitragar', 'Vibe Developer', 'Akash brings energy and creativity to every project, specializing in developing captivating user experiences.', 'akash.jpg', '#', '#', '#', 'akash@webart4u.com', 2),
('Vathsala H K', 'Core UI/UX Designer', 'As our lead UI/UX designer, Vathsala transforms complex requirements into intuitive, beautiful interfaces.', 'vathsala.jpg', '#', '#', '#', 'vathsala@webart4u.com', 3),
('Shraddha Annigeri', 'Graphics Designer', 'Shraddha\'s exceptional visual storytelling abilities bring brands to life across digital platforms.', 'shraddha.jpg', '#', '#', '#', 'shraddha@webart4u.com', 4);

-- Insert sample services
INSERT INTO services (title, slug, icon, short_description, description, display_order) VALUES
('UI/UX Design', 'ui-ux-design', 'fa-pencil-ruler', 'Transform user experiences with intuitive, engaging, and responsive designs that captivate your audience.', 'Transform user experiences with intuitive, engaging, and responsive designs that captivate your audience and drive conversions. Our design thinking approach ensures every interface we create is not just visually stunning but strategically crafted to meet business objectives.', 1),
('Website Development', 'website-development', 'fa-laptop-code', 'From corporate websites to complex e-commerce platforms, we build responsive, high-performance websites.', 'From corporate websites to complex e-commerce platforms, we build responsive, high-performance websites that showcase your brand and drive results. Leveraging the latest technologies and frameworks, we ensure your digital presence stands out in a crowded market.', 2),
('Web Applications', 'web-applications', 'fa-cogs', 'Custom web applications designed to streamline operations, enhance productivity, and solve complex business challenges.', 'Custom web applications designed to streamline operations, enhance productivity, and solve complex business challenges. Our solutions are scalable, secure, and tailored to your specific requirements.', 3),
('Mobile App Development', 'mobile-app-development', 'fa-mobile-alt', 'Native and cross-platform mobile applications that extend your reach and engage users on the go.', 'Native and cross-platform mobile applications that extend your reach and engage users on the go. We deliver seamless mobile experiences across iOS and Android platforms with a focus on performance and usability.', 4),
('E-commerce Solutions', 'ecommerce-solutions', 'fa-shopping-cart', 'End-to-end e-commerce development with secure payment gateways and optimized user journeys.', 'End-to-end e-commerce development with secure payment gateways, inventory management, and optimized user journeys that boost conversions and sales.', 5);

-- Insert sample testimonials
INSERT INTO testimonials (client_name, client_position, client_company, testimonial, display_order) VALUES
('Rajesh Mehta', 'CEO', 'GlobalHealth', 'Webart4U transformed our vision for telemedicine into a platform that has revolutionized healthcare delivery in rural areas. Their technical expertise and understanding of user needs resulted in a solution that exceeded our expectations.', 1),
('Priya Sharma', 'Marketing Director', 'VelocityShop', 'The e-commerce platform developed by Webart4U has been instrumental in our 200% growth over the past year. Their attention to detail and focus on user experience has significantly improved our conversion rates and customer retention.', 2),
('Ahmed Khan', 'Founder', 'TourExplore', 'Working with Webart4U was a game-changer for our startup. Their team not only delivered a stunning mobile application but also provided valuable insights that helped shape our business model. They\'re true partners in our success story.', 3),
('Sunita Patel', 'CTO', 'FinTrack', 'The complexity of financial data visualization seemed overwhelming until Webart4U stepped in. Their elegant solution simplifies complex processes while maintaining the highest security standards. A remarkable achievement.', 4),
('Michael Chen', 'International Client', 'Global Ventures', 'Despite the geographical distance, Webart4U managed our project with impeccable communication and timeliness. Their global perspective and technical prowess made them the perfect partner for our international expansion.', 5);

-- Insert sample projects
INSERT INTO projects (title, slug, category, client, description, technologies, is_featured, display_order) VALUES
('Ayushya', 'ayushya', 'Healthcare', 'Ayushya Wellness', 'An Ayurvedic wellness platform providing personalized remedies based on traditional scriptures. Ayushya combines ancient Ayurvedic knowledge with modern AI to deliver tailored health recommendations for users based on their unique constitution and symptoms.', 'Next.js 15, React Server Components, Tailwind CSS, Shadcn UI, Node.js, MongoDB, Express, TypeScript, Google Gemini 1.5 Pro/Ultra', 1, 1),
('QRQoder', 'qrqoder', 'Web Application', 'QRQoder Inc.', 'A comprehensive QR code generation and management system that allows businesses to create, customize, and track QR codes for various applications. QRQoder provides advanced analytics and seamless integration with marketing campaigns.', 'React.js, Material UI, Chart.js, Node.js, Express, PostgreSQL', 1, 2),
('Architects In India', 'architects-in-india', 'Portfolio Platform', 'Architects Association', 'A digital platform connecting architects, clients, and architecture enthusiasts across India. This portfolio and networking platform showcases architectural projects, profiles, and design expertise with a focus on celebrating Indian architectural talent and heritage.', 'Next.js, React, Styled Components, Framer Motion, Node.js, MongoDB, Express', 1, 3),
('Oikos Consultants', 'oikos-consultants', 'Architecture', 'Oikos Consultants', 'A specialized consultancy platform for sustainable architecture and ecological design services. Oikos Consultants provides integrated solutions for environmentally responsible building practices, focusing on minimizing environmental impact while maximizing comfort and functionality.', 'Vue.js, Tailwind CSS, Three.js, Django, PostgreSQL, GraphQL', 1, 4),
('JobCraft.in', 'jobcraft', 'Job Portal', 'JobCraft', 'JobCraft is revolutionizing the Indian job search experience by providing smart, localized resume optimization and job matching services. Built specifically for the Indian market, it helps job seekers perfect their resumes for Applicant Tracking Systems (ATS).', 'React.js, Material UI, Redux, Node.js, Express, MongoDB', 1, 5),
('Viberjobs.com', 'viberjobs', 'Recruitment', 'Viber Inc.', 'An innovative recruitment platform that streamlines the hiring process using AI-powered matching algorithms to connect qualified candidates with the right employers. Viberjobs.com reimagines traditional recruitment by focusing on candidate-to-job fit.', 'Next.js, React, Tailwind CSS, Framer Motion, Node.js, Express, PostgreSQL', 1, 6); 