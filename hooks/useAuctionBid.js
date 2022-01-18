import React, {useState} from 'react';
import * as yup from 'yup';
const useAuctionBid = highestBid => {
  const [isLoading, setIsLoading] = useState(false);

  const bidValidationSchema = yup.object().shape({
    bid: yup
      .number()
      .typeError('Must be a number')
      .required('Required')
      .integer()
      .min(highestBid + 1, `Must be greater than ${highestBid}`),
  });

  const handleAuctionBid = () => {
    console.log(10);
  };
  return {
    isLoading,
    handleAuctionBid,
    bidValidationSchema,
  };
};

export default useAuctionBid;
