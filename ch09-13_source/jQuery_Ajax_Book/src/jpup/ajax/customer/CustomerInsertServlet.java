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
		 //contentType����
		 response.setContentType("text/html;charset=UTF-8"); 
		 
		 //���䰴ü�� ���� ��½�Ʈ�� ��������
		  PrintWriter out = response.getWriter();
		 
		  //dao����
		  CustomerDAO db = new CustomerDAO();
	 
		  //ȸ������ ����� VO����
		   CustomerVO bean =new  CustomerVO();

		   /**
		    * ����� ��û���� ���� ���޵� ���� ������ CustomerVO��ü�� setXxx()�޼ҵ鸦 �̿��� �����Ѵ�.
		    * */
		   bean.setId(request.getParameter("id"));
		   bean.setName(request.getParameter("name"));
		   bean.setAge(Integer.parseInt(request.getParameter("age")));
		   bean.setTel(request.getParameter("tel"));
		   bean.setAddr(request.getParameter("addr"));
		   
		   //CustomerVO��ü�� �μ��� �����Ͽ� ȸ�� ���� �޼ҵ� ȣ�� �� �� ����� �����Ѵ�.
		   int result = db.customerInsert(bean);
		   
		   //���� ����� Ŭ���̾�Ʈ������ �����Ѵ�.
		   out.print(result);
	
	}

}
