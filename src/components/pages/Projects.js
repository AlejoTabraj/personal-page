import React, {useEffect} from 'react'
import Navbar from '../organisms/Navbar'
import image1 from '../../assets/algv1.png'

export default function Projects(){
    useEffect(() => {
        
    const div = document.querySelector('#project')

    const count = 20
    for(let i = 0; i < count; i++){
      var glitch = document.createElement('div')
          glitch.className = 'box'
          
          div.appendChild(glitch)
    }
    
    var gli_tch = document.querySelectorAll('.box')
    const timer =  setInterval(function(){
      
    for(var i = 0; i < count; i++){
      gli_tch[i].style.width = Math.floor(Math.random() * 100) + 'px'
      gli_tch[i].style.height = Math.floor(Math.random() * 20) + 'px'
        gli_tch[i].style.left = Math.floor(Math.random() * 90) + '%'
        gli_tch[i].style.top = Math.floor(Math.random() * 90) + '%'
    
    }
      
    }, 900)
    const nav = document.querySelector('#nav')
    nav.classList.toggle = 'outnav'
        return () =>{ clearTimeout(timer); }        
    }, [])
    
    return (
        <article id='project' className='article-project '>
        <h2 className='project-title glitch'>Visualizador de algoritmos</h2>
        
            <div>
                <img  src={image1}></img>
            </div>
        
        <section className='description'>
            <ul>
                <li>React</li>
                <li>JavaScript</li>
                <li>CSS</li>
                <li>AWS</li>
            </ul>
            <p>El objetivo era representar algunos de los principales algoritmos de ordenamiento de forma visual</p>
            <ul>
               <li> <a href='https://github.com/alejho4/algo-visualizador'>Github</a></li>
               <li><a href='http://visual-algos-page.s3-website-sa-east-1.amazonaws.com/'>En production</a></li>
            </ul>
        </section>
        </article>
    )
}
