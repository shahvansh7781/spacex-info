import Head from "next/head";
import Link from "next/link";
import { useState, useEffect } from "react";
import Navbar from "../Components/Navbar";
import styles from "../styles/Home.module.css";
import { RingLoader } from "react-spinners";
export default function Home({ companyInfo }) {
  const [loading, setloading] = useState(true);
  useEffect(() => {
    if (companyInfo) {
      setTimeout(() => {
        setloading(false);
      }, 3000);
    }
  }, [companyInfo]);

  return (
    <>
      <div className={styles.container}>
        <Head>
          <title>SpaceX Info</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Navbar />

        {loading ? (
          <div className="flex w-full h-[80vh] justify-center items-center">
            <RingLoader color="#FFFFFF" size="4vmax" />
          </div>
        ) : (
          <div className={styles.main}>
            <h1 className="sm:text-6xl font-extrabold sm:text-left text-center text-4xl">
              All About SpaceX
            </h1>
            <div className="sm:flex sm:flex-row flex flex-col justify-evenly sm:w-1/2 mt-2 gap-y-4 gap-4">
              <div className="flex-col">
                <h1 className="sm:text-xl text-2xl">About</h1>
                <p className="sm:text-sm text-lg">
                  Founded by {companyInfo.founder} in {companyInfo.founded}
                </p>
                <p className="sm:text-sm text-lg">
                  Has {companyInfo.employees} Employees,
                </p>
                <p className="sm:text-sm text-lg">
                  {companyInfo.vehicles} vehicles,
                </p>
                <p className="sm:text-sm text-lg">
                  {companyInfo.launch_sites} launch sites,
                </p>
                <p className="sm:text-sm text-lg">
                  {companyInfo.test_sites} test sites,
                </p>
              </div>
              <div>
                <h1 className="sm:text-xl text-2xl">Headquarters</h1>
                <p className="sm:text-sm text-lg">
                  {companyInfo.headquarters.address},
                </p>
                <p className="sm:text-sm text-lg">
                  {companyInfo.headquarters.city},
                  {companyInfo.headquarters.state}
                </p>
              </div>
              <div>
                <h1 className="sm:text-xl text-2xl">Social Media</h1>
                <p className="sm:text-sm text-lg">
                  <Link
                    href={companyInfo.links.website}
                    className="hover:border-b-2"
                  >
                    Website
                  </Link>
                </p>
                <p className="sm:text-sm text-lg">
                  <Link
                    href={companyInfo.links.flickr}
                    className="hover:border-b-2"
                  >
                    Flickr
                  </Link>
                </p>
                <p className="sm:text-sm text-lg">
                  <Link
                    href={companyInfo.links.twitter}
                    className="hover:border-b-2"
                  >
                    Twitter
                  </Link>
                </p>
                <p className="sm:text-sm text-lg">
                  <Link
                    href={companyInfo.links.elon_twitter}
                    className="hover:border-b-2"
                  >
                    Elon Musk Twitter
                  </Link>
                </p>
              </div>
            </div>
            <h1 className="sm:text-xl mt-7 text-3xl">Mission</h1>
            <p className="text-center sm:text-base text-lg">
              ???You want to wake up in the morning and think the future is going
              to be great - and that???s what being a spacefaring civilization is
              all about. <br /> It???s about believing in the future and thinking
              that the future will be better than the past. <br /> And I can???t
              think of anything more exciting than going out there and being
              among the stars.??? <br />
              -Elon Musk
            </p>
          </div>
        )}
      </div>
    </>
  );
}

export async function getStaticProps() {
  const response = await fetch("https://api.spacexdata.com/v4/company");
  const data = await response.json();
  return {
    props: {
      companyInfo: data,
    },
  };
}
