import Button from '../Button';
import Input from '../Input';
import Select from '../Select';

import { OPTIONS_ORDERBY } from '../../constants';

const MainFeature = () => {
  return (
    <>
      <div className="flex justify-between mb-5">
        <h2 className="font-medium text-[28px]">List Issue</h2>
        <Input
          className="max-w-[200px]"
          name="search"
          type="name"
          placeholder="Search by description"
        />
      </div>

      <div className="flex items-center mb-[25px]">
        <label className="w-[120px]">Filter:</label>
        <div className="flex gap-1">
          <Button variant="primary" type="button">
            All
          </Button>
          <Button variant="success" type="button">
            Open
          </Button>
          <Button variant="close" type="button">
            Close
          </Button>
        </div>
      </div>

      <div className="flex items-center">
        <label className="w-[120px]">Order By:</label>
        <div className="flex">
          <Select
            className="w-full min-w-[160px] input rounded-sm p-[9px] mb-4"
            name="orderby"
            data={OPTIONS_ORDERBY}
            onchange={() => console.log('test')}
          />
        </div>
      </div>
    </>
  );
};

export default MainFeature;
