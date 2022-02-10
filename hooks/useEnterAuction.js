import React, {useState, useEffect} from 'react';
import {useSelector} from 'react-redux';
const useEnterAuction = () => {
  const [highestBid, setHighestBid] = useState();
  const [endAuction, setEndAuction] = useState(false);
  const selectedAuctionItem = useSelector(state => state.selectedAuctionItem);

  const getHighestBid = () => {
    if (selectedAuctionItem.bids.length > 0) {
      let amount = selectedAuctionItem.bids.reduce((prev, current) =>
        prev.bid_amount > current.bid_amount ? prev : current,
      );
      if (amount?.bid_amount < selectedAuctionItem.initialPrice) {
        setHighestBid(selectedAuctionItem.initialPrice);
      } else {
        setHighestBid(amount?.bid_amount);
      }
    } else {
      setHighestBid(selectedAuctionItem.initialPrice);
    }
  };

  useEffect(() => {
    getHighestBid();
  }, []);

  return {
    image: selectedAuctionItem.product_url[1],
    title: selectedAuctionItem.name,
    description: selectedAuctionItem.description,
    highestBid,
    endTime: selectedAuctionItem.endTime,
    endAuction,
    setEndAuction,
  };
};

export default useEnterAuction;
