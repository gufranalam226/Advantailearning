import React from 'react'
import { CORE_CONCEPTS } from '../data-with-examples'
import CoreConcept from './CoreConcept'

function Concept() {
  return (
    <section id="core-concepts">
        <h2>Core concept</h2>
        <ul>
        
        {CORE_CONCEPTS.map(items=><CoreConcept {...items} />)}
        
        </ul>
    </section>
  )
}

export default Concept
