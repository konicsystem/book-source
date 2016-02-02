<%@ page language="java" contentType="text/html; charset=EUC-KR"
    pageEncoding="EUC-KR"%>
<%
String user = request.getParameter("user");
String memo = request.getParameter("memo");
out.println("user:"+user+"|memo:"+memo);
%>