import React, {useState, useEffect} from 'react';
import {useSelector} from 'react-redux';
const useEnterAuction = () => {
  const [highestBid, setHighestBid] = useState();
  const selectedRaffleAuctionItem = useSelector(
    state => state.selectedRaffleAuctionItem,
  );

  const getHighestBid = () => {
    if (selectedRaffleAuctionItem.bids.length > 0) {
      let amount = selectedRaffleAuctionItem.bids.reduce((prev, current) =>
        prev.bid_amount > current.bid_amount ? prev : current,
      );

      setHighestBid(amount?.bid_amount);
    } else {
      setHighestBid(selectedRaffleAuctionItem.initialPrice);
    }
  };

  useEffect(() => {
    getHighestBid();
  }, []);

  return {
    image: selectedRaffleAuctionItem.product_url[1],
    title: selectedRaffleAuctionItem.name,
    description: selectedRaffleAuctionItem.description,
    highestBid,
    endTime: selectedRaffleAuctionItem.endTime,
  };
};

export default useEnterAuction;
