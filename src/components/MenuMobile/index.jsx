import './style.scss'

export default function MenuMobile({ menuIsVisible, setMenuIsVisible }) {
  const ToggleMode = () => {
    setMenuIsVisible(!menuIsVisible)
  }
  console.log(menuIsVisible)
  return (
    <nav id='nav-mobile'>
      <button className={menuIsVisible ? 'icon iconActive' : 'icon'} onClick={ToggleMode}>
        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
        </svg>
      </button>
      <button className={menuIsVisible ? 'close closeActive' : 'close'} onClick={ToggleMode}>
        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
          <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
        </svg>
      </button>
      <ul id='nav-menu' className={menuIsVisible ? 'menu menuOpen' : 'menu menuClose'}>
        <li><a href="#container-banner" onClick={ToggleMode}>Home</a></li>
        <li><a href="#about" onClick={ToggleMode}>Sobre</a></li>
        <li><a href="#customer" onClick={ToggleMode}>Depoimentos</a></li>
        <li><a href="#container-contact" onClick={ToggleMode}>Contato</a></li>
      </ul>
    </nav>
  )
}