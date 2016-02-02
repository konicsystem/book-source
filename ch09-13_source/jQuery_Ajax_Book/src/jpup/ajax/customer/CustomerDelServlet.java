package jpup.ajax.customer;

import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;


//Ŭ���̾�Ʈ �ʿ��� ������ ��û�� �� url�ּҿ� �Է� �� urlpattern�� �����ϴ� �κ��̴�.
@WebServlet("/CustomerDelServlet")
public class CustomerDelServlet extends HttpServlet {
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
		  
		  /** ����� ��û���� ���� ���޵� no�� �޾� ȸ�� �����ϴ� �޼ҵ� ȣ�� ��
		   * ���� �� ��� Ŭ���̾�Ʈ������ �����Ѵ�.
		   * */
	   int result = db.customerDelete(request.getParameter("no"));
	   out.print(result);
		
	
	}


}
