import TradeViewChart from "react-crypto-chart";

export default function Chart() {
  return (
    <div className="parent">
      <TradeViewChart
        interval="5m"
        containerStyle={{
          minHeight: "100vh",
          minWidth: "100vw",
          marginBottom: "30px"
        }}
        chartLayout={{
          layout: {
            backgroundColor: "black",
            textColor: "white"
          },
          grid: {
            vertLines: {
              color: "#838fa3"
              // style: LineStyle.SparseDotted,
            },
            horzLines: {
              color: "#838fa3"
              // style: LineStyle.SparseDotted,
            }
          },
          crosshair: {
            // mode: CrosshairMode.Normal,
          },
          priceScale: {
            borderColor: "#485c7b"
          },
          timeScale: {
            borderColor: "#485c7b",
            timeVisible: true,
            secondsVisible: false
          }
        }}
        candleStickConfig={{
          upColor: "green",
          downColor: "red",
          borderDownColor: "transparent",
          borderUpColor: "transparent",
          wickDownColor: "gray",
          wickUpColor: "gray"
        }}
        pair="ETHUSDT"
      />
    </div>
  );
}
