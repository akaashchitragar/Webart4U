<?php
// Set page title
$page_title = "Page Not Found";
?>

<section class="error-section section">
    <div class="container">
        <div class="error-content text-center">
            <div class="error-icon">
                <i class="fas fa-exclamation-circle"></i>
            </div>
            <h1>404</h1>
            <h2>Page Not Found</h2>
            <p>The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.</p>
            <div class="error-actions">
                <a href="<?php echo SITE_URL; ?>" class="btn btn-primary">Go Home</a>
                <a href="<?php echo SITE_URL; ?>?page=contact" class="btn btn-outline">Contact Us</a>
            </div>
        </div>
    </div>
</section>

<style>
    .error-section {
        min-height: 70vh;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    
    .error-content {
        max-width: 600px;
        margin: 0 auto;
    }
    
    .error-icon {
        font-size: 5rem;
        color: var(--primary-color);
        margin-bottom: var(--spacing-lg);
    }
    
    .error-content h1 {
        font-size: 6rem;
        color: var(--primary-color);
        margin-bottom: var(--spacing-sm);
        line-height: 1;
    }
    
    .error-content h2 {
        margin-bottom: var(--spacing-lg);
    }
    
    .error-content p {
        font-size: 1.1rem;
        margin-bottom: var(--spacing-xl);
    }
    
    .error-actions {
        display: flex;
        gap: var(--spacing-md);
        justify-content: center;
    }
    
    @media screen and (max-width: 576px) {
        .error-actions {
            flex-direction: column;
        }
        
        .error-content h1 {
            font-size: 4rem;
        }
    }
</style> 