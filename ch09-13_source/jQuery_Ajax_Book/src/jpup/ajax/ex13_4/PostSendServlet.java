package jpup.ajax.ex13_4;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Servlet implementation class PostSendServlet
 */

@WebServlet("/PostSendServlet")
public class PostSendServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		   response.setContentType("text/html;charset=UTF-8");
		   PrintWriter out = response.getWriter();
		   String img [] ={"spring.jpg" ,"android.jpg","jquery.jpg","jsmasterbook.jpg"};
		   
		  String book = request.getParameter("book");
		  int bookIndex = Integer.parseInt(book);
		  
		  out.print(img[bookIndex]);
		
	}

}
