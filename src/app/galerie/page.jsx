import Image from 'next/image';
import img1 from "../../../public/gallery/poza1.jpeg";
import img2 from "../../../public/gallery/poza2.jpg";
import img3 from "../../../public/gallery/poza3.jpg";
import img4 from "../../../public/gallery/poza4.jpg";
import img5 from "../../../public/gallery/poza5.jpg";
import img6 from "../../../public/gallery/poza6.jpg";
import img7 from "../../../public/gallery/poza7.jpg";
import img8 from "../../../public/gallery/poza8.jpg";
import img9 from "../../../public/gallery/poza9.jpg";
import img10 from "../../../public/gallery/poza10.jpg";
import img11 from "../../../public/gallery/poza11.jpg";

export default function Galerie() {
    return (
        <div className="grid w-4/5 grid-cols-2 gap-4 md:grid-cols-3">
            <div className="flex">
                <Image className="object-cover w-full h-auto rounded-lg" src={img1} alt="B.N.U. Barber gallery 1" />
            </div>
            <div className="flex">
                <Image className="object-cover w-full h-auto rounded-lg" src={img2} alt="B.N.U. Barber gallery 2" />
            </div>
            <div className="flex">
                <Image className="object-cover w-full h-auto rounded-lg" src={img3} alt="B.N.U. Barber gallery 3" />
            </div>
            <div className="flex">
                <Image className="object-cover w-full h-auto rounded-lg" src={img4} alt="B.N.U. Barber gallery 4" />
            </div>
            <div className="flex">
                <Image className="object-cover w-full h-auto rounded-lg" src={img5} alt="B.N.U. Barber gallery 5" />
            </div>
            <div className="flex">
                <Image className="object-cover w-full h-auto rounded-lg" src={img6} alt="B.N.U. Barber gallery 6" />
            </div>
            <div className="flex">
                <Image className="object-cover w-full h-auto rounded-lg" src={img7} alt="B.N.U. Barber gallery 7" />
            </div>
            <div className="flex">
                <Image className="object-cover w-full h-auto rounded-lg" src={img8} alt="B.N.U. Barber gallery 8" />
            </div>
            <div className="flex">
                <Image className="object-cover w-full h-auto rounded-lg" src={img9} alt="B.N.U. Barber gallery 9" />
            </div>
            <div className="flex">
                <Image className="object-cover w-full h-auto rounded-lg" src={img10} alt="B.N.U. Barber gallery 10" />
            </div>
            <div className="flex">
                <Image className="object-cover w-full h-auto rounded-lg" src={img11} alt="B.N.U. Barber gallery 11" />
            </div>
        </div>
    );
}
