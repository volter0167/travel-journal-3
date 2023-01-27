import '../styles.css'
import globusIcon from '../icons/globus icon.png'

export default function Header() {
  return (
    <header>
      <img src={globusIcon} alt="planet" className="header--logo"/>
      <h3>my travel journal.</h3>
    </header>
  )
}