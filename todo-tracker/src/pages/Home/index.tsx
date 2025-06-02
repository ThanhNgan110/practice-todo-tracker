// import Button from '../../components/Button';
import Input from '../../components/Input';
import Select from '../../components/Select';

// data test
const data = {
  author: ['Sunny', 'Tony'],
  severity: ['Low', 'Medium', 'High'],
};

const Home = () => {
  return (
    <>
      <Input type="text" name="ten" placeholder="Enter your name" />
      <Input
        className="input-search"
        type="text"
        name="ten"
        placeholder="Enter your name"
      />
      <Select
        className="w-full rounded-sm p-2"
        data={data.author}
        onchange={() => console.log('hello')}
      />

      <Select
        className="w-full rounded-sm p-2"
        data={data.severity}
        onchange={() => console.log('hello')}
      />
    </>
  );
};

export default Home;
