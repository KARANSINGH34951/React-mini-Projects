import aboutimg from '../image/aboutimg.jpeg'
import aboutimg2 from '../image/aboutimg2.jpeg'
import aboutimg3 from '../image/aboutimg3.jpeg'
import aboutimg4 from '../image/aboutimg4.jpeg'
import UserCard from './UserCard'
import Counter from './Counter'
import Services from '../components/Services'

const About = () => {
  return (
    <div className='about'>
      <h1 className='text-center font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl py-4'>About Us</h1>
      <Counter />

      <div className='py-4'>
        <h1 className='text-center font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl'>Our Services</h1>
        <Services />    
      </div>

      <div className='py-4'>
        <h1 className='text-center font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl'>Our Team</h1>
        <p className='text-center text-xl sm:text-2xl md:text-3xl my-2'>We are a team of 4 people who are working together to provide you the best services</p>
      </div>

      <div className='px-4 sm:px-8 md:px-12 lg:px-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6 md:gap-6 gap-6 text-center my-6 '>
        <UserCard username="karan singh" img={aboutimg} location="TamilNadu" message="Team manager and Hanle operations" />
        <UserCard username="Rahul" img={aboutimg2} location="Kerala" message="Marketing manager" />
        <UserCard username="Vicky" img={aboutimg3} location="Himachal" message="Handle supply chain" />
        <UserCard username="Ashish" img={aboutimg4} location="Punjab" message="Manufacturer" />
      </div>
    </div>
  )
}

export default About
