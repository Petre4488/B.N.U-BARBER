import { FocusCards } from "../app/ui/focus-cards";




export default function FocusCardsDemo() {
  const cards = [
    {
      title: "Stil și precizie în fiecare detaliu",
      src: "https://i.imgur.com/jSVciC8.jpeg",
    },
    {
      title: "Locul unde stilul prinde viață.",
      src: "https://i.imgur.com/7RrkzhU.jpeg",
    },
    {
      title: "Pentru cei care știu ce înseamnă eleganța",
      src: "https://i.imgur.com/mqc4nHK.jpeg",
    },
    {
      title: "Un spațiu unde arta și tunsul se întâlnesc.",
      src: "https://i.imgur.com/z23xZRm.jpeg",
    },
    {
      title: "Atmosfera perfectă pentru un look desăvârșit",
      src: "https://i.imgur.com/o1yKLr2.jpeg",
    },
    {
      title: "Locul perfect pentru un look proaspăt",
      src: "https://i.imgur.com/xRAUFuH.jpeg",
    },
  ];

  return <FocusCards cards={cards} />;
}
