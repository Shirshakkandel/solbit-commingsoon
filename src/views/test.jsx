import HTMLFlipBook from "react-pageflip";
import Marketplace from "./MarketPlace";
import HomeTwo from "./HomeTwo";
export default function MyBook(props) {
  return (
    <HTMLFlipBook>
      <div className="demoPage"><Marketplace /></div>
      <div className="demoPage"><HomeTwo /></div>
      <div className="demoPage">Page 3</div>
      <div className="demoPage">Page 4</div>
    </HTMLFlipBook>
  );
}