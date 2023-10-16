import "../styles/components/titlePag.sass";

function TitlePag(props) {
  return (
    <div id="titulo">
      <h1>{props.title}</h1>
    </div>
  );
}

export default TitlePag;
