import Head from "next/head";
import Header from "@/components/common/header";
import Footer from "@/components/common/footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>단무지</title>
      </Head>
      <Header />
      <Footer />
    </>
  );
}
