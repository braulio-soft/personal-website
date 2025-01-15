import { InlineCode } from "@/once-ui/components";

const person = {
    firstName: 'Braulio',
    lastName: 'Villegas',
    get name() {
        return `${this.firstName} ${this.lastName}`;
    },
    role: 'Full Stack Developer || Solutions Architect',
    avatar: '/images/logo.jpeg',
    location: 'America/New_York',        // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
    languages: ['English', 'Spanish']  // optional: Leave the array empty if you don't want to display languages
}

const newsletter = {
    display: false,
    title: <>Subscribe to {person.firstName}'s Newsletter</>,
    description: <>I occasionally write about design, technology, and share thoughts on the intersection of creativity and engineering.</>
}

const social = [
    // Links are automatically displayed.
    // Import new icons in /once-ui/icons.ts
    {
        name: 'GitHub',
        icon: 'github',
        link: 'https://github.com/braulio-soft',
    },
    {
        name: 'LinkedIn',
        icon: 'linkedin',
        link: 'https://www.linkedin.com/in/braulio-villegas-4884b0188/',
    },
    {
        name: 'X',
        icon: 'x',
        link: '',
    },
    {
        name: 'Email',
        icon: 'email',
        link: 'braulio.villegas2019@gmail.com',
    },
]

const home = {
    label: 'Home',
    title: `${person.name}'s Portfolio`,
    description: `Portfolio website showcasing my work as a ${person.role}`,
    headline: <>Passionate developer and problem-solver</>,
    subline: <>I'm Braulio Villegas, a full-stack developer with expertise in <InlineCode>PHP</InlineCode>, <InlineCode>Java</InlineCode>, and <InlineCode>Go</InlineCode>.
        I specialize in crafting scalable backend systems and intuitive user experiences.
        When not coding, I build personal projects, explore the latest in software engineering, and enjoy traveling to new places</>
}

