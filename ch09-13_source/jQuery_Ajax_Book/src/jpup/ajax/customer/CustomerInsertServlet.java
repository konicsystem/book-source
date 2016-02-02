package jpup.ajax.customer;

import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/CustomerInsertServlet")
public class CustomerInsertServlet extends HttpServlet {
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
	 
		  //회원정보 저장소 VO생성
		   CustomerVO bean =new  CustomerVO();

		   /**
		    * 사용자 요청으로 부터 전달된 폼의 값들을 CustomerVO객체의 setXxx()메소들를 이용해 저장한다.
		    * */
		   bean.setId(request.getParameter("id"));
		   bean.setName(request.getParameter("name"));
		   bean.setAge(Integer.parseInt(request.getParameter("age")));
		   bean.setTel(request.getParameter("tel"));
		   bean.setAddr(request.getParameter("addr"));
		   
		   //CustomerVO객체를 인수로 전달하여 회원 가입 메소드 호출 후 그 결과를 리턴한다.
		   int result = db.customerInsert(bean);
		   
		   //가입 결과를 클라이언트쪽으로 읃답한다.
		   out.print(result);
	
	}

}
