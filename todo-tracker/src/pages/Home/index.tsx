import Button from '../../components/Button';
import Form from '../../components/Form';
import MainFeature from '../../components/MainFeature';
import List from '../../components/List';

import initialTodo from '../../data/data';

const Home = () => {
  return (
    <>
      <header className="flex justify-center mt-8">
        <div className="container mx-auto px-4 flex justify-end">
          <Button variant="outline" type="button">
            Sign out
          </Button>
        </div>
      </header>

      <main className="flex justify-center items-center">
        <div className="container mx-auto">
          <section className="text-center mt-14 mb-20">
            <h1 className="font-poppins text-[32px]">ISSUE TRACKER</h1>
          </section>
          <section>
            <Form />
            <MainFeature />
          </section>
          <section>
            <List items={initialTodo} />
          </section>
        </div>
      </main>
    </>
  );
};

export default Home;
