import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

export const SamplePrevArrow = (props) => {
  const { className, onClick } = props
  return (
      <div 
          className={className}
          onClick={onClick}
      >
          <FaAngleLeft
              color="#fff"
              size={50}
          />
      </div>
  );
}
export const SampleNextArrow = (props) => {
  const { className, onClick } = props
  return (
      <div 
          className={className}
          onClick={onClick}
      >
          <FaAngleRight
              color="#fff"
              size={50}
          />
      </div>
  );
}