// Simple Blog System for AI Philosophy Framework
class BlogSystem {
    constructor() {
        this.posts = [];
        this.categories = ['Essays', 'Project Updates', 'Milestones', 'Insights'];
        this.loadPosts();
    }

    // Load posts from JSON file or localStorage
    loadPosts() {
        try {
            const savedPosts = localStorage.getItem('philosophyBlogPosts');
            if (savedPosts) {
                this.posts = JSON.parse(savedPosts);
            } else {
                // Load default posts
                this.posts = this.getDefaultPosts();
                this.savePosts();
            }
        } catch (error) {
            console.error('Error loading posts:', error);
            this.posts = this.getDefaultPosts();
        }
    }

    // Save posts to localStorage
    savePosts() {
        try {
            localStorage.setItem('philosophyBlogPosts', JSON.stringify(this.posts));
        } catch (error) {
            console.error('Error saving posts:', error);
        }
    }

    // Get default posts
    getDefaultPosts() {
        return [
            {
                id: 1,
                title: "Introducing the AI Philosophy Framework",
                slug: "introducing-ai-philosophy-framework",
                category: "Project Updates",
                date: "2024-10-25",
                author: "Gwylym Pryce-Owen",
                excerpt: "A new approach to understanding AI systems through philosophical analysis.",
                content: `
                    <p>Today marks the beginning of an ambitious journey to bridge the gap between artificial intelligence and philosophical understanding. The AI Philosophy Framework represents a novel approach to analyzing AI systems through three fundamental philosophical dimensions.</p>
                    
                    <h3>The Three Pillars</h3>
                    <p>Our framework is built on three core philosophical engines:</p>
                    <ul>
                        <li><strong>Teleological Analysis</strong> - Understanding the purpose and goals of AI systems</li>
                        <li><strong>Epistemological Analysis</strong> - Examining how AI systems acquire and process knowledge</li>
                        <li><strong>Ontological Analysis</strong> - Investigating the nature of AI entities and their existence</li>
                    </ul>
                    
                    <p>This framework isn't just theoretical - it's a practical tool for developers, researchers, and ethicists to better understand the AI systems they create and interact with.</p>
                    
                    <h3>What's Next</h3>
                    <p>Over the coming weeks, we'll be sharing insights from our development process, philosophical discoveries, and practical applications of the framework. Stay tuned for deep dives into each philosophical dimension and real-world case studies.</p>
                `,
                tags: ["AI", "Philosophy", "Framework", "Introduction"]
            },
            {
                id: 2,
                title: "Week 1: Building in Public",
                slug: "week-1-building-in-public",
                category: "Milestones",
                date: "2024-10-25",
                author: "Gwylym Pryce-Owen",
                excerpt: "Our first week of transparent development and community building.",
                content: `
                    <p>This week marks our commitment to building in public. We believe that transparency in the development process not only builds trust but also leads to better outcomes through community feedback and collaboration.</p>
                    
                    <h3>What We've Accomplished</h3>
                    <ul>
                        <li>✅ Core framework architecture designed and implemented</li>
                        <li>✅ Three philosophical engines built and tested</li>
                        <li>✅ Web interface with black and white theme deployed</li>
                        <li>✅ Community channels established (Discord, LinkedIn, Substack)</li>
                        <li>✅ Documentation and testing framework completed</li>
                    </ul>
                    
                    <h3>Challenges Faced</h3>
                    <p>The biggest challenge this week was balancing philosophical rigor with practical implementation. How do you translate abstract philosophical concepts into concrete code? We solved this by creating structured analysis templates that guide the philosophical inquiry while remaining flexible enough for diverse AI systems.</p>
                    
                    <h3>Community Response</h3>
                    <p>The response has been overwhelmingly positive. We've had inquiries from researchers, developers, and ethicists who are excited about the potential applications of philosophical analysis in AI development.</p>
                    
                    <h3>Next Week's Goals</h3>
                    <ul>
                        <li>🎯 Beta testing with select community members</li>
                        <li>🎯 Integration with popular AI workflow tools</li>
                        <li>🎯 First case study publication</li>
                        <li>🎯 Community feedback integration</li>
                    </ul>
                `,
                tags: ["Building in Public", "Milestones", "Community", "Progress"]
            }
        ];
    }

    // Get all posts
    getAllPosts() {
        return this.posts.sort((a, b) => new Date(b.date) - new Date(a.date));
    }

    // Get posts by category
    getPostsByCategory(category) {
        return this.posts.filter(post => post.category === category)
                         .sort((a, b) => new Date(b.date) - new Date(a.date));
    }

    // Get single post by slug
    getPostBySlug(slug) {
        return this.posts.find(post => post.slug === slug);
    }

    // Add new post
    addPost(postData) {
        const newPost = {
            id: Date.now(),
            slug: this.generateSlug(postData.title),
            date: new Date().toISOString().split('T')[0],
            ...postData
        };
        this.posts.push(newPost);
        this.savePosts();
        return newPost;
    }

