import Image from "next/image";
import Button from "react-bootstrap/Button";
import logo from "../../assets/icon/logo.svg";
import classNames from "classnames";
import Link from "next/link";

export const IconButton = ({
  variant = "primary",
  img,
  alt,
  className,
  size = "3.125rem",
  hrefLink,
  props,
}) => {
  
  const btnSize = size === "xs" ? "32px" : size;
  const btnPadding = size === "xs" ? "6px" : "0.675rem";
  
  return (
    <Button
      variant={variant}
      {...props}
      className={classNames("app-icon-btn", className)}
      style={{
        height: btnSize,
        width: btnSize,
        minHeight: btnSize,
        minWidth: btnSize,
        padding: btnPadding,
      }}
      href={hrefLink}
    >
      <Image
        className="btn-icon"
        src={img}
        alt={alt}
      />
    </Button>
  );
};

const AppButton = ({ icon = false, variant = "success", children, className, style, onClick, ...props }) => {
  return (
    <Button variant={variant} {...props} className={classNames(className, "app-btn")} onClick={onClick} style={style}>
      {icon && (
        <Image src={logo} alt="Next.js logo" className="app-btn-icon" />
      )}
      {children}
    </Button>
  );
};

export default AppButton;
