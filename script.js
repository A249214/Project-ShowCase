// Testimonials Data
const testimonials = [
    {
        id: 1,
        name: "Sarah Johnson",
        role: "CEO, TechStart Inc.",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
        text: "Exceptional work on our e-commerce platform. The attention to detail and modern design exceeded our expectations. Highly recommend for any frontend project."
    },
    {
        id: 2,
        name: "Michael Chen",
        role: "Product Manager, InnovateCo",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
        text: "The AI chat assistant they built for us has transformed our customer service. Fast, responsive, and beautifully designed. A true professional."
    },
    {
        id: 3,
        name: "Emily Rodriguez",
        role: "Founder, DesignHub",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
        text: "Outstanding portfolio website that perfectly captures our brand. The animations and interactions are smooth and engaging. Couldn't be happier!"
    },
    {
        id: 4,
        name: "David Park",
        role: "CTO, FinanceFlow",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
        text: "Delivered a complex crypto trading dashboard on time with all requested features. Technical expertise and communication were top-notch throughout."
    },
    {
        id: 5,
        name: "Lisa Thompson",
        role: "Marketing Director, GrowthCo",
        image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop",
        text: "The social media analytics dashboard they created has been invaluable for our team. Beautiful UI and powerful functionality. A pleasure to work with."
    },
    {
        id: 6,
        name: "James Wilson",
        role: "Startup Founder",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
        text: "Built our entire MVP in record time with excellent quality. The code is clean, well-documented, and scalable. Will definitely work together again."
    }
];

