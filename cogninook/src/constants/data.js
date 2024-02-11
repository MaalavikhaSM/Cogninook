import images from './images';

const Menu = [
    
    {
        text: 'Admin login',
        link: '#use-cases',
    },
    {
        text: 'About us',
        link: '#team',
    },
    {
        text: 'Services',
        link: '#services',
    },
    {
        text: 'Testimonials',
        link: '#testimonials',
    },
    {
        text: 'Request a space',
        link: '#quote',
    }
];
const ServicesData = [
    {
        titleone: 'Search engine',
        titletwo: 'optimization',
        link: '#',
        itemclass: 'blight',
        imgURL: images.services01,
    },
    {
        titleone: 'Pay-per-click',
        titletwo: 'advertising',
        link: '#',
        itemclass: 'bgreen',
        imgURL: images.services02,
    },
    {
        titleone: 'Social Media',
        titletwo: 'Marketing',
        link: '#',
        itemclass: 'bdark',
        imgURL: images.services03,
    },
    {
        titleone: 'Email',
        titletwo: 'Marketing',
        link: '#',
        itemclass: 'blight',
        imgURL: images.services04,
    },
    {
        titleone: 'Content',
        titletwo: 'Creation',
        link: '#',
        itemclass: 'bgreen',
        imgURL: images.services05,
    },
    {
        titleone: 'Analytics and',
        titletwo: 'Tracking',
        link: '#',
        itemclass: 'bdark',
        imgURL: images.services06,
    },
]
const CaseStudies = [
    {
        text: 'Freelancers reported a 30% improvement in focus and output, with many expressing gratitude for the tailored workspace options that positively impacted their work-life balance.',
        link: '#',
    },
    {
        text: 'Startups achieved a 40% reduction in office space costs, faster onboarding of new team members, and improved agility in responding to market demands.',
        link: '#',
    },
    {
        text: 'Students experienced a 30% improvement in academic performance, reduced stress levels, and a stronger sense of community as they could collaborate on group projects in dedicated workspaces.',
        link: '#',
    },
];


const Team = [
    {
        name: 'John Smith',
        position: 'CEO and Founder',
        info: '10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy',
        foto: images.team01,
        linkedin: '#',
    },
    {
        name: 'Jane Doe',
        position: 'Director of Operations',
        info: '7+ years of experience in project management and team leadership. Strong organizational and communication skills',
        foto: images.team02,
        linkedin: '#',
    },
    {
        name: 'Michael Brown',
        position: 'Senior SEO Specialist',
        info: '5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization',
        foto: images.team03,
        linkedin: '#',
    },
    {
        name: 'Emily Johnson',
        position: 'PPC Manager',
        info: '3+ years of experience in paid search advertising. Skilled in campaign management and performance analysis',
        foto: images.team04,
        linkedin: '#',
    },
    {
        name: 'Brian Williams',
        position: 'Social Media Specialist',
        info: '4+ years of experience in social media marketing. Proficient in creating and scheduling content, analyzing metrics, and building engagement',
        foto: images.team05,
        linkedin: '#',
    },
    {
        name: 'Sarah Kim',
        position: 'Content Creator',
        info: '2+ years of experience in writing and editing Skilled in creating compelling, SEO-optimized content for various industries',
        foto: images.team06,
        linkedin: '#',
    },

];

const Testimonials = [
    {
        name: 'Linda W',
        position: 'Graphic Designer',
        testimonial: '"Working from home has its challenges, especially with the need for a reliable network. CogniNook not only provided me with an affordable and personalized workspace but also ensured I had the network stability required for seamless design work. It\'s a win-win!"',
    },
    {
        name: 'Sarah D',
        position: 'Marketing Specialist',
        testimonial: '"CogniNook has redefined how I approach workspaces. Booking is a breeze, and the environments are meticulously designed. My productivity has soared, and every workday feels like a tailored experience."',
    },
    
    {
        name: 'Jason H',
        position: 'Startup Founder',
        testimonial: '"CogniNook has become an integral part of our startup journey. The ability to book meeting spaces on short notice has been a game-changer for our team. It\'s reliable, efficient, and tailored to the needs of modern businesses."',
    },
    {
        name: 'Emma L',
        position: 'Freelance Writer',
        testimonial: '"CogniNook understands the needs of freelancers like me. The variety of workspaces and the flexibility to book on the go have made my life so much easier. My creative flow has never been better!"',
    },
];
export default { Menu, CaseStudies,  Team, Testimonials, ServicesData };