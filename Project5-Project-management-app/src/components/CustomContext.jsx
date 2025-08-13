import {createContext, useState} from 'react'

export const CounterContext = createContext({
    
    selectedProjectId : undefined,
    projects : [],
    tasks :  []
    

})

