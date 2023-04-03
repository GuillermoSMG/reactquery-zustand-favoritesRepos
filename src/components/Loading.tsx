import style from "./Loading.module.css";

function Loading() {
  return (
    <div className={style["loading-container"]}>
      <img
        className={style.loading}
        src="https://cdn-icons-png.flaticon.com/512/4494/4494756.png"
      />
      <p>
        Loading<span className={style.span1}>.</span>
        <span className={style.span2}>.</span>
        <span className={style.span3}>.</span>
      </p>
    </div>
  );
}

export default Loading;
