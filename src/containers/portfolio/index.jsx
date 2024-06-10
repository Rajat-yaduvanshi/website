import React, { useState } from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import PageHeaderContent from "../../components/pageHeaderContent";
import portfolio from "../../images/portfolio.png";
import puzzel from "../../images/puzzel.png";
import readme from "../../images/readme.png";
import blog from "../../images/Blog.png";
import './style.scss'

const portfolioData = [
  {
    id: 2,
    name: "My Portfolio",
    image: portfolio,
  },
  {
    id: 3,
    name: "Slider Puzzel",
    image: puzzel,
  },
  {
    id: 2,
    name: "ReadMe Generator",
    image: readme,
  },
  {
    id: 3,
    name: "Blog Down",
    image: blog,
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


  const [filteredvalue , setFilteredValue] = useState(1)

  function handleFilter(currentId){
    setFilteredValue(currentId)
  };

  const filteredItems = filteredvalue == 1 ? portfolioData :
  portfolioData.filter(item=>item.id === filteredvalue]'')

  return (
    <section id="portfolio" className="portfolio">
      <PageHeaderContent
        headerText="My Portfolio"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="portfolio_content">
        <ul className="portfolio_content_filter">
          {filterData.map((item) => (
            <li onClick={()=>handleFilter(item.filterID)} key={item.filterID}>{item.lable}</li>
          ))}
        </ul>
        <div className="portfolio_content_cards">
          {portfolioData.map((item) => (
            <div className="portfolio_content_cards_item" key={`curdItems${item.name.trim()}`}>
              <div className="portfolio_content_cards_item_img-wrapper">
                <a>
                  <img alt="dummy data" src={item.image} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
