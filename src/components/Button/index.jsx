import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";

// class Button extends React.Component {
//   render() {
//     return (
//       <button
//         className={cn("button", {
//           "button-outline": this.props.outline,
//         })}
//       >
//         {this.props.children}
//       </button>
//     );
//   }
// }

function Button({ outline, children, onClick, className  }) {
    return (
      <button
      onClick={onClick}
      className={cn("button", className, {
        "button-outline": outline,
      })}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  onClick: PropTypes.func,
  className: PropTypes.string,
  outline: PropTypes.bool,
}

export default Button;
