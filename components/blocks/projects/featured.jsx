import Image from 'next/image'
import Badges from '../../utils/badge.list.util'
import Icon from '../../utils/icon.util'
import css from '../../../styles/sections/projects/featured.module.scss'

export default function FeaturedProject({ content, index }) {
  const { project, url, repo, descriptionTitle, description, stack, images } = content

  return (
    <a href={url} target="_blank" rel="noopener noreferrer" className={`${css.project} ${index % 2 === 0 ? css.even : css.odd}`}>
      <div className={css.details}>
        <div className={css.projectHeader}>
          <h3>{project}</h3>
          <span className={css.repo}>
            <i className="devicon-github-plain"></i> {repo}
          </span>
        </div>
        <div className={css.description}>
          <p>
            <strong>{descriptionTitle}</strong> {description}
          </p>
        </div>
        <div className={css.stackContainer}>
          <Badges list={stack} block="stack" fullContainer={false} color={false} />
        </div>
      </div>
      <div className={css.imageContainer}>
        {images.length > 0 && (
          <Image src={images[0].url} alt={`${project} mockup`} layout="fill" objectFit="cover" />
        )}
      </div>
    </a>
  )
}