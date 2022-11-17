export interface MaxWidthProps {
  children: JSX.Element[] | JSX.Element;
}
const MaxWidth = (props: MaxWidthProps) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: 1400,
          padding: "0px 160px",
          // minWidth: 1024,
        }}
      >
        {props.children}
      </div>
    </div>
  );
};

export default MaxWidth;
