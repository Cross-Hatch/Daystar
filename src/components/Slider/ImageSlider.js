import React from "react"
import { useState } from "react"
import { ImageSliderContainer } from "./ImageSlider.styles"
// import { SliderData } from "./sliderData"
import PropTypes from "prop-types"
import { FaChevronRight, FaChevronLeft } from "react-icons/fa"

const ImageSlider = ({ slides }) => {
  const [current, setCurrent] = useState(0)
  const length = slides.length
  const [label, setlabel] = useState("Apple")

  const nextslide = () => {
    console.log(slides[current], current)
    setCurrent(() => (current === length - 1 ? 0 : current + 1))
    setlabel(() => (label === "Ginger" ? "Apple" : "Ginger"))
    // slides[current].isActive(current)
  }

  const prevslide = () => {
    setCurrent(() => (current === 0 ? length - 1 : current - 1))
    setlabel(() => (label === "Ginger" ? "Apple" : "Ginger"))
  }

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null
  }
  //handles event when i is clicked
  const [showmoredata, setshowmoredata] = useState(false)

  return (
    <ImageSliderContainer>
      <FaChevronLeft className="left-arrow" onClick={prevslide} />
      <FaChevronRight className="right-arrow" onClick={nextslide} />
      <div className="product-label">{label}</div>

      {slides.map((slide, index) => {
        return (
          <div
            className={index === current ? "slide active" : "slide hide-i"}
            key={index}
          >
            <div
              className="more-info"
              onClick={() => setshowmoredata(!showmoredata)}
            >
              i
            </div>

            {showmoredata ? (
              <div className="product-info">
                Enjoy the refreshing taste of our flagship product.
                <button className="button"> ORDER </button>
              </div>
            ) : null}
            {index === current && (
              <img src={slide.image} alt="slideImage" className="image" />
            )}
          </div>
        )
      })}
    </ImageSliderContainer>
  )
}

ImageSlider.propTypes = {
  slides: PropTypes.array.isRequired,
}

export default ImageSlider
