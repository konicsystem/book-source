<%@page import="java.sql.DriverManager"%>
<%@page import="java.sql.ResultSet"%>
<%@page import="java.sql.Statement"%>
<%@page import="java.sql.Connection"%>
<%@ page language="java" contentType="text/html; charset=EUC-KR" pageEncoding="EUC-KR"%>
<%
response.setContentType("text/xml;");
response.setCharacterEncoding("EUC-KR");
request.setCharacterEncoding("EUC-KR");

Class.forName("org.gjt.mm.mysql.Driver");
System.out.println("八祸 己傍!");

Connection conn = null;
Statement stmt = null;
ResultSet rs = null;
String url = "jdbc:mysql://localhost:3306/myjsp?useUnicode=true&characterEncoding=EUC_KR";
String user = "root";
String password = "apmsetup";
String sql = "SELECT * FROM saram";

conn = DriverManager.getConnection(url, user, password);
System.out.println("立加 己傍!");
stmt = conn.createStatement();
rs = stmt.executeQuery(sql);

StringBuffer strBf = new StringBuffer();
strBf.append("<saram_grp>");
while(rs.next()) {
	String id = rs.getString("id");
	String name = rs.getString("name");
	int age = rs.getInt("age");
	strBf.append("<saram company='samsung'>");
	strBf.append("  <id>"+id+"</id>");
	strBf.append("  <name>"+name+"</name>");
	strBf.append("  <age>"+age+"</age>");
	strBf.append("</saram>");
}
strBf.append("</saram_grp>");
out.println(strBf);
rs.close();
stmt.close();
conn.close();
%>







