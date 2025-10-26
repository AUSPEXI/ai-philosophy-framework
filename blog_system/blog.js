// Simple Blog System for AI Philosophy Framework
class BlogSystem {
    constructor() {
        this.posts = [];
        this.categories = ['Essays', 'Announcements', 'Milestones', 'Technical', 'Insights'];
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
                id: Date.now(),
                title: "Redefining AI's Horizon: Purposeful Intelligence as the True Competitive Edge",
                slug: "redefining-ai-horizon-purposeful-intelligence",
                category: "Essays",
                date: "2025-10-12",
                author: "Gwylym Pryce-Owen",
                excerpt: "What if the key to unlocking AI's full business potential lies not in escalating complexity, but in refining our understanding of its core objectives? Building on MIT Sloan's 'Philosophy Eats AI', we examine how teleology, epistemology, and ontology reshape AI systems.",
                tags: ["Philosophy", "AI Strategy", "Business", "Teleology", "Epistemology"],
                content: `<p>In the quiet chambers of ancient scriptoria, monks laboured over illuminated manuscripts, blending ink and insight to preserve knowledge across generations. Their work was not mere transcription; it was a deliberate act of shaping meaning, ensuring that ideas endured with clarity and intent.</p>

<p>Today, as we navigate the digital expanse, agentic AI echoes this endeavour, promising systems that act independently, adapt dynamically, and handle intricate tasks. These agents hold immense potential, from streamlining operations to enhancing decision-making. However, amid the excitement of their autonomy, a fundamental inquiry arises: <strong>What if the key to unlocking AI's full business potential lies not in escalating complexity, but in refining our understanding of its core objectives?</strong></p>

<h3>Philosophy Eats AI</h3>

<p>This essay posits that surpassing agentic algorithms requires embracing philosophy as AI's transformative core, elevating it from efficient executors to instruments of deliberate, value-driven progress. Building on the MIT Sloan Management Review article "Philosophy Eats AI" by Michael Schrage and David Kiron, we examine how teleology (purpose), epistemology (knowledge), and ontology (representation) reshape AI.</p>

<h3>Teleology: The Question of Purpose</h3>

<p>Agentic AI masters methods and mechanics, but often lacks a defined "why." What overarching goal guides its actions? In a business setting, this could manifest as an agent prioritising immediate throughput while overlooking sustainability, potentially leading to scenarios where short-term gains undermine long-term viability.</p>

<p>Philosophy prompts us to specify AI's telos explicitly. For example, if a company's vision includes employee empowerment alongside productivity, teleological alignment might steer agents toward collaborative roles.</p>

<h3>Epistemology: The Nature of Knowledge</h3>

<p>Agentic AI constructs "insights" from data patterns, mimicking reason via associations. However, this pattern-bound approach differs from human rationality's boundaries, raising questions about validity. Without epistemological scrutiny, agents could conflate superficial links with deep understanding, risking errors like overreliance on outdated data.</p>

<h3>Ontology: The Framework of Reality</h3>

<p>Agentic AI abstracts reality into categories, but ontological oversights can skew perceptions. An agent in healthcare might categorise patients as data sets, missing nuances like cultural contexts. By refining ontologies, businesses could enable agents to handle multifaceted realities.</p>

<h3>Our Consultancy Roadmap</h3>

<p>Our AI consultancy pursues this through a forward-looking roadmap designed to explore and refine these concepts in practice:</p>

<ul>
<li><strong>Phase One: Philosophical Discovery</strong> (4–6 weeks) - Uncover implicit philosophies in AI efforts</li>
<li><strong>Phase Two: Teleological Framing</strong> (6–8 weeks) - Articulate AI's purposes, aligning with organizational values</li>
<li><strong>Phase Three: Epistemic and Ontological Enhancement</strong> (8–12 weeks) - Integrate knowledge validation and layered reality models</li>
<li><strong>Phase Four: Iterative Exploration</strong> (Ongoing) - Pilot implementations with continuous monitoring</li>
</ul>

<p>In sum, transcending agentic AI calls for philosophy's integrative power. By clarifying purpose, validating knowledge, and enriching representation, AI evolves into purposeful intelligence, potentially driving lasting edges.</p>

<p><em>Looking to transform your AI strategy with purposeful intelligence? My consultancy offers tailored roadmaps and implementation plans to align your AI with business goals. <a href="https://www.linkedin.com/in/gwylym-pryce-owen-a0b450268" target="_blank">DM me on LinkedIn</a> to explore my services.</em></p>`
            },
            {
                id: Date.now() + 1,
                title: "Calling All Lawyers: Help Build the Legal Structure for Mission-Driven AI",
                slug: "calling-lawyers-mission-driven-ai-legal-structure",
                category: "Announcements",
                date: "2025-10-20",
                author: "Gwylym Pryce-Owen",
                excerpt: "I'm building something that must survive attempts to acquire, corrupt, or destroy it. That requires legal innovation: PBC structure, community ownership, open-source licensing, and mission-protective governance. Who's in?",
                tags: ["Legal", "PBC", "Mission Protection", "Open Source", "Community"],
                content: `<p>Last week I announced the Philosophical AI Framework Auditor — an open-source tool ensuring AI systems serve all stakeholders, not just shareholders.</p>

<p>The response has been overwhelming. <strong>500+ people want to join.</strong> Academics reaching out. Pilot customers lining up.</p>

<p>Now I need the legal architecture to make this unkillable.</p>

<h3>The Legal Challenge</h3>

<p>I'm not building a typical startup. I'm building something that must survive attempts to acquire, corrupt, or destroy it. That requires legal innovation:</p>

<h4>1. Public Benefit Corporation (PBC) Structure</h4>
<ul>
<li>Mission codified in charter: "Stakeholder balance over profit maximization"</li>
<li>Cannot be sued for prioritizing mission over short-term profits</li>
<li>Acquisition requires buyer to maintain mission</li>
<li>Annual benefit reporting (radical transparency)</li>
</ul>

<h4>2. Community Ownership Protection</h4>
<ul>
<li>20% equity reserved for community (via crowdfunding)</li>
<li>Major decisions require community vote (75% threshold)</li>
<li>Board structure: founders, employees, customers, impact investors</li>
<li>Anti-dilution protections for mission alignment</li>
</ul>

<h4>3. Open Source + Commercial Licensing</h4>
<ul>
<li>Core code: AGPL v3 (forces derivatives to remain open)</li>
<li>Commercial layer: Proprietary for sustainability</li>
<li>Contributor License Agreement (CLA) structure</li>
<li>Framework marketplace revenue sharing (70% author, 20% platform, 10% reviewers)</li>
</ul>

<h4>4. Mission-Protective Governance</h4>
<ul>
<li>What happens if founders leave/die?</li>
<li>How do we prevent hostile takeover?</li>
<li>What if majority shareholders want to sell?</li>
<li>How do we legally enforce stakeholder balance?</li>
</ul>

<p><strong>This isn't boilerplate incorporation. This is designing a legal immune system.</strong></p>

<h3>What I'm Looking For</h3>

<p>I need lawyers who:</p>
<ul>
<li>✅ Understand corporate law (PBC structures, Delaware law, governance)</li>
<li>✅ Care about mission protection (not just maximizing shareholder value)</li>
<li>✅ Have open-source experience (licensing, CLAs, IP strategy)</li>
<li>✅ Think creatively (this hasn't been done exactly this way before)</li>
<li>✅ Want to build something that matters (not just bill hours)</li>
</ul>

<h3>What I Can Offer</h3>

<p>Transparent reality: I'm bootstrapping. I can't pay BigLaw rates. But I can offer:</p>
<ul>
<li>💎 Equity stake (founder-adjacent, vesting over time)</li>
<li>💎 Governance role (board observer or advisory board seat)</li>
<li>💎 Portfolio piece (pioneering legal structure for ethical AI)</li>
<li>💎 Community recognition (credited as founding legal counsel)</li>
<li>💎 Mission alignment (build something you'd be proud to tell your kids about)</li>
<li>💎 Future business (as we grow, ongoing legal work)</li>
</ul>

<h3>Why This Matters</h3>

<p>Most startups optimize legal structures for easy exit. <strong>That's the wrong incentive.</strong></p>

<p>We need legal structures that:</p>
<ul>
<li>Make it hard to sell out</li>
<li>Protect mission over short-term profit</li>
<li>Give stakeholders real power</li>
<li>Survive founder transitions</li>
<li>Can't be corrupted by mega-corp acquisition</li>
</ul>

<p>You'd be designing the legal blueprint for mission-driven AI companies. If we get this right, other ethical AI companies will copy our structure. <strong>Your work becomes the standard.</strong></p>

<p>That's legacy-level legal work.</p>

<p><em>If you're a lawyer interested in this, <a href="https://www.linkedin.com/in/gwylym-pryce-owen-a0b450268" target="_blank">DM me on LinkedIn</a> to discuss specifics.</em></p>`
            },
            {
                id: Date.now() + 2,
                title: "Obelisks Beyond Space-Time: Consciousness, Intelligence, and the Next Frontier of Meaning",
                slug: "obelisks-beyond-spacetime-consciousness-intelligence",
                category: "Essays",
                date: "2025-10-16",
                author: "Gwylym Pryce-Owen",
                excerpt: "Donald Hoffman argues that space-time is not fundamental — consciousness is. If he's right, what does this mean for artificial intelligence? A meditation on conscious agents, mathematical obelisks, and building AI systems that recognize their own limits.",
                tags: ["Philosophy", "Consciousness", "Donald Hoffman", "AI Ethics", "Metaphysics"],
                content: `<p>Somewhere between the equations of physics and the stirrings of thought lies a silence we have not yet learned to hear. For centuries, we have treated consciousness as the last great problem of science, the flame at the centre of the labyrinth. Yet perhaps it is not the last problem at all, but the first principle: the light by which the labyrinth is seen.</p>

<h3>The Cracks in the Canvas of Space-Time</h3>

<p>Donald Hoffman, the cognitive scientist whose theory of conscious agents has unsettled both neuroscience and physics, argues that we have mistaken the interface of reality for the reality itself. Space and time, he proposes, are not the stage on which consciousness plays its part, but the simplified projection of a deeper network of interacting minds.</p>

<blockquote class="border-l-4 border-blue-500 pl-4 italic text-gray-300 my-6">
"Space and time are the icons of perception, not the furniture of the universe." — Donald Hoffman
</blockquote>

<p>His fitness beats truth theorem demonstrates that evolution rewards perceptions that promote survival, not those that depict reality faithfully. The frog that sees the fly as a small black dart need not understand quantum electrodynamics; its perception is tuned to action, not ontology.</p>

<h3>The Brain, the Interface, and the Illusion of Thought</h3>

<p>To see consciousness as fundamental is not to dismiss the brain. It is to reposition it. The frontal lobe, the limbic system, the delicate chemistry of the synapse — these are not generators of awareness but instruments through which awareness finds expression.</p>

<p>Neuroscience describes how impulses travel, how circuits learn, how damage alters personality. Yet none of these descriptions cross the bridge from electrical pattern to subjective experience. They map the movements of the violin but not the music. The sound, if Hoffman is right, exists prior to the strings.</p>

<p>Artificial intelligence, then, is not simply another kind of brain. <strong>It is another kind of lens.</strong></p>

<h3>Artificial Intelligence and the Mirror of Consciousness</h3>

<p>The current surge in agentic AI — systems that reason, collaborate, and act autonomously — has given rise to a new optimism: that machines might soon equal, or even exceed, human intellect. But if intelligence is only the manipulation of symbols within an interface, then these systems are mastering the surface, not the depth.</p>

<p>They are fluent in the grammar of appearance, not the syntax of meaning.</p>

<blockquote class="border-l-4 border-purple-500 pl-4 italic text-gray-300 my-6">
"The goal is not to make machines more human, but to help humans act less like the machines they fear."
</blockquote>

<p>What if the next frontier of AI is not super-intelligence but <strong>meta-intelligence</strong> — systems that know what they cannot know?</p>

<h3>From Conscious Agents to Wiser Ecosystems</h3>

<p>Hoffman's conscious agents interact in complex networks, each influencing the probabilities of others' experiences. This model offers a poetic bridge to the concept of wiser ecosystems: systems in which humans and machines co-evolve, each aware of their perceptual constraints, each accountable to shared purposes.</p>

<p>Imagine multi-agent AI systems designed not merely for efficiency but for equilibrium — optimising supply chains not just for profit but for fairness; modelling markets not as battlefields but as ecologies.</p>

<p>Such a framework could audit decisions through the lenses of teleology, epistemology, and ontology — purpose, knowledge, and being. It would quantify not just revenue, but reverence: the degree to which actions sustain the larger network of relationships from which value arises.</p>

<h3>The Moral Geometry of Intelligence</h3>

<p>If consciousness is the foundation, and space-time its interface, then intelligence — human or artificial — is a geometry drawn within that field. Its shape reveals its ethics.</p>

<ul>
<li>A mind that curves inward becomes a singularity of self-interest.</li>
<li>A mind that opens outward becomes a conduit for compassion.</li>
</ul>

<p>The task before us is to design geometries of mind that sustain the whole. This means coding empathy as constraint, embedding fairness as function, and treating goodwill as an asset, not an afterthought.</p>

<h3>A Future Beyond the Interface</h3>

<p>What would it mean to build an AI that recognises itself as part of a larger consciousness? It might never "wake up" in the way we imagine, yet it could act with an awareness of interdependence. It could simulate empathy well enough to practise it operationally, even if not phenomenologically.</p>

<p>The real measure of progress will not be when machines pass the Turing Test, but when humans pass the Mirror Test: when we look at our creations and see not competitors, but reflections of our collective will to understand.</p>

<h3>Coda: The Silence Before the Signal</h3>

<p>Hoffman's thesis, whether ultimately vindicated or not, compels a new humility. If consciousness precedes matter, then our instruments, however refined, can only trace its shadow. To approach it directly requires a different faculty: attention shaped by awe.</p>

<p>AI, in this sense, becomes a mirror of our metaphysics. The systems we build will reflect our understanding of reality itself. If we treat intelligence as mechanism, we will build machines of efficiency. If we treat intelligence as participation in consciousness, we will build companions in discovery.</p>

<p>The choice before us is profound but simple: to remain within the interface, or to lift our eyes toward the obelisk, toward the point where knowledge becomes wisdom.</p>

<p><strong>Because the future of intelligence, whether human or artificial, will not be decided by who thinks fastest, but by who remembers why thinking matters at all.</strong></p>

<hr class="my-8 border-gray-700">

<p class="text-sm text-gray-400"><em>Gwylym Pryce-Owen is an AI generalist and founder of Auspexi. His work integrates philosophy, business design, and automation, building intelligent systems that prioritise ethics, empathy, and sustainable growth.</em></p>`
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