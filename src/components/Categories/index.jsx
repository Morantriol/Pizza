import React from "react";
import PropTypes from "prop-types";

const Categories = React.memo(function Categories({
  activeCategory,
  categories,
  onClickCategory,
}) {

  return (
    <div className="categories">
      <ul>
        <li
          className={activeCategory === null ? "active" : ""}
          onClick={() => onClickCategory(null)}
        >
          Все
        </li>
        {categories &&
          categories.map((category, index) => (
            <li
              className={activeCategory === index ? "active" : ""}
              onClick={() => {
                onClickCategory(index);
              }}
              key={`${category}_${index}`}
            >
              {category}
            </li>
          ))}
      </ul>
    </div>
  );
});

Categories.propTypes = {
  // activeCategory: PropTypes.oneOf([PropTypes.number, null]),
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
  onClickCategory: PropTypes.func,
};

Categories.defaultProps = {
  activeCategory: null,
  categories: [],
};

// class Categories extends Component {
//   state = {
//     activeCategory: 0,
//   };

//   onSelectCategory = (index) => {
//     this.setState({ activeCategory: index });
//   };

//   render() {
//     const { categories, onClickCategory } = this.props;
//     return (
//       <div className="categories">
//         <ul>
//           <li>Все</li>
//           {categories.map((category, index) => (
//             <li
//               className={this.state.activeCategory === index ? "active" : ""}
//               onClick={() => {
//                 this.onSelectCategory(index);
//               }}
//               key={`${category}_${index}`}
//             >
//               {category}
//             </li>
//           ))}
//         </ul>
//       </div>
//     );
//   }
// }

export default Categories;
