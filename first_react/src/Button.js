function Button({ text }) {
  return (
    <button
      className="But"
      onClick={function () {
        alert("You've Cliked on Sumit Button");
      }}
    >
      {text}
    </button>
  );
}

export default Button;
