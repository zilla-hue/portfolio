// Core packages
import Image from 'next/image'

// Section structure
import Section from '../../structure/section';
import Container from '../../structure/container';

// Section general blocks
import SectionTitle from '../../blocks/section.title.block'
import SectionGridBg from '../../blocks/section.grid.block'

// Section specific blocks
import BadgesBlock from '../../blocks/about.badges.block'
import CopyBlock from '../../blocks/about.copy.block'

// Section scss
import about from '../../../styles/sections/index/about.module.scss'

/**
 * Section: Technical
 * Highlight your technical skills with a short blurb about you,
 * Then display the programs you are proficient with and the technologies you use if applicable.
 * 
 * @returns {jsx} <Technical />
 */
export default function Technical() {
	return (
		<Section classProp={`${about.section} borderBottom`}>	
			<Container spacing={['verticalXXXLrg']}>
				<SectionTitle
					title="Technical Skills"
					preTitle="Expertise"
					subTitle="As a Software Developer, I work with various technologies to create efficient and user-friendly applications."
				/>
				<section className={`${about.content} ${about.container}`}>
					<div className={about.copy}>
						<CopyBlock 
							title="Continuous Learning"
							icon={[ 'fat', 'brain-circuit' ]}
							copy="I am passionate about generative AI, Large Language Models, and the AI ecosystem, constantly expanding my knowledge in these areas."
							iconClass={about.icon}
							containerClass={about.container}
						/>
						<BadgesBlock 
							title="Programming Languages" 
							copy="I have experience with various programming languages, allowing me to tackle diverse projects and challenges."
							list={languages}
							block="software" 
							fullContainer="fullContainer"
							icon="code"
							containerClass={about.container}
							headerIcon={about.icon} 
						/>
						<BadgesBlock 
							title="Technologies and Frameworks" 
							copy="I work with a range of technologies and frameworks to build robust applications."
							list={technologies} 
							block="tech"
							fullContainer="fullContainer" 
							icon="laptop-code"
							containerClass={about.container}
							headerIcon={about.icon} 
						/>							
					</div>
					<div className={`${about.image} ${about.technicalSvg}`}>
						<Image src="/img/code.jpg" width={477} height={1111} alt="Coding Illustration" />
					</div>
				</section>	
			</Container>
		</Section>
	)
}

const languages = [
	{ key: 'python', 	name: 'Python', 			type: 'devicon' },
	{ key: 'csharp', 	name: 'C#', 				type: 'devicon' },
	{ key: 'dart', 		name: 'Dart', 				type: 'devicon' },
	{ key: 'html5', 	name: 'HTML5', 				type: 'devicon' },
	{ key: 'css3', 		name: 'CSS3', 				type: 'devicon' },
	{ key: 'javascript',name: 'JavaScript', 		type: 'devicon' },
]

const technologies = [
	{ key: 'flutter', 		name: 'Flutter', 			type: 'devicon' },
	{ key: 'dotnet', 		name: 'ASP.NET', 			type: 'devicon' },
	{ key: 'wordpress', 	name: 'WordPress', 			type: 'devicon' },
	{ key: 'git', 			name: 'Git', 				type: 'devicon' },
	{ key: 'mysql', 		name: 'MySQL', 				type: 'devicon' },
	{ key: 'mongodb', 		name: 'MongoDB', 			type: 'devicon' },
]