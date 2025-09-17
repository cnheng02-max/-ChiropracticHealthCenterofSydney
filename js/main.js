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
        const heroBookNowBtn = document.querySelector('.hero-book-now-btn');

        console.log('Dr. Leung link:', drLeungLink);
        console.log('Contact link:', contactLink);
        console.log('Phone button:', phoneButton);
        console.log('Hero Book Now button:', heroBookNowBtn);

        // Setup Dr. Leung navigation
        if (drLeungLink) {
            drLeungLink.addEventListener('click', function(e) {
                e.preventDefault();
                console.log('Dr. Leung clicked - navigating...');
                smoothScrollTo('dr-leung');
            });
            console.log('Dr. Leung navigation ready');
        }

        // Setup Contact Us navigation (header link - centers in viewport)
        if (contactLink) {
            contactLink.addEventListener('click', function(e) {
                e.preventDefault();
                console.log('Contact Us clicked - navigating...');
                smoothScrollTo('contact', 'center');
            });
            console.log('Contact Us navigation ready');
        }

        // Setup Hero Book Now button (scrolls to top of contact section)
        if (heroBookNowBtn) {
            heroBookNowBtn.addEventListener('click', function(e) {
                e.preventDefault();
                console.log('Hero Book Now clicked - navigating to top of contact...');
                smoothScrollTo('contact', 'top');
            });
            console.log('Hero Book Now navigation ready');
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
    
    // Enhanced smooth scroll function with section-specific positioning
    function smoothScrollTo(targetId, positioning = 'default') {
        console.log('Scrolling to section:', targetId, 'with positioning:', positioning);

        const targetElement = document.getElementById(targetId);
        if (!targetElement) {
            console.error('Target section not found:', targetId);
            return;
        }

        // Get actual header height (should be 122.5px)
        const header = document.getElementById('main-header');
        const headerHeight = header ? header.offsetHeight : 122.5;

        // Calculate base scroll position
        const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;

        // Section-specific positioning logic
        let scrollPosition;

        if (targetId === 'dr-leung') {
            // Dr. Leung: Exact top alignment, no visible landing page
            scrollPosition = targetPosition - headerHeight;
            console.log('Dr. Leung section: exact top alignment');
        } else if (targetId === 'contact') {
            if (positioning === 'top') {
                // Book Now button: Scroll to top of contact section
                scrollPosition = targetPosition - headerHeight - 20; // Small offset for visual breathing room
                console.log('Contact section: top alignment (Book Now button)');
            } else if (positioning === 'center') {
                // Header Contact link: Center the section in viewport
                const viewportHeight = window.innerHeight;
                const sectionHeight = targetElement.offsetHeight;
                const centerOffset = (viewportHeight - sectionHeight) / 2;
                scrollPosition = targetPosition - headerHeight - centerOffset + 50; // +50px for better visual centering
                console.log('Contact section: centered in viewport (header link)');
            } else {
                // Default: top alignment
                scrollPosition = targetPosition - headerHeight - 20;
                console.log('Contact section: default top alignment');
            }
        } else {
            // Default positioning for other sections
            scrollPosition = targetPosition - headerHeight - 20;
            console.log('Default section positioning');
        }

        console.log('Header height:', headerHeight, 'Scrolling to position:', scrollPosition);

        // Smooth scroll
        window.scrollTo({
            top: Math.max(0, scrollPosition),
            behavior: 'smooth'
        });
    }

    // Enhanced Accordion functionality
    function initAccordion() {
        const accordionHeaders = document.querySelectorAll('.accordion-header');
        console.log('Accordion initialization started. Found headers:', accordionHeaders.length);
        
        if (accordionHeaders.length === 0) {
            console.warn('No accordion headers found!');
            return;
        }
        
        accordionHeaders.forEach((header, index) => {
            console.log(`Setting up accordion item ${index + 1}`);
            header.addEventListener('click', function() {
                console.log('Accordion header clicked!');
                const accordionItem = this.parentElement;
                const targetId = accordionItem.dataset.target;
                const content = document.getElementById(targetId);
                
                console.log('Target ID:', targetId, 'Content found:', !!content);
                
                if (!content) {
                    console.error('Accordion content not found for target:', targetId);
                    return;
                }

                const isActive = accordionItem.classList.contains('active');
                console.log('Is currently active:', isActive);
                
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
                    console.log('Opening accordion item');
                    accordionItem.classList.add('active');
                    content.style.maxHeight = content.scrollHeight + 'px';
                } else {
                    console.log('Closing accordion item');
                    accordionItem.classList.remove('active');
                    content.style.maxHeight = '0';
                }
            });
        });
        
        console.log('Accordion initialization completed successfully');
    }

    // Mobile Menu Functionality
    function initMobileMenu() {
        const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
        const mainNav = document.getElementById('main-nav');
        
        if (!mobileMenuToggle || !mainNav) {
            console.log('Mobile menu elements not found, skipping mobile menu initialization');
            return;
        }

        mobileMenuToggle.addEventListener('click', function() {
            // Toggle active classes
            mobileMenuToggle.classList.toggle('active');
            mainNav.classList.toggle('active');
            
            console.log('Mobile menu toggled');
        });

        // Close mobile menu when clicking on nav links
        const navLinks = mainNav.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenuToggle.classList.remove('active');
                mainNav.classList.remove('active');
            });
        });

        console.log('Mobile menu initialized successfully');
    }

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

        // Hero title fade out on scroll
        initHeroTitleFadeOut();
    }

    // Hero title fade out animation based on scroll
    function initHeroTitleFadeOut() {
        const heroTitle = document.querySelector('.hero-title-overlay');
        if (!heroTitle) {
            console.log('Hero title not found for fade out animation');
            return;
        }

        let hasTriggeredFadeOut = false;
        const fadeOutThreshold = 200; // Start fade out after scrolling 200px

        function handleScroll() {
            // Skip if reduced motion is preferred
            if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
                return;
            }

            const scrollY = window.pageYOffset || document.documentElement.scrollTop;

            if (scrollY > fadeOutThreshold && !hasTriggeredFadeOut) {
                heroTitle.classList.add('fade-out');
                hasTriggeredFadeOut = true;
                console.log('Hero title fade out triggered at scroll position:', scrollY);
            } else if (scrollY <= fadeOutThreshold && hasTriggeredFadeOut) {
                heroTitle.classList.remove('fade-out');
                hasTriggeredFadeOut = false;
                console.log('Hero title fade out reversed at scroll position:', scrollY);
            }
        }

        // Throttle scroll events for performance
        let ticking = false;
        function requestTick() {
            if (!ticking) {
                requestAnimationFrame(handleScroll);
                ticking = true;
                setTimeout(() => { ticking = false; }, 16); // ~60fps
            }
        }

        window.addEventListener('scroll', requestTick, { passive: true });
        console.log('Hero title fade out animation initialized');
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