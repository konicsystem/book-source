package jpup.ajax.customer;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;


@WebServlet("/CustomerSelectServlet")
public class CustomerSelectServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
    
	
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		this.doPost(request, response);
	}

	
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
	   response.setContentType("text/html;charset=UTF-8");
	   PrintWriter out = response.getWriter();
	   
	   CustomerDAO db =new CustomerDAO();//dao생성
	   
	  
		   String result = db.customerSelect();// 회원정보검색
		   out.print(result);//리턴 결과 클라이언트쪽으로 응답
		   

	}

}
