import {
  Contact,
  Description,
  Header,
  Navbar,
  Project,
  Thumbnail,
  Transition,
} from '@/layout';

/** @type {import('next').Metadata} */
export const metadata = {
  title: 'Home | Kishor Tarafder',
  description:
    'Helping brands thrive in the digital world. Located in The Netherlands. Delivering tailor-made digital designs and building interactive websites from scratch. © Code by Dennis',
};

export default function Home() {
  return (
    <Transition>
      <Header />
      <main>
        <Description />
        <Thumbnail />
        <Project />
      </main>
    </Transition>
  );
}
