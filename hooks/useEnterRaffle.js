import React, {useState} from 'react';
import {useSelector} from 'react-redux';
const useEnterRaffle = () => {
  const selectedRaffleAuctionItem = useSelector(
    state => state.selectedRaffleAuctionItem,
  );
  const [noOfTickets, setNoOfTickets] = useState(0);
  const handleMinusTicket = () => {
    if (noOfTickets < 1) {
      setNoOfTickets(0);
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
    selectedRaffleAuctionItem,
    handleMinusTicket,
    handlePlusTicket,
  };
};

export default useEnterRaffle;
