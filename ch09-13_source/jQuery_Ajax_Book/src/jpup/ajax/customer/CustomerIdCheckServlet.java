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
	   response.setContentType("text/html;charset=UTF-8"); //contentType����
	   PrintWriter out = response.getWriter();//���䰴ü�� ���� ��½�Ʈ�� ��������
	   
	   CustomerDAO db = new CustomerDAO();//dao����
	   
	   /**
	    * ����� ��û���� ���� �Ѿ�� id�� dao���� ���̵� �ߺ�üũ �ϴ� �޼ҵ忡 ���� �� �� ����� ���� �޴´�.
	    * */
	   String result = db.customerIDCheck(request.getParameter("id"));
	   
	   out.print(result);//id�ߺ�üũ ����� Ŭ���̾�Ʈ������ �����Ѵ�.
		
	
	}

}
