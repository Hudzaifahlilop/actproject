import {useState} from 'react'

interface AccordionProps {
    tittle: string;
    answer: string;
  }

const Accordion = ({tittle, answer}: AccordionProps) => {
    const [accordionOpen,setAccordionOpen]= useState(false);
  return (
    <div className='p-3 mt-3 bg-gray-200 rounded-lg'>
        <div className="">
            <button onClick={() => setAccordionOpen(!accordionOpen)} className='flex justify-between w-full'>
                <span className='font-medium text-sm'>{tittle}</span>
                {accordionOpen ? <span>✖</span> : <span>▼</span> }
                
            </button>
            <div className={`grid overflow-hidden  transition-all duration-100 ease-in-out text-slate-600 text-sm ${accordionOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0' }`}>
                <div className='overflow-hidden'>
                    {answer}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Accordion