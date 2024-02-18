import { createContext, useState } from 'react';
import { mockData } from '../mockData';

export const AppContext = createContext();

function AppContextProvider(props) {
  const [cardData, setCardData] = useState([]);
  const [data, setData] = useState(mockData);

  const handleAddToCard = (item) => {
    setCardData([...cardData, item]);

    const filteredData = data.filter(
      (dataItem) => dataItem.title !== item.title
    );
    setData(filteredData);
  };

  const handleRemoveFromCard = (item) => {
    setData([...data, item]);

    const filteredCardData = cardData.filter(
      (dataItem) => dataItem.title !== item.title
    );
    setCardData(filteredCardData);
  };

  return (
    <AppContext.Provider
      value={{
        cardData,
        setCardData,
        data,
        setData,
        handleAddToCard,
        handleRemoveFromCard,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
}

export default AppContextProvider;
