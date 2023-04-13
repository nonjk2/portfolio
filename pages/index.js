import { useRef } from "react";
import AppLayout from "../components/appLayout";
import { AppProvider, useAppContext } from "../components/appprovider";
import Header from "../components/header";

function Home() {
  return (
    <AppProvider>
      <Header />
      <AppLayout />
    </AppProvider>
  );
}

export default Home;
