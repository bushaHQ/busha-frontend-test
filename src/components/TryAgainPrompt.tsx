export default function TryAgain(props:{func:() => Promise<void>}) {
  return (
    <div className="container">
      <img src="/images/verification-link-expired.svg" alt="" />
      <h3>Network Error</h3>
      <button className="primary-button" onClick={props.func}>Try Again</button>
    </div>
  );
}
