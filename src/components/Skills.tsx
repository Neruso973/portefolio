import { useState } from 'react';

import html from '../assets/HTML.png';
import css from '../assets/CSS.png';
import js from '../assets/JS.png';
import ts from '../assets/TS.png';
import angular from '../assets/Angular.png';
import react from '../assets/React.png';
import tailwind from '../assets/Tailwind.png';

function Skills() {
    const [handleFrontBack, setHandleFrontBack] = useState<Boolean>(false)
    const handleFB = () => {
        setHandleFrontBack(!handleFrontBack)
    }

    return (
        <div className="h-screen grid grid-rows-6 grid-flow-col gap-7 p-8">
           <div className='bg-white row-start-1 row-span-4 col-start-1 col-span-1 m-8'>
               <div className='flex flex-col'>
                   <h3 className='text-center text-3xl'>Front-end Techno</h3>
                   <div className='grid grid-cols-3 gap-3 p-4'>
                       <img src={html} alt="html logo" className='h-24 m-2' />
                       <img src={css} alt="css logo" className='h-24 w-16 m-2'  />
                       <img src={js} alt="js logo" className='h-24 m-2'  />
                       <img src={ts} alt="ts logo" className='h-20 ml-2 m-2'  />
                       <img src={react} alt="react logo" className='h-24 m-2'  />
                       <img src={angular} alt="angular logo" className='h-24 m-2'  />
                       <img src={tailwind} alt="tailwind logo" className='h-24 m-2' />
                   </div>
                    <button className="bottom-2 right-2" onClick={handleFB}>{handleFrontBack ? "Back-end" : "Front-end"}</button>
               </div>
               <div>

               </div>
           </div>
           <div className='bg-black row-start-1 row-span-4 col-start-3 col-span-4 m-8'>

           </div>
           <div className='bg-white row-start-5 row-span-2 col-start-1 col-span-3 m-8'>

           </div>
           <div className='bg-black row-start-5 row-span-2 col-start-4 col-span-3 m-8'>

           </div>
        </div>
    )
}

export default Skills
