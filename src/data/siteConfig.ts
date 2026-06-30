/**
 * Ilmeza Trust Hub - Centralized Site Configuration
 * Use this file to update any text, images, or contact details across the website.
 */

export const siteConfig = {
    brand: {
        name: "Ilmeza Foundation",
        email: "ilmezaofficial@gmail.com",
        tagline: "Building Hope. Creating Futures.",
        socials: {
            instagram: "https://www.instagram.com/ilmezaa?igsh=MWV0ZGtkYXBjdzlpag==",
            linkedin: "#", // Add LinkedIn URL if available
            youtube: "https://youtube.com/@ilmezaofficial?si=hSZMaL4vRJq3vY-q",
            facebook: "https://www.facebook.com/share/1EHMnwhUEr/",
        },
        donate: {
            qrPath: "/images/qr_donate.png",
            upiId: "ilmeza4612@fbl",
            bankName: "Federal Bank",
            bankLogo: "/logo_federal_bank.png"
        },
        contact: {
            address: "Street No. 22, Zakir Nagar Okhla, Near Ashoka Park, New Delhi 110025",
            phone: "+91 8287007025",
            email: "ilmezaofficial@gmail.com",
            web3formsKey: "d6408c0e-340f-40b5-8fe1-3d957c487aef"
        },
        logoPath: "/logo_foundation.png"
    },

    home: {
        hero: {
            slides: [
                {
                    title: "Educating Minds.",
                    highlight: "Empowering Futures.",
                    image: "/images/hero_education.png",
                    description: "Providing quality education and holistic learning for underprivileged children across India."
                },
                {
                    title: "Self-Reliance.",
                    highlight: "Empowering Women.",
                    image: "/images/hero_women.png",
                    description: "Enabling financial independence and social dignity for women through advanced skill training."
                },
                {
                    title: "Healing Hands.",
                    highlight: "Healthy Communities.",
                    image: "/images/hero_healthcare.png",
                    description: "Ensuring basic health services and nutritional support reach every person in need."
                },
                {
                    title: "Building Hope.",
                    highlight: "Creating Futures.",
                    image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2070",
                    description: "Empowering underserved communities through education, skill development, and social initiatives."
                }
            ],
            // Keeping legacy fields for backward compatibility if needed elsewhere, 
            // but we'll primarily use 'slides' now.
            title: "Building Hope.",
            highlight: "Creating Futures.",
            description: "Empowering underserved communities through education, skill development, healthcare, and social upliftment.",
            images: [
                "/images/hero_education.png",
                "/images/hero_women.png",
                "/images/hero_healthcare.png",
                "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2070",
            ]
        },
        whoWeAre: {
            title: "Dedicated to Empowering Every Individual",
            description1: "Ilmeza Foundation is a Section - 8 non-profit organization dedicated to empowering individuals and communities by providing access to education, skills, healthcare, and social support systems.",
            description2: "Our initiatives focus on creating long-term impact through sustainable development programs, ensuring that no one is left behind. We work closely with communities, volunteers, and partners to bring meaningful change.",
            images: [
                "/images/who_we_are.jpg",
                "https://images.unsplash.com/photo-1542810634-71277d95dcbb?q=80&w=2070",
                "https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?q=80&w=2070",
                "/images/impact_community.png"
            ]
        },
        stats: [
            { label: "Students Supported", value: 5000 },
            { label: "Women Empowered", value: 2500 },
            { label: "Youth Skilled", value: 3000 },
            { label: "Communities Impacted", value: 150 },
            { label: "Volunteers Engaged", value: 800 },
        ]
    },

    about: {
        story: {
            title: "Our Story",
            description1: "Ilmeza Foundation was born from a simple yet powerful belief — every individual deserves equal opportunity to grow, learn, and succeed.",
            description2: "Founded by passionate educators, social workers, and development professionals, Ilmeza Foundation began its journey to address educational inequality, poverty, unemployment, and social marginalization.",
            description3: "Today, we touch thousands of lives through carefully designed programs focus on sustainable growth and community ownership. Our work spans across multiple regions, ensuring that the roots of transformation go deep.",
            images: [
                "https://images.unsplash.com/photo-1524069290683-0457abfe42c3?q=80&w=2070",
                "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2070",
                "https://images.unsplash.com/photo-1542810634-71277d95dcbb?q=80&w=2070"
            ]
        },
        vision: {
            title: "Vision",
            heading: "To Create a Just and Inclusive Society",
            description: "Where every individual has access to quality education, opportunity, and dignity."
        },
        mission: {
            title: "Mission",
            heading: "Empowerment Through Quality Action",
            description: "To empower marginalized communities through quality education, skill development, healthcare support, and sustainable social initiatives that enable long-term transformation."
        }
    },

    getInvolved: {
        volunteer: {
            title: "Volunteer With Us",
            description: "\"Lend your time and skills to make a direct impact in communities. Whether it's teaching, mentoring, or organizing, every contribution counts.\"",
            images: [
                "https://images.unsplash.com/photo-1559027615-cd4428ad6575?q=80&w=2070", // Reliable Alt
                "https://images.unsplash.com/photo-1536337005238-94b997371b40?q=80&w=2070", // Reliable Alt
                "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2070"
            ]
        },
        partner: {
            title: "Partner With Us",
            description: "\"Social change is a collective responsibility. We invite corporations, NGOs, and institutions to partner with us for a greater social impact.\"",
            images: [
                "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070", // Reliable Alt
                "https://images.unsplash.com/photo-1521791136364-703a1d41f240?q=80&w=2070", // Reliable Alt
                "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2070"
            ]
        }
    },

    programs: [
        {
            iconName: "BookOpen",
            title: "Education & Learning Support",
            goal: "Ensure no child drops out due to financial or social barriers.",
            desc: "We provide access to quality education through scholarship, free coaching, and digital learning programs.",
            points: [
                "Scholarships for underprivileged students",
                "Free coaching and academic support",
                "Digital learning programs",
                "Career guidance and mentoring",
                "School infrastructure support",
            ],
        },
        {
            iconName: "Users",
            title: "Youth Skill Development & Employability",
            goal: "Build confident, employable, and entrepreneurial youth.",
            desc: "We empower youth with job-ready skills to bridge the gap between education and employment.",
            points: [
                "Vocational training in high-demand trades",
                "Digital literacy and technology training",
                "Soft skills and communication development",
                "Competitive exam preparation support",
                "Entrepreneurship and startup guidance",
            ],
        },
        {
            iconName: "Heart",
            title: "Women Empowerment",
            goal: "Enable women to become financially independent and socially empowered.",
            desc: "Empowering women with the skills and confidence to lead self-sufficient lives.",
            points: [
                "Skill training for self-employment",
                "Financial literacy and management",
                "Health & hygiene awareness campaigns",
                "Leadership development workshops",
                "Legal awareness and rights education",
            ],
        },
        {
            iconName: "Stethoscope",
            title: "Healthcare & Nutrition",
            goal: "Improve community health and well-being.",
            desc: "Ensuring that quality healthcare and nutrition are accessible to the most underserved regions.",
            points: [
                "Free health check-up camps",
                "Nutrition and dietary awareness programs",
                "Sanitation and hygiene campaigns",
                "Mental health awareness and support",
                "Emergency medical assistance",
            ],
        },
        {
            iconName: "Home",
            title: "Community Development",
            goal: "Build resilient and self-sufficient communities.",
            desc: "Holistic development of rural and urban underserved areas through community-led initiatives.",
            points: [
                "Rural infrastructure development",
                "Clean water and sanitation projects",
                "Environmental sustainability drives",
                "Community learning and culture centers",
                "Solar and green energy initiatives",
            ],
        },
        {
            iconName: "AlertTriangle",
            title: "Disaster Relief & Humanitarian Aid",
            goal: "Stand with communities in times of crisis.",
            desc: "Rapid response and long-term rehabilitation support for those affected by natural and man-made disasters.",
            points: [
                "Emergency food and water distribution",
                "Emergency medical relief services",
                "Rehabilitation and rebuilding support",
                "Disaster preparedness training",
                "Resource mobilization for affected zones",
            ],
        }
    ],
    healthCare: {
        title: "Ilmeza Women Health Initiative",
        subtitle: "Empowering Women Through Health Awareness & Early Detection",
        mission: "At Ilmeza Foundation, we believe that a healthy woman builds a healthy family, and a healthy family builds a strong nation. The Ilmeza Women Health Initiative is our dedicated effort to improve women’s health outcomes through awareness, early diagnosis, and preventive care.",
        importance: {
            title: "Why This Initiative Matters",
            description: "In India, breast cancer and cervical cancer are among the most common causes of death among women. What makes the situation more concerning is the lack of awareness, late diagnosis, and limited access to healthcare in many communities.",
            highlight: "The good news is—early detection can save lives. Through awareness and timely screening, these diseases can be prevented or treated effectively."
        },
        focusAreas: [
            {
                id: "breast-cancer",
                title: "Breast Cancer Awareness",
                image: "/images/healthcare/breast_cancer_ribbon.png",
                points: [
                    "Educating women about early symptoms and warning signs",
                    "Promoting Breast Self-Examination (BSE) practices",
                    "Encouraging regular clinical screenings",
                    "Breaking myths and stigma around cancer"
                ],
                extraImage: "/images/healthcare/bse_guide.png"
            },
            {
                id: "cervical-cancer",
                title: "Cervical Cancer Awareness",
                image: "/images/healthcare/cervical_camp.png",
                points: [
                    "Raising awareness about HPV (Human Papillomavirus)",
                    "Promoting Pap smear tests for early detection",
                    "Encouraging vaccination and preventive care",
                    "Educating women about reproductive health"
                ]
            }
        ],
        approach: {
            title: "Our Approach",
            description: "We work at the grassroots level to ensure maximum reach and real impact:",
            items: [
                "Community awareness campaigns in rural and urban areas",
                "Free or low-cost health screening camps",
                "Collaboration with doctors, hospitals, and health professionals",
                "Educational workshops and interactive sessions",
                "Distribution of informational materials in local languages"
            ]
        },
        impact: {
            title: "Our Impact Vision",
            items: [
                "Increase awareness among women about cancer prevention",
                "Reduce late-stage diagnosis through early screening",
                "Improve access to basic healthcare services",
                "Build a community where women feel confident discussing their health"
            ]
        },
        getInvolved: {
            title: "Get Involved",
            description: "You can be a part of this life-saving initiative:",
            items: [
                { label: "Volunteer", text: "Volunteer with us in awareness drives" },
                { label: "Partner", text: "Partner as a healthcare provider or organization" },
                { label: "Support", text: "Support by contributing to our programs" },
                { label: "Spread Awareness", text: "Spread Awareness in your community" }
            ],
            footer: "Together, we can save lives. Together, we can build a healthier future."
        }
    }
};
