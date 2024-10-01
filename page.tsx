import Image from 'next/image'

import img from "../app/pimg.jpg"

export default function Home() {
  return (
    <div className="homeContainer">
      <div className="childContainer">
        Hello,
        <br />
        I am <span className="goldenColor">Barqa</span>
        <br />
        <div className="paragraph">A budding web developer exploring the world of Next.js. Currently, I am in the early stages of learning this powerful React framework, and I am eager to build engaging, dynamic web applications.
        <br />
        This project is a part of my journey to understand and master the fundamentals of Next.js, focusing on creating efficient, scalable, and user-friendly web experiences.
        </div>
      </div>
      <div className="profilePicture">
        <Image src={img} alt="Barqa Owaisi" className="profileImage" />
      </div>
    </div>
  );
}
