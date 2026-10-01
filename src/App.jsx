import Section2 from './components/Section2/Section2'
import Section1 from './components/Section1/Section1'

const App = () => {
  const product = [
    {
      img: "https://i.pinimg.com/1200x/57/be/84/57be849433fc4628a2b82122fd2284d8.jpg",
      content: "Prime customers, thats have access to bank credit and are satisfied with the current product",
      btnText: "Satisfied"
    },
    {
      img: "https://i.pinimg.com/736x/45/86/42/458642b387eac1440a100b1e58bf744a.jpg",
      content: "Prime customers, thats have access to bank credit and are not satisfied with the current service",
      btnText: "Underserved"
    },
    {
      img: "https://i.pinimg.com/736x/de/ef/41/deef41dd932f0ec6a9103fb4d279db17.jpg",
      content: "Customers from near-prime and sub-prime segments with no access to bank credit",
      btnText: "Underbanked"
    }
  ]
  const product1 = [
    {
      img: "https://plus.unsplash.com/premium_photo-1668383207188-f5474588d674?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8d29ya2luZ3xlbnwwfHwwfHx8MA%3D%3D",
      content: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Segments with no access to bank credi",
      btnText: "UnSatisfied"
    },
    {
      img: "https://media.istockphoto.com/id/2211808698/photo/smiling-businesswoman-holding-laptop-and-looking-away-near-office-building.webp?a=1&b=1&s=612x612&w=0&k=20&c=2DKMXvDmJcnDWR0y7JR8LYSyA_OIEuL0qwpWs9c0S7Y=",
      content: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Segments with no access to bank credi ",
      btnText: "Derserved"
    },
    {
      img: "https://media.istockphoto.com/id/1365824279/photo/black-businesswoman-sitting-at-her-desk-working-on-a-laptop-computer-smiling-successful.webp?a=1&b=1&s=612x612&w=0&k=20&c=JjsF8w7BGoHu8jLMwKLndMTAJqaQeDjrXW7EqgKvGZg=",
      content: "Customers from near-prime and sub-prime segments with no access to bank credit",
      btnText: "Derbanked"
    }
  ]


  return (
    <div className=" flex flex-col justify-center items-center py-20 gap-15 bg-gray-300" >
      <Section1 product={product} />
      <Section2 product={product1} />
    </div>
  )
}

export default App
