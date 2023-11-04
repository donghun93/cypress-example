import '../../support/commands'

//로그인 페이지 테스트

describe('앱 로드가 정상적으로 되어야 한다.', () => {
  beforeEach(() => {
    cy.visit('/') //실행전 루트방문 init->commands
  })

  // it('비 로그인 시 로그인 페이지 이동 ', () => {
  //   cy.clearCookie('eliceSessionKey')
  //   cy.url().should('include', '/accounts/signin')
  // })

  it("페이지 로드, 기본 요소 랜더딩 확인 ", () => {
    cy.checkPageLoadAndComponents(); // 페이지 로딩 및 컴포넌트 확인
    cy.visit("/");
  });
})