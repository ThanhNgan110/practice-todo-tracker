import Input from '../Input';
import Select from '../Select';
import Button from '../Button';

import { LIST_OPTIONS, OPTIONS_SEVERITY } from '../../constants';

const Form = () => {
  return (
    <form>
      <div className="mb-2.5">Title</div>
      <Input className="mb-4" placeholder="Title..." type="text" name="title" />
      <div className="mb-2.5">Author</div>
      <Select
        name="author"
        className="w-full input rounded-sm p-2 mb-4"
        data={LIST_OPTIONS}
        onchange={() => console.log('test')}
      />
      <div className="mb-2.5">Severity</div>
      <Select
        name="severity"
        className="w-full input rounded-sm p-2 mb-4"
        data={OPTIONS_SEVERITY}
        onchange={() => console.log('test')}
      />
      <div className="flex justify-end mb-5">
        <Button variant="primary" type="submit">
          Add
        </Button>
      </div>
    </form>
  );
};

export default Form;
