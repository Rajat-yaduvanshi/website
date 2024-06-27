import React, { useState } from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import { Animate } from "react-simple-animate";
import PageHeaderContent from "../../components/pageHeaderContent";
import portfolio from "../../images/portfolio.png";
import puzzel from "../../images/puzzel.png";
import readme from "../../images/readme.png";
import blog from "../../images/Blog.png";
import "./style.scss";

const portfolioData = [
  {
    id: 2,
    name: "My Portfolio",
    image: portfolio,
    link: "https://portfolio-five-bay-33.vercel.app/",
  },
  {
    id: 3,
    name: "Slider Puzzel",
    image: puzzel,
    link: "https://slider-puzzle-navy.vercel.app/",
  },
  {
    id: 2,
    name: "ReadMe Generator",
    image: readme,
    link: "https://read-me-generator-five.vercel.app/",
  },
  {
    id: 3,
    name: "Blog Down",
    image: blog,
    link: "https://blogdown-gamma.vercel.app/",
  },
];

const filterData = [
  {
    filterID: 1,
    lable: "All",
  },
  {
    filterID: 2,
    lable: "Development",
  },
  {
    filterID: 3,
    lable: "Design",
  },
];

const Portfolio = () => {
  const [filteredvalue, setFilteredValue] = useState(1);
  const [hoveredvalue, sethoveredvalue] = useState(null);

  function handleFilter(currentId) {
    setFilteredValue(currentId);
  }

  function handleHover(index) {
    sethoveredvalue(index);
  }

  const filteredItems =
    filteredvalue == 1
      ? portfolioData
      : portfolioData.filter((item) => item.id === filteredvalue);

  return (
    <section id="portfolio" className="portfolio">
      <PageHeaderContent
        headerText="My Portfolio"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="portfolio_content">
        <ul className="portfolio_content_filter">
          {filterData.map((item) => (
            <li
              className={item.filterID === filteredvalue ? "active" : ""}
              onClick={() => handleFilter(item.filterID)}
              key={item.filterID}
            >
              {item.lable}
            </li>
          ))}
        </ul>
        <Animate
            play
            duration={1}
            // delay={.5}
            start={{
              transform: "translateX(500px)",
            }}
            end={{
              transform: "translatex(0px)",
            }}
          >
        <div className="portfolio_content_cards">
          {filteredItems.map((item, index) => (
            <div
              className="portfolio_content_cards_item"
              key={`curdItems${item.name.trim()}`}
              onMouseEnter={() => handleHover(index)}
              onMouseLeave={() => handleHover(index)}
            >
              <div className="portfolio_content_cards_item_img-wrapper">
                <a>
                  <img alt="dummy data" src={item.image} />
                </a>
              </div>
              <div className="overlay">
                {index === hoveredvalue && (
                  <div>
                    <p>{item.name}</p>
                    <button>Visit</button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
        </Animate>
      </div>
    </section>
  );
};

export default Portfolio;
