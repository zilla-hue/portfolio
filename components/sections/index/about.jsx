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
import about from '../../../styles/sections/index/about.module.scss';

import profilePhoto from '../../../public/img/portrait.png'
/**
 * Section: About
 * An overview of yourself.
 * Highlight your top level attributes and disciplines.
 * 
 * @returns {jsx} <About />
 */
export default function About() {
	return (
    <Section classProp={about.section}>
      <Container spacing={["verticalXXXLrg"]}>
        <SectionTitle
          title="About Me"
          preTitle="Synopsis"
          subTitle="As a Software Developer, I am enthusiastic about continuous learning and problem-solving in a dynamic, fast-paced environment."
        />
        <section className={about.content}>
          <div className={about.image}>
            <Image
              src={profilePhoto}
              alt="Tek Dakwak profile photo"
              layout="responsive"
              objectFit="cover"
              priority
            />
          </div>
          <div className={about.copy}>
            <CopyBlock
              title="Education"
              containerClass={about.container}
              iconClass={about.icon}
              icon={["fat", "graduation-cap"]}
              copy="I hold a Bachelor of Science in Computer Science from Plateau State University, Bokkos (2017 - 2023)."
            />
            <BadgesBlock
              title="Skills"
              containerClass={about.container}
              list={skills}
              fullContainer="fullContainer"
              block="methods"
              icon="code"
              copy="I have experience in various programming languages and technologies, with a focus on software development and mobile app creation."
              headerIcon={`${about.icon}`}
            />
          </div>
        </section>
      </Container>
    </Section>
  );
}

const skills = [
	{ key: 'python', 		name: 'Python', 			type: 'devicon' },
	{ key: 'csharp', 		name: 'C#', 				type: 'devicon' },
	{ key: 'flutter', 		name: 'Flutter', 			type: 'devicon' },
	{ key: 'dart', 			name: 'Dart', 				type: 'devicon' },
	{ key: 'wordpress', 	name: 'WordPress', 			type: 'devicon' },
	{ key: 'dotnet', 		name: 'ASP.NET', 			type: 'devicon' },
]