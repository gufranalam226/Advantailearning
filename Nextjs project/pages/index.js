import MeetupList from '../components/meetups/MeetupList'


const DUMMY_DATA = [
    {
    id : 'm1',
    title : 'A First Meetup',
    image : 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8b2ZmaWNlJTIwYnVpbGRpbmd8ZW58MHx8MHx8fDA%3D' ,
    address : 'My address',
    description : 'Meetup description'
    },
    {
    id : 'm1',
    title : 'A First Meetup',
    image : 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8b2ZmaWNlJTIwYnVpbGRpbmd8ZW58MHx8MHx8fDA%3D',
    address : 'My address',
    description : 'Meetup description'
    },
    {
    id : 'm1',
    title : 'A First Meetup',
    image : 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8b2ZmaWNlJTIwYnVpbGRpbmd8ZW58MHx8MHx8fDA%3D' ,
    address : 'My address',
    description : 'Meetup description'
    }
]
export default function HomePage() {
  return (
        <MeetupList meetups ={DUMMY_DATA} />
 
  )
}


export function getStaticProps(){
    return {
        props :{
            meetups :DUMMY_DATA
        },
        revalidate  : 10
    }
}