// Project Data - 50+ Projects with new categories
const projects = [
    {
        id: 1,
        title: "Digital Clock",
        description: "A full-featured digital clock with customizable themes and alarm functionality.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfsA5NLdjY-REx3FK_v1vAey0zdJOTbHj1I5AN2xYV2A&s=10",
        github: "https://github.com/A249214/50-JavaScript_Projects/tree/main/1%20%20digital%20clock",
        live: "https://50-java-script-projects.vercel.app/1%20%20digital%20clock/index.html",
        technologies: [ "HTML", "JavaScript", "CSS"],
        category: "react",
        featured: true
    },
    {
        id: 2,
        title: "Calculator",
        description: "A simple yet powerful calculator with advanced functions and a clean interface.",
        image: "https://images.unsplash.com/photo-1587440871875-191322ee64b0?w=800&h=600&fit=crop",
        github: "https://github.com/A249214/50-JavaScript_Projects/tree/main/2%20calculator",
        live: "https://50-java-script-projects.vercel.app/2%20calculator/index.html",
        technologies: ["JavaScript", "HTML", "CSS"],
        category: "api",
        featured: true
    },
    {
        id: 3,
        title: "Pomodoro Timer",
        description: "Real-time Pomodoro timer with customizable intervals and focus sessions.",
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
        github: "https://github.com/A249214/50-JavaScript_Projects/tree/main/3%20Premium%20Pomodoro%20Timer",
        live: "https://50-java-script-projects.vercel.app/3%20Premium%20Pomodoro%20Timer/index.html",
        technologies: [ "HTML", "CSS", "JavaScript"],
        category: "javascript",
        featured: true
    },
    {
        id: 4,
        title: "Todo App",
        description: "Mobile-first todo application with task management, due dates, and synchronization.",
        image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&h=600&fit=crop",
        github: "https://github.com/A249214/50-JavaScript_Projects/tree/main/4%20Todo%20app",
        live: "https://50-java-script-projects.vercel.app/4%20Todo%20app/index.html",
     technologies: [ "HTML", "CSS", "JavaScript"],
        category: "tools",
        featured: false
    },
    {
        id: 5,
        title: "Background Color Switcher",
        description: "Full-stack social network with real-time messaging, stories, and content sharing capabilities.",
        image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&h=600&fit=crop",
        github: "https://github.com/A249214/50-JavaScript_Projects/tree/main/5%20Background%20Color%20Switcher",
        live: "https://50-java-script-projects.vercel.app/5%20Background%20Color%20Switcher/index.html",
        technologies: [ "HTML", "CSS", "JavaScript"],
        category: "react",
        featured: true
    },
    {
        id: 6,
        title: "Tip Calculator",
        description: "Simple and efficient tip calculator for splitting bills and calculating gratuities.",
        image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&h=600&fit=crop",
        github: "https://github.com/A249214/50-JavaScript_Projects/commit/62be1816bb7d29dfacff6ffb5220b7622f9b3dc3",
        live: "https://50-java-script-projects.vercel.app/6%20Tip%20Calculator/index.html",
       technologies: [ "HTML", "CSS", "JavaScript"],
        category: "api",
        featured: false
    },
    {
        id: 7,
        title: "BMI Calculator",
        description: "A health-focused BMI calculator that provides users with their Body Mass Index and health recommendations.",
        image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=600&fit=crop",
        github: "https://github.com/A249214/50-JavaScript_Projects/tree/main/7.%20BMI%20Calculator",
        live: "https://50-java-script-projects.vercel.app/7.%20BMI%20Calculator/index.html",
        technologies: ["React", "TypeScript", "Node.js", "MongoDB", "Docker"],
        category: "tools",
        featured: false
    },
    {
        id: 8,
        title: "Random Quote Generator",
        description: "Simple web application that displays random quotes with the ability to share them.",
        image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=800&h=600&fit=crop",
        github: "https://github.com/A249214/50-JavaScript_Projects/tree/main/8%20Random%20Quote%20Generator ",
        live: "https://50-java-script-projects.vercel.app/8%20Random%20Quote%20Generator/index.html",
        technologies: ["HTML", "CSS", "JavaScript"],
        category: "api",
        featured: true
    },
    {
        id: 9,
        title: "Stopwatch",
        description: "Simple stopwatch application with start, stop, and reset functionality.",
        image: "https://images.unsplash.com/photo-1505238680356-667803448bb6?w=800&h=600&fit=crop",
        github: "https://github.com/A249214/50-JavaScript_Projects/tree/main/9%20Stopwatch",
        live: "https://50-java-script-projects.vercel.app/9%20Stopwatch/index.html",
        technologies: ["HTML", "CSS", "JavaScript"],

        category: "javascript",
        featured: true
    },
    {
        id: 10,
        title: "Random Joke Generator",
        description: "Simple web application that displays random jokes with the ability to share them.",
        image: "https://images.unsplash.com/photo-1513151233558-d860c5398176?w=800&h=600&fit=crop",
        github: "https://github.com/A249214/50-JavaScript_Projects/tree/main/10%20Random%20Joke%20Generator ",
        live: "https://50-java-script-projects.vercel.app/10%20Random%20Joke%20Generator/index.html",
        technologies: ["HTML", "CSS", "JavaScript"],
        category: "tools",
        featured: false
    },
    {
        id: 11,
        title: "Word Counter",
        description: "Simple web application that counts the number of words in a given text.",
        image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=800&h=600&fit=crop",
        github: "https://github.com/A249214/50-JavaScript_Projects/tree/main/11%20Word%20Counter",
        live: "https://50-java-script-projects.vercel.app/11%20Word%20Counter/index.html",
        technologies: ["HTML", "CSS", "JavaScript"],
        category: "tools",
        featured: true
    },
    {
        id: 12,
        title: "Progress Bar",
        description: "Interactive progress bar component with customizable styles and animations.",
        image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=600&fit=crop",
        github: "https://github.com/A249214/50-JavaScript_Projects/tree/main/12%20Progress%20Bar",
        live: "https://50-java-script-projects.vercel.app/12%20Progress%20Bar/index.html",
         technologies: ["HTML", "CSS", "JavaScript"],
        category: "tools",
        featured: false
    },
    {
        id: 13,
        title: "Star Rating Component",
        description: "",
        image: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?w=800&h=600&fit=crop",
        github: "https://github.com/A249214/50-JavaScript_Projects/tree/main/13%20Star%20Rating%20Component",
        live: "https://50-java-script-projects.vercel.app/13%20Star%20Rating%20Component/index.html ",
    technologies: ["HTML", "CSS", "JavaScript"],
        category: "ui",
        featured: false
    },
    {
        id: 14,
        title: "Light Dark Mood Toggle",
        description: "Property listing website with virtual tours, mortgage calculator, and agent communication tools.",
        image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=600&fit=crop",
        github: "https://github.com/A249214/50-JavaScript_Projects/tree/main/14%20LightDark%20Mode%20Toggle",
        live: "https://50-java-script-projects.vercel.app/14%20LightDark%20Mode%20Toggle/index.html",
        technologies: ["HTML", "CSS", "JavaScript"],
        category: "javascript",
        featured: false
    },
    {
        id: 15,
        title: "Number Guessing Game ",
        description: "Duolingo-style language learning platform with gamification and spaced repetition algorithms.",
        image: "https://images.unsplash.com/photo-1590112411934-2d8be89b6a10?w=800&h=600&fit=crop",
        github: "https://github.com/A249214/50-JavaScript_Projects/tree/main/15%20Number%20Guessing%20Game",
        live: "https://50-java-script-projects.vercel.app/15%20Number%20Guessing%20Game/index.html",
technologies: ["HTML", "CSS", "JavaScript"],
        category: "tools",
        featured: false
    },
    {
        id: 16,
        title: "Pomodoro Timer",
        description: "Browser-based code editor with syntax highlighting, auto-completion, and collaborative editing.",
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
        github: "https://github.com/A249214/50-JavaScript_Projects/tree/main/16%20Pomodoro%20Timer",
        live: "https://50-java-script-projects.vercel.app/16%20Pomodoro%20Timer/index.html",
      technologies: ["HTML", "CSS", "JavaScript"],
        category: "tools",
        featured: true
    },
    {
        id: 17,
        title: "Notes App",
        description: "Patient management system with appointment scheduling, medical records, and telemedicine features.",
        image: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=800&h=600&fit=crop",
        github: "https://github.com/A249214/50-JavaScript_Projects/tree/main/17%20Notes%20App",
        live: "https://50-java-script-projects.vercel.app/17%20Notes%20App/index.html",
        technologies: ["HTML", "CSS", "JavaScript"],
        category: "react",
        featured: false
    },
    {
        id: 18,
        title: "Local Storage Todo App",
        description: "Todo application with local storage persistence for saving tasks between sessions.",
        image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&h=600&fit=crop",
        github: "https://github.com/A249214/50-JavaScript_Projects/tree/main/18%20Local%20Storage%20Todo%20App",
        live: "https://50-java-script-projects.vercel.app/18%20Local%20Storage%20Todo%20App/index.html",
        technologies: ["HTML", "CSS", "JavaScript"],
        category: "tools",
        featured: true
    },
    {
        id: 19,
        title: "Password Generator",
        description: "Secure password generator with customizable length and character options.",
        image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=600&fit=crop",
        github: "https://github.com/A249214/50-JavaScript_Projects/tree/main/19%20Password%20Generator",
        live: "https://50-java-script-projects.vercel.app/19%20Password%20Generator/index.html",
        technologies: ["HTML", "CSS", "JavaScript"],
        category: "tools",
        featured: false
    },
    {
        id: 20,
        title: "Typing Speed Test",
        description: "Interactive typing speed test with WPM calculation and accuracy tracking.",
        image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=600&fit=crop",
        github: "https://github.com/A249214/50-JavaScript_Projects/tree/main/20%20A%20Typing%20Speed%20Test",
        live: "https://50-java-script-projects.vercel.app/20%20A%20Typing%20Speed%20Test/index.html",
        technologies: ["HTML", "CSS", "JavaScript"],
        category: "tools",
        featured: false
    },
    {
        id: 21,
        title: "Quiz App",
        description: "Interactive quiz application with multiple choice questions and score tracking.",
        image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=600&fit=crop",
        github: "https://github.com/A249214/50-JavaScript_Projects/tree/main/21%20Quiz%20App",
        live: "https://50-java-script-projects.vercel.app/21%20Quiz%20App/index.html",
        technologies: ["HTML", "CSS", "JavaScript"],
        category: "tools",
        featured: false
    },
    {
        id: 22,
        title: "Drum Kit",
        description: "Interactive drum kit with keyboard controls and sound effects.",
        image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=800&h=600&fit=crop",
        github: "https://github.com/A249214/50-JavaScript_Projects/tree/main/22%20Drum%20Kit",
        live: "https://50-java-script-projects.vercel.app/22%20Drum%20Kit/index.html",
        technologies: ["HTML", "CSS", "JavaScript"],
        category: "tools",
        featured: false
    },
    {
        id: 23,
        title: "Image Slider",
        description: "Interactive image slider with navigation controls and auto-play functionality.",
        image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&h=600&fit=crop",
        github: "https://github.com/A249214/50-JavaScript_Projects/tree/main/23%20Image%20Slider",
        live: "https://50-java-script-projects.vercel.app/23%20Image%20Slider/index.html",
        technologies: ["HTML", "CSS", "JavaScript"],
        category: "ui",
        featured: false
    },
    {
        id: 24,
        title: "Weather App",
        description: "Weather application with current conditions and forecast display.",
        image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&h=600&fit=crop",
        github: "https://github.com/A249214/50-JavaScript_Projects/tree/main/24%20Weather%20App",
        live: "https://50-java-script-projects.vercel.app/24%20Weather%20App/index.html",
        technologies: ["HTML", "CSS", "JavaScript"],
        category: "api",
        featured: true
    },
    {
        id: 25,
        title: "Weather App with Local Storage",
        description: "Weather app with local storage for saving favorite locations and search history.",
        image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&h=600&fit=crop",
        github: "https://github.com/A249214/50-JavaScript_Projects/tree/main/25%20Weather%20App%20with%20Local%20Storage",
        live: "https://50-java-script-projects.vercel.app/25%20Weather%20App%20with%20Local%20Storage/index.html",
        technologies: ["HTML", "CSS", "JavaScript"],
        category: "api",
        featured: false
    },
    {
        id: 26,
        title: "Currency Converter",
        description: "Real-time currency converter with multiple currency support and exchange rates.",
        image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop",
        github: "https://github.com/A249214/50-JavaScript_Projects/tree/main/26%20Currency%20Converter",
        live: "https://50-java-script-projects.vercel.app/26%20Currency%20Converter/index.html",
        technologies: ["HTML", "CSS", "JavaScript"],
        category: "api",
        featured: true
    },
    {
        id: 27,
        title: "QR Code Generator",
        description: "QR code generator for creating custom QR codes with various options.",
        image: "https://images.unsplash.com/photo-1555099962-4199c345e5dd?w=800&h=600&fit=crop",
        github: "https://github.com/A249214/50-JavaScript_Projects/tree/main/27%20QR%20Code%20Generator",
        live: "https://50-java-script-projects.vercel.app/27%20QR%20Code%20Generator/index.html",
        technologies: ["HTML", "CSS", "JavaScript"],
        category: "tools",
        featured: false
    },
    {
        id: 28,
        title: "Expense Tracker",
        description: "Personal expense tracking application with categorization and summary reports.",
        image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&h=600&fit=crop",
        github: "https://github.com/A249214/50-JavaScript_Projects/tree/main/28%20Expense%20Tracker",
        live: "https://50-java-script-projects.vercel.app/28%20Expense%20Tracker/index.html",
        technologies: ["HTML", "CSS", "JavaScript"],
        category: "tools",
        featured: true
    },
    {
        id: 29,
        title: "Calendar App",
        description: "Interactive calendar application with event management and date navigation.",
        image: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=800&h=600&fit=crop",
        github: "https://github.com/A249214/50-JavaScript_Projects/tree/main/29%20Calendar%20App",
        live: "https://50-java-script-projects.vercel.app/29%20Calendar%20App/index.html",
        technologies: ["HTML", "CSS", "JavaScript"],
        category: "tools",
        featured: false
    },
    {
        id: 30,
        title: "Product Filter App",
        description: "Product filtering application with category filters and search functionality.",
        image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=800&h=600&fit=crop",
        github: "https://github.com/A249214/50-JavaScript_Projects/tree/main/30%20Product%20Filter%20App",
        live: "https://50-java-script-projects.vercel.app/30%20Product%20Filter%20App/index.html",
        technologies: ["HTML", "CSS", "JavaScript"],
        category: "tools",
        featured: false
    },
    {
        id: 31,
        title: "GitHub Profile Finder",
        description: "GitHub profile search application with user information display.",
        image: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=800&h=600&fit=crop",
        github: "https://github.com/A249214/50-JavaScript_Projects/tree/main/31%20GitHub%20Profile%20Finder",
        live: "https://50-java-script-projects.vercel.app/31%20GitHub%20Profile%20Finder/index.html",
        technologies: ["HTML", "CSS", "JavaScript"],
        category: "api",
        featured: false
    },
    {
        id: 32,
        title: "Form Validator",
        description: "Form validation tool with real-time feedback and error handling.",
        image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=600&fit=crop",
        github: "https://github.com/A249214/50-JavaScript_Projects/tree/main/32%20Form%20Validator",
        live: "https://50-java-script-projects.vercel.app/32%20Form%20Validator/index.html",
        technologies: ["HTML", "CSS", "JavaScript"],
        category: "tools",
        featured: true
    },
    {
        id: 33,
        title: "Calculator with History",
        description: "Calculator with calculation history and memory functions.",
        image: "https://images.unsplash.com/photo-1587440871875-191322ee64b0?w=800&h=600&fit=crop",
        github: "https://github.com/A249214/50-JavaScript_Projects/tree/main/33%20Calculator%20with%20History",
        live: "https://50-java-script-projects.vercel.app/33%20Calculator%20with%20History/index.html",
        technologies: ["HTML", "CSS", "JavaScript"],
        category: "tools",
        featured: false
    },
    {
        id: 34,
        title: "Rock Paper Scissors Game",
        description: "Classic rock paper scissors game with score tracking.",
        image: "https://images.unsplash.com/photo-1590112411934-2d8be89b6a10?w=800&h=600&fit=crop",
        github: "https://github.com/A249214/50-JavaScript_Projects/tree/main/34%20Rock%20Paper%20Scissors%20Game",
        live: "https://50-java-script-projects.vercel.app/34%20Rock%20Paper%20Scissors%20Game/index.html",
        technologies: ["HTML", "CSS", "JavaScript"],
        category: "games",
        featured: true
    },
    {
        id: 35,
        title: "Memory Card Game",
        description: "Memory matching card game with flip animations and timer.",
        image: "https://images.unsplash.com/photo-1606167668584-78701c57f13d?w=800&h=600&fit=crop",
        github: "https://github.com/A249214/50-JavaScript_Projects/tree/main/35%20Memory%20Card%20Game",
        live: "https://50-java-script-projects.vercel.app/35%20Memory%20Card%20Game/index.html",
        technologies: ["HTML", "CSS", "JavaScript"],
        category: "games",
        featured: false
    },
    {
        id: 36,
        title: "Hangman Game",
        description: "Classic hangman word guessing game with letter selection and lives.",
        image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop",
        github: "https://github.com/A249214/50-JavaScript_Projects/tree/main/36%20Hangman%20Game",
        live: "https://50-java-script-projects.vercel.app/36%20Hangman%20Game/index.html",
        technologies: ["HTML", "CSS", "JavaScript"],
        category: "games",
        featured: false
    },
    {
        id: 37,
        title: "Analog Clock",
        description: "Analog clock with hour, minute, and second hands.",
        image: "https://images.unsplash.com/photo-1505238680356-667803448bb6?w=800&h=600&fit=crop",
        github: "https://github.com/A249214/50-JavaScript_Projects/tree/main/37%20Analog%20Clock",
        live: "https://50-java-script-projects.vercel.app/37%20Analog%20Clock/index.html",
        technologies: ["HTML", "CSS", "JavaScript"],
        category: "tools",
        featured: false
    },
    {
        id: 38,
        title: "Music Player",
        description: "Music player with play controls, progress bar, and playlist management.",
        image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=800&h=600&fit=crop",
        github: "https://github.com/A249214/50-JavaScript_Projects/tree/main/38%20Music%20Player",
        live: "https://50-java-script-projects.vercel.app/38%20Music%20Player/index.html",
        technologies: ["HTML", "CSS", "JavaScript"],
        category: "tools",
        featured: false
    },
    {
        id: 39,
        title: "Movie Search App",
        description: "Movie search application with API integration and movie details display.",
        image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=800&h=600&fit=crop",
        github: "https://github.com/A249214/50-JavaScript_Projects/tree/main/39%20Movie%20Search%20App",
        live: "https://50-java-script-projects.vercel.app/39%20Movie%20Search%20App/index.html",
        technologies: ["HTML", "CSS", "JavaScript"],
        category: "api",
        featured: true
    },
    {
        id: 40,
        title: "Infinite Scroll",
        description: "Infinite scroll implementation with dynamic content loading.",
        image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=600&fit=crop",
        github: "https://github.com/A249214/50-JavaScript_Projects/tree/main/40%20Infinite%20Scroll",
        live: "https://50-java-script-projects.vercel.app/40%20Infinite%20Scroll/index.html",
        technologies: ["HTML", "CSS", "JavaScript"],
        category: "tools",
        featured: false
    },
    {
        id: 41,
        title: "Random Background Generator",
        description: "Random background image generator with refresh functionality.",
        image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&h=600&fit=crop",
        github: "https://github.com/A249214/50-JavaScript_Projects/tree/main/41%20Random%20Background%20Generator",
        live: "https://50-java-script-projects.vercel.app/41%20Random%20Background%20Generator/index.html",
        technologies: ["HTML", "CSS", "JavaScript"],
        category: "tools",
        featured: true
    },
    {
        id: 42,
        title: "Sticky Notes",
        description: "Sticky notes application with drag-and-drop functionality and color options.",
        image: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=800&h=600&fit=crop",
        github: "https://github.com/A249214/50-JavaScript_Projects/tree/main/42%20Sticky%20Notes",
        live: "https://50-java-script-projects.vercel.app/42%20Sticky%20Notes/index.html",
        technologies: ["HTML", "CSS", "JavaScript"],
        category: "tools",
        featured: false
    },
    {
        id: 43,
        title: "Text-to-Speech App",
        description: "Text-to-speech application with voice selection and speed control.",
        image: "https://images.unsplash.com/photo-1589254065878-42c9da997008?w=800&h=600&fit=crop",
        github: "https://github.com/A249214/50-JavaScript_Projects/tree/main/43%20Text-to-Speech%20App",
        live: "https://50-java-script-projects.vercel.app/43%20Text-to-Speech%20App/index.html",
        technologies: ["HTML", "CSS", "JavaScript"],
        category: "tools",
        featured: true
    },
    {
        id: 44,
        title: "Speech Recognition App",
        description: "Speech recognition application that converts speech to text.",
        image: "https://images.unsplash.com/photo-1589254065878-42c9da997008?w=800&h=600&fit=crop",
        github: "https://github.com/A249214/50-JavaScript_Projects/tree/main/44%20Speech%20Recognition%20App",
        live: "https://50-java-script-projects.vercel.app/44%20Speech%20Recognition%20App/index.html",
        technologies: ["HTML", "CSS", "JavaScript"],
        category: "api",
        featured: false
    },
    {
        id: 45,
        title: "Weather Fetch with API",
        description: "Weather application using API for real-time weather data.",
        image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&h=600&fit=crop",
        github: "https://github.com/A249214/50-JavaScript_Projects/tree/main/45%20Weather%20Fetch%20with%20API",
        live: "https://50-java-script-projects.vercel.app/45%20Weather%20Fetch%20with%20API/index.html",
        technologies: ["HTML", "CSS", "JavaScript"],
        category: "api",
        featured: true
    },
    {
        id: 46,
        title: "Parallax Scrolling",
        description: "Parallax scrolling effect with multiple layers and smooth animations.",
        image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&h=600&fit=crop",
        github: "https://github.com/A249214/50-JavaScript_Projects/tree/main/46%20Parallax%20Scrolling",
        live: "https://50-java-script-projects.vercel.app/46%20Parallax%20Scrolling/index.html",
        technologies: ["HTML", "CSS", "JavaScript"],
        category: "ui",
        featured: false
    },
    {
        id: 47,
        title: "Music Visualizer",
        description: "Music visualizer with audio analysis and dynamic visual effects.",
        image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=800&h=600&fit=crop",
        github: "https://github.com/A249214/50-JavaScript_Projects/tree/main/47%20Music%20Visualizer",
        live: "https://50-java-script-projects.vercel.app/47%20Music%20Visualizer/index.html",
        technologies: ["HTML", "CSS", "JavaScript"],
        category: "tools",
        featured: true
    },
    {
        id: 48,
        title: "Canvas Drawing App",
        description: "Canvas-based drawing application with brush tools and color selection.",
        image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=800&h=600&fit=crop",
        github: "https://github.com/A249214/50-JavaScript_Projects/tree/main/48%20Canvas%20Drawing%20App",
        live: "https://50-java-script-projects.vercel.app/48%20Canvas%20Drawing%20App/index.html",
        technologies: ["HTML", "CSS", "JavaScript"],
        category: "tools",
        featured: false
    },
    {
        id: 49,
        title: "Photo Filter App",
        description: "Photo filter application with various image effects and adjustments.",
        image: "https://images.unsplash.com/photo-1554048612-b6a482bc67e5?w=800&h=600&fit=crop",
        github: "https://github.com/A249214/50-JavaScript_Projects/tree/main/49%20Photo%20Filter%20App",
        live: "https://50-java-script-projects.vercel.app/49%20Photo%20Filter%20App/index.html",
        technologies: ["HTML", "CSS", "JavaScript"],
        category: "tools",
        featured: false
    },
    {
        id: 50,
        title: "Local Storage Todo App",
        description: "Advanced todo app with local storage, categories, and task management features.",
        image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&h=600&fit=crop",
        github: "https://github.com/A249214/50-JavaScript_Projects/tree/main/50%20Local%20Storage%20Todo%20App",
        live: "https://50-java-script-projects.vercel.app/50%20Local%20Storage%20Todo%20App/index.html",
        technologies: ["HTML", "CSS", "JavaScript"],
        category: "tools",
        featured: true
    }
];

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Hide loader
    setTimeout(() => {
        const loader = document.getElementById('loader');
        if (loader) {
            loader.classList.add('hidden');
        }
    }, 1500);
    
    // Initialize all features
    initCustomCursor();
    initParticles();
    initAOS();
    initTypedJS();
    initGSAP();
    initScrollReveal();
    initAnimeJS();
    initVanillaTilt();
    initLenisScroll();
    initSwiper();
    renderProjects();
    renderFeaturedProjects();
    renderTestimonials();
    initTestimonialsSwiper();
    initSearchAndFilter();
    initMobileMenu();
    initStatCounters();
    initSmoothScroll();
    initThemeToggle();
    initMouseGlow();
    initModalPopup();
    initSkillBars();
    initPureCounter();
    initBackToTop();
    initScrollProgress();
    initLazyLoading();
    initMagneticButtons();
    initTextReveal();
    initMouseParallax();
    initContactForm();
});

