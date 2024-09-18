// components/FocusCardsDemo.js
import { useEffect, useState } from 'react';
import client, { urlFor } from '../sanityClient';
import {FocusCards} from '../app/ui/focus-cards';

export default function FocusCardsDemo() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const query = `*[_type == "card"]{
      _id,
      title,
      image
    }`;

    client.fetch(query).then((data) => {
      const cardsWithUrls = data.map((card) => ({
        _id: card._id,
        title: card.title,
        src: urlFor(card.image).width(800).url(),
      }));
      setCards(cardsWithUrls);
    });
  }, []);

  return <FocusCards cards={cards} />;
}
