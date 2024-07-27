import Typewriter from "../components/typeWriter";
import Skills from "../components/skills";

export default function About() {
  return (
    <section id='about' className="">
    <div className="flex w-full flex-col items-center p-6 max-w-lg mx-auto bg-white ">
      <img
        src="https://api.dicebear.com/9.x/pixel-art/svg?seed=Precious&clothingColor=ae0001&eyes=variant10,variant06&eyesColor=76778b,876658,647b90,697b94,5b7c8b,588387&glasses=dark01,dark02,dark03,dark04,dark05,dark06,dark07,light02,light03,light04,light05,light06,light07,light01&hair=long01,long04,long07,long08,long09,long10,long11,long12,long13,long14,long15,long16,long17,long18,long19,long20,long21,short01,short02,short03,short04,short05,short06,short07,short08,short09,short10,short11,short12,short13,short14,short15,short16,short17,short18,short19,short20,short21,short22,short23,short24,long06,long05,long03&mouth=happy09,happy12,happy13,sad01,sad02,sad03,sad04,sad05,sad06,sad07,sad08,sad09,sad10,happy02,happy07,happy10,happy11,happy06,happy08,happy03,happy04,happy05,happy01&skinColor=8d5524,b68655,cb9e6e,e0b687,eac393,f5cfa0,ffdbac"
        alt="avatar"
        className="h-32 mb-4"
      />
      <div className="text-center">
        <h2 className="text-3xl font-arcade p-4">About Me</h2>

        <Typewriter
          words={['        ','With great technology comes great innovation.','I have always been fascinated by the world around me and I aim to create innovative and ingenious solutions to complex problems . I love arcade games and pop-culture . ']}
        />
      </div>
      <h2 className="text-2xl font-arcade mt-5 mb-4">Skillset</h2>
      <div className="w-full flex justify-center items-center ">
      <Skills/>
      </div>
    </div>
    </section>
  );
}
