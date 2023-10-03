import "./styles.css";

export default function ModalPage() {
  const open = document.getElementById("open");
  const close = document.getElementById("close");
  const modal = document.getElementById("modal");

  const onClickOpen = () => {};
  const onClickClose = () => {
    modal.style.display = "none";
  };

  return (
    <>
      <div class="Wrapper">
        <h1>안녕하세요!</h1>
        <p>내용내용내용</p>
        <button onClick={onClickOpen} id="open">
          버튼 열기
        </button>
        <div id="Modal" class="ModalDiv" style="display:none;">
          <div class="Modal">
            <h2>안녕하세요</h2>
            <p>모달 내용은 어쩌고 저쩌고..</p>
            <button onClick={onClickClose} id="close">
              닫기
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
