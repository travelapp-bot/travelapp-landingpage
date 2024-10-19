import Image from "next/image";
import Button from "react-bootstrap/Button";
import logo from "../../assets/icon/logo.svg";
import classNames from "classnames";

export const IconButton = ({
  variant = "primary",
  img,
  alt,
  className,
  size = "50px",
  props,
}) => {
  const btnSize = size === "xs" ? "32px" : size;
  const btnPadding = size === "xs" ? "6px" : "10px";

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
    >
      <Image
        className="btn-icon"
        src={img}
        alt={alt}
      />
    </Button>
  );
};

const AppButton = ({ icon = false, variant = "success", children, props }) => {
  return (
    <Button variant={variant} {...props} className="app-btn">
      {icon && (
        <Image src={logo} alt="Next.js logo" width={24} height={24} priority />
      )}
      {children}
    </Button>
  );
};

export default AppButton;
