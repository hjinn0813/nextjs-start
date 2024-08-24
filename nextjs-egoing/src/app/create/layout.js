// create layout

export default function Layout(props) {
  return (
    <>
      <h2>Create</h2>
      {props.children}
      {/* children은 create/page.js에서 왔음 */}
    </>
  );
}
