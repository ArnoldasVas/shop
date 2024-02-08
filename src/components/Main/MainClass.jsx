import React from 'react';
import { mockData } from '../../mockData';
//components
import Card from '../Card/Card';

import './main.scss';

class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      data: mockData,
    };
  }

  render() {
    const { data } = this.state;

    const handleSortData = () => {
      const sortedData = data.sort((a, b) => {
        let fa = a.title.toLocaleLowerCase(),
          fb = b.title.toLocaleLowerCase();

        if (fa < fb) return -1;
        if (fa > fb) return 1;

        return 0;
      });

      this.setState({
        data: sortedData,
      });
    };

    const SortData = () => {
      const sortedData = data.sort((a, b) => {
        let fa = a.title.toLocaleLowerCase(),
          fb = b.title.toLocaleLowerCase();

        if (fa < fb) return 1;
        if (fa > fb) return -1;
        return 0;
      });

      this.setState({
        data: sortedData,
      });
    };

    return (
      <main className="main-container">
        <div className="main-action-btn">
          <button onClick={handleSortData}>Sort A-Z</button>
          <button onClick={SortData}>Sort Z-A</button>
        </div>
        {data.map((item) => {
          return (
            <Card
              key={item.title}
              title={item.title}
              description={item.description}
            />
          );
        })}
      </main>
    );
  }
}

export default Main;
