import { TypeAnimation } from 'react-type-animation';

export default function  Home () {
  return (
    <>

    <header>

<div
  className='p-5 text-center bg-image'
  style={{ backgroundImage: "url('images/makingCake.gif')", height: '600px'}}
>
  <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
    <div className='d-flex justify-content-center align-items-center h-100'>
      <div className='text-white'>
        <h1 className='mb-3'  style = {{textAlign: "center", minHeight: "230px"}}>
        <TypeAnimation
      sequence={[
        'Hello, Nice to Meet You!',
        1000, 
        `Welcome to Mustafa Arif's Personal Website!`,
        1000,

      ]}
      wrapper="span"
      speed={20}
      style={{ fontSize: '2em', display: 'inline-block' }}
      repeat={0}
    /></h1>
        <br />
        <br />
        <h4 className='mb-3'>Each cake is made with care and precision</h4>
        
      </div>
    </div>
  </div>
</div>
</header>
</>

    
  );
}
