import React from "react";
import SocialLogin from "react-social-login";

class SocialButton extends React.Component {
  render() {
    const { children, triggerLogin, ...props } = this.props;
    return (
      <a onClick={triggerLogin} {...props} style={{"cursor":"pointer","size":"24px"}}>
        {children}
      </a>
    );
  }
}

export default SocialLogin(SocialButton);