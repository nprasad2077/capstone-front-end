import React from 'react'
import { Accordion } from 'flowbite-react'

const Accord = () => {


  return (<div class='text-slate-200'><Accordion flush={true}>
    <Accordion.Panel className='slate-200'>
      <Accordion.Title>
        What is Mars sol?
      </Accordion.Title>
      <Accordion.Content>
        <p className="mb-2 text-slate-200">
          Sol is a solar day on mars. It represents the interval of time between two successive returns of the Sun to the same merdian.
        </p>
        <p className="text-slate-200">
          A Mars-day is slightly longer than an Earth day. It is approximately 24 Hours, 39 Minutes, and 35 Seconds long. {' '}
          <a
            href="https://en.wikipedia.org/wiki/Timekeeping_on_Mars#Martian_year"
            className="text-blue-500 hover:underline"
          >
            A year on Mars
          </a>
          {' '}takes about 668 sols to complete. This translates to approximately 687 Earth days or 1.88 earth years.
        </p>
      </Accordion.Content>
    </Accordion.Panel>
    <Accordion.Panel>
      <Accordion.Title >
        Curiosity Rover
      </Accordion.Title>
      <Accordion.Content>
        <p className="mb-2 text-slate-200">
          Also known as the Mars Science Laboratory, Curiosity rover landed on Mars August 5th, 2012. The rover was transported on an Atlas V 541 rocket that launched from Cape Canaveral Air Force Station, Florida.
        </p>
        <p className="text-slate-200">
            The curiosity rover had the primary assignment of investigating whether conditions have been favorable for microbial life and searching for clues in the rocks about past life.
        </p>
      </Accordion.Content>
    </Accordion.Panel>
    <Accordion.Panel>
      <Accordion.Title>
        What are the differences between Curiosity and Perseverance Rover?
      </Accordion.Title>
      <Accordion.Content>
        <p className="mb-2 text-slate-200">
          The main difference is that the core components from Flowbite are open source under the MIT license, whereas Tailwind UI is a paid product. Another difference is that Flowbite relies on smaller and standalone components, whereas Tailwind UI offers sections of pages.
        </p>
        <p className="mb-2 text-slate-200">
          However, we actually recommend using both Flowbite, Flowbite Pro, and even Tailwind UI as there is no technical reason stopping you from using the best of two worlds.
        </p>
      </Accordion.Content>
    </Accordion.Panel>
  </Accordion></div>
)
}

export default Accord