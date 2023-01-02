import './style.scss'
import House from '../../images/house.png'

export default function About() {
  return (
    <section className='container-about' id='about'>
      <div className='grid-container2'>
        <div className='img-about photo'>
          <img src={House} alt="" />
        </div>
        <div className='about-us about'>
          <h4>Sobre nós</h4>
          <h2>Entenda quem somos e por que existimos</h2>
          <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.</p>
        </div>
      </div>
    </section>
  )
}