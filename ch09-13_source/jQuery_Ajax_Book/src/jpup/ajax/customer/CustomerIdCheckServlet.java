package jpup.ajax.customer;

import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;


@WebServlet("/CustomerIdCheckServlet")
public class CustomerIdCheckServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
   
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		this.doPost(request, response);
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
	   response.setContentType("text/html;charset=UTF-8"); //contentType설정
	   PrintWriter out = response.getWriter();//응답객체로 부터 출력스트림 가져오기
	   
	   CustomerDAO db = new CustomerDAO();//dao생성
	   
	   /**
	    * 사용자 요청으로 부터 넘어온 id를 dao쪽의 아이디 중복체크 하는 메소드에 전달 한 후 결과를 리턴 받는다.
	    * */
	   String result = db.customerIDCheck(request.getParameter("id"));
	   
	   out.print(result);//id중복체크 결과를 클라이언트쪽으로 전송한다.
		
	
	}

}
