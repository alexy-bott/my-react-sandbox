import React from "react";
const Api = { uploads: (data) => console.log(data + " uploaded") };
const ClickListener = () => {
  const [x, setX] = React.useState();
  React.useEffect(() => {
    const onClick = event => {
      // Координата уже есть в событии. После setX значение x в этом вызове ещё старое.
      setX(event.pageX);
      Api.uploads(event.pageX);
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);
  return <>{x}</>;
};
