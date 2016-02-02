<%@ page language="java" contentType="text/html; charset=EUC-KR"
    pageEncoding="EUC-KR"%>
<%
//jsp 에서 xml 타입으로 지정한다.
response.setContentType("text/xml");

String data1 = request.getParameter("user");
String data2 = request.getParameter("memo");

StringBuffer xmlResult = new StringBuffer();
xmlResult.append("<result>");
xmlResult.append("  <state>1</state>");
xmlResult.append("  <user>"+data1+"</user>");
xmlResult.append("  <memo>"+data2+"</memo>");
xmlResult.append("</result>");

out.print(xmlResult);
%>