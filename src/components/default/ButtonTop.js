import React,{useEffect,useState} from "react";

// import { Container } from './styles';
import { FaChevronUp } from "react-icons/fa";
import StyledButton from "../../styles/buttonTop";
export default function ButtonTop(props) {
  const [positionTop, setPositionTop] = useState(0);

  useEffect(() => {
    window.onscroll = () => setPositionTop(window.pageYOffset);
  }, []);
  return (
    <StyledButton
      className={`fixed-bottom ${
        positionTop>100 ? "visible" : "invisible"
      }`}
      onClick={() => {
        window.scroll(0, 0);
      }}
    >
      <FaChevronUp />
    </StyledButton>
  );
}