// Custom Cursor
function initCustomCursor() {
    const cursor = document.getElementById('cursor');
    const follower = document.getElementById('cursor-follower');
    
    if (!cursor || !follower) return;

    // Center the cursor dot and follower on the actual mouse position
    cursor.style.transform = 'translate(-50%, -50%)';
    follower.style.transform = 'translate(-50%, -50%)';
    
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
        
        setTimeout(() => {
            follower.style.left = e.clientX + 'px';
            follower.style.top = e.clientY + 'px';
        }, 100);
    });
    
    // Hover effect
    const hoverElements = document.querySelectorAll('a, button, .project-card');
    hoverElements.forEach(el => {
        el.addEventListener('mouseenter', () => cursor.classList.add('hover'));
        el.addEventListener('mouseleave', () => cursor.classList.remove('hover'));
    });
}

// Particles.js
function initParticles() {
    if (typeof particlesJS !== 'undefined') {
        particlesJS('particles-js', {
            particles: {
                number: {
                    value: 80,
                    density: {
                        enable: true,
                        value_area: 800
                    }
                },
                color: {
                    value: '#00d4ff'
                },
                shape: {
                    type: 'circle'
                },
                opacity: {
                    value: 0.5,
                    random: true
                },
                size: {
                    value: 3,
                    random: true
                },
                line_linked: {
                    enable: true,
                    distance: 150,
                    color: '#00d4ff',
                    opacity: 0.4,
                    width: 1
                },
                move: {
                    enable: true,
                    speed: 2,
                    direction: 'none',
                    random: true,
                    straight: false,
                    out_mode: 'out'
                }
            },
            interactivity: {
                detect_on: 'canvas',
                events: {
                    onhover: {
                        enable: true,
                        mode: 'grab'
                    },
                    onclick: {
                        enable: true,
                        mode: 'push'
                    }
                },
                modes: {
                    grab: {
                        distance: 140,
                        line_linked: {
                            opacity: 1
                        }
                    }
                }
            },
            retina_detect: true
        });
    }
}

