# Webart4U - Your Vision, Our Masterpiece

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![PHP](https://img.shields.io/badge/PHP-777BB4?style=for-the-badge&logo=php&logoColor=white)](https://www.php.net/)
[![MySQL](https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white)](https://www.mysql.com/)
[![Strapi](https://img.shields.io/badge/Strapi-2F2E8B?style=for-the-badge&logo=strapi&logoColor=white)](https://strapi.io/)
[![License](https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge)](LICENSE)

## 📌 Overview

Webart4U is a modern web development agency website showcasing our services, portfolio, and expertise in creating stunning, responsive websites and web applications. Our platform demonstrates our technical capabilities using cutting-edge technologies.

## ✨ Features

- 🚀 **Fast Performance** - Clean and optimized HTML/CSS/PHP code
- 🎭 **Beautiful Designs** - Custom CSS animations and transitions with Vibrant Red (#FF2D00) and Black (#000000) color scheme
- 📱 **Fully Responsive** - Perfect experience on any device (mobile, tablet, desktop)
- 🖼️ **Interactive Elements** - Using JavaScript for smooth animations and user interactions
- 📝 **Blog Platform** - Strapi-powered headless CMS for flexible content management
- 🔍 **SEO Optimized** - Structured data and meta tags for better visibility
- 🌙 **Dark/Light Mode** - User-selectable theme preferences

## 🛠️ Tech Stack

- **Frontend**: HTML5, CSS3
- **Backend**: PHP
- **CMS**: Strapi (Headless CMS)
- **Styling**: Custom CSS with CSS Variables
- **Database**: MySQL
- **Icons**: Font Awesome
- **JavaScript**: Vanilla JS with jQuery for DOM manipulation

## 🚀 Getting Started

### Prerequisites

- PHP 8.0 or higher
- MySQL 8.0 or higher
- Apache/Nginx web server

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/webart4u.git
cd webart4u
```

2. Configure your web server to point to the project directory

3. Import the database schema
```bash
mysql -u username -p database_name < database/schema.sql
```

4. Configure the database connection in `config/database.php`
   - Update the DB_HOST, DB_USER, DB_PASSWORD, and DB_NAME constants

5. Configure the website URL in `config/config.php`
   - Update the SITE_URL constant to match your development environment

6. Install and configure Strapi for the blog (optional)
```bash
# Navigate to the Strapi directory
cd strapi

# Install dependencies
npm install

# Start Strapi development server
npm run develop
```

7. Open your website in a browser

## 📦 Project Structure

```
webart4u/
├── assets/           # CSS, JS, and images
│   ├── css/          # Stylesheets
│   ├── js/           # JavaScript files
│   └── images/       # Image files
├── includes/         # PHP include files
├── templates/        # HTML templates
├── config/           # Configuration files
├── database/         # Database scripts
├── admin/            # Admin area
├── blog/             # Blog frontend components
├── strapi/           # Strapi headless CMS for blog
│   ├── api/          # Strapi API configuration
│   ├── config/       # Strapi configuration
│   └── public/       # Strapi public assets
├── .htaccess         # Apache configuration
└── index.php         # Entry point
```

## 🖌️ Design Guidelines

- **Color Palette**:
  - Primary Color: #FF2D00 – Use this for headers, buttons, and key highlights
  - Secondary Color: Black (#000000) – Use this for text, and accents
  - Accent Color: White (#FFFFFF) – Use this for text, sections, and to create contrast
  - Additional Accent: Light Gray (#F5F5F5) – Use for subtle backgrounds and section dividers
  - Deep Red: #A81E00 – Used for hover states and secondary emphasis

- **Typography**:
  - Headings: Poppins (Bold, modern font)
  - Body Text: Roboto (Clean, sans-serif font)
  - Font weights: 300, 400, 500, 600, 700

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📬 Contact

- Website: [webart4u.com](https://webart4u.com)
- Email: hello@webart4u.com
- Twitter: [@webart4u](https://twitter.com/webart4u)
- LinkedIn: [Webart4U](https://linkedin.com/company/webart4u)

## 🙏 Acknowledgements

- [HTML5](https://developer.mozilla.org/en-US/docs/Web/HTML)
- [CSS3](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [PHP](https://www.php.net/)
- [MySQL](https://www.mysql.com/)
- [Strapi](https://strapi.io/)
- [Font Awesome](https://fontawesome.com/)
- [jQuery](https://jquery.com/)