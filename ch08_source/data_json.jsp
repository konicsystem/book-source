<%@ page language="java" contentType="text/html; charset=EUC-KR"
    pageEncoding="EUC-KR"%>
<%
String data1 = request.getParameter("user");
String data2 = request.getParameter("memo");

String strResult = "";
strResult += "{";
strResult += "user:'"+data1+"',"; //user:'kim',memo:'love'
strResult += "memo:'"+data2+"',";
strResult += "}";

out.print(strResult);
%>