    // Generate slug from title
    generateSlug(title) {
        return title.toLowerCase()
                   .replace(/[^a-z0-9 -]/g, '')
                   .replace(/\s+/g, '-')
                   .replace(/-+/g, '-')
                   .trim('-');
    }

    // Render blog posts list
    renderPostsList(containerId, category = null) {
        const container = document.getElementById(containerId);
        if (!container) return;

        const posts = category ? this.getPostsByCategory(category) : this.getAllPosts();
        
        container.innerHTML = posts.map(post => `
            <article class="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                <div class="flex items-center justify-between mb-4">
                    <span class="bg-gray-900 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        ${post.category}
                    </span>
                    <time class="text-gray-500 text-sm">${this.formatDate(post.date)}</time>
                </div>
                
                <h2 class="text-xl font-bold text-gray-900 mb-3">
                    <a href="#" onclick="blogSystem.showPost('${post.slug}')" class="hover:text-gray-700 transition-colors">
                        ${post.title}
                    </a>
                </h2>
                
                <p class="text-gray-600 mb-4">${post.excerpt}</p>
                
                <div class="flex items-center justify-between">
                    <div class="flex flex-wrap gap-2">
                        ${post.tags.map(tag => `
                            <span class="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                                ${tag}
                            </span>
                        `).join('')}
                    </div>
                    <a href="#" onclick="blogSystem.showPost('${post.slug}')" 
                       class="text-gray-900 font-semibold hover:text-gray-700 transition-colors">
                        Read More →
                    </a>
                </div>
            </article>
        `).join('');
    }

    // Show single post
    showPost(slug) {
        const post = this.getPostBySlug(slug);
        if (!post) return;

        const modal = document.getElementById('postModal');
        const modalContent = document.getElementById('modalContent');
        
        modalContent.innerHTML = `
            <div class="bg-white rounded-lg max-w-4xl mx-auto max-h-[90vh] overflow-y-auto">
                <div class="p-8">
                    <div class="flex items-center justify-between mb-6">
                        <span class="bg-gray-900 text-white px-3 py-1 rounded-full text-sm font-semibold">
                            ${post.category}
                        </span>
                        <button onclick="blogSystem.closePost()" class="text-gray-500 hover:text-gray-700">
                            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                            </svg>
                        </button>
                    </div>
                    
                    <h1 class="text-3xl font-bold text-gray-900 mb-4">${post.title}</h1>
                    
                    <div class="flex items-center text-gray-500 text-sm mb-6">
                        <span>By ${post.author}</span>
                        <span class="mx-2">•</span>
                        <time>${this.formatDate(post.date)}</time>
                    </div>
                    
                    <div class="prose prose-lg max-w-none text-gray-800">
                        ${post.content}
                    </div>
                    
                    <div class="mt-8 pt-6 border-t border-gray-200">
                        <div class="flex flex-wrap gap-2">
                            ${post.tags.map(tag => `
                                <span class="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                                    ${tag}
                                </span>
                            `).join('')}
                        </div>
                    </div>
                </div>
            </div>
        `;
        
        modal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
    }

    // Close post modal
    closePost() {
        const modal = document.getElementById('postModal');
        modal.classList.add('hidden');
        document.body.style.overflow = 'auto';
    }

    // Format date
    formatDate(dateString) {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateString).toLocaleDateString('en-US', options);
    }

    // Render categories filter
    renderCategoriesFilter(containerId) {
        const container = document.getElementById(containerId);
        if (!container) return;

        container.innerHTML = `
            <div class="flex flex-wrap gap-2 mb-8">
                <button onclick="blogSystem.filterByCategory(null)" 
                        class="category-filter active bg-gray-900 text-white px-4 py-2 rounded-lg font-semibold hover:bg-gray-800 transition-colors">
                    All Posts
                </button>
                ${this.categories.map(category => `
                    <button onclick="blogSystem.filterByCategory('${category}')" 
                            class="category-filter bg-gray-200 text-gray-700 px-4 py-2 rounded-lg font-semibold hover:bg-gray-300 transition-colors">
                        ${category}
                    </button>
                `).join('')}
            </div>
        `;
    }

    // Filter posts by category
    filterByCategory(category) {
        // Update active button
        document.querySelectorAll('.category-filter').forEach(btn => {
            btn.classList.remove('active', 'bg-gray-900', 'text-white');
            btn.classList.add('bg-gray-200', 'text-gray-700');
        });
        
        event.target.classList.add('active', 'bg-gray-900', 'text-white');
        event.target.classList.remove('bg-gray-200', 'text-gray-700');
        
        // Render filtered posts
        this.renderPostsList('blogPosts', category);
    }
}

// Initialize blog system
const blogSystem = new BlogSystem();

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    if (document.getElementById('blogPosts')) {
        blogSystem.renderCategoriesFilter('categoriesFilter');
        blogSystem.renderPostsList('blogPosts');
    }
});