// AOS Animation
function initAOS() {
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 800,
            easing: 'ease-out-cubic',
            once: true,
            offset: 100
        });
    }
}

// Typed.js
function initTypedJS() {
    if (typeof Typed !== 'undefined') {
        new Typed('#typed-text', {
            strings: [
                'Building amazing web experiences',
                'Creating innovative solutions',
                'Designing beautiful interfaces',
                'Developing cutting-edge applications'
            ],
            typeSpeed: 50,
            backSpeed: 30,
            backDelay: 2000,
            loop: true,
            cursorChar: '|'
        });
    }
}

// GSAP Animations
function initGSAP() {
    if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
        gsap.registerPlugin(ScrollTrigger);
        
        // Hero animation
        gsap.from('.hero-title', {
            duration: 1.5,
            y: 100,
            opacity: 0,
            ease: 'power4.out'
        });
        
        gsap.from('.hero-subtitle', {
            duration: 1.5,
            y: 50,
            opacity: 0,
            delay: 0.3,
            ease: 'power4.out'
        });
        
        // Scroll animations for project cards
        gsap.utils.toArray('.project-card').forEach((card, i) => {
            gsap.from(card, {
                scrollTrigger: {
                    trigger: card,
                    start: 'top 80%',
                    toggleActions: 'play none none reverse'
                },
                y: 50,
                opacity: 0,
                duration: 0.8,
                delay: i * 0.1,
                ease: 'power3.out'
            });
        });
        
        // Parallax effect on hero
        gsap.to('.hero-section', {
            scrollTrigger: {
                trigger: '.hero-section',
                start: 'top top',
                end: 'bottom top',
                scrub: true
            },
            y: 100,
            ease: 'none'
        });
    }
}

