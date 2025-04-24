// React의 useState 훅을 임포트
import { useState } from "react";

// CSS 파일 임포트 (스타일 정의)
import "./App.css";

// 부트스트랩 컴포넌트 불러오기
import { Button, Navbar, Container, Nav } from "react-bootstrap";

// 상품 데이터 불러오기 (배열 형태로 되어 있을 것으로 예상)
import data from "./data.js";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  // 상태 변수 'shoes' 선언하고 'data.js'의 내용을 기본값으로 설정
  let [shoes] = useState(data);

  /**페이지 나누는 법(리액트 사용)
   * 1. 컴포넌트 만들어서 상세페이지 내용 채움
   * 2. 누가/detail 접속하면 그 컴포넌트 보여줌
   */
  return (
    <div>
      {/* 네비게이션 바 */}
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">ShoseShop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">홈</Nav.Link>
            <Nav.Link href="#features">cart</Nav.Link>
            <Nav.Link href="/detail">상세페이지</Nav.Link> {/* 비어있는 메뉴 */}
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route
          path="/"
          element={
            <>
              <div className="main-bg"></div>
              <div className="container">
                <div className="row">
                  {shoes.map((a, i) => {
                    return <Card shoes={shoes[i]} i={i+1}></Card>;
                  })}
                </div>
              </div>
            </>
          }
        />{" "}
        {/*누가/detail 접속하면 그 컴포넌트 보여줌*/}
        <Route
          path="/detail"
          element={
            <>
              <div className="container">
                <div className="row">
                  <div className="col-md-6">
                    <img
                      src="https://codingapple1.github.io/shop/shoes1.jpg"
                      width="100%"
                    />
                  </div>
                  <div className="col-md-6">
                    <h4 className="pt-5">상품명</h4>
                    <p>상품설명</p>
                    <p>120000원</p>
                    <button className="btn btn-danger">주문하기</button>
                  </div>
                </div>
              </div>
            </>
          }
        />
      </Routes>
    </div>
  );
}

// 상품 하나를 표현하는 카드 컴포넌트
function Card(props) {
  return (
    <div className="col-md-4">
      {/* 이미지 주소: https://codingapple1.github.io/shop/shoes1.jpg 등으로 자동 생성 */}
      <img
        src={"https://codingapple1.github.io/shop/shoes" + props.i + ".jpg"}
        width="80%"
      />
      {/* 상품명, 내용, 가격 출력 (주의: shoes.tilte 오타!) */}
      <h4>{props.shoes.title}</h4> {/* 'title' 오타 있음. 수정 필요 */}
      <p>{props.shoes.content}</p>
      <p>{props.shoes.price}</p>
    </div>
  );
}

export default App;
