import Image from "next/image";

const Intro = () => {
  return (
    <>
      <div className="flex justify-between gap-4 items-center">
        <div className="w-1/2">
          <Image
            src="/images/fightclub.png"
            alt="mine"
            width={400}
            height={400}
            className="rounded-lg"
          />
        </div>
        <div className="w-1/2 flex flex-col gap-4">
          <h1 className="card-text">INFO</h1>
          <p>
            I've been crafting digital spaces where users enjoy navigating,
            always striving to curate an engaging and intuitive experience.
            Transitioning my career towards frontend development using React and
            Next.js, I sought to design at larger and faster scales, where the
            core value of design lies in its ability to enhance lives
            holistically.
          </p>
          <p>
            In the digital realm, people scroll through interfaces instead of
            strolling through spaces. My background in architecture gives me a
            unique advantage as I've evolved from an architectural enthusiast
            into a frontend developer focused on crafting visually appealing and
            highly interactive web experiences. I'm passionate about selecting
            the perfect color palettes and paying attention to detail to create
            engaging user interfaces.
          </p>
        </div>
      </div>
    </>
  );
};

export default Intro;
