"use client";
import CountUp from "react-countup";

const AnimatedCounter = ({ amount }: { amount: number }) => {
  return (
    <div>
      <CountUp end={amount} decimals={2} prefix="$" decimal="," />
    </div>
  );
};

export default AnimatedCounter;
