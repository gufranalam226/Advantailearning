import React, { useContext } from 'react'
import Button from './Button'
import { CounterContext } from './CustomContext'

function ProjectSideBar({onStartAddProject, projects, onSelectProject, selectedProjectId}) {
    const counterStae =  useContext(CounterContext)
    console.log( "context getting from context provider", counterStae.selectedProjectId)

  return (
    <aside className="w-1/4 px-8 py-16 bg-stone-900 text-stone-50  rounded-r-xl">
        <h2 className='mb-8 font-bold uppercase md:text-xl tex-stone-200'>Your Projects</h2>
        <div>
            <Button onClick={onStartAddProject}>+ Add Project</Button>
        </div>

        <ul className='mt-8'>
            {
                projects.map((project)=>{
                    let cssClasses = 'w-full text-left px-2 py-1 rounded-sm my-1 hover:text-stone-200 hover:bg-stone-800 '
                    if(project.id === selectedProjectId){
                        cssClasses += ' bg-stone-800 text-stone-200'
                    }
                    else {
                        cssClasses += ' text-stone-400'
                    }
                    return (<li key={project.id}>
                        <button className={cssClasses}
                        onClick={()=>onSelectProject(project.id)}>
                            {project.title}
                        </button>
                    </li>)
                })
            }

        </ul>
      
    </aside>
  )
}

export default ProjectSideBar