// ScrollReveal
function initScrollReveal() {
    if (typeof ScrollReveal !== 'undefined') {
        ScrollReveal().reveal('.stat-card', {
            delay: 200,
            distance: '50px',
            duration: 1000,
            easing: 'ease-out',
            interval: 200
        });
    }
}

// Anime.js
function initAnimeJS() {
    // anime.js does not support ScrollTrigger natively;
    // stat counting is handled by initStatCounters() instead.
}

// Vanilla Tilt
function initVanillaTilt() {
    if (typeof VanillaTilt !== 'undefined') {
        VanillaTilt.init(document.querySelectorAll('.project-card'), {
            max: 15,
            speed: 400,
            glare: false
        });
    }
}

// Lenis Smooth Scroll
function initLenisScroll() {
    if (typeof Lenis !== 'undefined') {
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            smooth: true
        });
        
        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }
        
        requestAnimationFrame(raf);
    }
}

// Swiper.js
function initSwiper() {
    // Featured projects are rendered via renderFeaturedProjects() called separately.
    // Testimonials swiper is initialized via initTestimonialsSwiper().
}

// Render Projects
function renderProjects(filteredProjects = projects.slice(0, 12)) {
    const grid = document.getElementById('projects-grid');
    if (!grid) return;
    
    grid.innerHTML = filteredProjects.map(project => `
        <div class="project-card" data-category="${project.category}" data-aos="fade-up" onclick="openModal(${project.id})">
            <div class="relative overflow-hidden">
                <img data-src="${project.image}" alt="${project.title}" class="w-full h-48 object-cover lazy-image">
                <div class="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 hover:opacity-100 transition-opacity flex items-end p-4">
                    <div class="flex gap-3">
                        <a href="${project.github}" target="_blank" class="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors" onclick="event.stopPropagation()">
                            <i class="bi bi-github"></i>
                        </a>
                        <a href="${project.live}" target="_blank" class="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors" onclick="event.stopPropagation()">
                            <i class="bi bi-box-arrow-up-right"></i>
                        </a>
                    </div>
                </div>
            </div>
            <div class="p-6">
                <span class="text-cyan-400 text-sm font-medium capitalize">${project.category}</span>
                <h3 class="text-xl font-bold mt-2 mb-3">${project.title}</h3>
                <p class="text-gray-400 text-sm mb-4 line-clamp-2">${project.description}</p>
                <div class="flex flex-wrap gap-2">
                    ${project.technologies.slice(0, 3).map(tech => `
                        <span class="tech-tag">${tech}</span>
                    `).join('')}
                    ${project.technologies.length > 3 ? `<span class="tech-tag">+${project.technologies.length - 3}</span>` : ''}
                </div>
            </div>
        </div>
    `).join('');
    
    // Reinitialize Vanilla Tilt for new cards (glare disabled to avoid cursor glow on cards)
    if (typeof VanillaTilt !== 'undefined') {
        VanillaTilt.init(document.querySelectorAll('.project-card'), {
            max: 15,
            speed: 400,
            glare: false
        });
    }
    
    // Initialize lazy loading for new images
    initLazyLoading();
}

