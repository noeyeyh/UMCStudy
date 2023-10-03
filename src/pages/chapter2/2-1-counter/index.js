export default function CounterPage() {
  const number = document.getElementById("number");

  const onClickIncrease = () => {
    console.log("increase가 클릭됨");
    const current = parseInt(number.innerText, 10);
    number.innerText = current + 1;
  };
  const onClickDecrease = () => {
    console.log("decrease가 클릭됨");
    const current = parseInt(number.innerText, 10);
    number.innerText = current - 1;
  };

  return (
    <>
      <h2 id="number">0</h2>
      <button onClick={onClickIncrease} id="increase">
        +1
      </button>
      <button onClick={onClickDecrease} id="decrease">
        -1
      </button>
    </>
  );
}