const about = {
    label: 'About',
    title: 'About me',
    description: `Meet ${person.name}, ${person.role} from ${person.location}`,
    tableOfContent: {
        display: true,
        subItems: false
    },
    avatar: {
        display: true
    },
    calendar: {
        display: true,
        link: 'https://cal.com/braulio-villegas-psbsp0'
    },
    intro: {
        display: true,
        title: 'Introduction',
        description: <>Braulio Villegas is a Florida-based full-stack developer passionate about building robust and scalable applications. Beyond software, he loves playing soccer, going to the gym, and watching anime. A devoted traveler, gamer, and Marvel movie enthusiast, also enjoys reading about Game of Thrones and spending time with his dog, Nala.</>
    },
    work: {
        display: true, // set to false to hide this section
        title: 'Work Experience',
        experiences: [
            {
                company: 'LUV',
                timeframe: 'Sep 2023 - Present',
                role: 'Backend Developer Senior',
                achievements: [
                    <>Developed and optimized the LUV project using <InlineCode>PHP</InlineCode>, <InlineCode>Laravel</InlineCode>, and <InlineCode>Vue.js</InlineCode>, resolving over 125 tickets and significantly improving system performance.</>,
                    <>Led the integration of AI-powered support chat and real-time user communication features, enhancing user interaction and satisfaction.</>,
                    <>Implemented new functionalities and restructured the project, ensuring scalability and maintainability.</>
                ],
                images: [
                    {
                        src: '/images/LUV-logo-website.webp',
                        alt: 'LUV Project',
                        width: 9,
                        height: 9
                    }
                ]
            },
            {
                company: 'Sony',
                timeframe: 'Sep 2023 - Present',
                role: 'Backend Developer Senior',
                achievements: [
                    <>Supported ETL processes between <InlineCode>Snowflake</InlineCode> and <InlineCode>Salesforce</InlineCode>, ensuring seamless data synchronization for PlayStationNetwork customers.</>,
                    <>Conducted demos and client meetings, presenting new features and gathering feedback for upcoming ETL process improvements.</>,
                    <>Collaborated with cross-functional teams to design and implement data pipelines for improved customer management.</>
                ],
                images: [
                    {
                        src: '/images/sony-900x503.jpg.webp',
                        alt: 'Sony Project',
                        width: 17,
                        height: 9
                    }
                ]
            },
            {
                company: 'Interbank',
                timeframe: 'Mar 2023 - Sep 2023',
                role: 'FullStack Developer Senior',
                achievements: [
                    <>Developed middlewares for OAuth 2.0 management, improving security and efficiency.</>,
                    <>Implemented a notification management system using <InlineCode>Spring Boot</InlineCode> and <InlineCode>Azure</InlineCode>, streamlining admin tasks and improving system reliability.</>,
                    <>Enhanced the admin dashboard UI with <InlineCode>Vue.js</InlineCode>, creating a more intuitive and user-friendly interface.</>
                ],
                images: [
                    {
                        src: '/images/seguro-360-interbank.webp',
                        alt: 'Interbank Project',
                        width: 16,
                        height: 9
                    }
                ]
            },
            {
                company: 'Banco de Crédito del Perú (BCP)',
                timeframe: 'Aug 2021 - Feb 2023',
                role: 'Software Engineer',
                achievements: [
                    <>Redesigned two major projects using <InlineCode>AWS</InlineCode> and <InlineCode>Node.js</InlineCode>, improving data accuracy and web performance.</>,
                    <>Developed unit tests with <InlineCode>JestJS</InlineCode>, ensuring the stability and reliability of new functionalities.</>,
                    <>Implemented dynamic form validation for customer registration using <InlineCode>ReactJS</InlineCode>, enhancing user experience.</>
                ],
                images: [
                    {
                        src: '/images/bcpapp.png',
                        alt: 'BCP Project',
                        width: 10,
                        height: 9
                    }
                ]
            },
            {
                company: 'Blaze Inc.',
                timeframe: 'Jun 2018 - Jul 2021',
                role: 'Full Stack Developer',
                achievements: [
                    <>Developed and maintained applications using <InlineCode>Java</InlineCode>, <InlineCode>Spring Boot</InlineCode>, and <InlineCode>SQL Server</InlineCode>, ensuring high availability and scalability.</>,
                    <>Enhanced client-side form validation and error handling using <InlineCode>Vue.js</InlineCode>, improving the user experience.</>,
                    <>Troubleshot and resolved technical issues, documenting solutions to enhance team efficiency.</>
                ],
                images: [
                    {
                        src: '/images/blaze-home.png',
                        alt: 'Blaze Project',
                        width: 16,
                        height: 9
                    }
                ]
            }
        ]
    },
    studies: {
        display: true, // set to false to hide this section
        title: 'Studies',
        institutions: [
            {
                name: 'University Nacional Mayor de San Marcos',
                description: <>Bachelor's degree in Software Engineering, graduated in December 2021.</>,
            },
            {
                name: 'University of Michigan',
                description: <>Currently pursuing an advanced degree in Full-Stack Development, expected completion in July 2025.</>,
            },
            {
                name: 'University of Lima',
                description: <>Earned a certification in Digital Architecture Solutions in December 2024.</>,
            },
            {
                name: 'Snowflake',
                description: <>Preparing for SnowPro Core Certification, with certification expected in February 2025.</>
            }
        ]
    },
   technical: {
    display: true, // set to false to hide this section
    title: 'Technical Skills',
    skills: [
        {
            title: 'PHP & Laravel',
            description: <>Proficient in building scalable applications using PHP and Laravel, with experience in Laravel versions 10 and 11.</>,
            images: [{
                src: '/images/Laravel.jpg',
                alt: 'Laravel Skill',
                width: 16,
                height: 9
            }]
        },
        {
            title: 'Golang',
            description: <>Experienced in developing high-performance backend services using Golang for ETL processes and system integration.</>,
            images: [{
                src: '/images/Golang.png',
                alt: 'Golang Skill',
                width: 16,
                height: 9
            }]
        },
        {
            title: 'Java & Spring Boot',
            description: <>Skilled in building enterprise-level applications with Java (11, 17) and Spring Boot, including Spring Batch for batch processing.</>,
            images: [{
                src: '/images/javaspring.jpg',
                alt: 'Java and Spring',
                width: 20,
                height: 9
            }]
        },
        {
            title: 'Vue.js & React.js',
            description: <>Developed dynamic and intuitive user interfaces using Vue.js and React.js for various applications.</>,
            images: [{
                src: '/images/react&vue.png',
                alt: 'Vue and React',
                width: 16,
                height: 9
            }]
        },
        {
            title: 'Snowflake',
            description: <>Expertise in ETL processes and data synchronization using Snowflake .</>,
            images: [{
                src: '/images/snowflake.avif',
                alt: 'Snowflake',
                width: 16,
                height: 12
            }]
        },
        {
            title: 'AWS & Azure',
            description: <>Hands-on experience with cloud services such as AWS (S3, Lambda, API Gateway) and Azure for deploying and managing applications.</>,
            images: [{
                src: '/images/clouds.jpg',
                alt: 'Amazon and Azure',
                width: 16,
                height: 9
            }]
        },
        {
            title: 'Docker & Kubernetes',
            description: <>Proficient in containerization and orchestration using Docker and Kubernetes for scalable and portable applications.</>,
            images: [{
                src: '/images/docker.jpg',
                alt: 'Docker and Kube',
                width: 16,
                height: 9
            }]
        },
        {
            title: 'Git & CI/CD',
            description: <>Skilled in version control with Git and implementing CI/CD pipelines to streamline deployment workflows.</>,
            images: [{
                src: '/images/GIT.jpg',
                alt: 'Git',
                width: 16,
                height: 9
            }]
        },
        {
            title: 'PostgreSQL & MongoDB',
            description: <>Experienced in designing and optimizing relational databases with PostgreSQL and MongoDB.</>,
            images: [{
                src: '/images/postgres&mongo.jpg',
                alt: 'Mongo PostgresSQL',
                width: 16,
                height: 9
            }]
        }
    ]
},


}