// Render Featured Projects
function renderFeaturedProjects() {
    const grid = document.getElementById('featured-grid');
    if (!grid) return;
    
    const featuredProjects = projects.filter(p => p.featured);
    
    grid.innerHTML = featuredProjects.map(project => `
        <div class="project-card featured-card" data-aos="fade-up" onclick="openModal(${project.id})">
            <div class="relative overflow-hidden">
                <img data-src="${project.image}" alt="${project.title}" class="w-full h-64 object-cover lazy-image">
                <div class="absolute top-4 right-4">
                    <span class="px-3 py-1 bg-cyan-500 rounded-full text-sm font-medium">Featured</span>
                </div>
                <div class="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 hover:opacity-100 transition-opacity flex items-end p-4">
                    <div class="flex gap-3">
                        <a href="${project.github}" target="_blank" class="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors" onclick="event.stopPropagation()">
                            <i class="bi bi-github"></i>
                        </a>
                        <a href="${project.live}" target="_blank" class="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors" onclick="event.stopPropagation()">
                            <i class="bi bi-box-arrow-up-right"></i>
                        </a>
                    </div>
                </div>
            </div>
            <div class="p-6">
                <span class="text-cyan-400 text-sm font-medium capitalize">${project.category}</span>
                <h3 class="text-xl font-bold mt-2 mb-3">${project.title}</h3>
                <p class="text-gray-400 text-sm mb-4 line-clamp-2">${project.description}</p>
                <div class="flex flex-wrap gap-2">
                    ${project.technologies.slice(0, 3).map(tech => `
                        <span class="tech-tag">${tech}</span>
                    `).join('')}
                    ${project.technologies.length > 3 ? `<span class="tech-tag">+${project.technologies.length - 3}</span>` : ''}
                </div>
            </div>
        </div>
    `).join('');
    
    // Reinitialize Vanilla Tilt for featured cards (glare disabled to avoid cursor glow on cards)
    if (typeof VanillaTilt !== 'undefined') {
        VanillaTilt.init(document.querySelectorAll('.featured-card'), {
            max: 15,
            speed: 400,
            glare: false
        });
    }
    
    // Initialize lazy loading for new images
    initLazyLoading();
}

// Render Testimonials
function renderTestimonials() {
    const slider = document.getElementById('testimonials-slider');
    if (!slider) return;
    
    slider.innerHTML = testimonials.map(testimonial => `
        <div class="swiper-slide">
            <div class="testimonial-card">
                <div class="flex items-center gap-4 mb-6">
                    <img src="${testimonial.image}" alt="${testimonial.name}" class="w-16 h-16 rounded-full object-cover">
                    <div>
                        <h4 class="font-bold text-lg">${testimonial.name}</h4>
                        <p class="text-cyan-400 text-sm">${testimonial.role}</p>
                    </div>
                </div>
                <p class="text-gray-300 leading-relaxed">"${testimonial.text}"</p>
                <div class="flex gap-1 mt-4">
                    <i class="bi bi-star-fill text-yellow-400"></i>
                    <i class="bi bi-star-fill text-yellow-400"></i>
                    <i class="bi bi-star-fill text-yellow-400"></i>
                    <i class="bi bi-star-fill text-yellow-400"></i>
                    <i class="bi bi-star-fill text-yellow-400"></i>
                </div>
            </div>
        </div>
    `).join('');
}

