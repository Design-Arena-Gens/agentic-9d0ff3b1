'use client'

import { useState } from 'react'

interface Step {
  title: string
  description: string
  code?: string
}

interface InstructionSet {
  steps: Step[]
  tips: string[]
}

export default function Home() {
  const [topic, setTopic] = useState('')
  const [complexity, setComplexity] = useState('intermediate')
  const [loading, setLoading] = useState(false)
  const [instructions, setInstructions] = useState<InstructionSet | null>(null)

  const generateInstructions = () => {
    setLoading(true)

    // Simulate AI generation with a timeout
    setTimeout(() => {
      const instructionSet = createInstructions(topic, complexity)
      setInstructions(instructionSet)
      setLoading(false)
    }, 1500)
  }

  const createInstructions = (topic: string, level: string): InstructionSet => {
    const topicLower = topic.toLowerCase()

    // Portfolio website
    if (topicLower.includes('portfolio') || topicLower.includes('personal website')) {
      return {
        steps: [
          {
            title: 'Set up project structure',
            description: 'Create the basic HTML file structure for your portfolio website.',
            code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Portfolio</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <!-- Content goes here -->
</body>
</html>`
          },
          {
            title: 'Create navigation header',
            description: 'Add a navigation bar with links to different sections of your portfolio.',
            code: `<header>
    <nav>
        <h1 class="logo">Your Name</h1>
        <ul class="nav-links">
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
    </nav>
</header>`
          },
          {
            title: 'Build hero section',
            description: 'Create an eye-catching hero section with your introduction.',
            code: `<section class="hero">
    <div class="hero-content">
        <h2>Hello, I'm <span class="highlight">Your Name</span></h2>
        <p>Web Developer | Designer | Creator</p>
        <a href="#projects" class="cta-button">View My Work</a>
    </div>
</section>`
          },
          {
            title: 'Add projects section',
            description: 'Display your projects in a grid layout with images and descriptions.',
            code: `<section id="projects" class="projects">
    <h2>My Projects</h2>
    <div class="project-grid">
        <div class="project-card">
            <img src="project1.jpg" alt="Project 1">
            <h3>Project Name</h3>
            <p>Project description goes here...</p>
            <a href="#" class="project-link">View Project</a>
        </div>
        <!-- Add more project cards -->
    </div>
</section>`
          },
          {
            title: 'Style with CSS',
            description: 'Create a modern, responsive design with CSS.',
            code: `* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Arial', sans-serif;
    line-height: 1.6;
}

.hero {
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    text-align: center;
}

.project-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    padding: 2rem;
}`
          },
          {
            title: 'Add contact form',
            description: 'Include a contact section so visitors can reach you.',
            code: `<section id="contact" class="contact">
    <h2>Get In Touch</h2>
    <form>
        <input type="text" placeholder="Name" required>
        <input type="email" placeholder="Email" required>
        <textarea placeholder="Message" required></textarea>
        <button type="submit">Send Message</button>
    </form>
</section>`
          }
        ],
        tips: [
          'Use high-quality images for your projects',
          'Make sure your site is mobile-responsive',
          'Add smooth scrolling for better user experience',
          'Include social media links in the footer',
          'Test your website on different browsers'
        ]
      }
    }

    // Landing page
    if (topicLower.includes('landing') || topicLower.includes('product page')) {
      return {
        steps: [
          {
            title: 'Create HTML structure',
            description: 'Set up the basic HTML template for your landing page.',
            code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Product Landing Page</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="container">
        <!-- Sections go here -->
    </div>
</body>
</html>`
          },
          {
            title: 'Build hero section with CTA',
            description: 'Create an attention-grabbing hero section with a clear call-to-action.',
            code: `<section class="hero">
    <h1>Revolutionary Product That Changes Everything</h1>
    <p class="subtitle">The best solution for your needs</p>
    <button class="cta-btn">Get Started Now</button>
    <img src="hero-image.jpg" alt="Product" class="hero-image">
</section>`
          },
          {
            title: 'Add features section',
            description: 'Highlight the key features of your product or service.',
            code: `<section class="features">
    <h2>Amazing Features</h2>
    <div class="feature-grid">
        <div class="feature">
            <div class="icon">⚡</div>
            <h3>Fast Performance</h3>
            <p>Lightning-quick loading times</p>
        </div>
        <div class="feature">
            <div class="icon">🔒</div>
            <h3>Secure</h3>
            <p>Bank-level security</p>
        </div>
        <div class="feature">
            <div class="icon">📱</div>
            <h3>Mobile Ready</h3>
            <p>Works on all devices</p>
        </div>
    </div>
</section>`
          },
          {
            title: 'Create pricing section',
            description: 'Display pricing tiers with comparison table.',
            code: `<section class="pricing">
    <h2>Choose Your Plan</h2>
    <div class="pricing-cards">
        <div class="price-card">
            <h3>Basic</h3>
            <p class="price">$9<span>/month</span></p>
            <ul>
                <li>Feature 1</li>
                <li>Feature 2</li>
                <li>Feature 3</li>
            </ul>
            <button>Choose Plan</button>
        </div>
        <!-- Add more pricing cards -->
    </div>
</section>`
          },
          {
            title: 'Style the landing page',
            description: 'Apply modern CSS styling with animations and responsiveness.',
            code: `body {
    font-family: 'Segoe UI', sans-serif;
    margin: 0;
    color: #333;
}

.hero {
    text-align: center;
    padding: 100px 20px;
    background: linear-gradient(to right, #4facfe 0%, #00f2fe 100%);
    color: white;
}

.cta-btn {
    background: white;
    color: #4facfe;
    padding: 15px 40px;
    border: none;
    border-radius: 50px;
    font-size: 18px;
    cursor: pointer;
    transition: transform 0.3s;
}

.cta-btn:hover {
    transform: scale(1.05);
}`
          },
          {
            title: 'Add testimonials and footer',
            description: 'Include social proof and contact information.',
            code: `<section class="testimonials">
    <h2>What Our Customers Say</h2>
    <div class="testimonial">
        <p>"This product changed my life!"</p>
        <span>- Happy Customer</span>
    </div>
</section>

<footer>
    <p>&copy; 2024 Your Company. All rights reserved.</p>
    <div class="social-links">
        <!-- Add social media links -->
    </div>
</footer>`
          }
        ],
        tips: [
          'Use a clear value proposition in your headline',
          'Keep the design clean and focused',
          'Place your CTA above the fold',
          'Use contrasting colors for buttons',
          'Add social proof (testimonials, logos)',
          'Optimize images for faster loading'
        ]
      }
    }

    // Blog
    if (topicLower.includes('blog')) {
      return {
        steps: [
          {
            title: 'Set up HTML structure',
            description: 'Create the basic layout for a blog website.',
            code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Blog</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="wrapper">
        <!-- Content here -->
    </div>
</body>
</html>`
          },
          {
            title: 'Create header with navigation',
            description: 'Build a header with blog title and navigation menu.',
            code: `<header class="site-header">
    <div class="container">
        <h1 class="blog-title">My Amazing Blog</h1>
        <nav>
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#categories">Categories</a></li>
            </ul>
        </nav>
    </div>
</header>`
          },
          {
            title: 'Build blog post grid',
            description: 'Create a responsive grid to display blog posts.',
            code: `<main class="blog-posts">
    <article class="post-card">
        <img src="post-image.jpg" alt="Post title">
        <div class="post-content">
            <span class="post-date">January 1, 2024</span>
            <h2>Blog Post Title</h2>
            <p>Excerpt of the blog post goes here...</p>
            <a href="#" class="read-more">Read More →</a>
        </div>
    </article>
    <!-- Repeat for more posts -->
</main>`
          },
          {
            title: 'Add sidebar',
            description: 'Include a sidebar with search, categories, and popular posts.',
            code: `<aside class="sidebar">
    <div class="widget">
        <h3>Search</h3>
        <input type="search" placeholder="Search posts...">
    </div>
    <div class="widget">
        <h3>Categories</h3>
        <ul>
            <li><a href="#">Technology</a></li>
            <li><a href="#">Design</a></li>
            <li><a href="#">Lifestyle</a></li>
        </ul>
    </div>
</aside>`
          },
          {
            title: 'Style with CSS',
            description: 'Apply modern styling to your blog.',
            code: `body {
    font-family: Georgia, serif;
    line-height: 1.8;
    color: #333;
    background: #f5f5f5;
}

.blog-posts {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
    gap: 2rem;
    padding: 2rem;
}

.post-card {
    background: white;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
    transition: transform 0.3s;
}

.post-card:hover {
    transform: translateY(-5px);
}`
          },
          {
            title: 'Create single post template',
            description: 'Design the layout for individual blog post pages.',
            code: `<article class="single-post">
    <header class="post-header">
        <h1>Full Blog Post Title</h1>
        <div class="post-meta">
            <span>By Author Name</span>
            <span>January 1, 2024</span>
        </div>
    </header>
    <img src="featured-image.jpg" alt="Post" class="featured-image">
    <div class="post-body">
        <p>Your blog post content goes here...</p>
    </div>
</article>`
          }
        ],
        tips: [
          'Use readable fonts (serif for body text works well)',
          'Keep line length between 50-75 characters',
          'Add proper spacing between elements',
          'Include share buttons on posts',
          'Implement pagination for multiple posts',
          'Make images responsive with max-width: 100%'
        ]
      }
    }

    // Default generic instructions
    return {
      steps: [
        {
          title: 'Plan your website structure',
          description: `Before coding, outline what ${topic} needs: navigation, main sections, and key features. Create a simple sketch or wireframe.`,
        },
        {
          title: 'Set up HTML foundation',
          description: 'Create an index.html file with proper DOCTYPE, meta tags, and basic structure.',
          code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${topic}</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <!-- Your content here -->
</body>
</html>`
        },
        {
          title: 'Build semantic HTML structure',
          description: 'Use semantic HTML5 elements like header, nav, main, section, and footer to organize your content logically.',
          code: `<header>
    <nav><!-- Navigation --></nav>
</header>
<main>
    <section><!-- Main content --></section>
</main>
<footer><!-- Footer --></footer>`
        },
        {
          title: 'Create CSS stylesheet',
          description: 'Set up a style.css file with reset, variables, and base styles.',
          code: `* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

:root {
    --primary-color: #3498db;
    --secondary-color: #2ecc71;
    --text-color: #333;
}

body {
    font-family: 'Arial', sans-serif;
    line-height: 1.6;
    color: var(--text-color);
}`
        },
        {
          title: 'Style key sections',
          description: `Design and style the main sections for ${topic} using CSS. Focus on layout, colors, and typography.`,
          code: `.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}

.section {
    padding: 60px 0;
}

h1, h2, h3 {
    margin-bottom: 1rem;
}`
        },
        {
          title: 'Make it responsive',
          description: 'Add media queries to ensure your page looks good on all devices.',
          code: `@media (max-width: 768px) {
    .container {
        padding: 0 15px;
    }

    .section {
        padding: 40px 0;
    }

    /* Adjust layouts for mobile */
}`
        },
        {
          title: 'Add interactivity with JavaScript',
          description: 'Enhance user experience with JavaScript for dynamic features.',
          code: `// Example: Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
    });
});`
        },
        {
          title: 'Optimize and test',
          description: 'Test your page across different browsers and devices. Optimize images, minify CSS/JS, and check loading speed.',
        }
      ],
      tips: [
        'Start with mobile-first design approach',
        'Use meaningful class names and comments',
        'Validate your HTML and CSS',
        'Optimize images for web (compress and resize)',
        'Test on multiple browsers and devices',
        'Consider accessibility (alt tags, ARIA labels)',
        'Add meta tags for SEO',
        'Use version control (Git) to track changes'
      ]
    }
  }

  return (
    <div className="container">
      <header className="header">
        <h1>Web Page Instruction Generator</h1>
        <p>AI-powered tool to create step-by-step guides for building web pages</p>
      </header>

      <div className="card">
        <div className="input-section">
          <label htmlFor="topic">What type of web page do you want to create?</label>
          <textarea
            id="topic"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            placeholder="e.g., Portfolio website, Landing page, Blog, E-commerce site, etc."
            rows={3}
          />
        </div>

        <div className="input-section">
          <label htmlFor="complexity">Skill Level</label>
          <select
            id="complexity"
            value={complexity}
            onChange={(e) => setComplexity(e.target.value)}
          >
            <option value="beginner">Beginner</option>
            <option value="intermediate">Intermediate</option>
            <option value="advanced">Advanced</option>
          </select>
        </div>

        <button
          className="button"
          onClick={generateInstructions}
          disabled={!topic.trim() || loading}
        >
          {loading ? 'Generating Instructions...' : 'Generate Instructions'}
        </button>
      </div>

      {loading && (
        <div className="card">
          <div className="loading">
            <div className="spinner"></div>
            <p>Creating your custom instructions...</p>
          </div>
        </div>
      )}

      {instructions && !loading && (
        <div className="card instructions">
          <h2>Step-by-Step Instructions</h2>

          {instructions.steps.map((step, index) => (
            <div key={index} className="step">
              <div>
                <span className="step-number">{index + 1}</span>
                <span className="step-title">{step.title}</span>
              </div>
              <p className="step-description">{step.description}</p>
              {step.code && (
                <pre className="step-code">{step.code}</pre>
              )}
            </div>
          ))}

          {instructions.tips.length > 0 && (
            <div className="tips">
              <h3>💡 Pro Tips</h3>
              <ul>
                {instructions.tips.map((tip, index) => (
                  <li key={index}>{tip}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  )
}
