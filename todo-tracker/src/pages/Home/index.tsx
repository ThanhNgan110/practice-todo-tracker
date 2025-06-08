import Button from '../../components/Button';
import Form from '../../components/Form';

import MainFeature from '../../components/MainFeature';

const Home = () => {
  return (
    <>
      <header className="flex justify-center mt-8">
        <div className="sm:container flex justify-end ">
          <Button variant="outline" type="button">
            Sign out
          </Button>
        </div>
      </header>
      <main className="flex justify-center">
        <div className="sm:container">
          <section className="text text-4xl text-center mt-14 mb-20">
            <h1 className="font-poppins text-[32px]">ISSUE TRACKER</h1>
          </section>
          <section>
            <Form />
            <MainFeature />
          </section>
        </div>
      </main>
    </>
  );
};

export default Home;
