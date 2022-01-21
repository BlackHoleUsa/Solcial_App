import React, {useState} from 'react';
import {useSelector} from 'react-redux';
const useEnterRaffle = () => {
  const selectedRaffleItem = useSelector(state => state.selectedRaffleItem);
  const [noOfTickets, setNoOfTickets] = useState(1);
  const handleMinusTicket = () => {
    if (noOfTickets < 2) {
      setNoOfTickets(1);
    } else {
      setNoOfTickets(noOfTickets - 1);
    }
  };
  const handlePlusTicket = () => {
    setNoOfTickets(noOfTickets + 1);
  };
  const monthNames = [
    'Jan',
    'Feb',
    'March',
    'April',
    'May',
    'June',
    'July',
    'Aug',
    'Sept',
    'Oct',
    'Nov',
    'Dec',
  ];

  return {
    monthNames,
    noOfTickets,
    selectedRaffleItem,
    handleMinusTicket,
    handlePlusTicket,
  };
};

export default useEnterRaffle;
