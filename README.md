# Chiropractic & Health Center of Sydney Website

A professional, responsive single-page website for a chiropractic and remedial massage clinic located in Sydney Town Hall. Built with modern web standards and optimized for performance and accessibility.

## 🌟 Features

- **Professional Design**: Minimalist, elegant layout with calming color palette
- **Responsive**: Mobile-first design that works on all devices
- **Performance Optimized**: Fast loading with minimal animations
- **SEO Ready**: Semantic markup and meta tags for local search
- **Accessibility**: WCAG compliant with reduced motion support
- **Interactive Elements**: Smooth scrolling and expandable FAQ sections

## 📁 Project Structure

```
sydney-chiropractor/
├── index.html              # Main HTML file
├── styles/
│   ├── main.css            # Core styles with CSS custom properties
│   └── responsive.css      # Mobile-first responsive design
├── js/
│   └── main.js            # Interactive functionality
├── images/                 # Image assets (placeholder structure)
└── README.md              # This documentation
```

## 🎨 Design System

### Color Palette
- **Primary**: `#1A237E` (Deep Navy Blue)
- **Accent**: `#A5D6A7` (Sage Green)
- **Background**: `#F5F5F5` (Light Grey)
- **White**: `#FFFFFF`
- **Text Dark**: `#333333`
- **Text Light**: `#666666`

### Typography
- **Headings**: Playfair Display (serif)
- **Body Text**: Open Sans (sans-serif)
- **Google Fonts**: Automatically loaded from CDN

### Spacing System
- **XS**: 0.5rem (8px)
- **SM**: 1rem (16px)
- **MD**: 2rem (32px)
- **LG**: 3rem (48px)
- **XL**: 4rem (64px)
- **XXL**: 6rem (96px)

## 📱 Responsive Breakpoints

- **Mobile**: Up to 480px
- **Tablet**: 481px to 768px
- **Desktop**: 769px to 1199px
- **Large Desktop**: 1200px and above

## 🖼️ Image Specifications

The website uses placeholder images with these exact dimensions:

1. **Dr. Leung Portrait**: 420×470px
   - Location: About section
   - Format: Professional headshot
   - Background: Light placeholder with icon

2. **Hero Background**: 1280×910px
   - Location: Full-screen hero section
   - Format: Clinic interior
   - Effect: Parallax scrolling on desktop

3. **Clinic Entrance**: 305×415px
   - Location: Contact section (positioned at x: 226px)
   - Format: Portrait orientation
   - Background: Clinic entrance placeholder

## ⚙️ Customization Guide

### Changing Business Information

#### Clinic Name and Details
Edit `index.html` and update:
```html
<h1 class="hero-title">Your Clinic Name Here</h1>
<title>Your Clinic Name - Professional Care</title>
```

#### Contact Information
In the contact section, update:
```html
<div class="contact-item">
    <h3>Address</h3>
    <p>Your Address<br>City State Postcode</p>
</div>
<div class="contact-item">
    <h3>Phone</h3>
    <p><a href="tel:yourphone">Your Phone Number</a></p>
</div>
```

#### Operating Hours
Update the hours table:
```html
<div class="hours-row">
    <span>Day</span>
    <span>Hours</span>
</div>
```

### Customizing Colors

Colors are defined using CSS custom properties in `styles/main.css`:

```css
:root {
  --color-primary: #1A237E;     /* Main brand color */
  --color-accent: #A5D6A7;      /* Accent/CTA color */
  --color-background: #F5F5F5;  /* Page background */
}
```

**Popular Alternative Color Schemes:**

1. **Medical Blue & Green**:
   ```css
   --color-primary: #0D47A1;
   --color-accent: #81C784;
   ```

2. **Professional Navy & Teal**:
   ```css
   --color-primary: #1B365D;
   --color-accent: #4DB6AC;
   ```

3. **Warm & Calming**:
   ```css
   --color-primary: #5D4E75;
   --color-accent: #AED581;
   ```

### Replacing Images

#### Real Photos
Replace the placeholder images by:

1. **Prepare your images** with exact dimensions:
   - Dr. Leung: 420×470px
   - Hero background: 1280×910px  
   - Clinic entrance: 305×415px

2. **Save images** in the `images/` folder:
   ```
   images/
   ├── dr-leung.jpg
   ├── hero-background.jpg
   └── clinic-entrance.jpg
   ```

3. **Update CSS** in `styles/main.css`:
   ```css
   .hero-section {
     background: linear-gradient(rgba(26, 35, 126, 0.4), rgba(26, 35, 126, 0.4)),
                 url('../images/hero-background.jpg');
   }
   
   .doctor-image {
     background: url('../images/dr-leung.jpg');
   }
   
   .entrance-image {
     background: url('../images/clinic-entrance.jpg');
   }
   ```

### Modifying Content Sections

#### Adding Services Section
To add a services section, insert after the about section:

```html
<section id="services" class="services-section">
    <div class="container">
        <h2>Our Services</h2>
        <div class="services-grid">
            <div class="service-item">
                <h3>Chiropractic Care</h3>
                <p>Professional spinal adjustments and alignment.</p>
            </div>
            <!-- Add more services -->
        </div>
    </div>
</section>
```

#### Modifying FAQ/Accordion Items
Edit the accordion items in `index.html`:

```html
<div class="accordion-item" data-target="new-item">
    <div class="accordion-header">
        <span class="accordion-icon">▶</span>
        <h3>Your New FAQ Title</h3>
    </div>
    <div class="accordion-content" id="new-item">
        <p>Your detailed answer here.</p>
    </div>
</div>
```

### Google Maps Integration

The map uses an embedded iframe. To update the location:

1. Go to [Google Maps](https://maps.google.com)
2. Search for your clinic address
3. Click "Share" → "Embed a map"
4. Copy the iframe code
5. Replace the existing iframe in `index.html`

## 🚀 Performance Features

- **Critical CSS**: Inlined for above-fold content
- **Font Loading**: Optimized Google Fonts loading
- **Image Optimization**: Proper sizing and lazy loading ready
- **Minimal JavaScript**: Lightweight, performance-focused code
- **Smooth Animations**: 60fps animations with reduced motion support

## ♿ Accessibility Features

- Semantic HTML5 markup
- ARIA labels where appropriate
- Keyboard navigation support
- High contrast mode support
- Reduced motion preference respected
- Focus indicators on interactive elements

## 📈 SEO Optimization

- Semantic HTML structure
- Meta descriptions and titles
- Local business schema markup ready
- Fast loading speeds
- Mobile-friendly design
- Proper heading hierarchy

## 🛠️ Development

### Local Development
Simply open `index.html` in a modern web browser. For best results, serve from a local web server:

```bash
# Using Python 3
python -m http.server 8000

# Using Node.js (if you have http-server installed)
npx http-server

# Using PHP
php -S localhost:8000
```

### Browser Support
- Chrome 60+
- Firefox 60+
- Safari 12+
- Edge 79+

## 📝 License

This template is provided as-is for the Chiropractic & Health Center of Sydney. Feel free to modify and customize as needed for your practice.

## 🆘 Support

For technical questions or customization help, refer to this README or consult with your web developer.

---

**Built with ❤️ for professional healthcare websites**