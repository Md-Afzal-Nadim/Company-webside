    // Preloader
        window.addEventListener('load', function() {
            const preloader = document.getElementById('preloader');
            setTimeout(function() {
                preloader.classList.add('fade-out');
                setTimeout(function() {
                    preloader.style.display = 'none';
                }, 500);
            }, 1000);
        });

        // Mobile Menu Toggle
        const mobileMenuBtn = document.getElementById('mobileMenuBtn');
        const navMenu = document.getElementById('navMenu');

        mobileMenuBtn.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            this.querySelector('i').classList.toggle('fa-times');
            this.querySelector('i').classList.toggle('fa-bars');
        });

        // Close mobile menu when clicking on a link
        document.querySelectorAll('.nav-menu a').forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
                mobileMenuBtn.querySelector('i').classList.remove('fa-times');
                mobileMenuBtn.querySelector('i').classList.add('fa-bars');
            });
        });

        // Header scroll effect
        window.addEventListener('scroll', function() {
            const header = document.querySelector('header');
            const backToTop = document.getElementById('backToTop');
            
            if (window.scrollY > 100) {
                header.classList.add('scrolled');
                backToTop.classList.add('active');
            } else {
                header.classList.remove('scrolled');
                backToTop.classList.remove('active');
            }
        });

        // Product filter
        const filterBtns = document.querySelectorAll('.filter-btn');
        const productCards = document.querySelectorAll('.product-card');

        filterBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                // Remove active class from all buttons
                filterBtns.forEach(btn => btn.classList.remove('active'));
                // Add active class to clicked button
                this.classList.add('active');
                
                const filter = this.getAttribute('data-filter');
                
                productCards.forEach(card => {
                    if (filter === 'all' || card.getAttribute('data-category') === filter) {
                        card.style.display = 'block';
                    } else {
                        card.style.display = 'none';
                    }
                });
            });
        });

        // Testimonial slider (simple version)
        const testimonials = document.querySelectorAll('.testimonial-item');
        let currentTestimonial = 0;
        
        function showTestimonial(index) {
            testimonials.forEach((testimonial, i) => {
                testimonial.style.display = i === index ? 'block' : 'none';
            });
        }
        
        // Initialize first testimonial
        showTestimonial(currentTestimonial);
        
        // Auto rotate testimonials
        setInterval(function() {
            currentTestimonial = (currentTestimonial + 1) % testimonials.length;
            showTestimonial(currentTestimonial);
        }, 5000);

        // Chatbot functionality
        const chatbotToggle = document.getElementById('chatbotToggle');
        const chatbotContainer = document.getElementById('chatbotContainer');
        const chatbotClose = document.getElementById('chatbotClose');
        const chatbotMessages = document.getElementById('chatbotMessages');
        const userInput = document.getElementById('userInput');
        const sendMessage = document.getElementById('sendMessage');
        
        chatbotToggle.addEventListener('click', function() {
            chatbotContainer.classList.toggle('active');
        });
        
        chatbotClose.addEventListener('click', function() {
            chatbotContainer.classList.remove('active');
        });
        
        function addMessage(text, isUser) {
            const messageDiv = document.createElement('div');
            messageDiv.className = isUser ? 'chat-message user-message' : 'chat-message bot-message';
            messageDiv.textContent = text;
            chatbotMessages.appendChild(messageDiv);
            chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
        }
        
        function getBotResponse(message) {
            const lowerMessage = message.toLowerCase();
            
            if (lowerMessage.includes('hello') || lowerMessage.includes('hi')) {
                return "Hello! Welcome to All Construction Equipments. How can I assist you today?";
            } else if (lowerMessage.includes('product') || lowerMessage.includes('equipment')) {
                return "We manufacture various material handling equipment including:\n- Hydraulic Pallet Trucks (1-5 Ton)\n- Hydraulic Stackers\n- Scissor Lifts\n- Drum Lifters\n- Cylinder Trolleys";
            } else if (lowerMessage.includes('address') || lowerMessage.includes('location')) {
                return "We have two locations in New Delhi:\n1. G-32/1 Jasola Shaheen Bagh Near Central Bank, New Delhi 110025\n2. B - 438 Chhattarpur Extn. Near J.V.T.S. Garden, New Delhi 110074";
            } else if (lowerMessage.includes('contact') || lowerMessage.includes('phone')) {
                return "You can reach us at:\nPhone: +91-8920383141\nEmail: allconstructionequipments@gmail.com";
            } else if (lowerMessage.includes('about') || lowerMessage.includes('company')) {
                return "All Construction Equipments was founded in 2016. We specialize in manufacturing storage systems and material handling equipment with a monthly production capacity of 1000 tons.";
            } else {
                return "I'm sorry, I didn't understand that. You can ask about our products, company information, or contact details.";
            }
        }
        
        sendMessage.addEventListener('click', function() {
            const message = userInput.value.trim();
            if (message) {
                addMessage(message, true);
                userInput.value = '';
                
                setTimeout(() => {
                    const response = getBotResponse(message);
                    addMessage(response, false);
                }, 1000);
            }
        });
        
        userInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                sendMessage.click();
            }
        });

        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                if (targetId === '#') return;
                
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            });
        });

        // Form submission
        const contactForm = document.getElementById('contactForm');
        if (contactForm) {
            contactForm.addEventListener('submit', function(e) {
                e.preventDefault();
                
                // Get form data
                const formData = new FormData(this);
                
                // Simulate form submission (in a real scenario, you would use AJAX)
                alert('Thank you for your message! We will get back to you soon.');
                this.reset();
            });
        }
    