// Initialize Testimonials Swiper
function initTestimonialsSwiper() {
    if (typeof Swiper !== 'undefined') {
        new Swiper('.testimonials-swiper', {
            slidesPerView: 1,
            spaceBetween: 30,
            loop: true,
            autoplay: {
                delay: 5000,
                disableOnInteraction: false
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev'
            },
            breakpoints: {
                640: {
                    slidesPerView: 1
                },
                768: {
                    slidesPerView: 2
                },
                1024: {
                    slidesPerView: 3
                }
            }
        });
    }
}

// Search and Filter
function initSearchAndFilter() {
    const searchInput = document.getElementById('search-input');
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    if (!searchInput || !filterButtons.length) return;
    
    let currentFilter = 'all';
    let displayedCount = 12;
    
    // Filter buttons
    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentFilter = btn.dataset.filter;
            displayedCount = 12;
            filterAndRenderProjects();
        });
    });
    
    // Search input
    searchInput.addEventListener('input', () => {
        displayedCount = 12;
        filterAndRenderProjects();
    });
    
    function filterAndRenderProjects() {
        const searchTerm = searchInput.value.toLowerCase();
        
        let filtered = projects.filter(project => {
            const matchesSearch = project.title.toLowerCase().includes(searchTerm) ||
                                 project.description.toLowerCase().includes(searchTerm) ||
                                 project.technologies.some(tech => tech.toLowerCase().includes(searchTerm));
            const matchesFilter = currentFilter === 'all' || project.category === currentFilter;
            
            return matchesSearch && matchesFilter;
        });
        
        renderProjects(filtered.slice(0, displayedCount));
        
        // Update load more button
        const loadMoreBtn = document.getElementById('load-more');
        if (loadMoreBtn) {
            if (filtered.length <= displayedCount) {
                loadMoreBtn.style.display = 'none';
            } else {
                loadMoreBtn.style.display = 'inline-block';
            }
        }
    }
    
    // Load more button
    const loadMoreBtn = document.getElementById('load-more');
    if (loadMoreBtn) {
        loadMoreBtn.addEventListener('click', () => {
            displayedCount += 12;
            filterAndRenderProjects();
        });
    }
}

// Mobile Menu
function initMobileMenu() {
    const menuToggle = document.getElementById('menu-toggle');
    const menuClose = document.getElementById('menu-close');
    const mobileMenu = document.getElementById('mobile-menu');
    const menuOverlay = document.getElementById('menu-overlay');
    
    if (!menuToggle || !menuClose || !mobileMenu || !menuOverlay) return;
    
    const menuLinks = mobileMenu.querySelectorAll('a');
    
    function openMenu() {
        mobileMenu.classList.add('active');
        menuOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
    
    function closeMenu() {
        mobileMenu.classList.remove('active');
        menuOverlay.classList.remove('active');
        document.body.style.overflow = '';
    }
    
    menuToggle.addEventListener('click', openMenu);
    menuClose.addEventListener('click', closeMenu);
    menuOverlay.addEventListener('click', closeMenu);
    
    menuLinks.forEach(link => {
        link.addEventListener('click', closeMenu);
    });
}

// Stat Counters
function initStatCounters() {
    const statNumbers = document.querySelectorAll('.stat-number');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = parseInt(entry.target.getAttribute('data-purecounter-end'));
                if (!isNaN(target)) {
                    animateCounter(entry.target, target);
                }
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    statNumbers.forEach(stat => observer.observe(stat));
}

function animateCounter(element, target) {
    let current = 0;
    const increment = target / 50;
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current);
        }
    }, 30);
}

// Smooth Scroll
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.style.background = 'rgba(10, 10, 15, 0.95)';
    } else {
        nav.style.background = 'rgba(255, 255, 255, 0.05)';
    }
});

// Dark/Light Mode Toggle
function initThemeToggle() {
    const themeToggle = document.getElementById('theme-toggle');
    const themeToggleMobile = document.getElementById('theme-toggle-mobile');
    const body = document.body;
    
    function toggleTheme() {
        body.classList.toggle('light-mode');
        themeToggle.classList.toggle('active');
        if (themeToggleMobile) {
            themeToggleMobile.classList.toggle('active');
        }
        
        // Save preference to localStorage
        const isLightMode = body.classList.contains('light-mode');
        localStorage.setItem('theme', isLightMode ? 'light' : 'dark');
    }
    
    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        body.classList.add('light-mode');
        themeToggle.classList.add('active');
        if (themeToggleMobile) {
            themeToggleMobile.classList.add('active');
        }
    }
    
    themeToggle.addEventListener('click', toggleTheme);
    if (themeToggleMobile) {
        themeToggleMobile.addEventListener('click', toggleTheme);
    }
}

// Mouse Glow Effect
function initMouseGlow() {
    const mouseGlow = document.getElementById('mouse-glow');
    if (!mouseGlow) return;
    
    document.addEventListener('mousemove', (e) => {
        mouseGlow.style.left = e.clientX + 'px';
        mouseGlow.style.top = e.clientY + 'px';
    });
    
    // Hide glow when mouse leaves window
    document.addEventListener('mouseleave', () => {
        mouseGlow.style.opacity = '0';
    });
    
    document.addEventListener('mouseenter', () => {
        mouseGlow.style.opacity = '1';
    });
}

// Project Modal Popup
function initModalPopup() {
    const modalOverlay = document.getElementById('modal-overlay');
    const modalContent = document.getElementById('modal-content');
    const modalClose = document.getElementById('modal-close');
    
    if (!modalOverlay || !modalContent || !modalClose) return;
    
    modalClose.addEventListener('click', closeModal);
    modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) {
            closeModal();
        }
    });
    
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeModal();
        }
    });
}

