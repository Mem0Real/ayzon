import Layout from "../components/layout";

export default function Home() {
  return (
    <Layout>
      <div className="box-border text-center">
        <header className="flex flex-col justify-center items-center text-2xl h-screen">
          <h1 className="lg:mt-12 border-x-2 px-5 mb-12">Welcome to AYZON Manufacturing</h1>
          <h3>We pride ourselves in the qualities of our products.</h3>
        </header>
      </div>
    </Layout>
  );
}
