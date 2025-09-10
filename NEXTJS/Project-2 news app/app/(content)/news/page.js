import Link from "next/link";
import { DUMMY_NEWS } from "@/dummy-news";
import NewsList from "@/src/components/news-list";
import { getAllNews } from "@/src/lib/news";


export default async function NewsPage() {

  const news = await getAllNews()

  return (
    <>
        <h1>News Page</h1>
        <NewsList news={news}/>
      
    </>
  )
}












// 'use client'

// import Link from "next/link";
// import { DUMMY_NEWS } from "@/dummy-news";
// import NewsList from "@/src/components/news-list";
// import { useEffect, useState } from "react";


// export default function NewsPage() {
//   const [isLoading, setIsLoading] = useState(false)
//   const [error, setError] = useState('')
//   const [news, setNews] = useState()
//   useEffect(()=>{
//     async function fetchNews (){
//       setIsLoading(true)
//       const response = await fetch('http://localhost:8080/news')

//       if(!response.ok){
//         setError('Failed to fetch news.')
//         setIsLoading(false)
//       }

//       const news =  await response.json()
//       setIsLoading(false)
//       setNews(news)

//     }
//     fetchNews()
//   }, [])


//   if(isLoading){
//     return <p>Loading ...</p>
//   }
//   if(error){
//     return <p>Something went wrong!</p>
//   }

//   let newsContent;
//   if(news){
//     newsContent = <NewsList news={news}/>
//   }
//   return (
//     <>
//         <h1>News Page</h1>
//         {newsContent}
      
//     </>
//   )
// }
