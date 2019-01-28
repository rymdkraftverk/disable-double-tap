import React from "react";
import PropTypes from "prop-types";

const DisableDoubleTap = ({ children, className }) => (
  <div
    className={className}
    style={{
      // This is the first part of the solution
      touchAction: "manipulation"
    }}
    // This is the second part of the solution
    onClick={() => {}}
  >
    {children}
  </div>
);

DisableDoubleTap.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};

DisableDoubleTap.defaultProps = {
  className: null
};

DisableDoubleTap.displayName = "DisableDoubleTap";

export default DisableDoubleTap;
