package jpup.ajax.customer;

import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;


//클라이언트 쪽에서 서버에 요청할 때 url주소에 입력 할 urlpattern을 정의하는 부분이다.
@WebServlet("/CustomerDelServlet")
public class CustomerDelServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		this.doPost(request, response);
	}

	
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		//contentType설정
		 response.setContentType("text/html;charset=UTF-8"); 
		 
		 //응답객체로 부터 출력스트림 가져오기
		  PrintWriter out = response.getWriter();
		 
		  //dao생성
		  CustomerDAO db = new CustomerDAO();
		  
		  /** 사용자 요청으로 부터 전달된 no를 받아 회원 삭제하는 메소드 호출 후
		   * 리턴 된 결과 클라이언트쪽으로 응답한다.
		   * */
	   int result = db.customerDelete(request.getParameter("no"));
	   out.print(result);
		
	
	}


}
