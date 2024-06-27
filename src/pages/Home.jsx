import React, { useEffect, useState } from "react";
import Hero from "./segments/Hero";
import Livestreams from "./segments/Livestreams";
import guestApi from "../axios/api/guest.api";
const Home = () => {
  const [guestId, setGuestid] = useState();

  const guestIdAlreadyExists = localStorage.getItem("guestId");

  useEffect(() => {
    async function init() {
      if (!guestIdAlreadyExists) {
        const response = await guestApi.generateIdForGuestUser();
        console.log(response);
      }
    }

    init();
  }, []);

  return (
    <div>
      <Hero />
      <Livestreams />
    </div>
  );
};

export default Home;
