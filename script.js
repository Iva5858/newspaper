document.addEventListener('DOMContentLoaded', function() {
    // Sample article data (in a real application, this would come from a backend API)
    const articles = [
        {
            id: 1,
            title: "Exploring Paris: Hidden Gems for Students",
            excerpt: "Discover the lesser-known corners of the City of Light that every student should experience.",
            content: `<p>Paris, the City of Light, is a dream destination for many students. While the Eiffel Tower and the Louvre are must-see attractions, there's so much more to explore in this vibrant city. This article will guide you through some of the hidden gems that every student should experience during their time in Paris.</p>

            <h2>1. Le Marais: A Trendy Neighborhood</h2>
            <img src="images/le-marais.jpg" alt="Le Marais street scene">
            <p>Le Marais is a historic district that has transformed into one of the trendiest neighborhoods in Paris. With its narrow streets, boutique shops, and vibrant nightlife, it's a perfect place for students to explore and immerse themselves in Parisian culture.</p>

            <h2>2. Musée Carnavalet: A Journey Through Parisian History</h2>
            <p>While the Louvre gets all the attention, the Musée Carnavalet offers a fascinating look at the history of Paris. The best part? Admission is free, making it a perfect destination for budget-conscious students.</p>

            <h2>3. Canal Saint-Martin: Picnic Paradise</h2>
            <img src="images/canal-saint-martin.jpg" alt="Canal Saint-Martin">
            <p>On sunny days, join the locals for a picnic along the Canal Saint-Martin. This picturesque waterway is lined with trendy cafes and is the perfect spot to relax and people-watch.</p>

            <p>These are just a few of the many hidden gems Paris has to offer. By venturing off the beaten path, students can discover a side of Paris that many tourists miss, creating unforgettable memories and truly experiencing the essence of this magnificent city.</p>`,
            author: "John Doe",
            date: "May 15, 2024",
            image: "images/paris.jpg",
            tags: ["Paris", "Travel", "Student Life"],
            authorBio: "John Doe is a travel enthusiast and former exchange student who spent a year studying in Paris. He loves sharing insider tips about the City of Light.",
            authorEmail: "john.doe@example.com",
            authorSocial: [
                { platform: "twitter", url: "https://twitter.com/johndoe" },
                { platform: "instagram", url: "https://instagram.com/johndoe" }
            ],
            comments: [
                { name: "Alice", text: "Great article! I can't wait to visit Le Marais on my next trip.", date: "May 16, 2024" },
                { name: "Bob", text: "The Musée Carnavalet sounds fascinating. Thanks for the tip!", date: "May 17, 2024" }
            ]
        },
        {
            id: 2,
            title: "The Rise of Tech Startups in Lisbon",
            excerpt: "How Lisbon is becoming the new hub for tech entrepreneurs and what it means for students.",
            content: `<p>Lisbon, the capital of Portugal, is quickly becoming a hotspot for tech startups and entrepreneurs. This surge in innovation is creating exciting opportunities for students and recent graduates. Let's explore why Lisbon is attracting so much attention in the tech world and what this means for the city's student population.</p>

            <h2>The Perfect Storm for Startups</h2>
            <p>Several factors have contributed to Lisbon's rise as a tech hub:</p>
            <ul>
                <li>Affordable living costs compared to other European capitals</li>
                <li>High quality of life and beautiful weather</li>
                <li>Supportive government policies for startups</li>
                <li>A growing pool of talented developers and engineers</li>
            </ul>

            <h2>Opportunities for Students</h2>
            <img src="images/lisbon-startup.jpg" alt="Lisbon startup office">
            <p>The booming tech scene in Lisbon is creating numerous opportunities for students:</p>
            <ul>
                <li>Internships at innovative startups</li>
                <li>Networking events and tech meetups</li>
                <li>Entrepreneurship programs and incubators</li>
                <li>Collaboration between universities and tech companies</li>
            </ul>

            <p>As Lisbon continues to grow as a tech hub, students have a unique opportunity to be part of this exciting ecosystem. Whether you're interested in joining a startup, launching your own venture, or simply want to be part of an innovative community, Lisbon offers a wealth of possibilities for tech-savvy students.</p>`,
            author: "Jane Smith",
            date: "May 14, 2024",
            image: "images/test.jpeg",
            tags: ["Lisbon", "Technology", "Entrepreneurship"],
            authorBio: "Jane Smith is a tech journalist and startup consultant based in Lisbon. She has been covering the city's tech scene for the past five years.",
            authorEmail: "jane.smith@example.com",
            authorSocial: [
                { platform: "linkedin", url: "https://linkedin.com/in/janesmith" },
                { platform: "twitter", url: "https://twitter.com/janesmith" }
            ],
            comments: [
                { name: "Carlos", text: "As a computer science student in Lisbon, I can confirm that the opportunities here are amazing!", date: "May 15, 2024" },
                { name: "Emma", text: "I'm considering studying abroad in Lisbon now. This article was very helpful!", date: "May 16, 2024" }
            ]
        },
        {
            title: "Berlin's Thriving Art Scene: A Student's Guide",
            excerpt: "From underground galleries to world-renowned museums, explore Berlin's diverse art landscape.",
            author: "Alex Johnson",
            date: "May 13, 2024",
            image: "images/test.jpeg",
            tags: ["Berlin", "Art", "Culture"]
        },
        {
            title: "Sustainable Living: Tips for Eco-Conscious Students",
            excerpt: "Simple ways to reduce your environmental impact while studying abroad.",
            author: "Emma Green",
            date: "May 12, 2024",
            image: "images/test.jpeg",
            tags: ["Sustainability", "Lifestyle", "Student Tips"]
        }
    ];

    // Function to create article preview HTML
    function createArticlePreview(article) {
        return `
            <article class="article-preview">
                <img src="${article.image}" alt="${article.title}" class="article-image">
                <div class="content">
                    <h3><a href="article.html?id=${article.id}">${article.title}</a></h3>
                    <p>${article.excerpt}</p>
                    <div class="meta">
                        <span>By ${article.author}</span> | <span>${article.date}</span>
                    </div>
                    <div class="tags">
                        ${article.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                    </div>
                </div>
            </article>
        `;
    }

    // Populate article grid
    const articleGrid = document.querySelector('.article-grid');
    articles.forEach(article => {
        articleGrid.innerHTML += createArticlePreview(article);
    });

    // Search functionality
    const searchInput = document.querySelector('.search-bar input');
    searchInput.addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase();
        const filteredArticles = articles.filter(article => 
            article.title.toLowerCase().includes(searchTerm) ||
            article.excerpt.toLowerCase().includes(searchTerm) ||
            article.tags.some(tag => tag.toLowerCase().includes(searchTerm))
        );
        articleGrid.innerHTML = '';
        filteredArticles.forEach(article => {
            articleGrid.innerHTML += createArticlePreview(article);
        });
    });

    // Newsletter subscription
    const newsletterForm = document.querySelector('.newsletter-form');
    newsletterForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const email = this.querySelector('input[type="email"]').value;
        // In a real application, you would send this email to your server
        console.log(`Subscribed: ${email}`);
        alert('Thank you for subscribing to our newsletter!');
        this.reset();
    });

    // Dropdown menu functionality for mobile
    const dropdowns = document.querySelectorAll('.dropdown');
    dropdowns.forEach(dropdown => {
        dropdown.addEventListener('click', function(e) {
            if (window.innerWidth <= 768) {
                e.preventDefault();
                this.querySelector('.dropdown-content').classList.toggle('show');
            }
        });
    });

    // Close dropdowns when clicking outside
    window.addEventListener('click', function(e) {
        if (!e.target.matches('.dropdown') && !e.target.closest('.dropdown')) {
            dropdowns.forEach(dropdown => {
                dropdown.querySelector('.dropdown-content').classList.remove('show');
            });
        }
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Lazy loading images
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const image = entry.target;
                    image.src = image.dataset.src;
                    image.classList.remove('lazy');
                    imageObserver.unobserve(image);
                }
            });
        });

        document.querySelectorAll('img.lazy').forEach(img => {
            imageObserver.observe(img);
        });
    } else {
        // Fallback for browsers that don't support IntersectionObserver
        document.querySelectorAll('img.lazy').forEach(img => {
            img.src = img.dataset.src;
            img.classList.remove('lazy');
        });
    }

    // Add a scroll-to-top button
    const scrollToTopBtn = document.createElement('button');
    scrollToTopBtn.innerHTML = '↑';
    scrollToTopBtn.className = 'scroll-to-top';
    document.body.appendChild(scrollToTopBtn);

    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 100) {
            scrollToTopBtn.classList.add('show');
        } else {
            scrollToTopBtn.classList.remove('show');
        }
    });

    scrollToTopBtn.addEventListener('click', () => {
        window.scrollTo({top: 0, behavior: 'smooth'});
    });

    // Add smooth scrolling for anchor links on the About Us page
    if (window.location.pathname.includes('about.html')) {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });
    }

    // Handle contact form submission
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            // Here you would typically send the form data to your server
            // For this example, we'll just log it to the console
            const formData = new FormData(contactForm);
            console.log('Form submitted with the following data:');
            for (let [key, value] of formData.entries()) {
                console.log(`${key}: ${value}`);
            }
            alert('Thank you for your message. We will get back to you soon!');
            contactForm.reset();
        });
    }

    // Function to load and display full article
    function loadArticle() {
        console.log("loadArticle function called");
        const urlParams = new URLSearchParams(window.location.search);
        const articleId = parseInt(urlParams.get('id'));
        console.log("Article ID:", articleId);
        
        if (articleId) {
            const article = articles.find(a => a.id === articleId);
            console.log("Found article:", article);
            
            if (article) {
                document.title = `${article.title} - Grad Media`;
                document.getElementById('article-title').textContent = article.title;
                document.getElementById('article-author').textContent = `By ${article.author}`;
                document.getElementById('article-date').textContent = article.date;
                document.getElementById('article-content').innerHTML = article.content;
                document.getElementById('author-bio').textContent = article.authorBio;
                document.getElementById('author-email').textContent = `Email: ${article.authorEmail}`;
                document.getElementById('author-social').innerHTML = article.authorSocial.map(social => 
                    `<a href="${social.url}" target="_blank"><i class="fab fa-${social.platform}"></i></a>`
                ).join('');
                document.getElementById('article-tags').innerHTML = article.tags.map(tag => 
                    `<span class="tag">${tag}</span>`
                ).join('');
                
                // Load more articles by the same author
                const moreArticles = articles.filter(a => a.author === article.author && a.id !== articleId);
                document.getElementById('more-articles').innerHTML = moreArticles.map(a => 
                    `<li><a href="article.html?id=${a.id}">${a.title}</a></li>`
                ).join('');
                
                // Load comments
                const commentsListElement = document.getElementById('comments-list');
                if (article.comments && article.comments.length > 0) {
                    commentsListElement.innerHTML = article.comments.map(comment => `
                        <div class="comment">
                            <h4>${comment.name}</h4>
                            <p>${comment.text}</p>
                            <span class="comment-date">${comment.date}</span>
                        </div>
                    `).join('');
                } else {
                    commentsListElement.innerHTML = '<p>No comments yet.</p>';
                }
                console.log("Article populated");
            } else {
                console.error('Article not found');
            }
        } else {
            console.error('No article ID in URL');
        }
    }

    // Handle comment form submission
    const commentForm = document.getElementById('comment-form');
    if (commentForm) {
        commentForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const name = document.getElementById('commenter-name').value;
            const email = document.getElementById('commenter-email').value;
            const text = document.getElementById('comment-text').value;
            
            // In a real application, you would send this data to your server
            console.log('New comment:', { name, email, text });
            alert('Thank you for your comment!');
            commentForm.reset();
        });
    }

    // Load article if on the article page
    if (window.location.pathname.includes('article.html')) {
        console.log("Article page detected");
        loadArticle();
    }
});
