import '../styles.css'
import locationIcon from '../icons/location icon.png'

export default function Article(props) {
  return (
    <section className="article-card">
      <img src={props.img} alt="mountain fuji" className="article-card--preview" />
      <div className="article-card--info">
        <div className="article-card--location">
          <img src={locationIcon} alt="location icon" />
          <h4>{props.location.toUpperCase()}</h4>
          <a href={props.googleMapLink} target="_blank" rel="noreferrer">
            View on Google Maps
          </a>
        </div>
        <h2 className="article-card--title">
          {props.title}
        </h2>
        <h4 className="article-card--time">
          {props.time.startDate} - {props.time.endDate}
        </h4>
        <p className="article-card--description">
          {props.description}
        </p>
      </div>
    </section>
  )
}