function openModal(projectId) {
    const project = projects.find(p => p.id === projectId);
    if (!project) return;
    
    const modalOverlay = document.getElementById('modal-overlay');
    const modalContent = document.getElementById('modal-content');
    const modalSlider = document.getElementById('modal-slider');
    const modalDetails = document.getElementById('modal-details');
    
    if (!modalOverlay || !modalContent || !modalSlider || !modalDetails) return;
    
    // Populate modal slider with project images
    modalSlider.innerHTML = `
        <div class="swiper-slide">
            <img src="${project.image}" alt="${project.title}" class="w-full h-64 md:h-96 object-cover rounded-xl">
        </div>
    `;
    
    // Populate modal details
    modalDetails.innerHTML = `
        <span class="text-cyan-400 text-sm font-medium capitalize">${project.category}</span>
        <h2 class="text-3xl font-bold mt-2 mb-4">${project.title}</h2>
        <p class="text-gray-400 mb-6">${project.description}</p>
        
        <div class="mb-6">
            <h3 class="font-semibold mb-3">Technologies Used</h3>
            <div class="flex flex-wrap gap-2">
                ${project.technologies.map(tech => `
                    <span class="tech-tag">${tech}</span>
                `).join('')}
            </div>
        </div>
        
        <div class="flex gap-4">
            <a href="${project.github}" target="_blank" class="flex-1 py-3 bg-white/10 rounded-xl text-center hover:bg-white/20 transition-colors">
                <i class="bi bi-github mr-2"></i>GitHub
            </a>
            <a href="${project.live}" target="_blank" class="flex-1 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl text-center hover:opacity-90 transition-opacity">
                <i class="bi bi-box-arrow-up-right mr-2"></i>Live Demo
            </a>
        </div>
    `;
    
    // Show modal
    modalOverlay.classList.add('active');
    modalContent.classList.add('active');
    
    // Initialize modal Swiper
    if (typeof Swiper !== 'undefined') {
        new Swiper('.modal-swiper', {
            slidesPerView: 1,
            spaceBetween: 20,
            loop: true,
            pagination: {
                el: '.swiper-pagination',
                clickable: true
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev'
            }
        });
    }
    
    // Prevent body scroll
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    const modalOverlay = document.getElementById('modal-overlay');
    const modalContent = document.getElementById('modal-content');
    
    if (!modalOverlay || !modalContent) return;
    
    modalOverlay.classList.remove('active');
    modalContent.classList.remove('active');
    
    // Restore body scroll
    document.body.style.overflow = '';
}

// Skill Bars Animation
function initSkillBars() {
    const skillBars = document.querySelectorAll('.skill-progress');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const width = entry.target.getAttribute('data-width');
                entry.target.style.width = width + '%';
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    skillBars.forEach(bar => observer.observe(bar));
}

// PureCounter Initialization
function initPureCounter() {
    if (typeof PureCounter !== 'undefined') {
        new PureCounter({
            selector: '.purecounter',
            start: 0,
            end: 100,
            duration: 2,
            delay: 10,
            once: true,
            repeat: false,
            decimals: 0,
            legacy: true,
            filesizing: false,
            currency: false,
            currencySymbol: '',
            separator: false,
            formater: false
        });
    }
}

// Back to Top Button
function initBackToTop() {
    const backToTopBtn = document.getElementById('back-to-top');
    if (!backToTopBtn) return;
    
    // Show/hide button based on scroll position
    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            backToTopBtn.classList.add('visible');
        } else {
            backToTopBtn.classList.remove('visible');
        }
    });
    
    // Scroll to top when clicked
    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Scroll Progress Bar
function initScrollProgress() {
    const scrollProgress = document.getElementById('scroll-progress');
    if (!scrollProgress) return;
    
    window.addEventListener('scroll', () => {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        scrollProgress.style.width = scrollPercent + '%';
    });
}

// Lazy Loading Images
function initLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    }, {
        rootMargin: '50px',
        threshold: 0.1
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// Magnetic Button Effect
function initMagneticButtons() {
    const magneticBtns = document.querySelectorAll('.magnetic-btn');
    
    magneticBtns.forEach(btn => {
        btn.addEventListener('mousemove', (e) => {
            const rect = btn.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            
            btn.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
        });
        
        btn.addEventListener('mouseleave', () => {
            btn.style.transform = 'translate(0, 0)';
        });
    });
}

// Text Reveal Animation
function initTextReveal() {
    const textRevealElements = document.querySelectorAll('.text-reveal');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    
    textRevealElements.forEach(el => {
        observer.observe(el);
        // Reveal immediately if already in viewport
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
            el.classList.add('revealed');
        }
    });
}

// Mouse Parallax Effect
function initMouseParallax() {
    const parallaxElements = document.querySelectorAll('.parallax-element');
    
    document.addEventListener('mousemove', (e) => {
        const mouseX = e.clientX / window.innerWidth - 0.5;
        const mouseY = e.clientY / window.innerHeight - 0.5;
        
        parallaxElements.forEach(el => {
            const speed = el.dataset.speed || 20;
            const x = mouseX * speed;
            const y = mouseY * speed;
            el.style.transform = `translate(${x}px, ${y}px)`;
        });
    });
}

// EmailJS Contact Form
function initContactForm() {
    const contactForm = document.getElementById('contact-form');
    const contactStatus = document.getElementById('contact-status');

    if (!contactForm || !contactStatus || typeof emailjs === 'undefined') return;

    emailjs.init('Mhe1zYmSSNGlcacqt');

    contactForm.addEventListener('submit', (event) => {
        event.preventDefault();

        contactStatus.textContent = 'Sending message...';
        contactStatus.classList.remove('text-red-400', 'text-green-400');
        contactStatus.classList.add('text-gray-400');

        emailjs.sendForm('service_rw8aoxs', 'template_ligzt3a', contactForm)
            .then(() => {
                contactStatus.textContent = 'Message sent successfully! I will reply soon.';
                contactStatus.classList.remove('text-red-400');
                contactStatus.classList.add('text-green-400');
                contactForm.reset();
            }, (error) => {
                console.error('EmailJS send error:', error);
                contactStatus.textContent = 'Failed to send message. Please try again later.';
                contactStatus.classList.remove('text-green-400');
                contactStatus.classList.add('text-red-400');
            });
    });
}
