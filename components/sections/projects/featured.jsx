import FeaturedProject from '../../blocks/projects/featured'
import Section from '../../structure/section'
import Container from '../../structure/container'
import SectionTitle from '../../blocks/section.title.block'
import css from '../../../styles/sections/projects/featured.module.scss'
import content from '../../../content/projects/featured.json'

export default function FeaturedProjects() {
  return (
    <Section classProp={css.hasBg}>
      <Container spacing={'verticalXXXXLrg'}>
        <SectionTitle
          title="Featured Projects"
          preTitle="Software Development"
          subTitle="Showcasing my experience in mobile app development and web applications."
        />
        <div className={css.projectGrid}>
          {content.map((data, index) => {
            return <FeaturedProject content={data} index={index} key={index} />
          })}
        </div>
      </Container>
    </Section>
  )
}
