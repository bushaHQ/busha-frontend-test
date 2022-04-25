/** @format */

import { CircularArrow } from "assets/svgs";
import { Box, CurrencyWrapper, IconWrapper } from "./card.styles";

const Card = ({ item }: any) => {
  return (
    <Box>
      <CurrencyWrapper>
        <div>
          <img src={item?.imgURL} height={34} width={34} alt={item?.name} />
        </div>
        <p>{item?.name}</p>
      </CurrencyWrapper>
      <div className="amount">
        <p>
          {item?.currency === "NGN" ? "₦" : null}
          <span>{item?.balance}</span>
          {item?.currency !== "NGN" ? item?.currency : null}
        </p>
      </div>
      <IconWrapper>
        <CircularArrow />
      </IconWrapper>
    </Box>
  );
};

export default Card;
