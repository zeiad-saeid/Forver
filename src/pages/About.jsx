import { assets } from "../assets/assets";
import NewsLetter from "../components/NewsLetter";
import Title from "../components/title";

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t ">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img
          className="w-full md:max-w-[450px] "
          src={assets.about_img}
          alt="About us"
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
            illo quos dicta error et. Provident molestias, fuga ea nam
            praesentium dolore unde sunt sequi, error magnam animi odit
            temporibus. Accusamus!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
            voluptatum magnam ipsam temporibus repellat recusandae perspiciatis
            reprehenderit deserunt repellendus rerum.
          </p>
          <b className="text-gray-800">Our Mission</b>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
            eos, odit inventore reprehenderit, laudantium quae architecto iure
            culpa sint sit ut. Minus eveniet cupiditate quae quisquam ipsum
            pariatur mollitia ipsam?
          </p>
        </div>
      </div>
      <div className="text-xl py-4 ">
        <Title text1={"WHY"} text2={"CHOOSE US"} />
      </div>
      <div className="flex flex-col md:flex-row text-sm mb-20 ">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Quality Assurance:</b>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus aliquid, voluptates unde doloribus consequatur
            eveniet, alias nihil adipisci ipsa at iure sunt exercitationem!
            Aspernatur obcaecati laudantium vero. Libero, consectetur et.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Convenience:</b>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus aliquid, voluptates unde doloribus consequatur
            eveniet, alias nihil adipisci ipsa at iure sunt exercitationem!
            Aspernatur obcaecati laudantium vero. Libero, consectetur et.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>ُExceptional Customer Service:</b>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus aliquid, voluptates unde doloribus consequatur
            eveniet, alias nihil adipisci ipsa at iure sunt exercitationem!
            Aspernatur obcaecati laudantium vero. Libero, consectetur et.
          </p>
        </div>
        
      </div>

      <NewsLetter/>
    </div>
  );
};

export default About;
