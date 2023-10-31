import "../styles/components/titlePag.sass";

function TitlePag(props) {
  return (
    <div id="titulo">
      <div id="titleIdColor"></div>
      <h1>{props.title}</h1>
    </div>
  );
}

export default TitlePag;
