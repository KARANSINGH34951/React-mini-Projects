import aboutimg from '../image/aboutimg.jpeg'
import aboutimg2 from '../image/aboutimg2.jpeg'
import aboutimg3 from '../image/aboutimg3.jpeg'
import aboutimg4 from '../image/aboutimg4.jpeg'
import UserCard from './UserCard'
import Counter from './Counter'
import Services from '../components/Services'


const About = () => {
  return (
    <div className='about '>
      <h1 className='text-center font-extrabold text-6xl'>About Us</h1>
      <Counter />

      <div >
          <h1 className='text-center font-extrabold text-6xl'>Our services</h1>
           <Services />    
      </div>
      <h1 className='text-center font-extrabold text-6xl'>Our Team</h1>
      <p className='text-center text-2xl my-2'>We are a team of 4 people who are working together to provide you the best services</p>
      <div className='px-24 grid text-center my-7 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 '>
          <UserCard username="karan singh" img={aboutimg} location="TamilNadu" message="Team manager and Hanle operations"/>
          <UserCard username="Rahul" img={aboutimg2} location="Kerala" message="marketing manager"/>
          <UserCard username="Vicky" img={aboutimg3} location="Himachal" message="Handle supply Chain"/>
          <UserCard username="Ashish" img={aboutimg4} location="Punjab" message="manufacturer"/>
      </div>
      


    </div>
  )
}


export default About
