// Core packages
import Image from 'next/image'

import Badges 		from '../../utils/badge.list.util'

// Section structure
import Section from '../../structure/section';
import Container from '../../structure/container';

// Section general blocks
import SectionTitle from '../../blocks/section.title.block'
import SectionGridBg from '../../blocks/section.grid.block'

// Career scss
import career from '../../../styles/sections/index/career.module.scss'

/**
 * Section: Career
 *
 * @returns {jsx} <Career />
 */
export default function Career() {
	return (
		<Section classProp={`${career.section} borderBottom`}>
			<Container spacing={['verticalXXXLrg']}>
				<SectionTitle
					title="Experience"
					preTitle="Career"
					subTitle="I am currently contributing to the development of a work collaboration app at Credlanche Limited."
				/>
				<section className={career.area}>
					<article className={career.company}>
						<div className={career.companyContent}>
							<span className={career.companyHeader}>
								<h3>Credlanche Limited</h3>
								<h4>Permanent Full-time</h4>
								<h4>Sept 2023 - Present</h4>
								<h5>Abuja, Nigeria</h5>
							</span>
							<p>
							Credlanche Limited is developing a work collaboration app similar to Slack.
							</p>
						</div>
						<div className={career.companyAlt}></div>
					</article>

					<article className={career.companyPositions}>
						<div className={career.position}>
							<div className={career.positionContent}>
								<span class={career.positionHeader}>
									<h3>Software Developer</h3>
									<h4>Sept 2023 - Present</h4>
								</span>
								<p>
								Contributing to the development of a work collaboration app, integrating core features, improving app performance, and reducing bugs. Also designed websites using WordPress for various clients.
								</p>
								<ul className={career.list}>
									<li>Developed and integrated several core features for the collaboration app</li>
									<li>Improved overall app performance and reduced bugs</li>
									<li>Designed websites using WordPress for multiple clients</li>
								</ul>
								<Badges list={fullStack} block="stack" fullContainer="fullContainer"/>
							</div>
							<div className={career.positionAlt}></div>
						</div>
					</article>

					<article className={career.company}>
						<div className={career.companyContent}>
							<span className={career.companyHeader}>
								<h3>e86 Limited</h3>
								<h4>Freelance</h4>
								<h4>Nov 2021 - Jan 2022</h4>
								<h5>Abuja, Nigeria</h5>
							</span>
							<p>
							e86 Limited is a company focused on e-book sales and distribution.
							</p>
						</div>
						<div className={career.companyAlt}></div>
					</article>

					<article className={career.companyPositions}>
						<div className={career.position}>
							<div className={career.positionContent}>
								<span class={career.positionHeader}>
									<h3>Freelance Mobile App Developer</h3>
									<h4>Nov 2021 - Jan 2022</h4>
								</span>
								<p>
								Developed and deployed the e86 Vibe mobile app for buying and selling e-books using Flutter and Dart.
								</p>
								<ul className={career.list}>
									<li>Utilized Flutter and Dart for cross-platform development</li>
									<li>Created a user-friendly interface with high user satisfaction</li>
									<li>Collaborated with clients and team members to deliver projects on time and within budget</li>
								</ul>
								<Badges list={mobileStack} block="stack" fullContainer="fullContainer"/>
							</div>
							<div className={career.positionAlt}></div>
						</div>
					</article>

					<article className={career.company}>
						<div className={career.companyContent}>
							<span className={career.companyHeader}>
								<h3>Maryland Global Initiatives Cooperation (MGIC)</h3>
								<h4>Internship</h4>
								<h4>Sept 2021 - Sept 2022</h4>
								<h5>Abuja, Nigeria</h5>
							</span>
							<p>
							MGIC focuses on improving healthcare resource allocation through technology.
							</p>
						</div>
						<div className={career.companyAlt}></div>
					</article>

					<article className={career.companyPositions}>
						<div className={career.position}>
							<div className={career.positionContent}>
								<span class={career.positionHeader}>
									<h3>Student Intern - Health Informatics</h3>
									<h4>Sept 2021 - Sept 2022</h4>
								</span>
								<p>
								Contributed to the development of an Asset Management Application and worked on automated systems for improving healthcare resource allocation.
								</p>
								<ul className={career.list}>
									<li>Worked with ASP .NET and C# for automated systems</li>
									<li>Conducted data management and access control for data security</li>
								</ul>
								<Badges list={backendStack} block="stack" fullContainer="fullContainer"/>
							</div>
							<div className={career.positionAlt}></div>
						</div>
					</article>
				</section>
			</Container>
		</Section>
	)
}

const fullStack	= [
	{ key: 'python', 		name: 'Python', 			type: 'devicon' },
	{ key: 'csharp', 		name: 'C#', 				type: 'devicon' },
	{ key: 'wordpress', 	name: 'WordPress', 			type: 'devicon' },
	{ key: 'html5', 		name: 'HTML5', 				type: 'devicon' },
	{ key: 'css3', 			name: 'CSS3', 				type: 'devicon' },
	{ key: 'javascript', 	name: 'JavaScript', 		type: 'devicon' },
]

const mobileStack = [
	{ key: 'flutter', 		name: 'Flutter', 			type: 'devicon' },
	{ key: 'dart', 			name: 'Dart', 				type: 'devicon' },
]

const backendStack = [
	{ key: 'csharp', 		name: 'C#', 				type: 'devicon' },
	{ key: 'dotnet', 		name: 'ASP.NET', 			type: 'devicon' },
]