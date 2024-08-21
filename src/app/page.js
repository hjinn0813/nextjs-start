// body 태그에 들어가는 내용들

import Image from 'next/image';

export default function Home() {
  return (
    <>
      <h2>Welcome!</h2>
      <div>hello, web!</div>
      <br />
      <img src="/hello.jpg"></img>
    </>
  );
}
