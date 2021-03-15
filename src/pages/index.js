import Head from "next/head";
import styles from "../styles/Home.module.css";
import logo from "../assets/logo.png";
import profileGab from "../assets/40298940-portrait-of-young-confident-asian-businessman-standing-with-crossed-arms-pose-isolated-on-white-back-removebg-preview.png";

export default function Home() {
  const handleText = (pid, b) => {
    document.getElementById(pid).classList.toggle("line-clamp-5");
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Triune NGO | Accelerator Programme</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={`w-screen h-screen md:h-5/6 ${styles.hero}`}>
        <div className="h-full grid place-items-center bg-white bg-opacity-60">
          <div className="md:relative xl:max-w-screen-md mx-auto p-10 md:p-28 lg:p-40 xl:px-10">
            <nav className="absolute top-0 left-0 h-16 w-full p-4">
              <img
                width="3089px"
                height="1119px"
                src={logo}
                alt="triune"
                className="h-8 w-auto"
              />
            </nav>
            <div className="text-center m-auto">
              <h1 className="text-2xl font-bold text-gray-800 md:text-4xl lg:text-6xl">
                Do you want to build a sustainable Social Enterprise?
              </h1>
              <p className="text-sm md:text-base mt-10 text-gray-700">
                At Triune NGO, we put together resources to help individual
                activists achieve their vision and mission.
              </p>
              <button className="text-sm font-semibold mt-6 bg-blue-600 text-white p-3 w-full md:w-1/2">
                JOIN OUR PROGRAMME
              </button>
            </div>
          </div>
        </div>
      </header>

      <section id="core" className="p-10 md:p-28 lg:p-40">
        <div className="xl:max-w-screen-md mx-auto">
          <h2 className="text-xl font-semibold text-gray-700">
            What are the areas that Triune NGO covers
          </h2>
          <div className="mt-10 border border-blue-600">
            <h3 className="text-white py-4 px-8 font-semibold bg-blue-600">
              Administration
            </h3>
            <div className="p-8 md:py-12">
              <p
                id="administration"
                className="text-sm md:text-base bg-white text-gray-500 line-clamp-5"
              >
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. Lorem
                Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry standard dummy text
                ever since the 1500s, when an unknown printer took a galley of
                type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
              </p>
            </div>
            <div className="w-full text-right">
              <button
                id="readmore1"
                className="text-sm font-semibold text-blue-600 p-3 w-36 focus:outline-none"
                onClick={() => handleText("administration", "readmore1")}
              >
                READ MORE
              </button>
            </div>
          </div>
          <div className="mt-10 border border-blue-600">
            <h3 className="text-white py-4 px-8 font-semibold bg-blue-600">
              Fundraising
            </h3>
            <div className="p-8 md:py-12">
              <p
                id="fundraising"
                className="text-sm md:text-base bg-white text-gray-500 line-clamp-5"
              >
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. Lorem
                Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry standard dummy text
                ever since the 1500s, when an unknown printer took a galley of
                type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
              </p>
            </div>
            <div className="w-full text-right">
              <button
                id="readmore2"
                className="text-sm font-semibold text-blue-600 p-3 w-36 focus:outline-none"
                onClick={() => handleText("fundraising", "readmore2")}
              >
                READ MORE
              </button>
            </div>
          </div>
          <div className="mt-10 border border-blue-600">
            <h3 className="text-white py-4 px-8 font-semibold bg-blue-600">
              Volunteer
            </h3>
            <div className="p-8 md:py-12">
              <p
                id="volunteer"
                className="text-sm md:text-base bg-white text-gray-500 line-clamp-5"
              >
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. Lorem
                Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry standard dummy text
                ever since the 1500s, when an unknown printer took a galley of
                type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
              </p>
            </div>
            <div className="w-full text-right">
              <button
                id="readmore3"
                className="text-sm font-semibold text-blue-600 p-3 w-36 focus:outline-none"
                onClick={() => handleText("volunteer", "readmore3")}
              >
                READ MORE
              </button>
            </div>
          </div>
        </div>
      </section>

      <section id="team" className="w-screen bg-gray-100">
        <div className="p-10 md:p-28 lg:p-40 xl:max-w-screen-md mx-auto xl:px-0">
          <h2 className="text-xl font-semibold text-gray-700">
            Triune NGO Core Team Members
          </h2>
          <div className="mt-10 flex flex-col-reverse md:flex-row">
            <div className="mt-6 md:flex md:flex-col justify-end">
              <h3 className="text-blue-600 font-semibold">Gabriel</h3>
              <p className="mt-3 text-sm md:text-base text-gray-500">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </div>
            <img
              src={profileGab}
              alt="Gabriel"
              className="h-auto w-full md:h-56 md:w-auto px-8"
            />
          </div>
          <div className="mt-10 flex flex-col-reverse md:flex-row-reverse">
            <div className="mt-6 md:flex md:flex-col justify-end">
              <h3 className="text-blue-600 font-semibold">Gabriel</h3>
              <p className="mt-3 text-sm md:text-base text-gray-500">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </div>
            <img
              src={profileGab}
              alt="Gabriel"
              className="h-auto w-full md:h-56 md:w-auto px-8"
            />
          </div>
          <div className="mt-10 flex flex-col-reverse md:flex-row">
            <div className="mt-6 md:flex md:flex-col justify-end">
              <h3 className="text-blue-600 font-semibold">Gabriel</h3>
              <p className="mt-3 text-sm md:text-base text-gray-500">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </div>
            <img
              src={profileGab}
              alt="Gabriel"
              className="h-auto w-full md:h-56 md:w-auto px-8"
            />
          </div>
        </div>
      </section>

      <section
        id="mission"
        className="w-screen p-10 md:p-28 lg:p-40 bg-blue-100"
      >
        <div className="xl:max-w-screen-md mx-auto">
          <h2 className="text-xl font-semibold text-gray-700">
            Why Triune NGO is formed
          </h2>
          <div className="mt-10">
            <p className="mt-3 text-sm md:text-base text-gray-500">
              "Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book."
            </p>
          </div>
          <button className="text-sm font-semibold mt-10 bg-blue-600 text-white p-3 w-full md:w-1/2">
            JOIN OUR PROGRAMME
          </button>
        </div>
      </section>

      <section id="testimonials" className="p-10 md:p-28 lg:p-40">
        <div className="xl:max-w-screen-md mx-auto">
          <h2 className="text-xl font-semibold text-gray-700">
            What others said about Triune NGO
          </h2>
          <div className="md:flex md:flex-row md:gap-12 md:mt-10">
            <div className="mt-10 border border-blue-600 p-8 md:mt-0">
              <p className="mt-3 text-sm md:text-base text-gray-500 italic">
                "Lorem Ipsum is simply dummy text of the printing and
                typesetting industry. Lorem Ipsum has been the industry's
                standard dummy text ever since the 1500s, when an unknown
                printer took a galley of type and scrambled it to make a type
                specimen book."
              </p>
              <div className="mt-3 text-gray-600 font-semibold">Tony</div>
            </div>
            <div className="mt-10 border border-blue-600 p-8 md:mt-0">
              <p className="mt-3 text-sm md:text-base text-gray-500 italic">
                "Lorem Ipsum is simply dummy text of the printing and
                typesetting industry. Lorem Ipsum has been the industry's
                standard dummy text ever since the 1500s, when an unknown
                printer took a galley of type and scrambled it to make a type
                specimen book."
              </p>
              <div className="mt-3 text-gray-600 font-semibold">Jack</div>
            </div>
          </div>
          <div className="text-center mt-10 md:mt-24">
            <div className="text-2xl text-gray-700 font-semibold">
              Ready to thrive in your social enterprise?
            </div>
            <button className="text-sm font-semibold mt-10 bg-blue-600 text-white p-3 w-full md:w-1/2">
              JOIN OUR PROGRAMME
            </button>
          </div>
        </div>
      </section>

      <footer className="p-10 text-center text-sm bg-gray-700 text-white w-full">
        Copyright 2020 by Triune Corporate & Management Services <br />- All
        Rights Reserved -
      </footer>
    </div>
  );
}