const blog = {
    label: 'Blog',
    title: 'Writing about design and tech...',
    description: `Read what ${person.name} has been up to recently`
    // Create new blog posts by adding a new .mdx file to app/blog/posts
    // All posts will be listed on the /blog route
}

const skill = {
    label : 'Skill',
    title : 'Get more description about techs skills ... '

}

const work = {
    label: 'Work',
    title: 'My projects',
    description: `Design and dev projects by ${person.name}`
    // Create new project pages by adding a new .mdx file to app/blog/posts
    // All projects will be listed on the /home and /work routes
}

const gallery = {
    label: 'Gallery',
    title: 'My photo gallery',
    description: `A photo collection by ${person.name}`,
    // Images from https://pexels.com
    images: [
        {
            src: '/images/gallery/img-01.jpg',
            alt: 'image',
            orientation: 'vertical'
        },
        {
            src: '/images/gallery/img-02.jpg',
            alt: 'image',
            orientation: 'horizontal'
        },
        {
            src: '/images/gallery/img-03.jpg',
            alt: 'image',
            orientation: 'vertical'
        },
        {
            src: '/images/gallery/img-04.jpg',
            alt: 'image',
            orientation: 'horizontal'
        },
        {
            src: '/images/gallery/img-05.jpg',
            alt: 'image',
            orientation: 'horizontal'
        },
        {
            src: '/images/gallery/img-06.jpg',
            alt: 'image',
            orientation: 'vertical'
        },
        {
            src: '/images/gallery/img-07.jpg',
            alt: 'image',
            orientation: 'horizontal'
        },
        {
            src: '/images/gallery/img-08.jpg',
            alt: 'image',
            orientation: 'vertical'
        },
        {
            src: '/images/gallery/img-09.jpg',
            alt: 'image',
            orientation: 'horizontal'
        },
        {
            src: '/images/gallery/img-10.jpg',
            alt: 'image',
            orientation: 'horizontal'
        },
        {
            src: '/images/gallery/img-11.jpg',
            alt: 'image',
            orientation: 'vertical'
        },
        {
            src: '/images/gallery/img-12.jpg',
            alt: 'image',
            orientation: 'horizontal'
        },
        {
            src: '/images/gallery/img-13.jpg',
            alt: 'image',
            orientation: 'horizontal'
        },
        {
            src: '/images/gallery/img-14.jpg',
            alt: 'image',
            orientation: 'horizontal'
        },
    ]
}

export { person, social, newsletter, home, about, blog, work, gallery,skill };