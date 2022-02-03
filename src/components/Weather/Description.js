const Description = (props) => {

  const des = props.description

  const description_upper = () => {
    let text = des;
    text = text[0].toUpperCase() + text.slice(1).toLowerCase();

    return (
      <>{text}</>
    )
  }

  return (
    <p id="description"> {description_upper()} </p>
  )
}

export default Description