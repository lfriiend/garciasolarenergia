import './style.scss'
import Thiago from '../../images/THIAGO1.jpg'

export default function About() {
  return (
    <section className='container-about' id='about'>
      <div className='grid-container2'>
        <div className='img-about photo'>
          <img src={Thiago} alt="" />
        </div>
        <div className='about-us about'>
          <h4>Quem sou eu</h4>
          <h2>Entenda quem sou e por que existo</h2>
          <p>Meu nome é Thiago Garcia, sou Engenheiro de Controle e Automação e Analista em Energia Solar com mais de 500 usinas homologadas. O meu interesse pela energia solar nasceu ainda na faculdade, através de um trabalho sobre o assunto, onde eu vi que era um tipo de energia que além de ter um caráter ecológico e sustentável muito forte, também tinha custo benefício muito bom. Já a minha história profissional com a energia solar começou lá em 2016, na Alba Energia, onde comecei a trabalhar tanto com os sistemas de aquecimento solar quanto com os sistemas fotovoltaicos. Foi ali que realmente aprendi sobre a energia solar, tanto atravésdos cursose especializações fornecidos pela empresa, quando pela experiência adquirida mais de 170 clientes atendidos</p>
        </div>
      </div>
    </section>
  )
}