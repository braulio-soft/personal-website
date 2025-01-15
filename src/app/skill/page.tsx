import { Column, Flex, Heading, Text } from '@/once-ui/components';
import { FaStar, FaRegStar } from 'react-icons/fa'; // Librería para las estrellas

const skills = [
	{ name: 'JavaScript', level: 3, description: 'Intermediate in ES6+, DOM manipulation, and frameworks.', experience: '3 years' },
	{ name: 'PHP', level: 4, description: 'Proficient in backend development with Laravel.', experience: '4 years' },
	{ name: 'Golang', level: 3, description: 'Experience building high-performance APIs.', experience: '2 years' },
	{ name: 'React.js', level: 5, description: 'Skilled in building dynamic, interactive UIs.', experience: '5 years' },
	{ name: 'Next.js', level: 4, description: 'Experience with server-side rendering and SEO optimization.', experience: '3 years' },
	{ name: 'PostgreSQL', level: 4, description: 'Proficient in designing and optimizing relational databases.', experience: '4 years' },
	{ name: 'Docker', level: 3, description: 'Familiar with containerization and CI/CD pipelines.', experience: '2 years' },
	{ name: 'Java', level: 4, description: 'Proficient in building enterprise-level applications with Spring Boot.', experience: '4 years' },
	{ name: 'Git', level: 5, description: 'Expert in version control and collaborative workflows.', experience: '6 years' },
	{ name: 'AWS', level: 4, description: 'Experience in cloud services, including S3, Lambda, and EC2.', experience: '3 years' },
	{ name: 'MongoDB', level: 4, description: 'Proficient in managing NoSQL databases for scalable applications.', experience: '4 years' },
	{ name: 'Modelado C4', level: 3, description: 'Familiar with C4 model for visualizing software architecture.', experience: '2 years' },
	{ name: 'DDD', level: 3, description: 'Experience applying Domain-Driven Design principles in projects.', experience: '2 years' },
	{ name: 'Eleventy', level: 3, description: 'Experience building static sites with Eleventy.', experience: '1 year' },
	{ name: 'Vercel', level: 4, description: 'Proficient in deploying and managing applications on Vercel.', experience: '3 years' },
	{ name: 'Snowflake', level: 3, description: 'Experience in data warehousing and ETL processes using Snowflake.', experience: '2 years' },
];


export default function Skill() {
	return (
		<Column maxWidth="s">
			<Heading marginBottom="l" variant="display-strong-s">
				My Skills
			</Heading>

			<Column>
				<Heading variant="body-strong-m" marginBottom="m">
					Technical Skills and Proficiency
				</Heading>
				<table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '16px' }}>
					<thead>
						<tr>
							<th style={{ textAlign: 'left', padding: '12px', borderBottom: '2px solid #ddd' }}>Skill</th>
							<th style={{ textAlign: 'left', padding: '12px', borderBottom: '2px solid #ddd' }}>Level</th>
							<th style={{ textAlign: 'left', padding: '12px', borderBottom: '2px solid #ddd' }}>Description</th>
							<th style={{ textAlign: 'left', padding: '12px', borderBottom: '2px solid #ddd' }}>Experience</th>
						</tr>
					</thead>
					<tbody>
						{skills.map((skill, index) => (
							<tr key={index}>
								<td style={{ padding: '12px', borderBottom: '1px solid #ddd' }}>{skill.name}</td>
								<td style={{ padding: '12px', borderBottom: '1px solid #ddd' }}>
									{[...Array(5)].map((_, i) =>
										i < skill.level ? (
											<FaStar key={i} color="gold" />
										) : (
											<FaRegStar key={i} color="gray" />
										)
									)}
								</td>
								<td style={{ padding: '12px', borderBottom: '1px solid #ddd' }}>{skill.description}</td>
								<td style={{ padding: '12px', borderBottom: '1px solid #ddd' }}>{skill.experience}</td>
							</tr>
						))}
					</tbody>
				</table>
				<Text variant="body-strong-s" color="warning" marginTop="m">
					* This section is a work in progress.
				</Text>
			</Column>
		</Column>
	);
}
