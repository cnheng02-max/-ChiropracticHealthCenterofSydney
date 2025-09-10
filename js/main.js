// Sydney Chiropractor Website JavaScript
// Updated for new sticky navigation and accordion functionality

(function() {
    'use strict';

    // Sticky Header Functionality (no shrinking)
    function initStickyHeader() {
        const header = document.getElementById('main-header');
        if (!header) return;
        
        // Header stays at fixed height - no shrinking behavior
        console.log('Sticky header initialized without shrinking');
    }

    // SIMPLE IMMEDIATE NAVIGATION - Works from landing page instantly
    function setupNavigation() {
        console.log('Setting up navigation immediately...');
        
        // Get navigation elements
        const drLeungLink = document.querySelector('a[href="#dr-leung"]');
        const contactLink = document.querySelector('a[href="#contact"]');
        const phoneButton = document.querySelector('.cta-phone-button');
        
        console.log('Dr. Leung link:', drLeungLink);
        console.log('Contact link:', contactLink);
        console.log('Phone button:', phoneButton);
        
        // Setup Dr. Leung navigation
        if (drLeungLink) {
            drLeungLink.addEventListener('click', function(e) {
                e.preventDefault();
                console.log('Dr. Leung clicked - navigating...');
                smoothScrollTo('dr-leung');
            });
            console.log('Dr. Leung navigation ready');
        }
        
        // Setup Contact Us navigation  
        if (contactLink) {
            contactLink.addEventListener('click', function(e) {
                e.preventDefault();
                console.log('Contact Us clicked - navigating...');
                smoothScrollTo('contact');
            });
            console.log('Contact Us navigation ready');
        }
        
        // Phone button already has tel: link - just log when clicked
        if (phoneButton) {
            phoneButton.addEventListener('click', function() {
                console.log('Phone button clicked - calling...');
            });
            console.log('Phone button ready');
        }
        
        console.log('All navigation setup complete!');
    }
    
    // Simple smooth scroll function
    function smoothScrollTo(targetId) {
        console.log('Scrolling to section:', targetId);
        
        const targetElement = document.getElementById(targetId);
        if (!targetElement) {
            console.error('Target section not found:', targetId);
            return;
        }
        
        // Get header height for proper positioning
        const header = document.getElementById('main-header');
        const headerHeight = header ? header.offsetHeight : 250;
        
        // Calculate scroll position
        const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
        const scrollPosition = targetPosition - headerHeight - 20; // 20px buffer
        
        console.log('Scrolling to position:', scrollPosition);
        
        // Smooth scroll
        window.scrollTo({
            top: Math.max(0, scrollPosition),
            behavior: 'smooth'
        });
    }

    // Enhanced Accordion functionality
    function initAccordion() {
        const accordionHeaders = document.querySelectorAll('.accordion-header');
        
        accordionHeaders.forEach(header => {
            header.addEventListener('click', function() {
                const accordionItem = this.parentElement;
                const targetId = accordionItem.dataset.target;
                const content = document.getElementById(targetId);
                
                if (!content) return;

                const isActive = accordionItem.classList.contains('active');
                
                // Close all accordion items
                accordionHeaders.forEach(otherHeader => {
                    const otherItem = otherHeader.parentElement;
                    const otherTargetId = otherItem.dataset.target;
                    const otherContent = document.getElementById(otherTargetId);
                    
                    if (otherContent && otherItem !== accordionItem) {
                        otherItem.classList.remove('active');
                        otherContent.style.maxHeight = '0';
                    }
                });

                // Toggle current item
                if (!isActive) {
                    accordionItem.classList.add('active');
                    content.style.maxHeight = content.scrollHeight + 'px';
                } else {
                    accordionItem.classList.remove('active');
                    content.style.maxHeight = '0';
                }
            });
        });
    }

    // Navigation code removed - ready for fresh rebuild

    // Intersection Observer for fade-in animations
    function initScrollAnimations() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, observerOptions);

        // Add fade-in class to sections and observe them
        const sections = [
            '.dr-leung-section',
            '.first-visit-section', 
            '.location-section',
            '.contact-section'
        ];

        sections.forEach(selector => {
            const element = document.querySelector(selector);
            if (element) {
                element.classList.add('fade-in');
                observer.observe(element);
            }
        });
    }

    // Performance optimization: Debounce function
    function debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

    // Handle window resize for responsive behavior
    function initResponsiveHandling() {
        const handleResize = debounce(() => {
            // Recalculate accordion heights on resize
            const activeAccordions = document.querySelectorAll('.accordion-item.active .accordion-content');
            activeAccordions.forEach(content => {
                content.style.maxHeight = content.scrollHeight + 'px';
            });
            
            // Update header height calculation for mobile
            updateHeaderOffset();
        }, 250);

        window.addEventListener('resize', handleResize, { passive: true });
    }
    
    // Update header offset for accurate scroll calculations
    function updateHeaderOffset() {
        const header = document.getElementById('main-header');
        if (header) {
            const headerHeight = header.offsetHeight;
            document.documentElement.style.setProperty('--header-height', headerHeight + 'px');
        }
    }

    // Handle reduced motion preference
    function handleReducedMotion() {
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            document.body.classList.add('reduced-motion');
            // Disable smooth scrolling for users who prefer reduced motion
            document.documentElement.style.scrollBehavior = 'auto';
        }
    }

    // Phone number click tracking (optional analytics)
    function initPhoneTracking() {
        const phoneButtons = document.querySelectorAll('a[href^="tel:"]');
        phoneButtons.forEach(button => {
            button.addEventListener('click', function() {
                // Optional: Add analytics tracking here
                console.log('Phone number clicked:', this.href);
            });
        });
    }

    // All navigation functions removed - clean slate for rebuild

    // Initialize everything when DOM is ready
    function init() {
        // Check if DOM is already loaded
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', init);
            return;
        }

        // Initialize all functionality
        handleReducedMotion();
        initStickyHeader();
        initMobileMenu();
        initScrollAnimations();
        initAccordion();
        initResponsiveHandling();
        initPhoneTracking();
        updateHeaderOffset();

        // Add loaded class to body for any CSS animations
        document.body.classList.add('loaded');
        
        console.log('Sydney Chiropractor website initialized successfully');
    }

    // Error handling
    window.addEventListener('error', (e) => {
        console.warn('Website script error:', e.error);
    });

    // Setup navigation IMMEDIATELY - before anything else
    document.addEventListener('DOMContentLoaded', setupNavigation);
    // Also try immediately if DOM already loaded
    if (document.readyState !== 'loading') {
        setupNavigation();
    }
    
    // Start other initialization  
    init();

})();