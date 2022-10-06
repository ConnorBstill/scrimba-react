function ChildComponent(props) {
  const { firstName, lastName } = props.name;

  return (
    <div>
      <h1>Hello, World! My name is {firstName} {lastName}</h1>
    </div>
  )
}

export default ChildComponent;
