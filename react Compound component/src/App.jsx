import Accordion from "./components/Accordian/Accordian";
import AccordianContent from "./components/Accordian/AccordianContent";
import AccordionItem from "./components/Accordian/AccordianItem";
import AccordianTitle from "./components/Accordian/AccordianTitle";
import SearchableList from "./components/SearchableList/SearchableList";
import savannaImg from './assets/african-savanna.jpg';
import amazonImg from './assets/amazon-river.jpg';
import caribbeanImg from './assets/caribbean-beach.jpg';
import desertImg from './assets/desert-dunes.jpg';
import forestImg from './assets/forest-waterfall.jpg';
import Place from "./components/SearchableList/Place";

const PLACES = [
  {
    id: 'african-savanna',
    image: savannaImg,
    title: 'African Savanna',
    description: 'Experience the beauty of nature.',
  },
  {
    id: 'amazon-river',
    image: amazonImg,
    title: 'Amazon River',
    description: 'Get to know the largest river in the world.',
  },
  {
    id: 'caribbean-beach',
    image: caribbeanImg,
    title: 'Caribbean Beach',
    description: 'Enjoy the sun and the beach.',
  },
  {
    id: 'desert-dunes',
    image: desertImg,
    title: 'Desert Dunes',
    description: 'Discover the desert life.',
  },
  {
    id: 'forest-waterfall',
    image: forestImg,
    title: 'Forest Waterfall',
    description: 'Listen to the sound of the water.',
  },
];

function App() {
  return <main>
    <section>

      <h2>Why work with us?</h2>

      <Accordion className='accordion'>
        <Accordion.Item  className='accordion-item'>
          <AccordianTitle id='item1' className='accordion-item-title'>
            Accordion Item 1
          </AccordianTitle>
          <AccordianContent className='accordion-item-content' id='item1'>
            <article>
              <p>this is the description of accordian item 1</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur aliquam reiciendis tempora. Veniam tempore obcaecati dolore culpa rerum vero repudiandae accusantium odio, eum doloribus iusto vel. Laboriosam error ab sed quibusdam ea maiores consequatur possimus, officia dolore aliquam, iure asperiores.</p>
            </article>

          </AccordianContent>
        </Accordion.Item>

        <Accordion.Item className='accordion-item'>
        <AccordianTitle id='item2' className='accordion-item-title'>
            Accordion Item 2
          </AccordianTitle>
          <AccordianContent className='accordion-item-content' id='item2'>
            <article>
              <p>this is the description of accordion tiem 2</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur aliquam reiciendis tempora. Veniam tempore obcaecati dolore culpa rerum vero repudiandae accusantium odio, eum doloribus iusto vel. Laboriosam error ab sed quibusdam ea maiores consequatur possimus, officia dolore aliquam, iure asperiores.</p>
            </article>
          </AccordianContent>
        </Accordion.Item>
      </Accordion>
    </section>
    <section>
      <SearchableList items={PLACES} >
        {(item)=> <Place item={item}/>}
      </SearchableList>

    </section>
  </main>;
}

export default App;
